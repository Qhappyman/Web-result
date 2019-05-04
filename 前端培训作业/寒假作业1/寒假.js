----------------------------------------------------------------------------------window.onload = function(){
var request = new XMLHttpRequest();					
			request.onreadystatechange = function()
			{
				if(request.status == 200 && request.readyState == 4)
				{								
					var json = JSON.parse(request.responseText);
					load('a','a1','a2','a3',0);
					load('b','b1','b2','b3',1);
					load('c','c1','c2','c3',2);
					load('d','d1','d2','d3',3);
					load('e','e1','e2','e3',4);
					load('f','f1','f2','f3',5);
					load('g','g1','g2','g3',6);
					load('h','h1','h2','h3',7);
					load('i','i1','i2','i3',8);
					load('j','j1','j2','j3',9);
					function load(g,j,q,r,m){
					document.getElementById(g).innerHTML = json.tet[m].question;				
					document.getElementById(j).innerHTML = json.tet[m].answer[0];
					document.getElementById(q).innerHTML = json.tet[m].answer[1];
					document.getElementById(r).innerHTML = json.tet[m].answer[2];
											};					
				}				
				else 
				{
					console.log("request was unsuccessful");
				};				
		}
				request.open("get","https://www.easy-mock.com/mock/5c35a447a7a7577b357b4596/example/example#!method=get",true);
				request.send();
var i;
var j = 0;
var score = 0;
var num = 0;
var timer;
var mydate = new Date();
var oli = document.getElementsByTagName("a");
var a = document.getElementById('continer');
var  input = document.getElementsByTagName('input');
var finish = document.getElementById('finish');
var footer = document.getElementById('footer');
var header = document.getElementById('header');
var stroage = window.localStorage;
var foot = document.getElementById('foot');
var test = document.getElementById('test');
var test1 = document.getElementById('test1');
var test2 = document.getElementById('test2');
var test3 = document.getElementById('test3');
var test4 = document.getElementById('test4');
var test5 = document.getElementById('test5');	
a.children[0].style.zIndex = 20;
a.children[1].style.zIndex = 18;
a.children[2].style.zIndex = 16;
a.children[3].style.zIndex = 14;
a.children[4].style.zIndex = 12;
a.children[5].style.zIndex = 10;
a.children[6].style.zIndex = 8;
a.children[7].style.zIndex = 6;
a.children[8].style.zIndex = 4;
a.children[9].style.zIndex = 2;
foot.onclick = function()
	{
	location.reload(false);
	}
header.onclick = function()
	{	
	for(var j = 0;j< oli.length;j++)
	{
		(function(j)
		{
			oli[j].onclick= function()
			{
				this.parentNode.style.zIndex=1;
			};
		})(j)
	}
	num = 90;
	over();
	clearInterval(timer);
	timer = setInterval(over,1000);
	header.onclick = "";		
	}
function over()
	{	
		if(num<0||num == 0)
			{
			header.innerHTML = "结束啦！";
			for(var j = 0;j< oli.length;j++)
				{
				(function(j)
					{
					oli[j].onclick = "";
					})(j)
				}
			gt();							
		}
		else{
			header.innerHTML = num;
			num--;
			}
	}
gt = function my()
	{
		for(i = 0;i < input.length;i++)
			{
				if((input[i].value == "false")&&(input[i].checked == true))
					score = score;
				else if(input[i].checked == true)
					score = eval(score + parseInt(input[i].value));
			}
		footer.innerHTML = "最终分数:" + score;
		header.innerHTML = "结束";
		clearInterval(timer);
		stroage.setItem(mydate,score);
		finish.onclick = "";
	}
test.onclick = function()
	{
		for(var j=1;j<stroage.length;j++){ 
        	for(var i=0;j<stroage.length-i;i++)
        		{ 
            	if(parseInt(stroage.getItem(stroage.key(i)))<parseInt(stroage.getItem(stroage.key(i+1))))
            		{
                	var list=stroage.getItem(stroage.key(i));
                	stroage.setItem(stroage.key(i),stroage.getItem(stroage.key(i+1)));
               		 stroage.setItem(stroage.key(i+1),list);
           			}  
				}

	}
	if(stroage.getItem(stroage.key(0))!=undefined) test1.innerHTML =stroage.getItem(stroage.key(0));
	if(stroage.getItem(stroage.key(1))!=undefined) test2.innerHTML = stroage.getItem(stroage.key(1));
	if(stroage.getItem(stroage.key(2))!=undefined) test3.innerHTML = stroage.getItem(stroage.key(2));
	if(stroage.getItem(stroage.key(3))!=undefined) test4.innerHTML = stroage.getItem(stroage.key(3));
	if(stroage.getItem(stroage.key(4))!=undefined) test5.innerHTML = stroage.getItem(stroage.key(4));
	}
};





		
