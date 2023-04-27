//your code here
let button=document.getElementById("swap");
let backgr=document.getElementById("app");
let value=true;
button.addEventListener("click", function(){
	if(value==true)
	{
		backgr.style.backgroundColor="black";
		button.classList.add("button_night");
		value=false;
	}
	else
	{
		backgr.style.backgroundColor="white";
		button.classList.remove("button_night");
		value=true;
	}
});
