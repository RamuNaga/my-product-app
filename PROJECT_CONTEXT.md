# my-product-app — Project Context & Development Roadmap

**Last updated:** 18 October 2026  
**Status:** Architecture and requirements discovery; Product/Recipe Phase 1 implementation not yet started in this conversation.  
**Purpose:** Working reference for continuing development in the same ChatGPT conversation or sharing with future contributors.  
**Proposed repository destination:** `E:\Ramu\my-product-app\docs\PROJECT_CONTEXT.md`

> **Reading guide:** **Confirmed** means explicitly stated by the project owner. **Proposed** means an architectural recommendation requiring review. **Open** means not yet confirmed. Examples and sample numbers are illustrative unless explicitly identified as a figure from a planning document.

## 1. Project overview

Develop a food manufacturing application supporting customer work orders, finished-product recipes, ingredient and semi-finished component recipes, sauce preparation, ingredient inventory, multiple stockrooms and physical locations, bin/container tracking, low-risk to high-risk transfers, de-boxing, material requirements planning (MRP), procurement, and production traceability.

The factory workflow discussed uses Tesco work orders and Greencore-style stockroom, daily de-boxing, and AM/PM usage planning documents. **The company does not currently provide ERP integration/access for this project.** The application must initially support manual data entry and Excel/CSV imports, with optional integration later.

### Confirmed technology stack

- Nx monorepo, pnpm; project directory `E:\Ramu\my-product-app` on Windows.
- Angular frontend.
- NestJS GraphQL BFF, API Gateway, NestJS gRPC microservices.
- PostgreSQL 17; Prisma 7.8.0.
- Docker Compose; Nx/Webpack builds.
- Existing services: Product, Workorder, User, Company, Company Location.
- Existing generated Prisma clients under `libs/backend/<service>-prisma/generated/...` (verify exact paths before commands).
- Prisma uses `@prisma/adapter-pg` in the current setup; Nx/Webpack has used `externalDependencies: 'all'` (verify actual current configuration).
- Correlation IDs propagate through GraphQL/gRPC; API Gateway/BFF rate limiting has been discussed/implemented previously. Verify in code before making changes.
- Previously discussed development ports: API Gateway 3000/4000; Product 3001/4001; BFF 3002/4002; Workorder 3006/4006; Angular 4200; PostgreSQL host 5433. **These are context, not verified live settings.**

## 2. Key business workflow (confirmed)

1. Customer work orders arrive roughly **10–15 days before production**.
2. Each work order identifies product, pack count, production date/shift, and customer.
3. Finished-product recipes specify ingredient and prepared-component quantities per pack.
4. Sauces are normally manufactured **3–4 days before** final pasta production.
5. Purchased ingredients and purchased ready-prepared components are received from suppliers.
6. Some components (e.g. sauces; certain cooked chicken/meatballs) are made internally, with their own recipes and yields.
7. Raw materials may be stored in **Low Risk**, across several rooms/locations.
8. Production requests stock from Low Risk to **High Risk**, where materials are prepared/staged for production.
9. Prepared sauce is stored in labelled containers/bins in the High Risk sauce storage room, possibly across different locations.
10. Planning must aggregate requirements across **multiple work orders** and AM/PM shifts, avoid allocating the same stock twice, and identify shortages.
11. The company needs stockroom reports, de-box daily order lists, AM/PM material usage plans, and eventually purchasing/traceability.

### Example work order and recipe

- Customer: Tesco.
- Work order: `W592770`.
- Product: `F008167`.
- Example quantity: **35,000 packs**.
- Nominal pack weight: **750 g**.
- User's example components per pack:

| Component | Per pack | For 35,000 packs |
|---|---:|---:|
| Pasta | 200 g | 7,000 kg |
| Sauce | 250 g | 8,750 kg |
| Cheese | 50 g | 1,750 kg |
| Vendor-supplied steamed chicken | 150 g | 5,250 kg |
| Bacon | 50 g | 1,750 kg |
| Garnish: parsley and spinach leaves combined | 2 g | 70 kg |
| **Specified total** | **702 g** | **24,570 kg** |
| **Nominal target** | **750 g** | **26,250 kg** |
| **Unexplained difference** | **48 g** | **1,680 kg** |

