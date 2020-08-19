import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private baseURL = "https://ashdemo.azurefd.net"

  constructor(private httpClient : HttpClient) { }

  getMessage(){
    return this.httpClient.get<any>(this.baseURL+'/message');  
  }
}
