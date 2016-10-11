export function getSelectCompanyProfile(selectKey:string){

    var comapnyProfileList:string[];
    comapnyProfileList=["Select Company Profile","Insurance Agency", "Insurance Broker Company",
        "Insurance Company", "Corporate",
        "Other"];
    if(selectKey == 'company')
    {
        return comapnyProfileList;
    }
}

export function getSelectEmployeeNumber(selectKey:string){

    var employeeNumberList:string[];
    employeeNumberList=["Select Number of Employees","1 - 10", "11 - 50",
        "51 - 100", "101 - 500",
        "500 & More"];
    if(selectKey == 'employee')
    {
        return employeeNumberList;
    }
}

export function getSelectDescribe(selectKey:string){

    var describeYourselfList:string[];
    describeYourselfList=["Select from the List", "I am CEO of the Company", "I am HR Head of the Company",
        "I take care of Employee Insurance Requirement", "Other"];
    if(selectKey == 'describe')
    {
        return describeYourselfList;
    }
}