**Open:** Confirm whether 750 g is net food weight and resolve the 48 g difference. Do not silently rebalance the recipe. Confirm the actual parsley/spinach split. All above quantities are theoretical, excluding waste, overfill, cooking loss, and other allowances.

**Important correction:** An earlier illustration used 3,500 kg of sauce for 35,000 packs. With the later stated **250 g sauce/pack**, the correct theoretical sauce demand is **8,750 kg**. The earlier 3,500 kg is superseded for this example.

### Purchased vs internally manufactured components

- **Confirmed:** Steamed chicken packets are purchased ready-prepared from a vendor; no internal cooking order is required for that item.
- **Confirmed:** Certain other products use raw chicken or meatballs cooked internally with a mix of ingredients, using steam/oven processes. Those need manufacturing recipes, yields, batches, and production orders.
- **Confirmed:** Sauces are manufactured internally and stored before final production.
- **Open:** Exact meaning of `M` code prefix: oven-related raw materials, oven-produced outputs, or both. Do not assume.

## 3. Existing Product Prisma schema (before changes)

The user supplied the following model set, and **no Product-service recipe migration has been confirmed as executed**:

- `Product`: `id`, unique `productCode`, `name`, `description`, optional `image`, `productWeight String`, `price Float`, optional `companyId`, timestamps.
- `Ingredient`: `id`, unique `code`, `name`, optional `description`, `unit String`, `netWeight`, `origin`, `usedBy DateTime?`, `batchCode`, `manufacturer`, `vendor`, `packSize`, `netContent`, timestamps.
- `ProductIngredient`: `id`, `productId`, `ingredientId`, `quantity Float` (no declared relations).
- `Sauce`: `id`, `name`, `productId`, optional `description`, timestamps (currently coupled to one product).
- `SauceIngredient`: `id`, `sauceId`, `ingredientId`, `quantity Float` (no declared relations).
- `Tray`: `id`, `trayName`, optional `dimensions`, `weight`, timestamps.
- `Garnish`: `id`, `name`, optional `weight`, timestamps.
- `Unit`: `id`, `name`, `noOfUnits`, timestamps; business semantics unconfirmed.
- `NutritionalInfo`: `id`, unique `productId`, `calories`, `fat`, `protein`, `sugar`, `fibre`, `salt` as floats; no declared relation.
- Prisma generator: `prisma-client-js`, output `../generated/product-client`; datasource `postgresql`.

**Previously confirmed:** `Ingredient`, `ProductIngredient`, `Sauce`, and `SauceIngredient` were empty at the time of that statement; recheck current row counts before migrations. `Product` and other tables may contain real data.

## 4. Target Product & Recipe design — proposed, not yet migrated

### Design principles

- Keep `Product` and its existing IDs/data.
- Support reusable `Sauce` master, not permanently tied to one `Product`.
- Support purchased ingredients, vendor-prepared items, manufactured components, garnish, and packaging.
- Support recipes for finished products, sauces, and internally manufactured components.
- Use immutable approved **recipe revisions**, with work orders bound to the exact revision used for planning.
- Use `Decimal(18,6)` for quantities, explicit units (`G`, `KG`, `ML`, `L`, `EACH`) and validated conversions.
- Separate `materialType`, `supplyType`, and `processType` rather than inferring all semantics from item code prefix.
- Preserve item codes as strings, e.g. `I003118`; code changes after use should be prohibited or handled through controlled supersession.
- `I` codes are used for standard ingredients; `M` codes were described as oven-related. **Prefix mapping and number allocation rules remain open.** Backend must generate codes transaction-safely, not with `MAX(code)+1`.
- Stock lots, expiry/use-by dates, supplier batches, and stock quantities do **not** belong on the ingredient master. Existing `Ingredient.usedBy` and `batchCode` are legacy fields to phase out after migration.

