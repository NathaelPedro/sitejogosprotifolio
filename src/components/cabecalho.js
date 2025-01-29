function adicionarEstilo() {
    const estilo = document.createElement("link");
    estilo.rel = "stylesheet";
    estilo.type = "text/css";
    estilo.href = "./src/components/cabecalho.css";
    document.head.appendChild(estilo);
}

function criarCabecalho() {
    const topo = document.createElement("header");
    topo.id = "topo";
    topo.classList.add("topo");
    document.body.prepend(topo);
    return topo;
}

function adicionarLogo(topo) {
    const logoDiv = document.createElement("div");
    logoDiv.id = "logo";
    logoDiv.classList.add("logo");
    logoDiv.innerHTML = `
        <h1>
            <img src="./src/components/Logo_imagem.png" alt="Logo da empresa" />
        </h1>
    `;

    
    logoDiv.addEventListener("click", () => {
        window.location.href = "index.html";
    });

    topo.appendChild(logoDiv);
}


function adicionarAbas(topo) {
    const abasDiv = document.createElement("nav");
    abasDiv.id = "abas";
    abasDiv.classList.add("abas");

    const lista = document.createElement("ul");
    lista.id = "aba";
    lista.classList.add("aba");

    const itens = [
        { texto: "Home", link: "index.html" },
        { texto: "Jogos", link: "index.html" },
        { texto: "Reviews", link: "index.html" },
        { texto: "Comunidades", link: "index.html" }
    ];

    itens.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("aba");

        const a = document.createElement("a");
        a.classList.add("aba");
        a.href = item.link;
        a.textContent = item.texto;

        li.appendChild(a);
        lista.appendChild(li);
    });

    abasDiv.appendChild(lista);
    topo.appendChild(abasDiv);
}

function adicionarLore(topo) {
    const loreDiv = document.createElement("div");
    loreDiv.id = "lore";
    loreDiv.classList.add("lore");

    const loginButton = document.createElement("button");
    loginButton.id = "loginButton";
    loginButton.classList.add("loginRegister");
    loginButton.textContent = "Entrar";


    loreDiv.appendChild(loginButton);

    topo.appendChild(loreDiv);
}

function inicializarCabecalho() {
    adicionarEstilo();
    const topo = criarCabecalho();
    adicionarLogo(topo);
    adicionarAbas(topo);
    adicionarLore(topo);
}

inicializarCabecalho();
