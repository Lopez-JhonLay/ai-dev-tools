export type TUserCredentials = {
  email: string;
  password: string;
};

export type TToastType = "success" | "error" | "info" | "warning";

export type TToast = {
  id: number;
  message: string;
  type: TToastType;
};
