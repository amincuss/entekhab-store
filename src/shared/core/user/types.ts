import { ApiResponse } from "@/shared/types/api";

export interface UserData {
  ServicerId: string;
  Name: string;
  Family: string;
  AgentCode: string;
  ServicerType: number;
  MobilePhone: string;
  BirthDate: string;
  NationalCode: string;
  FireBaseToken: string;
  Role: number;
  Detailedcode: string;
  ActiveInApplication: boolean;
  ApplicationLanguageValue: number;
  ApplicationLanguageTitle: string;
  Topics: number[];
}

export type UserResponse = ApiResponse<UserData>;
