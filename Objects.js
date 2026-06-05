 //highest marks 
 let marks={
    maths:69,
    english:79,
    tamil:88,
 };
let  highest=0;

 for(let keys in marks){
    if(marks[keys] > highest){
        highest=marks[keys];
       
    }
 }
  console.log(highest);

  //sum all values
  let expenses={
    food:2000,
    travel:3000,
    shopping:8000,
     total: function(){
    return this.food+this.travel+this.shopping;
    }
};
console.log(expenses.total());
