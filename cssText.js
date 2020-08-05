

// 当选中标签时显示下拉菜单
document.getElementById("school").addEventListener("change",radioChange);
document.getElementById("company").addEventListener("change",radioChange);
function radioChange(){
    var a=document.getElementById("school");
    var b=document.getElementById("company");
    if(a.checked){ // checked，判断属性是否选中
        document.getElementById("school-select").style.cssText="visibility: visible;"
        document.getElementById("company-select").style.cssText="visibility: hidden;"
    }
    if(b.checked){
        document.getElementById("school-select").style.cssText="visibility: hidden;"
        document.getElementById("company-select").style.cssText="visibility: visible;"
    }
}

// 事件委托实例
window.onload=function(){  // 在dom加载完毕后
    var list = document.getElementsByClassName("palette");
    list[0].addEventListener("click",function(ev){
        var ev=ev||window.event;
        var t=ev.target||ev.srcElement; // 后者IE兼容
        if(t.nodeName.toLocaleLowerCase()=='li'){
            var c=t.style.backgroundColor;
            var p=document.getElementsByClassName("color-picker")[0];
            var fontColor=p.style.color;
            p.innerHTML=c;  // 必须先有内容，背景色才会显示
            p.style.backgroundColor=c;
            alert(fontColor);
            t.style.backgroundColor=fontColor;
        }
    });
}
