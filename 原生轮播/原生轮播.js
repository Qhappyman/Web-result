let wrap = document.getElementById("wrap");//获取元素
let next=document.getElementById('next');
let per=document.getElementById('per');
next.onclick=()=>{            //俩个按钮事件
    next_img();
}
per.onclick=()=>{
    per_img();
}
function next_img(){        //按钮对应方法
    if(wrap.style.left==="-2400px"){
        wrap.style.left="0px";
    }
    else
    /* setInterval(()=>{wrap.style.left=parseInt(wrap.style.left) - 20+"px"},100)*/ //缓慢移动效果，待完善
    wrap.style.left=parseInt(wrap.style.left) - 600+"px";
}
function per_img(){
    if(wrap.style.left==="0px"){
        wrap.style.left="-2400px";
    }
    else
    wrap.style.left=parseInt(wrap.style.left) + 600+"px"
}
let time;
function autoplay(){          //自动播放
    time=setInterval(next_img,2000);
}
autoplay();
wrap.onmouseenter = function () {      //鼠标上去停止播放
    clearInterval(time);
}
wrap.onmouseleave = function () {
    autoplay();
}