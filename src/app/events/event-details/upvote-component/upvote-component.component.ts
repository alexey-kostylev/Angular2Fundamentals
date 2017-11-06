import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote-component.component.html',
  styleUrls: ['./upvote-component.component.css']
})
export class UpvoteComponentComponent implements OnInit {

  @Output() vote = new EventEmitter();
  @Input() count: number;
  @Input() voted: boolean;
  constructor() { }

  ngOnInit() {
  }

  onclick() {
    this.vote.emit();
  }
}
