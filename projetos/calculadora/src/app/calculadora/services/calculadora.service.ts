/** 
* Serviço responsável por executar as operações da calculadora
* 
* @author Alexsander Chagas Dambros <alexsanderdambros@gmail.com>
* @since 1.0.0
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /* Define as constantes utilizadas 
     para identificar as operações de cálculo */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * Método responsável por calcularoperações matemáticas.
   * Recebe dois números e a operação, que pode ser: soma, subtração, divisão ou multiplicação.
   * Retorna o resultado da operação.
   * @param num1 number Primeiro número da operação
   * @param num2 number Segundo número da operação
   * @param operacao string Operação a ser executada
   * @returns number Resultado da operação
   */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; // armazena  o resultado da operação

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;  
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
        break;
    }

    return resultado;
  }
}
