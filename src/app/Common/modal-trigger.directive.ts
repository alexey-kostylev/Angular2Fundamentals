import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor() { }

}
