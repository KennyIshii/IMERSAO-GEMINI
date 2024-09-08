function regeneracao() {
  // Array com diferentes imagens do Doutor
  const imagensDoutor = [
    "assets/Doutor1.jpeg",
    "assets/Doutor2.jpeg",
    "assets/Doutor3.jpeg",
    "assets/Doutor4.jpeg",
    "assets/Doutor5.jpeg",
    "assets/Doutor6.jpeg",
    "assets/Doutor7.jpeg",
    "assets/Doutor8.jpeg",
    "assets/Doutor9.jpeg",
    "assets/DoutorGuerra.jpeg",
    "assets/Doutor10.jpeg",
    "assets/Doutor11.jpeg",
    "assets/Doutor12.jpeg",
    "assets/Doutor13.jpeg",
    "assets/Doutor14.jpeg",
    // Adicione mais imagens aqui
  ];

  // Índice aleatório para escolher uma imagem
  const indiceAleatorio = Math.floor(Math.random() * imagensDoutor.length);

 // Atualiza o atributo src da imagem
  document.getElementById("anjoImagem").src = imagensDoutor[indiceAleatorio];
}

function pesquisar() {
  // Loga uma mensagem no console para indicar que a função foi chamada

  const termoPesquisa = document.getElementById("pesquisa").value.toLowerCase();
  const palavrasBusca = termoPesquisa.split(' '); //irá separar as palavras da busca
  
  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  

  const alienEncontrado = dados.filter(alien => {
  const tituloMinusculo = alien.titulo.toLowerCase();
  const termoPesquisaMinuscula = alien.descricao.toLowerCase();
  const tagsMinusculas = alien.tags.map(tag => tag.toLowerCase());
    return palavrasBusca.some(palavra => tituloMinusculo.includes(palavra) || termoPesquisaMinuscula.includes(palavra) ||
        tagsMinusculas.some(tag => tag.includes(palavra))
        );
  });

  // Itera sobre cada dado no array de dados

    if (!termoPesquisa) {
      resultados = `<p>Nenhum alienígena foi inserido. Por favor, tente novamente.</p>
      <a href="../../../../index.html">
      <button class="button">
        <h3 href="#" target="_blank"> Voltar
      </h3>
      <img src="galeria_aliens/voltar.png" alt="Ícone">
    </button>
    </a> 
      `;

    } else if (alienEncontrado.length > 0){
    // Cria um novo elemento HTML para cada dado, formatando os dados dentro do HTML
        alienEncontrado.forEach(alien => {
        resultados += `
          <div class="item-resultado">
            <h2 href="#" target="_blank"> ${alien.titulo} </h2>
            <h3 href="#" target="_blank"> ${alien.titulo2} </h3>
            <img class = "image-container" id="anjoImagem" src=${alien.img} onclick="contarCliques()">
            <audio controls>
          <source src="${alien.audio}" type="audio/mpeg">
          Seu navegador não suporta o elemento audio.
        </audio>
            <p class="descricao-meta"> ${alien.descricao}<br>
            Planeta: ${alien.planeta}</p>
            <a href=${alien.link} target="_blank">Mais informações</a>
          </div>
         <a href="../../../../index.html">
          <button class="button">
            <h3 href="#" target="_blank"> Voltar
          </h3>
          <img src="galeria_aliens/voltar.png" alt="Ícone">
        </button>
        </a>  
          `;
        });
      } else {
          resultados = `<p>Este alienígena não foi catalogado.</p>
          <a href="../../../../index.html">
            <button class="button">
              <h3 href="#" target="_blank"> Voltar
            </h3>
            <img src="galeria_aliens/voltar.png" alt="Ícone">
          </button>
          </a> 
          `;
      }
  

 section.innerHTML = resultados; 
  
}

  

  

  // Atualiza o conteúdo do elemento com o ID "resultados-pesquisa" com os resultados gerados

  // Função para contar os cliques  
let contadorCliques = 0;

    function contarCliques() {
    contadorCliques++;
    if (contadorCliques === 10) {
        window.location.href = "https://youtu.be/cwdbLu_x0gY"; // Substitua por seu caminho para o vídeo
    }
}



// Obtém uma referência ao elemento HTML com o ID "resultados-pesquisa"
let section = document.getElementById("resultados-pesquisa");

// Loga a referência ao elemento no console para verificação
console.log(section)