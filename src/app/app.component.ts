import {Component} from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginFormComponent} from './loginForm/loginFormComponent';


@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives:[LoginFormComponent],
    styleUrls: ['src/app/css/indexPage.css', 'src/app/css/bootstrap.min.css']
})

export class AppComponent {

    // loginForm: FormGroup;
    //
    // constructor(private formBuilder: FormBuilder) {
    //     this.loginForm = formBuilder.group({
    //         email: ['', Validators.required],
    //         password: ['', Validators.required]
    //     })
    // }
    //
    // submitLogin(value: any)
    // {
    //     console.log(value);
    // }



}
