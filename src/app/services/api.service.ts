import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public loginUrl = "https://core.nekta.cloud/api/auth/login";
  public deviceUrl = "https://core.nekta.cloud/api/device/metering_devices";
  private headers!: HttpHeaders;
  private token = localStorage.getItem('access_token');

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      Authorization: "Bearer " + this.token
    });
  }

  saveData(data: {email: string, password: string, personal_data_access: boolean}): Observable<any> {
    return this.http.post(this.loginUrl, data);
  }

  getListDevice(): Observable<any> {
    return this.http.post(this.deviceUrl, 
      {"page":1,"last_page":0,"sort_field":"id","sort":"desc","search_string":null,"device_state":"all","is_archived":false,"paginate":true,"append_fields":["active_polling","attributes","tied_point"],"per_page":10}, 
      {headers: this.headers})
  }
}
