"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllListsResolver = void 0;
const type_graphql_1 = require("type-graphql");
const mongodb_1 = require("mongodb");
const object_id_scalar_1 = require("./../../schema/object-id.scalar");
const List_1 = require("./../../entity/List");
let AllListsResolver = class AllListsResolver {
    allLists(boardId) {
        return __awaiter(this, void 0, void 0, function* () {
            return List_1.ListModel.find({ board: boardId }).populate('board').exec();
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [List_1.List]),
    __param(0, type_graphql_1.Arg('boardId', () => object_id_scalar_1.ObjectIdScalar)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongodb_1.ObjectId]),
    __metadata("design:returntype", Promise)
], AllListsResolver.prototype, "allLists", null);
AllListsResolver = __decorate([
    type_graphql_1.Resolver()
], AllListsResolver);
exports.AllListsResolver = AllListsResolver;
//# sourceMappingURL=AllLists.js.map