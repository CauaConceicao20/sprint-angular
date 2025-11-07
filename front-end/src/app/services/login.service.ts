import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { User } from "../models/user.model";
import { Observable } from "rxjs";

@Injectable ({
    providedIn: 'root'
})
export class LoginService {

    public url : string = `${environment.api}/login`;

    public constructor(private httpClient: HttpClient) {}

    public login(nome : String, senha : String) : Observable<User> {
        return this.httpClient.post<User>(this.url, { nome, senha });
    }
}