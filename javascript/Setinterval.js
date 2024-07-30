setTimeout( function()
{
    console.log("HELLO");
},5000
);
console.log("SetInterval eg")
setInterval(function()
{
    console.log("hi");
},4000)


setInterval(() =>
{
    console.log("hai ishu");
}
 ,3000)
 //self calling function
(
 function name()
 {
    console.log("HELLO SKCET");
 }
)()