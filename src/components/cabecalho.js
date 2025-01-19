const head=document.head
const body=document.body

const estilo="<link rel='stylesheet' type='text/css' href='./src/components/cabecalho.css'/>"
head.innerHTML+=estilo

const topo=document.createElement("div")
topo.setAttribute("id","topo")
topo.setAttribute("class","topo")
body.prepend(topo)

const cabeca=
    "<div id='logo' class='logo'>"+
        "<h1>Hello World</h1>"+
    "</div>"
topo.innerHTML+=cabeca