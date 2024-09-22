import { apiSlice } from "./base-query";

export const transactionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    checkAvaibility: builder.mutation({
      query: (payload) => ({
        url: "transaction/is-available",
        method: "POST",
        body: payload,
      }),
    }),
    transaction: builder.mutation({
      query: (payload) => ({
        url: "transaction",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useCheckAvaibilityMutation, useTransactionMutation } =
  transactionApi;
