function formvalidation(fVC)
{
    setTimeout(() =>{
    console.log("form validation called");
    fVC();
    },2000);
}
function formcompleted()
{
    console.log("form validation completed");
}
formvalidation(formcompleted);