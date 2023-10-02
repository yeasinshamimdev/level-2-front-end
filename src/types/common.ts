export interface IMeta {
  limit: number;
  page: number;
  size: number;
}

export type IResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IResponseErrorType = {
  statusCode?: number;
  message?: string;
  errorMessages?: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type UserInfo = {
  exp?: number;
  iat?: number;
  role?: string;
  userId?: string;
};
