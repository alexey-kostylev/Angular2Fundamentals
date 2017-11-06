import { Component, OnInit } from '@angular/core';
import { EventService, IEvent, ISession } from '../shared/index';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding: 0 20px 0 20px;}
        .event-image {height: 100px;}
        a {cursor: pointer}
`]
})

export class EventDetailsComponent implements OnInit {
    event: IEvent;
    filterBy = 'all';
    sortBy = 'name';
    addMode: boolean;

    get imgUrl(): string {
        return this.event ? this.event.imageUrl : '#';
    }

    constructor(private eventService: EventService, private route: ActivatedRoute) {
        this.addMode = false;
    }

    ngOnInit() {
        this.route.data
            .subscribe(response => {
                this.event = response['event'] as IEvent;
                this.addMode = false;
            });

        // this.event = this.route.snapshot.data['event'];
        // this.addMode = false;
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        console.log('session saved: ' + session);
        this.event.sessions.push(session);
        this.addMode = false;
    }

    cancelNewSession() {
        this.addMode = false;
    }
}