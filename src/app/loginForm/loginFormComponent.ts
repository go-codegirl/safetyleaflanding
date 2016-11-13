import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ROUTER_PROVIDERS} from "@angular/router/src/router_module";
import {Router} from "@angular/router";
import {Headers, Http} from "@angular/http";
import {profileDataServices} from "../service/profileDataService";
import {loginEmail, loginPassword} from './loginValidations';




@Component({
    selector: 'login-form',
    templateUrl: 'app/loginForm/loginFormComponent.html',
    styleUrls: ['src/app/css/indexPage.css', 'src/app/css/bootstrap.min.css'],
    providers: [ROUTER_PROVIDERS]
})

export class LoginFormComponent {

    loginForm: FormGroup;
    httpClient:Http;
    responseMessageFromService:string = null;


    constructor(private formBuilder: FormBuilder, private router: Router, private http:Http, private profileDataService: profileDataServices) {
        this.httpClient = this.http;
        this.loginForm = formBuilder.group({
            email: ['', Validators.compose([Validators.required,loginEmail])],
            password: ['', Validators.compose([Validators.required,loginPassword])]
        });
    }

    ngOnInit() {

    }

    submitLogin(value: any) {
        console.log(value);
        console.log(value);
        var headers = new Headers();
        var email = value.controls.email.value;
        var password = value.controls.password.value;
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');


        this.httpClient.post('http://telosws-poplar6.rhcloud.com/landingLogin', {
            "email": email,
            "password": password
        })
            .map(res => res.json())
            .subscribe(data => this.profileDataService.addData(data),
                err => console.log(this.router.navigate(['./'])),
                () => console.log(this.getDirection()));

        console.log(value.controls.email.value);


    }

    getDirection() {
        if (this.profileDataService.responseStatus == "success") {
            this.responseMessageFromService = this.profileDataService.responseMessage;
            return this.router.navigate(['./profilePage']);
        }
        else {
            this.responseMessageFromService = this.profileDataService.responseMessage;
            return this.router.navigate(['./']);
        }
    }

}
