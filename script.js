
let bt=document.getElementsByClassName("btn")
console.log(bt)

let string="";
	
function getvalue(i){

	 //console.log(i)

		let input = document.getElementById("inputtag");
	
	 if(i==19)
	{
		string=eval(string)
		input.value=string
	}
	else if(i==0)
	{
		string=""
		input.value=string
	}
	else if(i==1)
	{
		let arr =string.split("")   //split() method gives array from string
		//console.log(arr)
		arr.pop()
		console.log(arr)
		string=arr.join("")
		console.log(Array.isArray(string))
		input.value=string
	}
	else if(i==7)
	{
		string+="*"
		input.value=string
	}
	else
	{
		string=string+bt[i].innerHTML
		input.value=string
	}
}