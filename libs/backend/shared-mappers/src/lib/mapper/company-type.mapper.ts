import { mapEnum } from '../enums/enum-mapper';
import { ProtoCompanyType } from '@my-product-app/backend-proto/generated';
import { CompanyType as GraphQLCompanyType } from '@my-product-app/backend-shared-types';

/**
 * Proto → GraphQL
 */
export function mapProtoCompanyTypeToGraphQL(
  type?: ProtoCompanyType
): GraphQLCompanyType {
  return mapEnum<ProtoCompanyType, GraphQLCompanyType>(
    {
      [ProtoCompanyType.MANUFACTURER]: GraphQLCompanyType.MANUFACTURER,
      [ProtoCompanyType.CLIENT]: GraphQLCompanyType.CLIENT,
      [ProtoCompanyType.SUPPLIER]: GraphQLCompanyType.SUPPLIER,
      [ProtoCompanyType.UNRECOGNIZED]: GraphQLCompanyType.MANUFACTURER, // safe fallback
    },
    type,
    GraphQLCompanyType.MANUFACTURER // default fallback
  );
}

/**
 * GraphQL → Proto
 */
export function mapGraphQLCompanyTypeToProto(
  type?: GraphQLCompanyType
): ProtoCompanyType {
  return mapEnum<GraphQLCompanyType, ProtoCompanyType>(
    {
      [GraphQLCompanyType.MANUFACTURER]: ProtoCompanyType.MANUFACTURER,
      [GraphQLCompanyType.CLIENT]: ProtoCompanyType.CLIENT,
      [GraphQLCompanyType.SUPPLIER]: ProtoCompanyType.SUPPLIER,
    },
    type,
    ProtoCompanyType.MANUFACTURER // default fallback
  );
}
