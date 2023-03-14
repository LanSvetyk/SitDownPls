const btns = document.getElementsByTagName('button');
console.log(btns);
let listBtns = Array.from(btns)
listBtns.forEach(btn => {
btn.setAttribute("buttonrole", "button");
});


