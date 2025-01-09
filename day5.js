function isPallindrome(str)
{
    let revStr ="";
    for(let i = str.length-1;i>=0;i--){
        // console.log(str[i]);
        revStr +=str[i];
    }
    if(str== revStr){
        console.log("PALINDROME");
    }else{
        console.log("NOT A PALINDROME");
    }
}
isPallindrome("sir")
isPallindrome("madam")
//*******************TYPES OF FUNCTIONS********//
function a(){
    console.log("called as anonymus");
}
a();
// ***************function expression********//
let x=function()
{
    console.log("function expression");
};
x();
// **************IIFE***************//
(
    function(){
        console.log("IIFE")
    }
)();
//*****************Arrow function**************//
