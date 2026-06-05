const person={
    name:"malu",
    place:"madurai",
    age:24,
};
console.log(person.place);
person.nationality="india";
person.age=23;
delete person.place;
console.log(person);
console.log(Object.keys(person).length);
