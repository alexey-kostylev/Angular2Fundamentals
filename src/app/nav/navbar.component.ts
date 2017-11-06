import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events/index';
import { IAppModal } from '../Common/dialog.modal';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
        .nav.navbar-nav {font-size: 12px}
#searchForm {margin-right: 100px}
@media (max-width: 1200px) {#searchForm {display: none}}
li > a.active {color: #F97924; }
`]
})

export class NavBarComponent {
    searchTerm = '';
    foundSessions: ISession[] = [];
    constructor(private authService: AuthService, private eventService: EventService) {
    }

    onSearch() {

    }

    searchSessions(searchTerm: string, dlg: IAppModal) {
        this.eventService.searchSessions(searchTerm)
            .subscribe(x => {
                this.foundSessions = x;
                console.log(this.foundSessions);
                dlg.show();
            }
            );
    }
}
