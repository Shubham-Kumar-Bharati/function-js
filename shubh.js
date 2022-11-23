// 1.Create one function with zero parameter having a console statement;
function zeropara(){
    console.log("hello");
}

zeropara();

// 2.Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
let add = function(a,b){
    return a+b;
}
let result = add(3,4);
console.log(result);

// 3.Create one arrow function
let addition = (a,b) => {
    console.log(a+b);
}
addition(10,5);


// 4. Print Output
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

// output:- undefined

// 5."Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};
 
// output:- undefined
            // 21

// 6."Print output

            // var x = 21;
            // a();
            // b();
            // console.log(a);
            // a = function() {
                
            //    x = 20;
            //   console.log(x);
            // };
            // b = function() {
                
            //     x = 40;
            //    console.log(x);
            // };
    // Error will be shown in the output because a is not defined.(b is also not defined)


    // 7.Write a function that accepts parameter n and returns factorial of n
    let mult = 1;
    function fact(n){
        for(let i=n;i>=1;i--){
    
            mult=mult*i;
        }
         return mult 
        
    }
    let factorial = fact(5);
    console.log(factorial);