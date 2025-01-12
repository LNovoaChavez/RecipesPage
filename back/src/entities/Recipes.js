const { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } = require("typeorm");
const { User } = require("./User");

@Entity({ name: "recipes" })
class Recipe {
  @PrimaryGeneratedColumn()
  id;

  @Column({ nullable: false })
  titulo;

  @Column({ nullable: false, type: "text" })
  descripcion;

  @Column({ nullable: false, type: "text" })
  ingredientes;

  @Column({ type: "varchar", nullable: true })
  imagen;

  @ManyToOne(() => User, (user) => user.recipes)
  @JoinColumn({ name: "user_id" })
  user;
}

module.exports = { Recipe };
