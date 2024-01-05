function adicionar() {
  //recuperar os valores do formulário (nome,quantidade e valor)
  let produto = document.getElementById("produto").value;
  //separar o nome e o valor (estão juntos no mesmo id)
  //aqui separamos por oq esta antes e depois do ifen
  let nomeProduto = produto.split("-")[0]; //pega oq esta na primeira posição (antes do ifen)
  let valorUnitario = produto.split("R$")[1]; //pega oq esta na segunda posição (depois do R$)
  let quantidade = document.getElementById("quantidade").value;
  // alert(nomeProduto);
  // alert(valorUnitario);
  // alert(produto.value)
  // alert(quantidade.value);
  //calcular o preço subtotal
  let preco = quantidade * valorUnitario; //calcula o valor total do iten
  // alert(preco);
  //adicionar ao carrinho
  let carrinho = document.getElementById("lista-produtos"); //id da section q representa o carrinho
  carrinho.innerHTML =
    carrinho.innerHTML +
    `<section class="carrinho__produtos__produto"> 
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`; //adicionar um novo na lista junto ao existente
  //atualizar o valor total
}

function limpar() {

}