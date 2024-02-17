const myData = "Hello";

const myObj = {
    name: "David",
    lastName: "Muster",
    age: 4
}

const myNewObject = {...myObj, haircolor: "blue"}

const myChangedObject = {...myNewObject, name: "Florian"}

const {haircolor, ...myPropDeletedObject} = myChangedObject;



