import { Component, OnInit } from '@angular/core';
import { tarefa } from '../model/tarefa';
import { ListawebService } from '../service/listaweb.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})

export class SobreComponent implements OnInit {

  minhaTarefa: tarefa[];


  constructor(private servicoLista : ListawebService) {

  } 
   
  ngOnInit() {
    this.obterTodasAsTarefa();
    console.log(this.minhaTarefa)
  }

  public obterTodasAsTarefa(){
    this.servicoLista.obterTarefa().subscribe((resultado: tarefa[])=>{this.minhaTarefa = resultado});
  }

}
