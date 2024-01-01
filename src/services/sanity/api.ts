import { Client as UrqlClient, cacheExchange, fetchExchange } from "@urql/core";
import {
  GetArticleQueryVariables,
  GetBuildersDocument,
  GetBuildersQuery,
  GetBuildersQueryVariables,
} from "./schema";

const SANITY_ENDPOINT = process.env.NEXT_PUBLIC_SANITY_ENDPOINT;

class Client extends UrqlClient {
  constructor() {
    super({
      url: SANITY_ENDPOINT,
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
