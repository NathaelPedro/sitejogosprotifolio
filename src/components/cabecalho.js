document.addEventListener("DOMContentLoaded", () => {
    // Cria o elemento de cabeçalho
    const cabecalho = document.createElement("header");

    // Adiciona uma classe ao cabeçalho
    cabecalho.classList.add("main-header");

    // Adiciona o conteúdo ao cabeçalho
    cabecalho.innerHTML = `
        <div class="logo"> 
                <h1>Logo</h1>
            </a>
        </div>
        <nav>
            <ul>
                <li><a href="#login">Login</a></li>
                <li><a href="#produtos">Produtos</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>`;


    // Insere o cabeçalho no corpo do documento, antes do conteúdo principal
    document.body.prepend(cabecalho);
});
