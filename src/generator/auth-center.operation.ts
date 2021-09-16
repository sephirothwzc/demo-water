import * as SchemaTypes from "./auth-center";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {};
export const DemoWaterFragmentDoc = gql`
  fragment DemoWater on DemoWater {
    id
    phone
    jsonValue
    createdAt
  }
`;
export const DemoWaterDocument = gql`
  mutation demoWater($param: DemoWaterSaveIn!) {
    demoWater(param: $param)
  }
`;
export type DemoWaterMutationFn = Apollo.MutationFunction<
  SchemaTypes.DemoWaterMutation,
  SchemaTypes.DemoWaterMutationVariables
>;

/**
 * __useDemoWaterMutation__
 *
 * To run a mutation, you first call `useDemoWaterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDemoWaterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [demoWaterMutation, { data, loading, error }] = useDemoWaterMutation({
 *   variables: {
 *      param: // value for 'param'
 *   },
 * });
 */
export function useDemoWaterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SchemaTypes.DemoWaterMutation,
    SchemaTypes.DemoWaterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SchemaTypes.DemoWaterMutation,
    SchemaTypes.DemoWaterMutationVariables
  >(DemoWaterDocument, options);
}
export type DemoWaterMutationHookResult = ReturnType<
  typeof useDemoWaterMutation
>;
export type DemoWaterMutationResult =
  Apollo.MutationResult<SchemaTypes.DemoWaterMutation>;
export type DemoWaterMutationOptions = Apollo.BaseMutationOptions<
  SchemaTypes.DemoWaterMutation,
  SchemaTypes.DemoWaterMutationVariables
>;
export const FindDemoWaterDocument = gql`
  query findDemoWater($param: QueryListParam) {
    demoWaterAll(param: $param) {
      ...DemoWater
    }
  }
  ${DemoWaterFragmentDoc}
`;

/**
 * __useFindDemoWaterQuery__
 *
 * To run a query within a React component, call `useFindDemoWaterQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindDemoWaterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindDemoWaterQuery({
 *   variables: {
 *      param: // value for 'param'
 *   },
 * });
 */
export function useFindDemoWaterQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SchemaTypes.FindDemoWaterQuery,
    SchemaTypes.FindDemoWaterQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SchemaTypes.FindDemoWaterQuery,
    SchemaTypes.FindDemoWaterQueryVariables
  >(FindDemoWaterDocument, options);
}
export function useFindDemoWaterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SchemaTypes.FindDemoWaterQuery,
    SchemaTypes.FindDemoWaterQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SchemaTypes.FindDemoWaterQuery,
    SchemaTypes.FindDemoWaterQueryVariables
  >(FindDemoWaterDocument, options);
}
export type FindDemoWaterQueryHookResult = ReturnType<
  typeof useFindDemoWaterQuery
>;
export type FindDemoWaterLazyQueryHookResult = ReturnType<
  typeof useFindDemoWaterLazyQuery
>;
export type FindDemoWaterQueryResult = Apollo.QueryResult<
  SchemaTypes.FindDemoWaterQuery,
  SchemaTypes.FindDemoWaterQueryVariables
>;
export const FindDemoWaterByIdDocument = gql`
  query findDemoWaterById($id: ID!) {
    demoWater(id: $id) {
      ...DemoWater
    }
  }
  ${DemoWaterFragmentDoc}
`;

/**
 * __useFindDemoWaterByIdQuery__
 *
 * To run a query within a React component, call `useFindDemoWaterByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindDemoWaterByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindDemoWaterByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindDemoWaterByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    SchemaTypes.FindDemoWaterByIdQuery,
    SchemaTypes.FindDemoWaterByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SchemaTypes.FindDemoWaterByIdQuery,
    SchemaTypes.FindDemoWaterByIdQueryVariables
  >(FindDemoWaterByIdDocument, options);
}
export function useFindDemoWaterByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SchemaTypes.FindDemoWaterByIdQuery,
    SchemaTypes.FindDemoWaterByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SchemaTypes.FindDemoWaterByIdQuery,
    SchemaTypes.FindDemoWaterByIdQueryVariables
  >(FindDemoWaterByIdDocument, options);
}
export type FindDemoWaterByIdQueryHookResult = ReturnType<
  typeof useFindDemoWaterByIdQuery
>;
export type FindDemoWaterByIdLazyQueryHookResult = ReturnType<
  typeof useFindDemoWaterByIdLazyQuery
>;
export type FindDemoWaterByIdQueryResult = Apollo.QueryResult<
  SchemaTypes.FindDemoWaterByIdQuery,
  SchemaTypes.FindDemoWaterByIdQueryVariables
>;
