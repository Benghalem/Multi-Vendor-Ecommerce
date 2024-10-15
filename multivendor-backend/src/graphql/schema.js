import { buildSchema } from "graphql";
import { Query } from "mongoose";

var schema = buildSchema(` 
    type Query {
        hello: String
    }
`);
