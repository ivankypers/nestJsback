import {DatasourceService} from "../datasourse/datasourse.service";
import {Author} from "./author.entity";
import {HttpStatus, Injectable} from "@nestjs/common";

@Injectable()
export class AuthorsService {
    constructor(private readonly datasourceService: DatasourceService) {}

    create(author: Author) {
        this.datasourceService.getAuthors().push(author);

        return author;
    }

    findOne(id: number) {
        return this.datasourceService
            .getAuthors()
            .find((author) => author.id === id);
    }

    findAll(): Author[] {
        return this.datasourceService.getAuthors();
    }


    update(id: number, updatedAuthor: Author) {
        const index = this.datasourceService
            .getAuthors()
            .findIndex((author) => author.id === id);
        this.datasourceService.getAuthors()[index] = updatedAuthor;
        return this.datasourceService.getAuthors()[index];
}


    remove(id: number) {
        const index = this.datasourceService
            .getAuthors()
            .findIndex((author) => author.id === id);
        this.datasourceService.getAuthors().splice(index,1);
        return HttpStatus.OK;
    }

    findByFullname(fullname: string): Author {
        return this.datasourceService
            .getAuthors()
            .find((author) => author.fullname === fullname);
    }

    findByPosition(position: string): Author[] {
        return this.datasourceService
            .getAuthors()
            .filter((author) => author.position === position);
    }

    findByGrade(grade: string): Author[] {
        return this.datasourceService
            .getAuthors()
            .filter((author) => author.grade === grade);
    }

    updateByFullname(fullname: string, updatedAuthor: Author) {
        const index = this.datasourceService
            .getAuthors()
            .findIndex((author) => author.fullname === fullname);
        if (index !== -1) {
            this.datasourceService.getAuthors();
            return this.datasourceService.getAuthors()[index] = updatedAuthor;
        } else {
            throw new Error("Author not found");
        }
    }

}


