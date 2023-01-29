import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {

  @Input()
  tarefaConcluida: boolean | undefined;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    if (this.tarefaConcluida) {
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }

}
