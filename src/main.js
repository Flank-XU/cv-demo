let demo = document.querySelector("#demo");
let style = document.querySelector("#style");
let string1 = `
/* 大家好，这是我的一份个人简历说明
* 请大家观看
* 谢谢大家
* 接下来我加样式了*/

/*首先，做一个框*/
#div1{
    width:200px;
    height:200px;
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);}
/*做一个圆,并上色为黑白*/

#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*添加双文鱼*/
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    background: #000;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}


/*我的太极已经做完了，你觉得如何*/
`;

let string2 = "";
let n = 0;
let step = () => {
  setTimeout(() => {
    if (string1[n] === "\n") {
      string2 += "<br>";
    } else if (string1[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string1[n];
    }

    demo.innerHTML = string2;
    style.innerHTML = string1.substring(0, n);
    window.scrollTo(0,9999)
    demo.scrollTo(0,9999)
    n += 1;
    if (n < string1.length) {
      step();
    }
  }, 0);
};
step();
