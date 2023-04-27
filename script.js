//your code here
let button=document.getElementById("swap");
let backgr=document.getElementById("app");
let value=true;
button.addEventListener("click", function(){
	if(value==true)
	{
		backgr.style.backgroundColor="black";
		value=false;
	}
	else
	{
		backgr.style.backgroundColor="white";
		value=true;
	}
});
