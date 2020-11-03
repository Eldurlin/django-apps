import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly api_url = "http://127.0.0.1:8000";
  readonly photo_url = "http://127.0.0.1:8000/media/";

  constructor(private http:HttpClient) { }

  get_department_list():Observable<any[]> {
    return this.http.get<any[]>(this.api_url + '/department/');
  }

  add_department(value:any) {
    return this.http.post(this.api_url + '/department/', value);
  }

  update_department(value:any) {
    return this.http.put(this.api_url + '/department/', value);
  }

  delete_department(value:any) {
    return this.http.delete(this.api_url + '/department/' + value);
  }

  get_employee_list():Observable<any[]> {
    return this.http.get<any[]>(this.api_url + '/employee/');
  }

  add_employee(value:any) {
    return this.http.post(this.api_url + '/employee/', value);
  }

  update_employee(value:any) {
    return this.http.put(this.api_url + '/employee/', value);
  }

  delete_employee(value:any) {
    return this.http.delete(this.api_url + '/employee/' + value);
  }

  upload_photo(value:any) {
    return this.http.post(this.api_url + '/save_file/', value);
  }

  get_all_departments_names():Observable<any[]> {
    return this.http.get<any[]>(this.api_url + '/department/');
  }
}
