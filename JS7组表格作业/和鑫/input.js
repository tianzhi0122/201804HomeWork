//邮箱验证(6~18个字符，可使用字母、数字、下划线，需以字母开头)
let oInputs = document.getElementsByTagName('input');
let oUl = document.getElementsByClassName('register')[0];
let oLis = oUl.getElementsByTagName('li');
let oPs = oUl.getElementsByTagName('p');

let ary = []; //存放返回的结果进行注册判断

let reg1 = /^[a-zA-Z]\w{5,17}$/;
oInputs[0].onfocus = function () {

    oInputs[0].onblur = function () {
        /*if(oInput1.value==null){
         ary.push(false);
         return false;
         }*/
        let a = reg1.test(oInputs[0].value);
        if (a) {
            oPs[0].innerHTML = "邮箱输入正确";
            oLis[0].appendChild(oP1);
            this.style.backgroundColor = '#ffffff';
            // window.getComputedStyle(oP1,null)[backgroundColor]="green";
        } else {
            oPs[0].innerHTML = "邮箱输入错误";
            oLis[0].appendChild(oPs[0]);
            this.style.borderColor = "red";
            this.style.backgroundColor = '#cc9894';
        }
        ary.push(a);
    };

}();


//密码验证(6~16个字符，区分大小写)
let reg2 = /\w{6,16}/;
let secretM = oInputs[1].value;

oInputs[1].onfocus = function () {

    oInputs[1].onblur = function () {
        let b = reg2.test(oInputs[1].value);
        if (b) {
            oPs[1].innerHTML = "输入正确";
            oLis[1].appendChild(oPs[1]);
            this.style.backgroundColor = '#ffffff';
        } else {
            oPs[1].innerHTML = "输入错误";
            oLis[1].appendChild(oPs[1]);
            this.style.borderColor = "red";
            this.style.backgroundColor = '#cc9894';
        }
        ary.push(b);
    }

}();


//请再次填写密码

oInputs[2].onfocus = function () {

    oInputs[2].onblur = function () {
        let c = oInputs[1].value === oInputs[2].value ? true : false;
        if (c && oInputs[2].value !== '') {
            oPs[2].innerHTML = "密码输入正确";
            oLis[2].appendChild(oPs[2]);
            this.style.backgroundColor = '#ffffff';
        } else {
            oPs[2].innerHTML = "密码输入错误";
            oLis[2].appendChild(oPs[2]);
            this.style.borderColor = "red";
            this.style.backgroundColor = '#cc9894';
        }
        ary.push(c);
    }

}();


//忘记密码时，可以通过该手机号码快速找回密码
var reg3 = /^1\d{10}$/;

oInputs[3].onfocus = function () {

    oInputs[3].onblur = function () {
        let d = reg3.test(oInputs[3].value);
        if (d) {
            oPs[3].innerHTML = "手机号码正确";
            oLis[3].appendChild(oPs[3]);
            this.style.backgroundColor = '#ffffff';
        } else {
            oPs[3].innerHTML = "请输入正确手机号";
            oLis[3].appendChild(oPs[3]);
            this.style.borderColor = "red";
            this.style.backgroundColor = '#cc9894';
        }
        ary.push(d);
    }

}();


//验证码(请填写图片中的字符，不区分大小写)
// var reg4 = /(\d|[a-z]|A-Z){5}/i;
let reg4 = /dobyew/i;

let oBtn = document.getElementById('btn1');


oInputs[4].onfocus = function () {

    oInputs[4].onblur = function () {
        let e = reg4.test(oInputs[4].value);
        if (e) {
            oPs[4].innerHTML = "验证码输入正确";
            oLis[4].insertBefore(oPs[4], oBtn);
            this.style.backgroundColor = '#ffffff';
        } else {
            oPs[4].innerHTML = "验证码输入错误";
            oLis[4].insertBefore(oPs[4], oBtn);
            this.style.borderColor = "red";
            this.style.backgroundColor = '#cc9894';
        }
        ary.push(e);
    }

}();


//短信验证码
let reg5 = /^\d{4}$/i;

oInputs[5].onfocus = function () {

    oInputs[5].onblur = function () {
        let f = reg5.test(oInputs[5].value);

        if (f) {
            ary.push(f);
            this.style.backgroundColor = '#ffffff';
        } else {
            this.style.borderColor = "red";
            this.style.backgroundColor = 'red';
            this.style.backgroundColor = '#cc9894';
        }


    }

}();


let oA = document.getElementById('oA');
oA.onclick = function () {
    let num = ary.some(function (item) {
        return item === false;
    });
    if (num || ary.length === 0) {
        alert("注册失败");
    } else {
        alert("注册成功");
    }
};


//鼠标滑过


for (var i = 0; i < oInputs.length; i++) {
    ~(function () {
        oInputs[i].onmouseover = function () {
            this.style.borderColor = "green";
        };
        oInputs[i].onmouseout = function () {
            this.style.borderColor = "#999999"
        };
    })();

}






