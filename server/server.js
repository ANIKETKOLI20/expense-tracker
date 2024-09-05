import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mergedResolvers from "./resolvers/index.js";
import mergedTypeDefs from "./typeDefs/index.js";

async function startServer() {
  // Create an instance of ApolloServer
  const server = new ApolloServer({
    typeDefs: mergedTypeDefs,
    resolvers: mergedResolvers,
  });

  try {
    // Start the standalone server
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 }, // Specify the port or let it choose a default one
    });

    console.log(`🚀 Server ready at ${url}`);
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
}

startServer();
