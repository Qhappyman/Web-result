var arr = new Array();
function clearit()
{
	arr.splice(0,arr.length);
	document.getElementById('screen').innerText="";
}			
 function get(a){
 	if(a=='+/-')
 	{	arr.unshift=('-');
 		arr[0]=-arr[0]; 
 		var str = arr.join("");
		document.getElementById('screen').innerText=str;
		return;
	}		 		
 	arr.push(a);
 	var str = arr.join("");
	document.getElementById('screen').innerText=str;
	if(arr[arr.length-1]=="=")
	{
		var arr1=arr.pop();
		var str1 = arr.join("");
		document.getElementById('screen').innerText=eval(str1);		
		arr.splice(0,arr.length,eval(str1));
	}
}		