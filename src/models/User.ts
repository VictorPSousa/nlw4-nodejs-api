import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid} from "uuid";


@Entity("users")
class User{

    @PrimaryColumn()
    readonly id: string;
    // ID não será definido pelo BD e sim por uma dependência

    @Column()
    name: string;

    // Caso o nome do atributo for igual ao nome da coluna
    // se não for, o nome da coluna deve ser passado como param da @Column
    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}

export { User };