### Proposed enums

```prisma
enum MeasurementUnit { G KG ML L EACH }
enum MaterialType { RAW_MATERIAL PURCHASED_PREPARED MANUFACTURED_COMPONENT GARNISH PACKAGING OTHER }
enum SupplyType { PURCHASED MANUFACTURED }
enum ProcessType { NONE OVEN STEAM SAUCE_PREPARATION MIXING OTHER }
enum RecipeStatus { DRAFT APPROVED RETIRED }
```

### Proposed model evolution

- `Product`: retain current fields; add `netWeightG Decimal?`, `isActive`, `recipes`, nutritional relation.
- `Ingredient`: retain existing fields during migration; add `materialType`, `supplyType`, `processType`, `baseUnit`, `isActive`; add recipe relationships.
- `Sauce`: add unique `code`, remove single-product ownership **after** checking data; add reusable recipe relationships.
- `Recipe`: versioned header with exactly one owner (`productId` OR `sauceId` OR `ingredientId`), `revision`, `status`, `outputQuantity`, `outputUnit`, `processType`, effective dates, approval metadata, and lines.
- `RecipeLine`: exactly one component (`ingredientId` OR `sauceId`), `quantity Decimal`, `unit`, `lineNumber`, optional notes.
- `Tray`, `Garnish`, `Unit`: retain initially for compatibility; later rationalize packaging and garnish against stockable materials.
- `NutritionalInfo`: add proper Product relation; define nutritional basis (per 100 g/per pack) in a later design pass.
- Old `ProductIngredient` and `SauceIngredient` become legacy once new recipes are in use; remove only after data and code checks.

### Constraints beyond basic Prisma relations

- PostgreSQL `CHECK`: exactly one `Recipe` output owner; exactly one `RecipeLine` component owner.
- PostgreSQL `CHECK`: positive recipe output and line quantities.
- Enforce approved recipe immutability (application plus database strategy); edits create new revision.
- Enforce one effective approved revision per output/date (define business rule and constraint/transaction strategy).
- Prevent direct/indirect recursive recipe cycles.
- Validate unit compatibility, pack-weight reconciliation, and approved yield assumptions.
- **Caution:** A finished product may require a packaging BOM in addition to the net-food recipe. Packaging is not part of 750 g net food weight.
- **Caution:** Ingredient `manufacturer`/`vendor` may ultimately be many-to-many supplier relationships; retain fields temporarily for compatibility.

### Schema strategy decision to resolve before coding

Earlier discussions considered a generic `Item` master; the latest full Product schema proposal retained `Ingredient` for migration safety and `Sauce` separately, using a generic Inventory item registry later. **Do not mix these alternatives mid-migration.** First review actual data and choose a consistent master-data reference strategy. A unified `Item` abstraction may be the long-term target, but is not yet implemented.

## 5. Inventory & warehouse requirements — confirmed + proposed

### Confirmed physical operations

- Multiple stockrooms and rooms, including **Low Risk** and **High Risk**.
- Low Risk holds ingredients across several rooms/locations.
- High Risk requests ingredients from Low Risk and stages them for production.
- Sauce storage is in High Risk, with labelled bins/containers assigned to specific storage positions; there may be **~1,000 locations** in a room or area (exact count/layout to confirm).
- Example sauce storage uses **1,000-litre containers** and **10 labelled bins**, potentially in different locations. Exact relationship between manufacturing vessels and storage containers is **open**.
- Labels include at least manufacture date, item/code, and use-by; exact label layout/details to be supplied later.

### Proposed inventory data entities

