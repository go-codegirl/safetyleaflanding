import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {
    emailValidator, matchingPasswords,
    // caseTypeValidator, numberSpecialValidator,
    minimumValidator, upperCaseValidator, lowerCaseValidator, numberValidator, specialValidator} from './validators';
import {Headers, URLSearchParams, Http, Response} from "@angular/http";
import {getSelectorOptions} from './selectOptions';
import {getSelectCompanyProfile, getSelectEmployeeNumber,getSelectDescribe} from './selectCompanyProfile';
import {profileDataServices} from "../service/profileDataService";
import {Router} from "@angular/router";
import {registrationDataServices} from "../service/registrationDataService";


@Component({
    selector: 'form-app',
    templateUrl: 'app/form/formComponent.html',
    styleUrls: ['app/css/registrationPage.css']
})

// @Injectable()
// export class FormComponent implements OnInit

export class FormComponent
{

    registerForm: FormGroup;
    httpClient:Http;
    countriesList:any;
    companyList:string[];
    countryCode:string[];
    employeeList:string[];
    describeList:string[];
    inputChange: any;
    showIcon: any;
    hideIcon:any;

    constructor(private formBuilder: FormBuilder, private http:Http, private router: Router, private registrationDataServices: registrationDataServices) {
        this.httpClient = http;


        this.countriesList= getSelectorOptions('country');
        this.companyList=getSelectCompanyProfile('company');
        this.employeeList=getSelectEmployeeNumber('employee');
        this.describeList=getSelectDescribe('describe');

        this.registerForm = formBuilder.group({
                companyName: ['', Validators.required],
                country: ['', Validators.required],
                url: ['', Validators.required],
                companyProfile: ['', Validators.required],
                employees: ['', Validators.required],
                describe: ['', Validators.required],
                workEmail: ['', Validators.compose([Validators.required,emailValidator])],
                hrEmail: ['', emailValidator],
                groupHrEmail: ['',],
                accManager: ['', Validators.required],
                password: ['', Validators.compose([Validators.required, minimumValidator,upperCaseValidator, lowerCaseValidator,
                    numberValidator, specialValidator])],
                repPassword: ['', Validators.required],
                areaCode: ['', ],
                phone: ['', Validators.required]

            }
            , {validator: matchingPasswords('password','repPassword')}
        );
            // {Validator: areEqual})

    }

    ngOnInit() {

    }

        submitRegistration(value: any)
            {
                console.log(value);
                var headers = new Headers();
                var companyName =value.controls.companyName.value;
                var country = value.controls.country.value;
                var url =value.controls.url.value;
                var companyProfile = value.controls.companyProfile.value;
                var employees=value.controls.employees.value;
                var describe=value.controls.describe.value;
                var accManager=value.controls.accManager.value;
                var workEmail=value.controls.workEmail.value;
                var groupHREmail=value.controls.hrEmail.value;
                var password=value.controls.repPassword.value;
                var phone=value.controls.phone.value;
                var areaCode=value.controls.areaCode.value;
                var isGroupHrEmail=(value.controls.groupHrEmail.value == true ? 1 : 0);
                headers.append('Access-Control-Allow-Origin', '*');
                headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

                this.httpClient.post('http://telosws-poplar6.rhcloud.com/signup', {
                    "companyName" : companyName,
                    "companyUrl" : url,
                    "companyProfile" : companyProfile,
                    "numberOfEmployees" : employees,
                    "companyDescription" : describe,
                    "countryName": country,
                    "accountManagerName" : accManager,
                    "isgroupemail" : isGroupHrEmail,
                    "workeMail" : workEmail,
                    "grouphrMail" :groupHREmail,
                    "password" : password,
                    "countryCode" : areaCode,
                    "phoneNumber" : phone
                })
                    .map(res => res.json())
                    .subscribe(data => this.registrationDataServices.addRegisterData(data),
                        err => console.log()),
                        () => console.log(this.getDirection());

                console.log(value.controls.email.value);


            }

    getDirection() {
        if (this.registrationDataServices.registerStatus == "success") {
            //this.responseMessageFromService = this.profileDataService.responseMessage;
            // return this.router.navigate(['./']);
        }
        else {
            //this.responseMessageFromService = this.profileDataService.responseMessage;
            //return this.router.navigate(['./']);
        }
    }


    onChangeByAgree()
    {
        console.log("working now");
    }

    onChange(c: any) {

        for (var CountryValue of this.countriesList) {
            if (CountryValue.name == c) {
                this.countryCode = CountryValue.dial_code;
            }
        }
    }

    infoSign(infoIcon:any){
        if(infoIcon == "infoButton")
        {
            this.showIcon = true;
        }
        console.log(infoIcon);
    }

    infoSignLeave(infoIcon:any) {
        if (infoIcon == "infoButton") {
            this.showIcon = false;
        }
    }

    ShowHideDiv(hideinput: any) {
        this.inputChange = hideinput;




        console.log(hideinput);
    }

}
