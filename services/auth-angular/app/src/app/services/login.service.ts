
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from './toastr.service';
import { environment } from "../../environments/environment";

@Injectable()
export class LoginService {

    constructor(private httpClient: HttpClient, private toastr: ToastrService) { }

    login(data: Object): Promise<any> {
        return new Promise((resolve, reject) => {
            console.log(JSON.stringify(data));
            
            this.httpClient
            .post("http://localhost:5000/login", {data})
            // .get(environment.mongoApiUrl + "/env")
            // .post(environment.mongoApiUrl + "/env", data)
            .subscribe(
              res => {
                  console.log(res);
                   
                resolve();
              },
              error => {
                reject(error);
              }
            );

            resolve();
        })
    }
}