- `InventoryItem` / cross-service stockable-item registry: ingredient, sauce, manufactured component, packaging.
- `Warehouse` / `Stockroom` / `Room` / `StorageLocation` hierarchy, with unique location codes and optional capacity/handling restrictions.
- `StockLot`: source batch, manufacturing/receipt date, use-by/expiry, quality status, supplier references.
- `StockContainer`: physical labelled bin, bag group, tote, or storage vessel; current location and identity independent of lot.
- `StockBalance`: quantity by item, lot, container, and location (transactionally maintained projection).
- `StockMovement`: immutable audit ledger for receipts, issues, returns, adjustments, transfers, and opening balances.
- `StockReservation`: work-order or production-order allocations.
- `StockTransfer`: request → pick → dispatch → in transit → receive → put-away; handle partial transfers and discrepancies.
- `GoodsReceipt`: supplier delivery, received/accepted/rejected quantities, lot/expiry, quality status, receiving user.
- `StockCount`/`Reconciliation`: physical count, variance, reviewed adjustment.

### Non-negotiable inventory rules

- **Transfers do not consume stock.** Moving 30 kg from Low Risk to High Risk changes location, not factory total.
- **Planning allocations do not consume stock.** Actual production issue is a separate physical transaction.
- Do not count the same stock in both source and destination during transfer.
- Reservations must be concurrency-safe; never allocate the same available stock twice.
- No unauthorized negative stock; transactional updates and idempotent operations.
- FEFO (first-expiring-first-out) for eligible lots where appropriate, subject to quality, allergen, handling, and date restrictions.
- Quality statuses such as `QUARANTINED`, `AVAILABLE`, `BLOCKED`, `EXPIRED`; exact lifecycle/permissions to confirm.
- A 1,000 L vessel's capacity is **not automatically 1,000 kg**; use measured kg or validated sauce-specific density/conversion.
- A sauce batch may be split into multiple containers and locations; partial consumption retains batch and container genealogy.
- Do not silently combine different batches in one container; if permitted, explicit traceability rules are required.
- Maintain inventory ledger and controlled current-balance projections; avoid direct balance overwrites.
- Enforce relevant food safety controls for Low Risk → High Risk movement; actual site SOPs still needed.

## 6. Sauce manufacturing and traceability

- Sauce is a **stockable semi-finished manufactured item** with its own approved recipe.
- A sauce production order consumes raw ingredient lots and produces one or more sauce batches with actual yield.
- Batch attributes: sauce code, batch code, manufacture time/date, use-by, quality status, actual yield, recipe revision, raw-material genealogy.
- Filling creates labelled bins/containers; containers are put away to storage locations.
- Available sauce inventory is checked before planning additional manufacture.
- Example: W592770 needs 8,750 kg sauce based on 250 g × 35,000 packs; if 3,000 kg usable/uncommitted sauce is available, theoretical manufacture requirement is 5,750 kg **before process allowances**.
- Manufacture dates should precede final production by approximately 3–4 days, subject to validated shelf life and production schedule.
- Finished production consumption links back to sauce batches and ultimately their raw ingredient lots.
- Confirm whether sauce batches are shared between work orders and whether containers may be partially used/resealed.

## 7. Multiple-work-order MRP and purchasing

### Planning logic

1. Receive/approve work orders, quantity, planned production date and AM/PM shift.
2. Freeze/reference each order's approved recipe revision.
3. Expand finished-product BOM to direct materials and prepared components.
4. For stockable prepared components, calculate demand first; net existing usable, unreserved stock before expanding the **shortfall** into manufacturing requirements. Avoid double-counting component stock and raw inputs.
5. Calculate component-specific need dates: sauce inputs needed before sauce manufacturing; finished ingredients before pasta production.
6. Aggregate demand across **all work orders by item, need date/shift and priority**.
7. Calculate projected availability from usable on-hand stock, reservations, earlier demand, and eligible confirmed receipts arriving before need date.
8. Generate shortages, proposed allocations, internal manufacturing orders, Low Risk → High Risk requests, and draft purchase requisitions.
9. Replan on work-order/recipe/schedule/stock/quality changes; use daily scheduled refresh as a safety net.
10. Final readiness checks before sauce production and final product production; record actual issues and yield.

