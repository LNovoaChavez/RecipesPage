const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");

@Entity({ name: "credentials" })
class Credential {
  @PrimaryGeneratedColumn()
  id;

  @Column({ nullable: false })
  password;

}

module.exports = { Credential };
