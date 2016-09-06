import {Component} from '@angular/core';
import {ControlGroup, Control, FormBuilder} from "@angular/common";


@Component({
    selector: 'form-app',
    templateUrl: 'app/form/formComponent.html',
    styleUrls: ['app/css/registrationPage.css']
})

export class FormComponent {
   accountForm: ControlGroup;
    formActive = true;

    constructor(private _formBuilder:FormBuilder){
        this._buildForm();

    }

    private _buildForm(){
          this.accountForm = this._formBuilder.group({
              companyName:this._formBuilder.control(null),
              url:this._formBuilder.control(null)
          });
    }

    onClearForm(){
        this._buildForm();
        this.formActive = false;
        setTimeout(() => {
            this.formActive = true;
        },0);
    }

}
