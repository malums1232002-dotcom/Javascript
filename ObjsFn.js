//full namee
const person={
    firstName:"malathi",
    LastName:"ravi",
    fullName:function(){
        return this.firstName+ " " +this.LastName;
    }
};
console.log(person.fullName());

//student detail
function student(name,course,rollno){
    this.name=name;
    this.course=course;
    this.rollno=rollno;
}
let student1=new student("Malu", "EEE", 134);
let student2 =new student("Ravi", "ECE", 241);
console.log(student1.course);
console.log(student2.rollno);

//pass or fail 
function students(name, marks){
    this .name=name;
    this.marks=marks;

    this.result=function(){
        return this.marks>=35 ? "pass" : "fail";
    }
}
let Students1=new students("malu",34);
let Students2=new students("ravi", 90);
console.log(Students1.name+" "+Students1.result());
console.log(Students2.name+" "+Students2.result());