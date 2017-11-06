import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import * as $ from 'jquery';

import { AppComponent } from './app.component';

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolver,
    SessionListComponent,
    CreateSessionComponent,
    EventResolver,
    VoterService
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
// import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { DurationPipe } from './events/shared/duration.pipe';
import { JQ_TOKEN } from './Common/jQuery.service';
import { SimpleModalComponent } from './Common/simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './Common/modal-trigger.directive';
import { UpvoteComponentComponent } from './events/event-details/upvote-component/upvote-component.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        ToastModule.forRoot()
    ],
    declarations: [
        AppComponent,
        NavBarComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent,
        SessionListComponent,
        CreateSessionComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective,
        UpvoteComponentComponent
    ],
    providers: [
        EventService,
        EventListResolver,
        EventResolver,
        AuthService
        // ,
        // {
        //     provide: JQ_TOKEN, useValue: jQuery
        // }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
