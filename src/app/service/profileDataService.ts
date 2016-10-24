/**
 * Created by Karthik on 10/16/16.
 */
export class profileDataServices
{
    getData(){
        return this.profileData;
    }

    addData(profileItem:any){
        this.profileData = profileItem;

    }

    profileData = {};
}
