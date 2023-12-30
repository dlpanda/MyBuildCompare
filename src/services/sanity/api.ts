import { Client as UrqlClient, cacheExchange, fetchExchange } from "@urql/core";
import { AllArticleDocument, AllArticleQuery } from "./schema";

const SANITY_ENDPOINT = process.env.NEXT_PUBLIC_SANITY_ENDPOINT;

class Client extends UrqlClient {
  constructor() {
    super({
      url: SANITY_ENDPOINT,
      exchanges: [cacheExchange, fetchExchange],
    });
  }

  async getArticles() {
    const { data, error } = await this.query<AllArticleQuery>(
      AllArticleDocument,
      {}
    );

    if (error) throw error;

    return data?.allArticle;
  }
}

const api = new Client();

export default api;
