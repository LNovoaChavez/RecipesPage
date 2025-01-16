export interface CreateRecipeDto {
  title: string;
  description: string;
  ingredients: string;
  time: string;
  steps: string,
  image?: string;
  userId: number;
  status?: "active" | "inactive"; 
}
