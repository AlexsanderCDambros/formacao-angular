import { ElementRef } from '@angular/core';
import { TarefaConcluidaDirective } from './tarefa-concluida.directive';

describe('TarefaConcluidaDirective', () => {
  it('should create an instance', () => {
    const directive = new TarefaConcluidaDirective({} as ElementRef);
    expect(directive).toBeTruthy();
  });
});
