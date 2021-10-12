import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    email:string

    @Column()
    password:string

    @AfterInsert()
    insertLog(){
        console.log(`inserted user with id ${this.id}`)
    }

    @AfterUpdate()
    updateLog(){
        console.log(`updated user with id ${this.id}`)
    }

    @AfterRemove()
    removeLog(){
        console.log(`removed user with id ${this.id}`)
    }
}