### Separate statuses

- Work-order lifecycle status (e.g. received/scheduled/in production/completed) is separate from material readiness (e.g. shortage identified/procurement in progress/ready).
- Planning calculations and physical stock movements must remain distinct.
- Human approval for external supplier purchase orders in initial release.
- Consolidate purchasing across work orders while retaining per-order demand traceability.

### Automation approach — proposed

- Event-driven recalculation when work orders, schedules, stock, reservations, receipts, or quality release change.
- Scheduled refresh of upcoming planning horizon (illustratively 14–21 days); daily expiry and delivery monitoring.
- NestJS `@nestjs/schedule` initially; consider persistent job queue for retries/scale.
- Multiple service replicas require single-run coordination/distributed locking and idempotency.
- Cross-service workflows require explicit orchestration/events; no assumption of distributed database transactions.

## 8. Excel/CSV imports and manual UI

**Confirmed preference:** Support both spreadsheet import and manual entry; admins/warehouse team will validate deliveries and enter supplier batch, expiry/use-by, quantity, location, and other details.

### Import categories (must remain distinct)

1. **Ingredient master import**: item codes/names/units/classifications.
2. **Opening stock import**: one-time initial balances, with review and approval.
3. **Goods receipt import**: actual supplier deliveries (increases stock).
4. **Stock count/snapshot import**: physical balances for reconciliation (**does not automatically add to stock**).
5. **Work order import**: optional, depending on existing Workorder interfaces.

### Import workflow

Upload → validate columns/units/codes/duplicates → preview errors and changes → approve → transactional processing → audit/import report.

**Do not add daily stock snapshots to previous balances.** Example: 320 kg opening stock followed by a report showing 300 kg is not a +300 kg delivery. Compare against ledger-calculated balance and review any discrepancy.

A previous assistant supplied an illustrative Excel workbook named `ingredient_inventory_planning_template.xlsx` with seven worksheets: Read Me, Ingredient Master, Opening Stock, Goods Receipts, Stock Count, Work Orders, Material Plan Demo. The workbook was a demonstration; do not treat sample rows as verified production data.

## 9. Evidence from three stock/planning photographs

These are historical observations from photographs shared in this conversation, not verified ERP exports or current live inventory.

1. **Stockroom report**, Greencore Warrington, `HR High Risk Stockroom`, dated **16/10/26**, with item code, legacy code, description, quantity, UoM, stock value. Examples: `I000159` chopped fresh parsley **21 kg**; `I003118` mozzarella **320 kg**; `I001383` mature grated cheddar **150 kg** on the stockroom report. Other observed materials included cheeses, spinach, chicken, and bacon. Verify photo transcriptions before importing.
2. **De-Box Daily Order List**: garnish description, item code, `FOR PM`, `FOR AM`, comments and handwritten instructions. This is a material preparation/transfer request, **not necessarily supplier purchasing**.
3. **USAGES ON PLAN FOR AM & PM**: stock, planned usage, required, under/over. Examples: parsley `I000159`: stock 21 kg, required 33 kg, **−12 kg**; mozzarella `I003118`: stock 320 kg, required 271 kg, **+49 kg**; cheddar `I001383`: stock 410 kg, required 695 kg, **−285 kg**. These are **aggregate planning sheet figures**, not quantities specifically attributable to W592770. Different report times/scopes may explain apparent differences; do not reconcile without source details.

The photographs do **not** establish full supplier, quality, lot, valuation, ERP integration, or movement procedures.

## 10. Proposed service/module ownership

