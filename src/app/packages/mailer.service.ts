import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailerService {

  constructor(private http: HttpClient) {}

   sendMail(data: any) {
     this.http.post("./sendmail", data).subscribe(
       res => {
         console.log(res)
       },
       err => {
         console.log(err)
       }
     )
   }
}
