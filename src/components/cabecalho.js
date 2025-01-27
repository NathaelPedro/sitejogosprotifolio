const head = document.head;
const body = document.body;

const estilo = "<link rel='stylesheet' type='text/css' href='./src/components/cabecalho.css'/>";
head.innerHTML += estilo;

const topo = document.createElement("div");
topo.setAttribute("id", "topo");
topo.setAttribute("class", "topo");
body.prepend(topo);

const logo = `
    <div id='logo' class='logo'> 
        <h1 id='logo'>
            <img src="../src/components/logoSite.png" alt="Logo">
        </h1>
    </div>
`;
topo.innerHTML += logo;

const abas = `
    <div id='abas' class='abas'>
        <ul id='aba' class='aba'>
            <li class='aba'><a class='aba' href='index.html'>Home</a></li>
            <li class='aba'><a class='aba' href='index.html'>Jogos</a></li>
            <li class='aba'><a class='aba' href='index.html'>Reviews</a></li>
            <li class='aba'><a class='aba' href='index.html'>Comunidades</a></li>
        </ul>
    </div>
`;
topo.innerHTML += abas;

const lore = `
    <div id='lore' class='lore'>
        <button id='login' class='loginRegister'>Login</button>
        <button id='register' class='loginRegister'>Register</button>
    </div>
`;
topo.innerHTML += lore;
