export type UserType = {
  id: number;
  username: string;
  email: string;
  password: string;
};
export type PayloadType = {
  username: string;
};

export type RoleType = {
  id: number;
  label: string;
};

export type CategoryType = {
  id: number;
  label: string;
};

export type PlanteType = {
  id: number;
  title: string;
  picture: string;
  summary: string;
  watering: number;
  plant_exhibition: number;
  category_id: number;
  user_id: number;
};

export type CommentaryType = {
  id: number;
  com_content: string;
  plante_id: number;
  user_id: number;
};
