function rec(legnth,breath){
    this.legnth=legnth;
    this.breath=breath;
    this.area=function(){
        return this.legnth*this.breath;
    }
}
let rec1= new rec(4,6);
let rec2=new rec(2,4);
console.log(rec1.area());
console.log(rec2.area());