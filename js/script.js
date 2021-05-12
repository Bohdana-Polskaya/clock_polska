"use strict";

const deg = 6;
const hour = document.querySelector("#arrow_hour");
const minutes = document.querySelector("#arrow_minute");
const second = document.querySelector("#arrow_second");

setInterval(() => {
  let day = new Date();
  let actual_hour = day.getHours() * 30;
  let actual_minutes = day.getMinutes() * deg;
  let actual_second = day.getSeconds() * deg;

  hour.style.transform = `rotateZ(${actual_hour + actual_minutes / 12}deg)`;
  minutes.style.transform = `rotateZ(${actual_minutes}deg)`;
  second.style.transform = `rotateZ(${actual_second}deg)`;
});
