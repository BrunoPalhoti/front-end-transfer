import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transefer } from '../models/transfer.model';

@Injectable({
  providedIn: 'root'
})

export class TransfereciaService {

  private url = `${environment.API}`;

  constructor(private httpClient: HttpClient) {}

   getAll(): Observable<Transefer[]>{
    return this.httpClient.get<Transefer[]>(this.url);
  }

  save(account: any){
    return this.httpClient.post<Transefer>(this.url, account);
  }
}
