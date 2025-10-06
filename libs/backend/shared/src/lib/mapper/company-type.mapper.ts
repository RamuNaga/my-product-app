import { mapEnum } from '../enums/enum-mapper';
import { ProtoCompanyType } from '@my-product-app/backend-proto/generated';
import { CompanyType as GraphQLCompanyType } from '../enums/enum';

// Proto → GraphQL
export const mapProtoCompanyTypeToGraphQL = (
  type: ProtoCompanyType
): GraphQLCompanyType =>
  mapEnum<ProtoCompanyType, GraphQLCompanyType>(
    {
      [ProtoCompanyType.MANUFACTURER]: GraphQLCompanyType.MANUFACTURER,
      [ProtoCompanyType.CLIENT]: GraphQLCompanyType.CLIENT,
      [ProtoCompanyType.SUPPLIER]: GraphQLCompanyType.SUPPLIER,
      [ProtoCompanyType.UNRECOGNIZED]: GraphQLCompanyType.MANUFACTURER, // fallback
    },
    type
  );

// GraphQL → Proto
export const mapGraphQLCompanyTypeToProto = (
  type: GraphQLCompanyType
): ProtoCompanyType =>
  mapEnum<GraphQLCompanyType, ProtoCompanyType>(
    {
      [GraphQLCompanyType.MANUFACTURER]: ProtoCompanyType.MANUFACTURER,
      [GraphQLCompanyType.CLIENT]: ProtoCompanyType.CLIENT,
      [GraphQLCompanyType.SUPPLIER]: ProtoCompanyType.SUPPLIER,
    },
    type
  );
