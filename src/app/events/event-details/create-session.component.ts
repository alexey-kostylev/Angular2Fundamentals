import { Component, Output, EventEmitter } from "@angular/core";
import { ISession } from "../shared/index";

@Component({
    selector: "create-session",
    templateUrl: "./create-session.component.html"
})
export class CreateSessionComponent {
    @Output() saveNewSession = new EventEmitter<ISession>();
    @Output() cancelNewSession = new EventEmitter();
    name: string;
    saveSession(formValues)
    {
        let session = {
            id: 0,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        } as ISession;

        this.saveNewSession.emit(session);
    }

    cancel()
    {
        this.cancelNewSession.emit(false);
    }
}