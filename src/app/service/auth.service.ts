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
        
        return this.http.post<string[]>(
            'http://82.95.234.55/application/account/getCredentials', 
            {
                username: username,
                password: password,
            }
        )
    }

}