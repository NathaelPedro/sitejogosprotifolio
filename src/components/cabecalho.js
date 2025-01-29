// Função para adicionar o estilo ao documento
function adicionarEstilo() {
    const estilo = document.createElement("link");
    estilo.rel = "stylesheet";
    estilo.type = "text/css";
    estilo.href = "./src/components/cabecalho.css";
    document.head.appendChild(estilo);
}

// Função para criar o elemento de cabeçalho
function criarCabecalho() {
    const topo = document.createElement("header");
    topo.id = "topo";
    topo.classList.add("topo");
    document.body.prepend(topo);
    return topo;
}

// Função para adicionar o logo no cabeçalho
function adicionarLogo(topo) {
    const logoDiv = document.createElement("div");
    logoDiv.id = "logo";
    logoDiv.classList.add("logo");
    logoDiv.innerHTML = `
        <h1>
            <img src="./src/components/Logo_imagem.png" alt="Logo da empresa" />
        </h1>
    `;
    topo.appendChild(logoDiv);
}

// Função para adicionar abas de navegação no cabeçalho
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

// Função para adicionar os botões de login e registro no cabeçalho
function adicionarLore(topo) {
    const loreDiv = document.createElement("div");
    loreDiv.id = "lore";
    loreDiv.classList.add("lore");

    // Botão de login
    const loginButton = document.createElement("button");
    loginButton.id = "loginButton";
    loginButton.classList.add("loginRegister");
    loginButton.textContent = "Login";

    // Botão de registro
    const registerButton = document.createElement("button");
    registerButton.id = "registerButton";
    registerButton.classList.add("loginRegister");
    registerButton.textContent = "Register";

    // Adicionando os botões ao contêiner
    loreDiv.appendChild(loginButton);
    loreDiv.appendChild(registerButton);

    topo.appendChild(loreDiv);
}

// Função principal para inicializar o cabeçalho
function inicializarCabecalho() {
    adicionarEstilo();
    const topo = criarCabecalho();
    adicionarLogo(topo);
    adicionarAbas(topo);
    adicionarLore(topo);
}

// Inicializa o cabeçalho ao carregar o script
inicializarCabecalho();
