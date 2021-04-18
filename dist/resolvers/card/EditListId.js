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
exports.EditListIdResolver = void 0;
const Card_1 = require("./../../entity/Card");
const type_graphql_1 = require("type-graphql");
const EditListIdInput_1 = require("../../types/inputs/card/EditListIdInput");
let EditListIdResolver = class EditListIdResolver {
    editListId(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, parentId } = input;
            const card = (yield Card_1.CardModel.findByIdAndUpdate({
                _id: id,
            }, {
                list: parentId,
            }, {
                runValidators: true,
                new: true,
            }));
            if (!card) {
                throw new Error('Card was not found');
            }
            return card;
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => Card_1.Card),
    __param(0, type_graphql_1.Arg('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EditListIdInput_1.EditListIdInput]),
    __metadata("design:returntype", Promise)
], EditListIdResolver.prototype, "editListId", null);
EditListIdResolver = __decorate([
    type_graphql_1.Resolver()
], EditListIdResolver);
exports.EditListIdResolver = EditListIdResolver;
//# sourceMappingURL=EditListId.js.map