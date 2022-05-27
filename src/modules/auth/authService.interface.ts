import { Observable } from 'rxjs';

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  errorCode: number;
}

export interface Access {
  hasAccess: boolean;
}

export interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  access_level: number;
}

export interface AuthService {
  HasAccess(resource: {
    path: string;
    jwt: string;
    method: string;
  }): Observable<Access>;
  GetUser(token: { jwt: string }): Observable<User>;
}
