const { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn } = require("typeorm");
const { Credential } = require("./Credential");
const { Recipe } = require("./Recipe");

@Entity({ name: "users" })
class User {
  @PrimaryGeneratedColumn()
  id;

  @Column({ nullable: false })
  name;

  @Column({ nullable: false })
  lastname;

  @Column({ unique: true, nullable: false })
  email;

  @OneToOne(() => Credential)
  @JoinColumn()
  credential;

  @OneToMany(() => Recipe, (recipe) => recipe.user)
  recipes;
}

module.exports = { User };
