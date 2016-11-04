import {elementAt} from "rxjs/operator/elementAt";
/**
 * Created by Karthik on 11/03/16.
 */


export class registrationDataServices {

    registerStatus: string = null;
    registerMessage: string = null;

    getRegisterData()
    {
        return this.registerData;
    }
    addRegisterData(registerForm: any) {
        if(registerForm.status=="success")
        {
            this.registerData = registerForm.responseObject;
            this.registerStatus = registerForm.status;

        }
        else
        {
            this.registerStatus = registerForm.status;
            this.registerMessage = registerForm.msg;
        }
    }

    registerData = {};
}
