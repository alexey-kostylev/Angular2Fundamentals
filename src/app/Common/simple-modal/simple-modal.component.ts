import { Component, OnInit, Input } from '@angular/core';
import { IAppModal } from '../dialog.modal';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit, IAppModal {

  @Input() title: string;

  public visible = false;
  private visibleAnimate = false;

  constructor() { }

  ngOnInit() {
  }

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    // const target = (<HTMLElement>event.target);
    // if (target.classList.contains('modal')) {
    //   this.hide();
    // }

    this.hide();
  }
}

