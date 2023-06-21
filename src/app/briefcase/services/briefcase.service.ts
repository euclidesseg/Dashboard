import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageDto } from '../interfaces/message.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable()
export class BriefcaseService {

  private baseUrl : string = environment.baseUrl;
  constructor(private httpClient:HttpClient) { }

  addMessage(message :MessageDto):Observable<MessageDto>{
    return this.httpClient.post<MessageDto>(`${this.baseUrl}/message/`, message)
  }
}
