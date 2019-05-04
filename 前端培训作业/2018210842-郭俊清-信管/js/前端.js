 // var myname=prompt("请输入三位正整数:");
 // var a;
 // var b;
 // var c;
 // if(myname!=0)
 // {a=parseInt(myname/100);c=myname%10;b=parseInt(myname/10)%10;
 // 	console.log(c,b,a);}

// var a;
// var b;
// var c;
// for(a=1;a<101;a++)
// {	b=a%10;c=parseInt(a/10);
// if(a%3==0||b==3||c==3)
// 	console.log("PA" + "\n");
// 	else console.log(a + "\n")
// }

var a,b,c;
var myname=prompt("请输入出生年份(1900-目前)：");
for(;myname>2018||myname<1900;myname=prompt("请输入出生年份(1990-目前):"))  
	alert("请输入正确的年份");
var my=prompt("输入出生月份");
for(;my>12||my<0;my=prompt("输入出生月份")) 
	alert("请输入正确的月份");
var print=prompt("输入出生日期");
if((myname%4==0&&myname%100!=0&&my==2)||(myname%400==0&&my==2))
   {for(print;print>29||print<1;print=prompt("输入出生日期"))
       alert("请输入正确出生日期");}
else{for(;print>28||print<1;print=prompt("输入出生日期"))
       alert("请输入正确出生日期")}
var me=-1
var arr = new Array(4)
arr[0] = 31
arr[1] = 30
arr[2] = 29
arr[3] = 28
a=my;
print=parseInt(print,10);
var arr1 = Array(12)
arr1[0] =arr[0] + print
arr1[1]=arr[0]+print+arr[2]
arr1[2]=2*arr[0]+print+arr[2]
arr1[3]=3*arr[0]+print+arr[2]
arr1[4]=3*arr[0]+print+arr[2]+arr[1]
arr1[5]=4*arr[0]+print+arr[2]+arr[1]
arr1[6]=5*arr[0]+print+arr[2]+arr[1]
arr1[7]=5*arr[0]+print+arr[2]+2*arr[1]
arr1[8]=6*arr[0]+print+arr[2]+2*arr[1]
arr1[9]=6*arr[0]+print+arr[2]+3*arr[1]
arr1[10]=7*arr[0]+print+arr[2]+3*arr[1]
var arr2 = Array(12)
arr2[0] =arr[0] + print
arr2[1]=arr[0]+print+arr[2]-1
arr2[2]=2*arr[0]+print+arr[2]-1
arr2[3]=3*arr[0]+print+arr[2]-1
arr2[4]=3*arr[0]+print+arr[2]+arr[1]-1
arr2[5]=4*arr[0]+print+arr[2]+arr[1]-1
arr2[6]=5*arr[0]+print+arr[2]+arr[1]-1
arr2[7]=5*arr[0]+print+arr[2]+2*arr[1]-1
arr2[8]=6*arr[0]+print+arr[2]+2*arr[1]-1
arr2[9]=6*arr[0]+print+arr[2]+3*arr[1]-1
arr2[10]=7*arr[0]+print+arr[2]+3*arr[1]-1
if((myname%4==0&&myname%100!=0)||myname%400==0)
{switch(a)
{case "1":document.write("你出生在"+myname+"的第"+print+"天");break;
 case "2":document.write("你出生在"+myname+"的第"+arr1[0]+"天");break;
 case"3": document.write("你出生在"+myname+"的第"+arr1[1]+"天");break;
 case"4": document.write("你出生在"+myname+"的第"+arr1[2]+"天");break;
 case"5": document.write("你出生在"+myname+"的第"+arr1[3]+"天");break;
 case"6": document.write("你出生在"+myname+"的第"+arr1[4]+"天");break;
 case"7": document.write("你出生在"+myname+"的第"+arr1[5]+"天");break;
 case"8": document.write("你出生在"+myname+"的第"+arr1[6]+"天");break;
 case"9": document.write("你出生在"+myname+"的第"+arr1[7]+"天");break;
 case"10": document.write("你出生在"+myname+"的第"+arr1[8]+"天");break;
 case"11": document.write("你出生在"+myname+"的第"+arr1[9]+"天");break;
 case"12": document.write("你出生在"+myname+"的第"+arr1[10]+"天");break;}}
 else
 	{switch(a)
 	{case "1":document.write("你出生在"+myname+"的第"+print+"天");break;
     case "2":document.write("你出生在"+myname+"的第"+arr2[0]+"天");break;
     case"3": document.write("你出生在"+myname+"的第"+arr2[1]+"天");break;
     case"4": document.write("你出生在"+myname+"的第"+arr2[2]+"天");break;
     case"5": document.write("你出生在"+myname+"的第"+arr2[3]+"天");break;
     case"6": document.write("你出生在"+myname+"的第"+arr2[4]+"天");break;
     case"7": document.write("你出生在"+myname+"的第"+arr2[5]+"天");break;
     case"8": document.write("你出生在"+myname+"的第"+arr2[6]+"天");break;
     case"9": document.write("你出生在"+myname+"的第"+arr2[7]+"天");break;
     case"10": document.write("你出生在"+myname+"的第"+arr2[8]+"天");break;
     case"11": document.write("你出生在"+myname+"的第"+arr2[9]+"天");break;
     case"12": document.write("你出生在"+myname+"的第"+arr2[10]+"天");break;}
    }


