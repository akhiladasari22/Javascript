// program to generate fibonacci series 
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');
// for (let i = 1; i <=10; i++) {
//   console.log(n1);
//      nextTerm = n1 + n2;
//      n1 = n2;
//      n2 = nextTerm;
//  }
// let a=0,b=1,c
// console.log(a)
// console.log(b)
// for(i=1;i<=6;i++)
// {
//     c=a+b//0+1=1
//     console.log(c)//1
//     a=b;//0=>1
//     b=c//1=>1
// }
let i, fact =1, num=5;
for(i=1;i<=num;i++)
{
  fact=fact*i;
}
console.log(fact);//5! = 5*4*3*2*1
