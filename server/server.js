import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv"

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

import mergedResolvers from "./resolvers/index.js";
import mergedTypeDefs from "./typeDefs/index.js";
import { connectDB } from "./db/connectDB.js"; 

dotenv.config();

const app = express();
const httpServer = http.createServer(app);

async function startServer() {
  // Create an instance of ApolloServer
  const server = new ApolloServer({
    typeDefs: mergedTypeDefs,
    resolvers: mergedResolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(
    "/",
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    }),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req, res }) => ({ token: req.headers.token }),
    })
  );

  const PORT = 4000;

  try {
    // Connect to the database
    await connectDB(); 

    // Start the HTTP server
    await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
    
    console.log(`🚀 Server ready at http://localhost:${PORT}/`);
  } catch (error) {
    console.error("Failed to start the server:", error);

  }
}

startServer();
