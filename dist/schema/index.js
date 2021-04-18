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
const type_graphql_1 = require("type-graphql");
const mongodb_1 = require("mongodb");
const path_1 = __importDefault(require("path"));
const typegoose_1 = require("../middleware/typegoose");
const object_id_scalar_1 = require("./object-id.scalar");
const user_1 = require("../resolvers/user");
const board_1 = require("../resolvers/board");
const card_1 = require("../resolvers/card");
const list_1 = require("../resolvers/list");
function createSchema() {
    return __awaiter(this, void 0, void 0, function* () {
        const schema = yield type_graphql_1.buildSchema({
            resolvers: [
                user_1.CurrentUserResolver,
                user_1.LoginResolver,
                user_1.LogoutResolver,
                user_1.RegisterResolver,
                board_1.AddBoardResolver,
                board_1.AllBoardsResolver,
                board_1.DeleteBoardResolver,
                board_1.EditBoardResolver,
                board_1.SingleBoardResolver,
                list_1.AddListResolver,
                list_1.AllListsResolver,
                list_1.DeleteListResolver,
                list_1.EditListResolver,
                card_1.AddCardResolver,
                card_1.AllCardsResolver,
                card_1.DeleteCardResolver,
                card_1.EditCardResolver,
                card_1.EditListIdResolver,
            ],
            emitSchemaFile: path_1.default.resolve(__dirname, 'schema.gql'),
            globalMiddlewares: [typegoose_1.TypegooseMiddleware],
            scalarsMap: [{ type: mongodb_1.ObjectId, scalar: object_id_scalar_1.ObjectIdScalar }],
            validate: false,
        });
        return schema;
    });
}
exports.default = createSchema;
//# sourceMappingURL=index.js.map