function solve(arg) 
{
   let num = arg + '';
   let sum = 0;
   for (let i = 0; i < num.length; i++ ){
       let numm = Number(num[i]);
       sum += numm
       
   }
   console.log(`The sum of the digits is:${sum}`)
}