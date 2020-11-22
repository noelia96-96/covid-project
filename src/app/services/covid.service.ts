import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RespuestaPaises } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http:HttpClient) { }

  
  resultadoPaises(){
    return new Promise<RespuestaPaises>(resolve=>{
      this.http.get<any>('https://api.covid19api.com/summary').subscribe(resp=>{
      resolve(resp);
    });
  });
}
}
