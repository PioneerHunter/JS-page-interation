document.getElementById("fade-obj").style.cssText+="opacity: 1;"; // 加入透明度属性

var btn=document.getElementById("fade-btn");
var obj=document.getElementById("fade-obj");
var flag=true; //开关
var num=1;
var myFade;
btn.addEventListener("click",function(){
    t(); // 打开计时器
    btn.disabled=true;
    // 两秒后关闭计时器
    setTimeout(function change(){
        clearInterval(myFade);
        btn.disabled=false;
        flag=!flag; // 真为淡出，假为淡入
        if(flag){
            btn.innerHTML="淡出";
        }else{
            btn.innerHTML="淡入";
        }
        
    },2000);
});

// 计时器
function t(){
    myFade=setInterval(function fade(){
        flag?num-=0.05:num+=0.05; // 真为淡出，假为淡入
        obj.style.opacity=num;
    },100);
}

