var oEmail = document.getElementById('email');
var osucceed = document.getElementById('succeed');
var oPhone = document.getElementById('phone');
var oInput = document.getElementsByTagName('input');
var resEmail = [/^[a-zA-Z]\w{5,15}$/,/\w{5,15}/,/\w{5,15}/,/^1\d{10}$/,/9bqnxm/];
var flag = [null,null,null,null,null];
var oA = document.getElementById('endbon');


let ary = [...oInput];
ary.forEach(function(item,index,ary){
    item.onblur=function(){
        if(item.value.length && !resEmail[index].test(item.value)) {
            item.style.background="#ff7272";
            item.style.border="1px solid #b70000";
            flag[index] = false;
        }else if(item.value.length){           
            flag[index] = true;
            item.style.background="#fff";
            item.style.border="1px solid #ccc";
            if(index===2){
                if(item.value!==ary[index-1].value){
                    flag[index] = false;
                    item.style.background="#ff7272";
                    item.style.border="1px solid #b70000";
                }
            }
        }
                  
    }
});
oA.onclick = function(){
    for(var i = 0;i<flag.length;i++){
        if(!flag[i]){
            alert("输入错误，请重写");
            break;
        }
        console.log(1);
        if(i==flag.length-1){
            alert("你很棒，成了");
        }
    }
}