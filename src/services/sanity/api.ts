import { Client as UrqlClient, cacheExchange, fetchExchange } from '@urql/core';
import {
    GetArticlesDocument,
    GetArticlesQuery,
    GetArticlesQueryVariables,
    GetBuilderDocument,
    GetBuilderQuery,
    GetBuilderQueryVariables,
    GetBuildersDocument,
    GetBuildersQuery,
    GetBuildersQueryVariables,
    GetHouseDesignDocument,
    GetHouseDesignQuery,
    GetHouseDesignQueryVariables,
    GetHouseDesignsDocument,
    GetHouseDesignsQuery,
    GetHouseDesignsQueryVariables,
} from './schema';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_SANITY_GQL_ENDPOINT;

class Client extends UrqlClient {
    constructor() {
        super({
            url: GQL_ENDPOINT,
            exchanges: [cacheExchange, fetchExchange],
        });
    }

    async getBuilders(params: GetBuildersQueryVariables) {
        const { data, error } = await this.query<GetBuildersQuery>(
            GetBuildersDocument,
            params
        );

        if (error) throw error;

        return data?.allBuilder;
    }

    async getBuilder(params: GetBuilderQueryVariables) {
        const { data, error } = await this.query<GetBuilderQuery>(
            GetBuilderDocument,
            params
        );

        if (error) throw error;

        return data?.Builder;
    }

    async getHouseDesigns(params: GetHouseDesignsQueryVariables) {
        const { data, error } = await this.query<GetHouseDesignsQuery>(
            GetHouseDesignsDocument,
            params
        );

        if (error) throw error;

        return data?.allHouseDesign;
    }

    async getHouseDesign(params: GetHouseDesignQueryVariables) {
        const { data, error } = await this.query<GetHouseDesignQuery>(
            GetHouseDesignDocument,
            params
        );

        if (error) throw error;

        return data?.HouseDesign;
    }

    async getArticles(params: GetArticlesQueryVariables) {
        const { data, error } = await this.query<GetArticlesQuery>(
            GetArticlesDocument,
            params
        );
        if (error) throw error;

        return data?.allArticle;
    }

    // async getHouseDesigns() {
    //   const { data, error } = await this.query<AllArticleQuery>(
    //     AllArticleDocument,
    //     {}
    //   );

    //   if (error) throw error;

    //   return data?.allArticle;
    // }

    // async getArticles() {
    //   const { data, error } = await this.query<AllArticleQuery>(
    //     AllArticleDocument,
    //     {}
    //   );

    //   if (error) throw error;

    //   return data?.allArticle;
    // }
}

const api = new Client();

export default api;
