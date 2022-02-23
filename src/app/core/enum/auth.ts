export enum AuthActions {
  LOGIN = '[AUTH] LOGIN',
  LOGOUT = '[AUTH] LOGOUT',
  INITIALISATION = '[AUTH] INITIALISATION',
}

export enum RequestType{
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}


export enum endPoint {
  LOGIN = '/auth/login',
  LOGOUT = '/auth/logout',
}

export enum server{
  URL = 'https://admin.famillyfunds.com/api/',
}
