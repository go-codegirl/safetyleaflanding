import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ROUTER_PROVIDERS} from "@angular/router/src/router_module";
import {Router} from "@angular/router";
import {Headers, Http} from "@angular/http";
import {profileDataServices} from "../service/profileDataService";

@Component({
    selector: 'login-form',
    templateUrl: 'app/loginForm/loginFormComponent.html',
    styleUrls: ['src/app/css/indexPage.css', 'src/app/css/bootstrap.min.css'],
    providers: [ROUTER_PROVIDERS]
})

export class LoginFormComponent {

    loginForm: FormGroup;
    httpClient:Http;

    constructor(private formBuilder: FormBuilder, private router: Router, private http:Http, private profileDataService: profileDataServices) {
        this.httpClient = this.http;
        this.loginForm = formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngOnInit() {

    }

    submitLogin(value: any)
    {
        console.log(value);
        console.log(value);
        var headers = new Headers();
        var email=value.controls.email.value;
        var password=value.controls.password.value;
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');


        this.httpClient.get('http://localhost:8080/login?username='+email+'&password='+password, {
            headers: headers
        })
            .map(res => res.json())
            .subscribe(data => this.profileDataService.addData(data),
                err => console.log(err),
                () => console.log(this.router.navigate(['./profilePage'])));

        console.log(value.controls.email.value);




    }


}
