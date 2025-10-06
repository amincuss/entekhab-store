export interface ApiResponse<T> {
  IsSuccess: boolean;
  Message: string;
  Exception: string | null;
  Data: T;
}
