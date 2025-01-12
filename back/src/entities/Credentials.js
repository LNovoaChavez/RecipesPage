const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Credential", // Nombre de la entidad
  tableName: "credentials", // Nombre de la tabla en la base de datos
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: "increment", // Genera el ID automáticamente
    },
    password: {
      type: "varchar", // Tipo de dato de la columna
      nullable: false, // La columna no puede ser nula
    },
  },
});
