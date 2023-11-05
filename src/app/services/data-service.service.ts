import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  apiUrl = 'https://1.api.fy23ey05.careers.ifelsecloud.com/'
  constructor(private httpClient: HttpClient) { }

  getDashboardData() {
    return this.httpClient
      .get(this.apiUrl)
      .pipe(map((response: any) => response));
  }
}
