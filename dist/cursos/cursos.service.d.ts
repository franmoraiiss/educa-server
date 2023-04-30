import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CursosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCursoDto: CreateCursoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCursoDto: UpdateCursoDto): string;
    remove(id: number): string;
}
