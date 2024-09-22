import { apiSlice } from "./base-query";

export const transactionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    checkAvaibility: builder.mutation({
      query: (payload) => ({
        url: "/transaction/is-available",
        method: "POST",
        body: payload,
      }),
    }),
    transaction: builder.mutation({
      query: (payload) => ({
        url: "/transaction",
        method: "POST",
        body: payload,
      }),
    }),
    getTransactions: builder.query({
      query: () => ({
        url: "/transaction",
        method: "GET",
      }),
    }),
    getDetailTransaction: builder.query({
      query: (id) => ({
        url: `/transaction/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCheckAvaibilityMutation,
  useTransactionMutation,
  useGetTransactionsQuery,
  useGetDetailTransactionQuery,
} = transactionApi;
