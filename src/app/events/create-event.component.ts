import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService, IEvent } from './shared/index';

@Component({
    templateUrl: "./create-event.component.html"
})
export class CreateEventComponent {
    isDirty: boolean = true;

    model: IEvent = <IEvent>{};

    constructor(private router: Router, private eventService: EventService) {
    }

    cancel() {
        this.router.navigateByUrl('/events');
    }

    saveEvent(form: any) {
        if (!this.validateForm(form)) {
            return false;
        }

        var newEvent = this.model;
        this.eventService.saveEvent(newEvent)
            .subscribe(event => this.router.navigateByUrl('/events'));
    }

    private validateForm(form: any) {
        return form.valid;
    }

    private markFormGroupTouched(formGroup: any) {
        (<any>Object).values(formGroup.controls).forEach(control => {
          control.markAsTouched();
    
          if (control.controls) {
            control.controls.forEach(c => this.markFormGroupTouched(c));
          }
        });
      }
}