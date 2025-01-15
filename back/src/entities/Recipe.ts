import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from "typeorm";
import { User } from "./User";
  
  @Entity("recipes")
  export class Recipe {
    @PrimaryGeneratedColumn()
    id: string;
  
    @Column()
    title: string;
  
    @Column()
    description: string;
  
    @Column()
    ingredients: string;
  
    @Column()
    image?: string;
  
    @Column({
      type: "enum",
      enum: ["active", "inactive"],
      default: "active",
    })
    status: "active" | "inactive";
  
    @ManyToOne(() => User, (user) => user.recipes)
    @JoinColumn({ name: "userId" })
    user: User;
  }
  