import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListawebService {


  constructor(private http: HttpClient) { }

  public obterTarefa(){
   return this.http.get("http://www.professorisidro.com.br/tarefas.php");
  }
}
