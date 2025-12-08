const imgPantera = document.getElementById("pantera");
const imagem = document.getElementById("img_info");
const nome = document.getElementsByTagName("h1")[0];
const info = document.getElementById("info_pet_selecionado");

const alteraPantera = () => {
  imagem.src = "assets/pantera1.png";
  nome.textContent = "Pantera";
  info.textContent =
    "Pantera é uma gatinha carinhosa e brincalhona. Ela adora carinho e é muito sociável com outros gatos. Procura uma família que lhe dê muito amor e atenção.";
};

const alteraScooby = () => {
  imagem.src = "assets/scooby2.png";
  nome.textContent = "Scooby";
  info.textContent =
    "Scooby é um cão leal e protetor. Ama crianças e é muito obediente.Precisa de espaço para correr e brincar. Ideal para famílias ativas.";
};

const alteraThor = () => {
  imagem.src = "assets/thor1.png";
  nome.textContent = "Thor";
  info.textContent =
    "Thor é um cão cheio de energia e lealdade. Adora brincar e estar perto da família, sempre demonstrando carinho e proteção. Procura um lar onde possa receber amor e ter bastante espaço para gastar sua energia.";
};

const alteraGarfield = () => {
  imagem.src = "assets/garfield1.png";
  nome.textContent = "Garfield";
  info.textContent =
    "Garfield é um gato independente mas carinhoso. Gosta de explorar e é muito curioso. Ideal para quem quer um companheiro aventureiro.";
};
