"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditListInput = void 0;
const type_graphql_1 = require("type-graphql");
const shared_1 = require("../shared");
let EditListInput = class EditListInput extends shared_1.IdMixin(shared_1.TitleMixin(class {
})) {
};
EditListInput = __decorate([
    type_graphql_1.InputType()
], EditListInput);
exports.EditListInput = EditListInput;
//# sourceMappingURL=EditListInput.js.map