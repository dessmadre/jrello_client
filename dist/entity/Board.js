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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardModel = exports.Board = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const type_graphql_1 = require("type-graphql");
const mongodb_1 = require("mongodb");
const User_1 = require("./User");
const List_1 = require("./List");
let Board = class Board {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", mongodb_1.ObjectId)
], Board.prototype, "_id", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Board.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({
        required: true,
        default: '#3B82F6',
    }),
    __metadata("design:type", String)
], Board.prototype, "bgColor", void 0);
__decorate([
    type_graphql_1.Field(() => [List_1.List]),
    typegoose_1.prop({
        ref: 'List',
        type: () => [List_1.List],
    }),
    __metadata("design:type", Array)
], Board.prototype, "lists", void 0);
__decorate([
    type_graphql_1.Field(() => User_1.User),
    typegoose_1.prop({
        ref: User_1.User,
        required: true,
    }),
    __metadata("design:type", Object)
], Board.prototype, "author", void 0);
Board = __decorate([
    type_graphql_1.ObjectType()
], Board);
exports.Board = Board;
exports.BoardModel = typegoose_1.getModelForClass(Board);
//# sourceMappingURL=Board.js.map