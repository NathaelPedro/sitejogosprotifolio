const head=document.head
const body=document.body

const estilo1="<link rel='stylesheet' type='text/css' href='./src/components/rodape.css'/>"
head.innerHTML+=estilo1

const baixo=document.createElement("div")
baixo.setAttribute("id","baixo")
baixo.setAttribute("class","baixo")
body.prepend(baixo)

const pe=
    "<div id='roda' class='roda'>"+
        "<h1>Site criado por dois Acéfalos, Filipi & Pedro</h1>"+
    "</div>"
baixo.innerHTML+=pe