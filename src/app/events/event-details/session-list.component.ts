import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { ISession, FilterTypes, VoterService } from '../shared/index';
import { AuthService } from '../../user/user.index';


@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges, OnInit {

    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;

    visibleSessions: ISession[] = [];

    constructor(private authService: AuthService, private voterService: VoterService) {

    }

    static sortByNameAsc(s1: ISession, s2: ISession) {
        if (s1.name > s2.name) {
            return 1;
        }
        if (s1.name === s2.name) {
            return 0;
        }
        if (s1.name < s2.name) {
            return -1;
        }
    }

    static sortByVotesDesc(s1: ISession, s2: ISession) {
        return s2.voters.length - s1.voters.length;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!this.sessions) {
            return;
        }

        if (changes['filterBy']) {
            const value = changes['filterBy'].currentValue as string;
            this.filterSessions(value);
        }

        if (changes['sortBy']) {
            const value = changes['sortBy'].currentValue;
            this.sortSessions(value);
        }

        const sessionChange = changes['sessions'];
        if (sessionChange && sessionChange.currentValue !== sessionChange.previousValue) {
            this.visibleSessions = sessionChange.currentValue;
        }
    }

    ngOnInit() {
        this.visibleSessions = this.sessions;
    }

    sortSessions(value: string) {
        switch (value) {
            case 'name':
                this.visibleSessions.sort(SessionListComponent.sortByNameAsc);
                break;
            default:
                this.visibleSessions.sort(SessionListComponent.sortByVotesDesc);
                break;
        }
    }

    filterSessions(filter: string) {
        switch (filter) {
            case FilterTypes.all:
                this.visibleSessions = this.sessions.slice(0);
                break;
            case FilterTypes.beginner:
                this.visibleSessions = this.sessions.filter(x => x.level === FilterTypes.beginner);
                break;
            case FilterTypes.intermediate:
                this.visibleSessions = this.sessions.filter(x => x.level === FilterTypes.intermediate);
                break;
            case FilterTypes.advanced:
                this.visibleSessions = this.sessions.filter(x => x.level === FilterTypes.advanced);
                break;
            default:
                throw new Error('invalid filter option: ' + filter);
        }
    }
    toggleVote(session: ISession) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(session, this.authService.currentUser.userName);
        } else {
            this.voterService.addVoter(session, this.authService.currentUser.userName);
        }
        if (this.sortBy === 'votes') {
            this.visibleSessions.sort(SessionListComponent.sortByNameAsc);
        }
    }

    userHasVoted(session: ISession) {
        return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
    }
}
