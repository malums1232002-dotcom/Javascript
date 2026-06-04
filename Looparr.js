
//printing 
let fruits=["apple","mango","banana"];
for(i=0;i<3;i++){
    console.log(fruits[i]);
}

//sum of no of digits
let numbers=[1,2,3,4,5,6];
let sum=0;
for(i=0;i<numbers.length;i++){
    sum=sum+numbers[i];
}
console.log(sum);

//total marks
let marks=[60,70,87,43,98];
let total=0;
for(i=0;i<marks.length;i++){
    total=total+marks[i];
}
console.log(total);

//total amount
let prices=[30,50,76,89,90];
let amount=0;
for(i=0;i<prices.length;i++){
    amount=amount+prices[i];
}
console.log(amount);

//average marks
let mark=[85, 90, 78, 92];
let totalmarks=0;
for(i=0;i<mark.length;i++){
    totalmarks=totalmarks+mark[i];
}
let final=totalmarks/mark.length;
console.log(final);

//print even num in an array
let num=[1,2,3,4,5,6,7,8];
for(i=0;i<num.length;i++){
    if(num[i]%2==0){
        console.log(num[i]);
    }
}


//count even num in an array
let num1=[1,2,3,5,6,7,8];
let count=0;
for(i=0;i<num1.length;i++){
    if(num1[i]%2==0){
        count=count+1;
    }
}
 console.log(count);

//print odd num in array
let num2=[1,2,3,4,5,6,7,8];
for(i=0;i<num2.length;i++){
    if(num2[i]%2!==0){
        console.log(num[i]);
    }
}

//largest in an array
let num3=[10, 45, 22, 90, 15];
let large=0;
for(i=0;i<num3.length;i++){
    if(num3[i]>large){
        large=num3[i];
    }
}
console.log(large);

//smallest number in array
let num4=[20, 10, 50, 5, 80];
let small=num4[0];
for(i=0;i<num4.length;i++){
    if(num4[i]<small){
        small=num4[i];
    }
}
console.log(small);

//reverse an array
let fruit=["Apple", "Mango", "Orange", "Banana"];
for(i=fruit.length-1;i>=0;i--){
    console.log(fruit[i]);
}

//reverse array numbers
let rnum=[1,2,3,4,5];
for(i=rnum.length-1;i>=0;i--){
    console.log(rnum[i]);
}

//Count Elements Greater Than 10
let Gnums=[5, 12, 8, 20, 15];
count=0;
for(i=0;i<Gnums.length;i++){
    if(Gnums[i]>10){
     count++;
    }
}
console.log(count);