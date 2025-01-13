export interface CreateRecipeDto {
  title: string;
  description: string;
  ingredients: string;
  image?: string;
  userId: number;
  status?: "active" | "inactive"; // Añade esta propiedad si es opcional en el DTO
}
