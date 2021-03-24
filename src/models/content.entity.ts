import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('content')
export class Content {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string
    @Column()
    description: string
}