import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { IUser } from './user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr';

@Component({
    templateUrl: './profile.component.html',
    styles: [`
         em {float: right; color: #e05c65; padding-left: 10px;}
        .error input {background-color: #e3c3c5;}
        .error ::-webkit-input-placeholder {color: #999;}
    `]
})
export class ProfileComponent implements OnInit {

    profileForm: FormGroup;

    constructor(
        private router: Router,
        private authService: AuthService,
        private tostr: ToastsManager) {
    }

    cancel() {
        this.navigateToBase();
    }

    private navigateToBase() {
        this.router.navigate(['/events']);
    }

    updateProfile(formValues) {
        if (!this.profileForm.valid) {
            return;
        }

        this.authService.updateCurrentUser(<IUser>({
            firstName: formValues.firstName,
            lastName: formValues.lastName
        }));
        this.tostr.success('Profile saved');
    }

    ngOnInit() {
        const currentUser = this.authService.currentUser;

        const firstName = new FormControl(currentUser.firstName, Validators.required);
        const lastName = new FormControl(currentUser.lastName, Validators.required);

        this.profileForm = new FormGroup(
            {
                firstName: firstName,
                lastName: lastName
            }
        );
    }
}