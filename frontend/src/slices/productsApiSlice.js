import { PRODUCTS_URL } from "../constants";

import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getProductDetails: builder.query({
      query:(productId) => ({
        url: `${PRODUCTS_URL}/${productId}`
      }),
      keepUnusedDataFor: 5
    }),
    createProduct: builder.mutation({
      query: () => ({
        url: `${PRODUCTS_URL}`,
        method: 'POST',
      }),
      // The invalidatesTags option is set to ['Product'], which means that after the createProduct mutation runs, any cached data associated with the 'Product' tag will be invalidated.
      invalidatesTags: ['Product'],
    }),
  }),
});

export const {useGetProductsQuery, useGetProductDetailsQuery, useCreateProductMutation} = productApiSlice;
