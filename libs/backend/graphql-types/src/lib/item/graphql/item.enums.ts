import { registerEnumType } from '@nestjs/graphql';

export enum ItemKind {
  RAW_MATERIAL = 'RAW_MATERIAL',
  PURCHASED_PREPARED = 'PURCHASED_PREPARED',
  MANUFACTURED_COMPONENT = 'MANUFACTURED_COMPONENT',
  SAUCE = 'SAUCE',
  GARNISH = 'GARNISH',
  PACKAGING = 'PACKAGING',
  OTHER = 'OTHER',
}

export enum SupplyType {
  PURCHASED = 'PURCHASED',
  MANUFACTURED = 'MANUFACTURED',
  BOTH = 'BOTH',
}

export enum ProcessType {
  NONE = 'NONE',
  OVEN = 'OVEN',
  STEAM = 'STEAM',
  SAUCE_PREPARATION = 'SAUCE_PREPARATION',
  MIXING = 'MIXING',
  OTHER_PROCESS = 'OTHER_PROCESS',
}

export enum UnitOfMeasure {
  G = 'G',
  KG = 'KG',
  ML = 'ML',
  L = 'L',
  EACH = 'EACH',
}

registerEnumType(ItemKind, {
  name: 'ItemKind',
});

registerEnumType(SupplyType, {
  name: 'SupplyType',
});

registerEnumType(ProcessType, {
  name: 'ProcessType',
});

registerEnumType(UnitOfMeasure, {
  name: 'UnitOfMeasure',
});
