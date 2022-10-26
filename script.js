let div=document.createElement("div");
div.setAttribute("class","text-center");

let formgroup=document.createElement("div");
formgroup.setAttribute("class","form-group");

let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("class","form-control");
input.setAttribute("id","main");
input.setAttribute("placeholder","Covid 19 API");
input.style.width="40%";
input.style.margin="auto";

let button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-primary");
button.innerHTML="Search";
button.style.marginTop="20px";
button.addEventListener("click",foo);

let active=document.createElement("div");
active.setAttribute("id","active");

let death=document.createElement("div");
death.setAttribute("id","death");

let recovered=document.createElement("div");
recovered.setAttribute("id","recovered");

formgroup.append(input,button,active,death,recovered);

div.append(formgroup);
document.body.append(div);

async function foo()
{
    try
    {
        let countryname=document.getElementById("main").value;
        console.log(countryname);
        let res=await fetch(`https://api.covid19api.com/dayone/country/${countryname}`);
        let result=await res.json();
        var index=result.length-1;
        active.innerHTML=`Total Active Cases:${result[index].Active}`;
        death.innerHTML=`Total Deaths:${result[index].Deaths}`;
        recovered.innerHTML=`Recovered:${result[index].Recovered}`;
    }
    catch(error)
    {
        console.log(error);
    }

}
