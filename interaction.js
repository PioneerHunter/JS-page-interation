// 点按钮，在控制台输出
document.getElementById("submit-btn").addEventListener("click",nameBtn);
function nameBtn(){
    var a=document.getElementById("name");
    console.log(a.value);
}

document.getElementById("name").addEventListener("keydown",get); //将keypress改成了keydown
function get(e){
    // 点enter在控制台输出
    if(e.which==13||e.keyCode==13){ // keyCode兼容IE8及以前
        var a=document.getElementById("name");
        console.log(a.value);
    }
    // 点esc删除表单内容
    if(e.which==27||e.keyCode==27){
        document.getElementById("name").value="";
    }
}
/*总结：一般情况下，keydown、keyup可以响应除PrtSc外所有的键，keypress则有所受限。
 *这三者的发生顺序为keydown、keypress、keyup
 */