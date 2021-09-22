import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface ICalculoModel {
altura: number;
peso: number;
}

interface IResult {
  imc: number;
  classificacao: string;
  grauObesidade: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'imc-app';

  model: ICalculoModel = {
    altura: 0,
    peso: 0
  }
  result: any;
  constructor(){}
  
  onsubmit(form: NgForm){
   if (this.model.peso <= 0 && this.model.altura <= 0) {
     return;
   }
   const imc = this.calculaIMC(this.model.peso, this.model.altura);
   const classificacao = this.getClassificacao(imc);
   const grauObesidade =  this.getGrauObesidade(imc);

   console.log(imc);
   console.log(classificacao);
   console.log(grauObesidade);

   this.result = {
     imc,
     classificacao,
     grauObesidade
   }
  }
    calculaIMC(peso: number, altura: number){
      return peso / (altura * altura);
    }

    getClassificacao(imc: number){
      if (imc < 18.5) {
        return 'Magreza';
      } else if (imc >= 18.5 && imc <= 24.9) {
        return 'Normal';
      } else if (imc >= 25 && imc <= 29.9){
        return 'Sobrepeso';
      } else if (imc >= 30 && imc <= 39.9) {
        return 'Obesidade';
      } else {
        return 'Obesidade grave';
      }
    }
    
    getGrauObesidade(imc: number) {
      if (imc < 18.5){
        return '0';
      } else if (imc >= 18.5 && imc <= 24.9){
        return '0';
      } else if (imc  >= 25 && imc <= 29.9){
        return 'I';
      } else if (imc >= 30 && imc <= 39.9){
        return 'II';
      } else {
        return 'III';
      }
    }

}
