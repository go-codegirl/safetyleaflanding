import {FormControl} from "@angular/forms";
import {ControlGroup} from "@angular/common";


export function loginEmail(control: FormControl): {[key: string]: any} {
    let EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (control.value && !EMAIL_REGEXP.test(control.value)) {
        return {invalidEmail: true};
    }
}
