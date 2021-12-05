import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PortfolioserviceService {

  constructor(private http: HttpClient) { }


  emailSubscribe(email: string) {
    let formData: FormData = new FormData();
    formData.append('url', "userInsert");
    formData.append('email_id', email);
    this.http.post<any>('https://dialog.massbunk.in', formData).subscribe((data) => {
      console.log("Subscribe Respose ", data);
    });
  }
}
