import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_URL + '/admin',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['Users', 'AiContacts', 'Analytics', 'Contacts'],
  endpoints: (builder) => ({
    getAnalyticsInsights: builder.query({
      query: () => '/getAnalysticsInsights',
      providesTags: ['Users'],
    }),
    getUserList: builder.query({
      query: () => '/getAllUsers',
      providesTags: ['Users'],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/deleteUser/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
    updatePassword: builder.mutation({
      query: ({ oldPassword, password }) => ({
        url: `/updatePassword`,
        method: 'PUT',
        body: { oldPassword, password },
      }),
    }),
    activateOrDeactivate: builder.mutation({
      query: (id) => ({
        url: `/activateOrDeactivateUser/${id}`,
        method: 'PUT',
      }),
      invalidatesTags: ['Users'],
    }),
    allAiContactsList: builder.query({
      query: () => '/getAllAiContacts',
      providesTags: ['AiContacts'],
    }),
    updateAiContact: builder.mutation({
      query: ({ id, aiContact }) => ({
        url: `/updateAiContact/${id}`,
        method: 'PUT',
        body: aiContact,
      }),
      invalidatesTags: ['AiContacts'],
    }),
    deleteAiContact: builder.mutation({
      query: (id) => ({
        url: `/deleteAiContact/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['AiContacts'],
    }),
    getContacts: builder.query({
      query: () => '/getContacts',
      providesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetAnalyticsInsightsQuery,
  useGetUserListQuery,
  useDeleteUserMutation,
  useUpdatePasswordMutation,
  useActivateOrDeactivateMutation,
  useAllAiContactsListQuery,
  useUpdateAiContactMutation,
  useDeleteAiContactMutation,
  useGetContactsQuery,
} = adminApi;