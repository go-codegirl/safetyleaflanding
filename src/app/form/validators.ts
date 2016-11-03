/**
 * Created by Karthik on 9/16/16.
 */

/*
 Custom validators to use everywhere.
 */

// SINGLE FIELD VALIDATORS
import {FormControl} from "@angular/forms";
import {ControlGroup} from "@angular/common";


export function emailValidator(control: FormControl): {[key: string]: any} {
    let EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

        // /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    if (control.value && !EMAIL_REGEXP.test(control.value)) {
        return {invalidEmail: true};
    }
}

//CONTROL GROUP VALIDATORS
export function matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: ControlGroup): {[key: string]: any} => {
        let password = group.controls[passwordKey];
        let confirmPassword = group.controls[confirmPasswordKey];

        if (password.value !== confirmPassword.value) {
            return {mismatchedPasswords: true};
        }
    }
}

export function minimumValidator(control: FormControl): {[key: string]: any} {

    let MIN_REGEXP =/(.*[a-zA-Z0-9]{8,})/;

     if(control.value && !MIN_REGEXP.test(control.value)) {
        return {minPasswordError: true};
    }

}

export function upperCaseValidator(control: FormControl): {[key: string]: any} {

    let CAP_REGEXP =/(.*[A-Z])/;

    if(control.value && !CAP_REGEXP.test(control.value)) {
        return {capPasswordError: true};
    }

}

export function lowerCaseValidator(control: FormControl): {[key: string]: any} {

    let SMALL_REGEXP =/(.*[a-z])/;

    if(control.value && !SMALL_REGEXP.test(control.value)) {
        return {smallPasswordError: true};
    }

}

export function numberValidator(control: FormControl): {[key: string]: any} {

    let NUM_REGEXP =/(.*[0-9])/;

    if(control.value && !NUM_REGEXP.test(control.value)) {
        return {numPasswordError: true};
    }

}

export function specialValidator(control: FormControl): {[key: string]: any} {

    let SPEC_REGEXP =/(.*[!@#\$%\^&\*])/;

    if(control.value && !SPEC_REGEXP.test(control.value)) {
        return {specPasswordError: true};
    }

}
