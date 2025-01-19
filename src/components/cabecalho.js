const head=document.head
const body=document.body

const estilo="<link rel='stylesheet' type='text/css' href='./src/components/cabecalho.css'/>"
head.innerHTML+=estilo

const topo=document.createElement("div")
topo.setAttribute("id","topo")
topo.setAttribute("class","topo")
body.prepend(topo)

const logo=
    "<div id='logo' class='logo'>"+
        "<h1>Logo</h1>"+
    "</div>"
topo.innerHTML+=logo

const abas=
    "<div id='abas' class='abas'>"+
        "<ul>"+
            "<li><a href='index.html'>Home</a></li>"+
            "<li><a href='index.html'>Jogos</a></li>"+
            "<li><a href='index.html'>Reviews</a></li>"+
            "<li><a href='index.html'>Comunidades</a></li>"+
        "</ul>"+
    "</div>"
topo.innerHTML+=abas
    
const lore=
    "<div id='lore' class='lore'>"+
        "<button>Login</button>"+
        "<button>Register</button>"+
    "</div>"
topo.innerHTML+=lore

