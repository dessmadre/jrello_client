"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./env");
require("reflect-metadata");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const sesstion_1 = __importDefault(require("../sesstion"));
const schema_1 = __importDefault(require("../schema"));
const port = process.env.PORT || 8081;
const server = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sesstion_1.default();
        const app = express_1.default();
        app.use(express_session_1.default({
            name: 'q_id',
            secret: `${process.env.COOKIE_SECRET}`,
            resave: false,
            saveUninitialized: false,
            cookie: {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 1000 * 60 * 60 * 24 * 7 * 365,
                sameSite: 'strict',
            },
        }));
        const corsOptions = {
            origin: 'http://localhost:3000',
            credentials: true,
        };
        app.use(cors_1.default(corsOptions));
        app.use(express_1.default.json());
        const schema = yield schema_1.default();
        const apolloServer = new apollo_server_express_1.ApolloServer({
            schema,
            context: ({ req, res }) => ({ req, res }),
            introspection: true,
            playground: {
                settings: {
                    'request.credentials': 'include',
                },
            },
        });
        apolloServer.applyMiddleware({ app, cors: false });
        app.listen({ port }, () => {
            console.log(`👽 Greetings from http://localhost:${port}${apolloServer.graphqlPath}`);
        });
    }
    catch (err) {
        console.log(err);
    }
});
server();
//# sourceMappingURL=index.js.map