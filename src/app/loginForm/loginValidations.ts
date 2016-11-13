import {FormControl} from "@angular/forms";
import {ControlGroup} from "@angular/common";


export function loginEmail(control: FormControl): {[key: string]: any} {
    let EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (control.value && !EMAIL_REGEXP.test(control.value)) {
        return {invalidEmail: true};
    }
}

export function loginPassword(control: FormControl): {[key: string]: any} {
    let LOGIN_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}/;

    if (control.value && !LOGIN_REGEXP.test(control.value)) {
        return {invalidLoginpwd: true};
    }
}
