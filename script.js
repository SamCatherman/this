document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#this");
  btn.addEventListener("click", () => appendThis());

  const thisDiv = document.querySelector("#whatThis");

  function appendThis() {
    let vidEl = document.createElement("iframe");
    vidEl.src = "https://www.youtube.com/embed/aSAuddBgyMs";
    vidEl.width = "300";
    vidEl.height = "200";
    thisDiv.appendChild(vidEl);
  }
});

class WhatThis {
  whatisthis() {
    console.log(this);
    return this;
  }
}

let zis = new WhatThis();
zis.whatisthis();

function ConstructThis(name) {
  this.name = name;
  this.whatDis = function(name) {
    console.log(`Hello ${name}, this is ${this}`);
  };
}

let instance = new ConstructThis("Person");
instance.whatDis(this);

console.log(`View source here: ${"https://github.com/SamCatherman/this"}`);
