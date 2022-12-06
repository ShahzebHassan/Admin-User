import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  //user apiis
  getUserInfo() {
    return this.http.get<any>("http://localhost:8000/userData/",);
  }
  postUserInfo(data: any) {
    return this.http.post<any>("http://localhost:8000/userData/", data);
  }
  putUserInfo(data: any, _id: number) {
    return this.http.put<any>("http://localhost:8000/userData/" + _id, data);
  }
  deleteUserInfo(_id: number) {
    return this.http.delete<any>("http://localhost:8000/userData/" + _id,);
  }
  login() {
    return this.http.get<any>("http://localhost:8000/userData/",);
  }

}