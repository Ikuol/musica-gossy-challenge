import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) =>{
                headers.set('X-RapidAPI-Key','537bd75ae1msha6662416e110958p10756ejsn99f56cde7816');

                return headers;
            },
        }),
        endpoints:(builder) =>({
            getTopCharts: builder.query({query: '/charts/world'}),
        }),
    });

    export const{
        useGetTopChartsQuery,
    } = shazamCoreApi;