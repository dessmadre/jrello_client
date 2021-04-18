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
exports.EditCardResolver = void 0;
const type_graphql_1 = require("type-graphql");
const EditCardInput_1 = require("./../../types/inputs/card/EditCardInput");
const Card_1 = require("./../../entity/Card");
let EditCardResolver = class EditCardResolver {
    editCard(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, title } = input;
            const card = yield Card_1.CardModel.findOneAndUpdate({
                _id: id,
            }, {
                title,
            }, {
                runValidators: true,
                new: true,
            });
            if (!card) {
                throw new Error('Card not found');
            }
            return card;
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => Card_1.Card),
    __param(0, type_graphql_1.Arg('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EditCardInput_1.EditCardInput]),
    __metadata("design:returntype", Promise)
], EditCardResolver.prototype, "editCard", null);
EditCardResolver = __decorate([
    type_graphql_1.Resolver()
], EditCardResolver);
exports.EditCardResolver = EditCardResolver;
//# sourceMappingURL=EditCard.js.map