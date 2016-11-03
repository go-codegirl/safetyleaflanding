/**
 * Created by Karthik on 10/16/16.
 */
export class profileDataServices
{

    responseStatus: string = null;
    responseMessage: string = null;

    getData(){
        return this.profileData;
    }

    addData(profileItem:any){
        if(profileItem.status=="success")
        {
            this.profileData = profileItem.responseObject;
            this.responseStatus = profileItem.status;
            this.responseMessage = null;
        }
        else
        {
            this.responseStatus = profileItem.status;
            this.responseMessage = profileItem.msg;
        }

    }

    profileData = {};
}
