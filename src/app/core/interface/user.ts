export interface User{
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface credentials{
  User:User | any;
  token:string;
}

export interface loginPayload {
  email: string;
  password: string;
}
