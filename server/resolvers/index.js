import { mergeResolvers } from "@graphql-tools/merge";

import userResolver from "./user.resolvers.js";
import transcationResolver from "./transaction.resolvers.js";

const mergedResolvers = mergeResolvers([userResolver, transcationResolver]);

export default mergedResolvers;