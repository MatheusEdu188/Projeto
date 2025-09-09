const formImg = document.getElementById("formImg");
const inputDescricao = document.getElementById("inputDescricao");
const dataInput = document.getElementById("data");

const publicacoes = document.querySelector(".publicacoes");
const pubButton = document.getElementById("pubButton");

let lista = JSON.parse(localStorage.getItem("publicacoes")) || [];


function renderItem(item, prepend = false) {
    const itemNovo = `
        <img class="postimg" src="${item.arquivoSelecionado}" alt="img">
        <p class="descricao">${item.descricao}</p>
        <p class="data">${item.dataSelecionada}</p>
    `;

    const novaDiv = document.createElement("div");
    novaDiv.classList.add("post");
    novaDiv.innerHTML = itemNovo;

    if (prepend) {
        publicacoes.prepend(novaDiv);
    } else {
        publicacoes.appendChild(novaDiv);
    }
}


lista.forEach(item => renderItem(item));


pubButton.addEventListener("click", () => {
    const descricao = inputDescricao.value;
    const dataSelecionada = dataInput.value;
    const arquivoSelecionado = formImg.files[0];

    if (!descricao || !dataSelecionada || !arquivoSelecionado) {
        alert("Preencha todos os campos antes de publicar!");
        return;
    }

    
    const reader = new FileReader();
    reader.onload = function(e) {
        const imgBase64 = e.target.result;

        const novoItem = {
            descricao,
            dataSelecionada,
            arquivoSelecionado: imgBase64
        };

        lista.unshift(novoItem);

        localStorage.setItem("publicacoes", JSON.stringify(lista));

        renderItem(novoItem, true);

        inputDescricao.value = "";
        dataInput.value = "";
        formImg.value = "";
    };

    reader.readAsDataURL(arquivoSelecionado);
});










const fecharbtn = document.querySelector(".fechar-btn")
const modalcontainer = document.querySelector(".modal-container")
const adcpost = document.querySelector("#adcpost")


fecharbtn.addEventListener("click", ()=>{
    modalcontainer.style.display = "none"
})

adcpost.addEventListener("click", ()=>{
    modalcontainer.style.display = "flex"
})











// carrosel



const imagens = [
    './assets/img/SGCAM_20241026_173851016.PORTRAIT.jpg',
    'assets/img/SGCAM_20241225_213002000.jpg',
    'assets/img/SGCAM_20240824_182811539.jpg'
];

let index = 0;
const imgElement = document.querySelector('.imgcarrosel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

prevBtn.addEventListener('click', () => {
    index = (index - 1 + imagens.length) % imagens.length;
    imgElement.src = imagens[index];
});

nextBtn.addEventListener('click', () => {
    index = (index + 1) % imagens.length;
    imgElement.src = imagens[index];
});
