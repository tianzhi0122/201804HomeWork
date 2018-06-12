let oInput = document.getElementsByClassName("ipt");
let oSpan = document.getElementsByClassName("tips_span");

//邮箱地址
let reg=/^[a-zA-Z]\w{5,17}$/;
oInput[0].onblur=function () {
    if(reg.test(oInput[0].value)){
        oSpan[0].innerHTML = "恭喜，该邮件地址可注册"
        oSpan[0].style.color="green";
    }else{
        oSpan[0].innerHTML = "长度应为6~18个字符"
        oSpan[0].style.color="red";
    }
}

//密码
let reg1 = /^[a-zA-Z\d]{6,16}$/;
oInput[1].onblur = function () {
    if(reg1.test(oInput[1].value)){
        oSpan[1].innerHTML = "该密码可用";
        oSpan[1].style.color="green";
    }else{
        oSpan[1].innerHTML = "密码长度应为6~16个字符";
        oSpan[1].style.color="red";
    }
}

//确认密码
oInput[2].onblur = function () {
    if(oInput[2].value===oInput[1].value){
        oSpan[2].innerHTML = "通过";
        oSpan[2].style.color="green";
    }else{
        oSpan[2].innerHTML = "两次填写的密码不一致";
        oSpan[2].style.color="red";
    }
};

//手机号
let reg3 = /^\d{11}$/;
oInput[3].onblur = function () {
    if(reg3.test(oInput[3].value)){
        oSpan[3].innerHTML = " 手机号码可用";
        oSpan[3].style.color="green";
    }else{
        oSpan[3].innerHTML = "请填写正确的手机号";
        oSpan[3].style.color="red";
    }
};

//验证码
oInput[4].onblur = function () {
    if(oInput[4].value==="9nz7k"){
        oSpan[4].innerHTML = " 通过";
        oSpan[4].style.color="green";
    }else{
        oSpan[4].innerHTML = "请填写图片中的字符，不区分大小写";
        oSpan[4].style.color="red";
    }
};

//弹框
let last = document.getElementsByClassName("last")[0];
console.log(last);
last.onclick = function () {
    if (reg.test(oInput[0].value)&&reg1.test(oInput[1].value)&&oInput[2].value===oInput[1].value&&reg3.test(oInput[3].value)&&oInput[4].value==="9nz7k"){
        alert("恭喜你，注册成功");
    }else{
        alert("注册失败");
    }
        }
