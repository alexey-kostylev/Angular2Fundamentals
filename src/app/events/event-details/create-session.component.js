"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CreateSessionComponent = (function () {
    function CreateSessionComponent() {
        this.saveNewSession = new core_1.EventEmitter();
        this.cancelNewSession = new core_1.EventEmitter();
    }
    CreateSessionComponent.prototype.saveSession = function (formValues) {
        var session = {
            id: 0,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        };
        this.saveNewSession.emit(session);
    };
    CreateSessionComponent.prototype.cancel = function () {
        this.cancelNewSession.emit(false);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CreateSessionComponent.prototype, "saveNewSession", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CreateSessionComponent.prototype, "cancelNewSession", void 0);
    CreateSessionComponent = __decorate([
        core_1.Component({
            selector: "create-session",
            templateUrl: "app/events/event-details/create-session.component.html"
        })
    ], CreateSessionComponent);
    return CreateSessionComponent;
}());
exports.CreateSessionComponent = CreateSessionComponent;
//# sourceMappingURL=create-session.component.js.map