/**
 * Created by Karthik on 9/16/16.
 */

/*
 Custom validators to use everywhere.
 */

// SINGLE FIELD VALIDATORS
import {FormControl,FormGroup,FormBuilder} from "@angular/forms";
import {ControlGroup} from "@angular/common";


export function emailValidator(control: FormControl): {[key: string]: any} {
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

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

// password requirements

// export function passwordValidator(control: FormControl): {[key: string]: any} {
//
//     // let PASSWORD_REGEXP =/^(.{0,7}|[^0-9]*|[^A-Z]*|[a-zA-Z0-9]*)$/;
//     let PASSWORD_REGEXP =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
//
//     if (control.value && !PASSWORD_REGEXP.test(control.value)) {
//         return {invalidPassword: true};
//     }
// }

export function passwordValidator(control: FormControl): {[key: string]: any} {

    // let PASSWORD_REGEXP =/^(.{0,7}|[^0-9]*|[^A-Z]*|[a-zA-Z0-9]*)$/;
    let PASSWORD_REGEXP =/^(?=.*[A-Z])/;

    if (control.value && !PASSWORD_REGEXP.test(control.value)) {
        return {invalidPassword: true};
    }
}

export function smallValidator(control: FormControl): {[key: string]: any} {

    // let PASSWORD_REGEXP =/^(.{0,7}|[^0-9]*|[^A-Z]*|[a-zA-Z0-9]*)$/;
    let SMALL_REGEXP =/(.*[a-z])/;
    let CAP_REGEXP =/(.*[A-Z])/;

    if(control.value && CAP_REGEXP.test(control.value) && SMALL_REGEXP.test(control.value)) {
        return  {capPasswordError: true,smallPasswordError: true};
    }
    else if(control.value && CAP_REGEXP.test(control.value)) {
        return {capPasswordError: true};
    }
    else if(control.value && SMALL_REGEXP.test(control.value)) {
        return {smallPasswordError: true};
    }
}


// export function smallValidator(control: FormControl): {[key: string]: any} {
//
//     // let PASSWORD_REGEXP =/^(.{0,7}|[^0-9]*|[^A-Z]*|[a-zA-Z0-9]*)$/;
//     let SMALL_REGEXP =/^(?=.*[0-9])/;
//
//     if (control.value && !SMALL_REGEXP.test(control.value)) {
//         return {smallPassword: true};
//     }
// }
//
// export function smallValidator(control: FormControl): {[key: string]: any} {
//
//     // let PASSWORD_REGEXP =/^(.{0,7}|[^0-9]*|[^A-Z]*|[a-zA-Z0-9]*)$/;
//     let SMALL_REGEXP =/^(?=.*[!@#\$%\^&\*])/;
//
//     if (control.value && !SMALL_REGEXP.test(control.value)) {
//         return {smallPassword: true};
//     }
// }
//
// export function smallValidator(control: FormControl): {[key: string]: any} {
//
//     // let PASSWORD_REGEXP =/^(.{0,7}|[^0-9]*|[^A-Z]*|[a-zA-Z0-9]*)$/;
//     let SMALL_REGEXP =/^(?=.{8,})/;
//
//     if (control.value && !SMALL_REGEXP.test(control.value)) {
//         return {smallPassword: true};
//     }
// }
