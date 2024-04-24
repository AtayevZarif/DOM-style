let title = document.createElement("h1")
let text = document.createTextNode(prompt("Ismingizni kiriting"))
title.appendChild(text)
let body = document.querySelector("body")
body.appendChild(title)

body.style.display = "flex";
body.style.height = "100vh";
body.style.background = "blue"
body.style.justifyContent = "center";
body.style.alignItems = "center";
title.style.color = "yellow"
title.style.fontSize = "72px"