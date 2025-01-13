export interface CreateRecipeDto {
  title: string;
  description: string;
  ingredients: string;
  image?: string;
  userId: string;
  status?: "active" | "inactive"; // Añade esta propiedad si es opcional en el DTO
}
