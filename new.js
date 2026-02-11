let person ={
    name : "sama",
    age:20,
    major:"cs"
};
function sum(){
    let total;
    for (let i=0;i<arguments.length;i++)
    {
        total+=arguments[i];

    }
    return total;
}
function sum1(...numbers){
    return number.reduce ((total,item)=>total)
}

let s=sum1(1,2,3,4)

console.log()