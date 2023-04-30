"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursosModule = void 0;
const common_1 = require("@nestjs/common");
const cursos_service_1 = require("./cursos.service");
const cursos_controller_1 = require("./cursos.controller");
const prisma_module_1 = require("../prisma/prisma.module");
let CursosModule = class CursosModule {
};
CursosModule = __decorate([
    (0, common_1.Module)({
        controllers: [cursos_controller_1.CursosController],
        providers: [cursos_service_1.CursosService],
        imports: [prisma_module_1.PrismaModule],
    })
], CursosModule);
exports.CursosModule = CursosModule;
//# sourceMappingURL=cursos.module.js.map