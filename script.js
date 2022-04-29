function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
	var year = document.getElementById("years").value;
	
	if(principal<=0){
		document.getElementById("principal").focus();
		alert("Enter a positive number");
		return;
	}
	
	var interest= principal * rate/100 * year ;
	var curYear= (new Date()).getFullYear();
	var endYear= curYear+parseInt(year);
	
	var result= document.getElementById("result");
	var resultTxt= "If you deposit <mark>"+principal+"</mark>,<br>";
	resultTxt= resultTxt+"at an interest rate of <mark>"+rate+"%</mark>.<br>";
	resultTxt= resultTxt+"You will receive an amount of <mark>"+interest+"</mark>,<br>";
	resultTxt= resultTxt+"in the year <mark>"+endYear+"</mark><br>";
	result.innerHTML= resultTxt;
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        