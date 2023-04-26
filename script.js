//● Cash flow ratio
let cash= 1000, current_liabilities= 500;
console.log(cash/current_liabilities);
//● Net income
let revenues= 1000, expenses= 500;
console.log(revenues-expenses);
//● Total assets
let liabilities= 1000, equity= 500;
console.log(liabilities+equity)
//● Net income (using profit margin and sales)
let profit= 1000, sales= 500;
console.log(profit*sales);
//● Average 
let numbers= [7, 9, 2];
let avg=0;
for(let i=0;i<numbers.length;i++){
    avg+=numbers[i];
}
console.log(avg/numbers.length)
//● Discount
let price= 150, discount= (30/100);
console.log(price-(price*discount));
//● Age limit (older than 18 and less than 30)
let age=20;
if(age>18&&age<30)
{
console.log(true);
}
else
{
    console.log(false);
}
//● Exponential
let num1=2,num2=3;
console.log(Math.pow(num1,num2));
//● Remainder
let n1=10,n2=4;
console.log(n1%n2);

console.log("---------------------------------------------")
console.log(typeof(100));
console.log(typeof(73.9));
console.log(typeof(NaN));
console.log(typeof("Water"));
console.log(typeof(false));
console.log(typeof(9 != 11));
console.log("Orang" + "e");
console.log("Orange" - "s");
console.log("4" + "8");
console.log("4" - "8");
console.log("name" + 3);
console.log("name" - 3);
console.log(82 * "word");
console.log(1 + "hello");
console.log("hello" + 1);
console.log(1 + true);
console.log("hello" + true);
console.log(typeof (Infinity)); 
console.log(1 == '1');
console.log(1 === '1');
console.log("-----------------------------------");
let str="Welcome to Orange";
console.log((str.toUpperCase()));
let sub_slice=str.slice(8,11);
console.log(sub_slice.toUpperCase());
let str_rep=str.replace("Welcome to","hello from");
console.log(str_rep);
console.log((str.toLowerCase()));
console.log(str.length);
let str_rep1=str.replace("Orange","\"Orange\"");
console.log(str_rep1);
console.log(str+" Jordan");
console.log("-----------------------------------");
let first_string="cactus";
let charArray = first_string.split('');
for(let i=1;i<first_string.length;i++)
{
    if(charArray[i]=='c')
charArray[i]='*'
}
let last_string="";
for(let i=0;i<first_string.length;i++){
last_string+=charArray[i]
}
console.log(last_string)