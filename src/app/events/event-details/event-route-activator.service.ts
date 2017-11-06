import { ActivatedRouteSnapshot, CanDeactivate, CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { EventService } from "../shared/event.service";
import { Router } from "@angular/router";

@Injectable()
export class EventRouteActivator implements CanActivate{
    constructor(private eventService: EventService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
        var requestedId = +route.params["id"];
        var eventExists = !!this.eventService.getEvent(requestedId);

        if (!eventExists)
            this.router.navigate(["/404"]);

        return true;
    }


}
