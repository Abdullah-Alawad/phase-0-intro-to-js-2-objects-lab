// Write your solution in this file!
const employee = {
    name: "Abdullah",
    streetAddress: "none of your business"
}

let key = ["name"];
let value = "Sam";

function updateEmployeeWithKeyAndValue(employee, key, value){
    const obj1 = {...employee};
    obj1[key]  = value;
    return obj1;
}


value = "12 Broadway";
function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value){
    employee.streetAddress = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, name){
    const obj2 = {...employee};
    delete obj2.name;
    return obj2;
}

function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee.name;
    return employee;
}