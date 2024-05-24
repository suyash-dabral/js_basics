"use strict";   // treat all js code as newer version

//conversion  => let change=Number(string) , Boolean(val), Srting(num)  
// Value will be changed to NaN if in different format => "33abc" -> NaN



//Operations//

let val=3
let negval= -val
console.log(negval)

let str1="hi"
let str2=" yo"
let str3=str1+str2
console.log(str3)


console.log("1"+2)
console.log("1"+"2")
console.log("1"+2+2)
console.log(1+"2")

//if string first all string is onverted

 //   ===  checks datatype of both

 //2 datatypes: primitve and non primitive

 // Primitive: 7 : string, number,boolean, null, undefined, symbol, bigint  -> used stack
 
 //Reference ( non-primitive): array, objects, functions -> uses heap

 