| Service/module | Status | Owns |
|---|---|---|
| Product | Existing | Product/ingredient/sauce masters, versioned recipes, BOM calculations and approval |
| Workorder | Existing | Customer orders, quantities, schedules, work-order lifecycle, recipe revision reference |
| Inventory | New | Stockable item mapping, stockrooms, rooms, locations, lots, containers, receipts, ledger, reservations, transfers, counts |
| Planning / MRP | New logical module | Aggregated requirements, projected availability, shortages, material readiness and procurement/manufacturing proposals |
| Production | New logical module | Sauce/cooking manufacturing orders, actual yield, genealogy, final production consumption |
| Purchasing | Later | Suppliers, requisitions, purchase orders, expected deliveries |
| BFF / API Gateway | Existing | GraphQL UI contracts, authorization/orchestration, gRPC access; **not** domain stock calculation |

**Deployment decision:** These are logical boundaries; do not assume every module needs its own deployed microservice immediately. Keep each data owner clear. No cross-service PostgreSQL foreign keys.

## 11. Suggested Angular navigation/screens

- **Master Data:** Products, Ingredients, Sauces, Units, Recipes, Recipe Revisions, Approval.
- **Warehouse Setup:** Stockrooms, Rooms, Storage Locations, Capacity/Restrictions, Bin/Container Types.
- **Receiving:** Goods Receipt, Lot Details, Quality Release, Opening Balance Import.
- **Inventory:** Stock Overview, Lot/Expiry Search, Container/Location Lookup, Stock Movement History, Reconciliation.
- **Planning:** Work Orders, Material Requirements, AM/PM Plan, Shortages, Manufacturing Suggestions, Procurement Proposals.
- **Transfers:** Material Requests, Picking, Dispatch, In Transit, High Risk Receipt, Put-Away.
- **Sauce/Cooking Production:** Production Orders, Raw Material Issues, Actual Yield, Batch Creation, Bin Filling, Labels, Quality Release.
- **Finished Production:** De-Boxing, Material Issue, Actual Consumption, Finished Batch, Genealogy.
- **Purchasing (later):** Supplier Master, Requisitions, POs, Delivery Tracking.
- **Admin/Audit:** Users/Roles, Approvals, Imports, Stock Adjustments, Audit Log.

## 12. Recommended development roadmap

### Phase 0 — Safety and discovery

- Inspect repository, Nx project configuration, Prisma generator/config, current service contracts, database/migration history.
- Back up Product database; count Product, Ingredient, Sauce, ProductIngredient, SauceIngredient rows.
- Verify existing schema and data; document code dependencies.
- Confirm I/M prefix policy, recipe weight discrepancy, and current manufacturing/warehouse SOPs.

### Phase 1 — Product master and versioned recipes **(next development milestone)**

- Add material/supply/process classification and canonical units.
- Define safe `I`/`M` code generation (do not activate `M` until policy confirmed).
- Add reusable sauces and versioned Product/Sauce/Manufactured Component recipes.
- Enforce recipe constraints, approval, immutable revisions, unit conversion, cycle prevention.
- Update NestJS Product gRPC/API/BFF contracts and Angular Ingredient/Recipe screens.
- Test W592770 calculations and 702 g vs 750 g validation.
- Use expand → migrate → switch application → retire old schema; avoid destructive migration.

### Phase 2 — Inventory foundation

- Implement stockroom/room/location hierarchy and item registry.
- Implement stock lots, quality states, goods receipts, opening balance imports, ledger and balances.
- Build manual receiving, stock overview, and stock count UI.

### Phase 3 — Multiple-work-order MRP

- Resolve recipe revisions; explode BOM; aggregate demand by need date/shift.
- Handle sauce stock netting, reservations, projected availability, shortages and readiness.
- Replan on events; add scheduled reconciliation.

### Phase 4 — Transfers and de-boxing

- Low Risk → High Risk request/pick/dispatch/receive/put-away.
- AM/PM de-box lists, staging and production issues.
- Barcode/QR support if approved.

### Phase 5 — Sauce and internal cooking production

- Manufacturing orders, ingredient lot consumption, actual yields, quality release.
- Sauce batch/container/bin/location management and labels.
- Link sauce batches and other prepared components to finished work orders.

