window.onload=function(){

    var y=document.getElementById("smile");
    var Y=0;

    function up(){
        y.style.backgroundPositionY="-"+Y+"px"; // 按照每480px的距离上移
        Y+=480;
        if(Y==8160){ //当到最后一张图片时，回到第一张图片
            Y=0;
        }
    }

    setInterval(up,200);
}
