function grades(marks){
    if (marks>80 && marks<100){
        return "GRADE A";
    }
    else if(marks>60 && marks<80){
        return "GRADE B";
    }
    else if(marks>40 && marks<60){
         return "GRADE C";
    }
    else{
        return "FAIL";
    }
}
let Result=grades(21);
console.log(Result);