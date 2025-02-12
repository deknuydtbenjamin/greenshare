export type UserType = {
  id: number;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
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
};
