import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
export declare class CursosController {
    private readonly cursosService;
    constructor(cursosService: CursosService);
    create(createCursoDto: CreateCursoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCursoDto: UpdateCursoDto): string;
    remove(id: string): string;
}
