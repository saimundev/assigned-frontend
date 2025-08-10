export interface Response<T> {
  data: T[];
  message: string;
  success: boolean;
  statusCode: number;
}

interface ExtraData {
  totalPage: number;
  currentPage: number;
  perPage: number;
  total: number;
}

export interface ResponseWithPagination<T> {
  data: T[];
  message: string;
  success: boolean;
  statusCode: number;
  extraData: ExtraData;
}
