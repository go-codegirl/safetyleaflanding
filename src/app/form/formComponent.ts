import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, Validator} from "@angular/forms";
import { FormControl } from '@angular/forms';
import {Injectable} from '@angular/core';
// import { emailValidator, matchingPasswords } from './validators';



@Component({
    selector: 'form-app',
    templateUrl: 'app/form/formComponent.html',
    styleUrls: ['app/css/registrationPage.css']
})

// @Injectable()
// export class FormComponent implements OnInit

export class FormComponent
{

    // registerForm: FormGroup;
    //
    // constructor(private formBuilder: FormBuilder) {


    //     this.registerForm = formBuilder.group({
    //             companyName: ['', Validators.required],
    //             country: ['', Validators.required],
    //             url: ['', Validators.required],
    //             companyProfile: ['', Validators.required],
    //             employees: ['', Validators.required],
    //             describe: ['', Validators.required],
    //             workEmail: ['', Validators.compose([Validators.required, emailValidator])],
    //             accManager: ['', Validators.required],
    //             password: ['', Validators.required],
    //             repPassword: ['', Validators.required],
    //             phone: ['', Validators.required]
    //         }, {validator: matchingPasswords(this.formBuilder.group('password'))})
    //         // {Validator: areEqual})
    //
    // }

    // ngOnInit() {

        // function validateEmail() {
        //     return (control: FormControl): {[key: string]: any} => {
        //         let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        //
        //         if (control.value && !EMAIL_REGEXP.test(control.value)) {
        //             return {invalidEmail: true};
        //         }
        //     }
        // }


        // function matchingPasswords(control: FormControl): {[key: string]: any} {
        //
        //     // let password = group[passwordKey];
        //     // let confirmPassword = group.value;
        //
        //     if (control.value !== control.root.toString()) {
        //         return {
        //             mismatchedPasswords: true
        //         };
        //     }
        //  }




    //     this.registerForm = this.formBuilder.group({
    //         companyName: ['', Validators.required],
    //         country: ['', Validators.required],
    //         url: ['', Validators.required],
    //         companyProfile: ['', Validators.required],
    //         employees: ['', Validators.required],
    //         describe: ['', Validators.required],
    //         workEmail: ['', Validators.compose([Validators.required, validateEmail])],
    //         accManager: ['', Validators.required],
    //         password: ['', Validators.required],
    //         repPassword: ['', Validators.required],
    //         phone: ['', Validators.required]
    //     }
    //     );
    //
    //
    // }

        // submitRegistration(value: any)
        //     {
        //         console.log(value);
                // var headers = new Headers();
                // var responseData;
                // headers.append('Access-Control-Allow-Origin', '*');
                // headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');


                // this.http.get('http://localhost:8080/echo?name=karthik', {
                //     headers: headers
                // })
                //     .map(res => res.text())
                //     .subscribe(data => responseData = data,
                //         err => console.log(err),
                //         () => console.log('Secret Quote Complete'));
                // console.log(value);



                // let wikiUrl = 'http://en.wikipedia.org/w/api.php';
                // let params = new URLSearchParams();
                // params.set('search', 'angularjs'); // the user's search value
                // params.set('action', 'opensearch');
                // params.set('format', 'json');
                // params.set('callback', 'JSONP_CALLBACK');
                // // TODO: Add error handling
                // return this.jsonp
                //     .get(wikiUrl, { search: params })
                //     .map(response => <string[]> response.json()[1]);


            // }

        //
}
