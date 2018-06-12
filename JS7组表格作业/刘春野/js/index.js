
var oNav=document.getElementsByClassName("nav")[0];
var oA = oNav.getElementsByTagName("a");
var oLogin=document.getElementById("login");
var oBottom=oLogin.getElementsByClassName("index");



oBottom[1].style.display="none";
oBottom[2].style.display="none";


function changeTab(n){
    for(var i = 0;i<oA.length;i++){
        oA[i].className="";
        oBottom[i].style.display="none";

    }
    oA[n].className="oB";
    oBottom[n].style.display="block";
}
for (var i = 0; i < oA.length; i++){
    oA[i].zhufeng = i;
    oA[i].onclick = function(){
        changeTab(this.zhufeng);
    }
}


var oInput=document.getElementsByClassName("ipt");
var oP=document.getElementsByClassName("prompt");

let reg=/^[a-zA-Z]\w{5,17}$/;
oInput[0].onblur=function () {
    if(reg.test(oInput[0].value)){
        oP[0].innerHTML = "恭喜，该邮件地址可注册";
        oP[0].style.color="green";
    }else{
        oP[0].innerHTML = "长度应为6~18个字符";
        oP[0].style.color="red";
    }
};

let reg1 = /^[a-zA-Z\d]{6,16}$/;
oInput[1].onblur = function () {
    if(reg1.test(oInput[1].value)){
        oP[1].innerHTML = "该密码可用";
        oP[1].style.color="green";
    }else{
        oP[1].innerHTML = "密码长度应为6~16个字符";
        oP[1].style.color="red";
    }
}


oInput[2].onblur = function () {
    if(oInput[2].value===oInput[1].value){
        oP[2].innerHTML = "通过";
        oP[2].style.color="green";
    }else{
        oP[2].innerHTML = "两次填写的密码不一致";
        oP[2].style.color="red";
    }
};

let reg3 = /^\d{11}$/;
oInput[3].onblur = function () {
    if(reg3.test(oInput[3].value)){
        oP[3].innerHTML = " 手机号码可用";
        oP[3].style.color="green";
    }else{
        oP[3].innerHTML = "请填写正确的手机号";
        oP[3].style.color="red";
    }
};

oInput[4].onblur = function () {
    if(oInput[4].value==="9nz7k"){
        oP[4].innerHTML = " 通过";
        oP[4].style.color="green";
    }else{
        oP[4].innerHTML = "请填写图片中的字符，不区分大小写";
        oP[4].style.color="red";
    }
};





