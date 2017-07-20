// ==UserScript==
// @author          JAZ
// @name            so-clean
// @namespace       stackoverflow.com
// @include         *://stackoverflow.com/*
// @description     Hides "Hot Network Questions" on Stack Overflow
// @version         1.0.0
// ==/UserScript==

setInterval(function () {
  var subjects = document.getElementById('hot-network-questions');
  if (subjects !== undefined) {
    subjects.setAttribute("style", "display:none;");
    clearInterval();
  }
}, 500);