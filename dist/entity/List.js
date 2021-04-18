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
exports.ListModel = exports.List = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const type_graphql_1 = require("type-graphql");
const mongodb_1 = require("mongodb");
const Board_1 = require("./Board");
const Card_1 = require("./Card");
let List = class List {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", mongodb_1.ObjectId)
], List.prototype, "_id", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], List.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(() => Board_1.Board),
    typegoose_1.prop({ ref: 'Board' }),
    __metadata("design:type", Object)
], List.prototype, "board", void 0);
__decorate([
    type_graphql_1.Field(() => [Card_1.Card]),
    typegoose_1.prop({
        ref: 'Card',
        type: () => [Card_1.Card],
    }),
    __metadata("design:type", Array)
], List.prototype, "cards", void 0);
List = __decorate([
    type_graphql_1.ObjectType()
], List);
exports.List = List;
exports.ListModel = typegoose_1.getModelForClass(List);
//# sourceMappingURL=List.js.map