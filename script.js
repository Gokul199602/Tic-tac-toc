var square = document.querySelectorAll("td");
var button = document.querySelector("button");

function restart()
{
	
		for(var i=0;i<square.length;i++)
		{
			square[i].textContent="";
		}
}

button.addEventListener("click",restart());





function changeMarker()
{
	if(this.textContent==="")
	{
		this.textContent="X";
	}
	else if (this.textContent==="X")
	{
		this.textContent="O";
	}
	else
	{
		this.textContent="";iu
	}
}


for (var i=0;i<square.length;i++){
 square[i].addEventListener("click",changeMarker);
}
[]

