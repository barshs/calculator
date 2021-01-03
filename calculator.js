function getHistory()
{
    return document.getElementById("history-value").innerText;
}
function printHistory(num)
{ 
    document.getElementById("history-value").innerText=num; 
}



function getOutput()
{
    return document.getElementById("output-value").innerText;
}
function printOutput(num)
{
    if(num=="")
    {
        document.getElementById("output-value").innerText=getFormattedNumber(num); 
    }
    else
    {
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
   
}
function getFormattedNumber(num)
{
    var n=Number(num);
    var value=n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}

var opertor = document.getElementsByClassName("opertor");
for(var i =0;i<opertor.length;i++){
	opertor[i].addEventListener('click',function(){
		
		var history=getHistory();
		if(this.id=="clean"||this.id=="CE"){
			printHistory("");
			printOutput("");
		}
		else if (this.id=="back"){ //if output is a number
			var output=reverseNumberFormat(getOutput()).toString()
			if(output!=NaN)
			{
				output=output.substr(0,output.length-1);
				printOutput(output);
			}
		}
			else{
				var history=getHistory();
				var output=getOutput();
				if(output!="")
				{
					output=reverseNumberFormat(output);
					history=history+output;
					printHistory(history);
					if(this.id=="equal")
					{
						
						var reasult=eval(history);
						printOutput(reasult);
						
					}
					else if(this.id=="^2")
					{
						
						var reasult=Math.ceil(history);
						printOutput(reasult);
						
					}

					else{
						history=output;
						history=history+this.id;
						printHistory(history);
						printOutput("");

					}
				}

			}
			
		
	}); 
}

var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	}); 
}