### Phase 6 — Purchasing, costing and integrations

- Consolidated draft requisitions, supplier management, POs, receipts, lead times.
- Costing/valuation policy, waste, variance and reporting.
- Optional future ERP integration only after system-of-record and synchronization rules are agreed.

## 13. Quality, security, and engineering standards

- Use Prisma Decimal for quantities, explicit base units and conversion rules; do not use `Float` for stock/recipe math.
- PostgreSQL transactions for inventory changes and reservation/issue consistency.
- Idempotency for imports, receipts, event handlers and retries.
- Immutable movement history; audit user, timestamp, reason and references.
- Role-based authorization for recipe approval, quality release, stock adjustments and purchasing.
- Never overwrite historical approved recipes used by a work order.
- Test FEFO, expiry, blocked lots, partial containers, multiple work orders, concurrent reservations, duplicate import and partial transfer failures.
- Preserve existing Product IDs and existing application contracts through staged migration.
- Do not invent current repository paths, run commands or migration state; inspect first.
- Treat food safety, shelf-life, allergen segregation, temperature and cross-risk transfer procedures as site-specific requirements requiring operational sign-off.

## 14. Outstanding questions / decisions

1. **I/M code policy:** What precisely qualifies for `M`? Are prefixes assigned by item category, department or manufacturing process? What is the exact numbering format?
2. **750 g recipe:** Is this net food weight? What accounts for the missing 48 g? What is the actual parsley/spinach split?
3. **Sauce containers:** Are 1,000 L containers manufacturing equipment, storage vessels, or both? How do the 10 bins relate to them? What is the exact label format?
4. **Batch mixing:** Can one bin contain multiple sauce batches? Can a partially used bin be resealed/returned?
5. **Locations:** Actual stockroom/room hierarchy, location numbering, capacities, and Low Risk/High Risk transfer SOPs.
6. **Quality:** Which stock types require quarantine/release? Who can approve? Which expiry/use-by controls are mandatory?
7. **Scheduling:** How are AM/PM shifts and work-order priorities determined? Can sauce batches serve multiple orders?
8. **Manufacturing:** Which items besides sauce are produced internally? Standard cooking yields, loss/overfill allowances, recipe basis.
9. **Purchasing:** Supplier/lead-time data, order multiples, approval rules, expected receipts and integration strategy.
10. **Migration:** Actual row counts, existing gRPC/GraphQL consumers, current Prisma config, Nx build state and deployment strategy.
11. **Packaging:** Whether trays, film, labels and cartons are stock-managed and included in a separate packaging BOM.
12. **Nutrition/allergens:** Nutrition calculation basis, allergen/specification requirements, label regulatory approvals.

## 15. Immediate next-session checklist

1. Open this document and current Product Prisma schema.
2. Inspect repository structure and Nx/Prisma configuration; do not assume file paths.
3. Verify current database state and create backup.
4. Choose the final Phase 1 Product model strategy (transitional `Ingredient` + `Sauce` vs unified `Item`) and confirm I/M code policy.
5. Produce a **validated, complete Prisma schema** with correct relation syntax and migration SQL for exclusivity constraints.
6. Generate migration with review; preserve existing Product rows.
7. Implement Ingredient Master APIs and UI, then Recipe revisions/approval and calculations.
8. Test with F008167/W592770, including explicit warning for 48 g recipe discrepancy.

## 16. Change log

- **2026-10-18:** Consolidated current architecture, supplied Prisma model, factory workflow, stockroom/location requirements, sauce bins and labels, purchased vs internally cooked chicken, I/M item code rule, multiple-work-order MRP, imports and proposed roadmap. **No database migration or feature implementation is asserted by this document.**

---

**Maintenance rule:** Update this file after each significant decision, migration, or implemented feature. Mark each item **Confirmed**, **Proposed**, **Open**, or **Implemented** and record the date. Keep actual Prisma schemas and migration files as the source of truth for deployed database structure.
