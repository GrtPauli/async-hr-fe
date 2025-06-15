// src/types/auth.ts
export enum UserType {
  ADMIN = "admin",
  EMPLOYEE = "employee",
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  userType: UserType;
  isActive: boolean;
  lastLogin?: Date;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  firstName: string;
  lastName: string;
  userType?: UserType; // Optional, will default to employee
}
