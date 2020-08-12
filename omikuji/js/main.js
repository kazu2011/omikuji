'use strict';

{
  const btn = document.getElementById('btn');
  const text = document.getElementById('explanation');

  btn.addEventListener('click',() => {
    //const luck =["大吉","吉","中吉","小吉","末吉"];
    //btn.textContent = luck[Math.floor(Math.random()*luck.length)];
    const n = Math.random();
    if(n<0.20){
      btn.textContent = "大吉";
      text.textContent = "今日のあなたは最高についています！";
    }　else if(n<0.40){
      btn.textContent = "吉";
      text.textContent = "まあまあかな！";
    }　else if(n<0.60){
      btn.textContent = "中吉";
      text.textContent = "あんまりついていない！";
    } else if(n<0.80){
      btn.textContent = "小吉";
      text.textContent = "外あるかな方が良いよ！絡まれるよ";
    }　else {
      btn.textContent = "凶";
      text.textContent = "どんまい！";
    }
  });









}
