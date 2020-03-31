import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface AuthResponseData {
    token: String;
}


@Injectable({ providedIn: 'root'})
export class AuthService {

    constructor(private http: HttpClient){

    }

    login(username: string, password: string){
        
        return this.http.post(
            'http://localhost:8080/application/account/getCredentials', 
            {
                username: username,
                password: password,
            },
            {
                responseType: 'text'
            }
        )
    }

    






}