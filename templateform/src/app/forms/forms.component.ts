import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import { NgForm } from '@angular/forms';
import { FormPosterService } from '../services/form-poster.service';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html'
})

export class FormsComponent {
    languages = ['AngularJs', 'NodeJs', 'ReactJs'];
    model = new Employee('John', 'Andrew', 'a@a.com', '12345', 'male', true, 'AngularJs');
    hasCodeLangError: Boolean = false;
    disableSubmit: Boolean = false;

    constructor(private _formPoster: FormPosterService) {

    }

    firstToUpper(value: string): void {
        if (value.length > 0) {
            this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            this.model.firstName = value;
        }
    }

    validateCodelang(event): void {
        if (this.model.codelang === 'default') {
            this.hasCodeLangError = true;
            this.disableSubmit = true;
        } else {
            this.hasCodeLangError = false;
            this.disableSubmit = false;
        }

    }

    submitForm(form: NgForm) {
        // console.log(form.value);
        this._formPoster.postEmployee(form.value)
            .subscribe(data => console.log('success', data));
    }
}



/*
ng-pristine   ng-valid     ng-untouched
ng-dirty      ng-invalid   ng-touched
*/

