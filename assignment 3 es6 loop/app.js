//1- How to unique, sort an array in ascending order?
// const arr = [1,40,2,10,10,40,2,2,5,3,54,2,42,5,5,5]

// const arr = [1,40,2,10,10,40,2,2,5,3,54,2,42,5,5,5]
// arr.sort(function(a, b){return a-b})
// const newSet = new Set(arr)
// console.log(newSet)


// 2- Print values using for loop in the following sequence
// 1
// 123
// 1234
// 12345

// var a=1; 
// for(var i=2 ;i<=5;i++)
// {
   
//     console.log(a)
//     a += i.toString()
// }

// 3- Sum the folliwg number using for loop const num = 12345 (its number type) Output should be: 15
// const num =12345;
// var x =num.toString() // conver num into string
// let arry = [];
// var a=0; 
// for(var i=0 ;i<x.length;i++)
//  {
//      arry.push(x.charAt(i)) // convert number(string) in to  arry 
//      if(x.length==arry.length)
//      {
//          for(var i =0 ; i<arry.length;i++)
//          {
//            a  += "+"+arry[i] //store arry number from arry in variable
//         }
//     }
    
// }
// console.log(eval(a)) // output = 15



//4- Find the third highest number in array using Set, sort and reverse

// const arr = [1,210,5,7,65,5,20,8,210,65];
// arr.sort(function(a,b){return b-a})

//  var newSet =  new Set(arr)

//  var arrangedNum = newSet.values();
//      console.log(`first higest value = ${arrangedNum.next().value}`)
//      console.log(`second higest value = ${arrangedNum.next().value}`)
//      console.log(`third higest value = ${arrangedNum.next().value}`)
