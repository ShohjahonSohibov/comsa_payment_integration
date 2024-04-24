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
exports.DateSchema = void 0;
const mongoose_1 = require("@nestjs/mongoose");
class DateSchema {
}
exports.DateSchema = DateSchema;
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], DateSchema.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ name: 'created_at', default: new Date(), required: true }),
    __metadata("design:type", Date)
], DateSchema.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ name: 'updated_at', default: null }),
    __metadata("design:type", Date)
], DateSchema.prototype, "updatedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ name: 'deleted_at', default: null }),
    __metadata("design:type", Date)
], DateSchema.prototype, "deletedAt", void 0);
//# sourceMappingURL=date.schema.js.map