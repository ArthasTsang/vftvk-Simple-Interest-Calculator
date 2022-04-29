function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
	var year = document.getElementById("years").value;
	var interest= principal * rate/100 * year ;
	var curYear= (new Date()).getFullYear();
	var endYear= curYear+parseInt(year);
	
	var result= document.getElementById("result");
	var resultTxt= "If you deposit "+principal+"<br>";
	resultTxt= resultTxt+"at an interest rate of "+rate+"%.<br>";
	resultTxt= resultTxt+"You will receive an amount of "+interest+",<br>";
	resultTxt= resultTxt+"in the year "+endYear+"<br>";
	result.innerHTML= resultTxt;
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        