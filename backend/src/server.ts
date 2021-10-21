import app from "./app";
import { config } from "dotenv";
import resolvers from "./gql/resolvers";
import { ApolloServer, gql } from "apollo-server-express";
import path from "path";
import fs from "fs";

config();

(async () => {
  const typeDefs = gql(
    fs.readFileSync(path.resolve(__dirname, "gql", "schema/index.gql"), {
      encoding: "utf-8",
    }),
  );

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res }),
    formatError(err) {
      return {
        message: err.message,
        locations: err.locations,
        path: err.path,
      };
    },
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/graphql" });
  const PORT: string = process.env.PORT || "";
  app
    .listen(PORT, () => {
      console.log("##########################################################");
      console.log("#####               STARTING GRAPHQL SERVER          #####");
      console.log("##########################################################\n");
      console.log(`Server running → PORT ${PORT} ${apolloServer.graphqlPath}`);
    })
    .on("error", e => {
      console.error(e);
    });
})();
