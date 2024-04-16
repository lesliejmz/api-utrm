import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
export class FoodEntity {}

@Entity()
export class Food{
    @PrimaryGeneratedColumn()
    id?:number;
    @Column()
    name:string;
    @Column()
    description:string;
    @Column()
    image:string;
    @Column()
    category:string;
    @Column()
    price:number;
}

