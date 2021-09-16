import * as SchemaTypes from './auth-center';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};

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
  return Apollo.useMutation<SchemaTypes.DemoWaterMutation, SchemaTypes.DemoWaterMutationVariables>(
    DemoWaterDocument,
    options
  );
}
export type DemoWaterMutationHookResult = ReturnType<typeof useDemoWaterMutation>;
export type DemoWaterMutationResult = Apollo.MutationResult<SchemaTypes.DemoWaterMutation>;
export type DemoWaterMutationOptions = Apollo.BaseMutationOptions<
  SchemaTypes.DemoWaterMutation,
  SchemaTypes.DemoWaterMutationVariables
>;
