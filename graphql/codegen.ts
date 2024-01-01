const SANITY_ENDPOINT = process.env.NEXT_PUBLIC_SANITY_ENDPOINT;

export default {
  overwrite: true,
  generates: {
    "src/services/sanity/schema.ts": {
      documents: "graphql/documents/*.graphql",
      schema: {
        [SANITY_ENDPOINT]: { headers: {} },
      },
      plugins: ["typescript", "typescript-operations", "typescript-urql"],
      config: {
        avoidOptionals: {
          field: true,
          object: false,
          defaultValue: true,
          inputs: false,
        },
        rawRequest: true,
        enumsAsTypes: true,
        withHooks: false,
      },
    },
  },
};
