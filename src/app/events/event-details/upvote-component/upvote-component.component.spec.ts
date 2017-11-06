import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpvoteComponentComponent } from './upvote-component.component';

describe('UpvoteComponentComponent', () => {
  let component: UpvoteComponentComponent;
  let fixture: ComponentFixture<UpvoteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpvoteComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpvoteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
