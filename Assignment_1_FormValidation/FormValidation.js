
    // birthdate section 
for(i=1;i<=31;i++)
    {
        document.getElementById("bdate").innerHTML+="<option>"+i+"</option>"
    }

for(m=1;m<=12;m++)
{
    document.getElementById("bmonth").innerHTML+="<option>"+m+"</option>"

}

for(y=1980;y<=2025;y++)
{
    document.getElementById("byear").innerHTML+="<option>"+y+"</option>"
}

//  JUST VALIDATE THE FORM OFF FACEBOOK USERINPUT
function formvalidation()
{
var fname=document.getElementById("firstname").value
var lname=document.getElementById("lastname").value
var birth_date=document.getElementById("bdate").value
var birth_mon=document.getElementById("bmonth").value
var birth_year=document.getElementById("byear").value
var vgen1=document.getElementById("gen1")
var vgen2=document.getElementById("gen2")
var contact=document.getElementById("inputmob").value
var vpass=document.getElementById("inpass").value
var vform=document.getElementById("form").value

if(fname==""||lname==""||birth_date==""||birth_mon=="")
{

if(fname=='')
{
    document.getElementById("firstname").style.border="2px solid red"
    document.getElementById("firstname").src="../../IMAGES/alertsymbol.png"
    
    // return false;
    
}
if (lname=='')
    {
        document.getElementById("lastname").style.border="2px solid red"
        // return false;

    }



if(birth_date=='')
    {
        document.getElementById("bdate").style.border="2px solid red"
        // return false;

    }

if(birth_mon=='')
    {
        document.getElementById("bmonth").style.border="2px solid red"
        // return false;

    }

if(birth_year=='')
    {
        document.getElementById("byear").style.border="2px solid red"
        // return false;

    }
if((vgen1.checked==false) && (vgen2.checked==false))
    {
        document.getElementById("span1").style.color="red"
        document.getElementById("span2").style.color="red"
        document.getElementById("gen1div").style.border="2px solid red"
        document.getElementById("gen2div").style.border="2px solid red"
        // return false  
    }
if(contact=='' )
{
    document.getElementById("mobilenumberoremail").style.border="2px solid red"
    // return false;
}

if(vpass=='')
{
    document.getElementById("password").style.border="2px solid red"
    // return false;

}
if(vpass.length<4 || vpass.length>=8 )
{
    document.getElementById("password").style.border="2px solid red"
    // document.getElementById("password").style.backgroundImage=""

    // alert("Enter password greater than 4 and less than 8 !")
    // return false;
}
return false
}

// var mypass=[/a-z/g]
// var mypass=[/A-Z/g]
// var mypass=[/0-9/g]
// var mypass=[/@,#,%,$,?/g]

// if(vpass.values.match!=mypass)
// {
//     alert("please enter password using ")
// }


}
