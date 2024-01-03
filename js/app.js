function adicionar() {
    //recuperar os valores do formulário (nome,quantidade e valor)
    let produto = document.getElementById('produto').value;
    //separar o nome e o valor (estão juntos no mesmo id) 
    //aqui separamos por oq esta antes e depois do ifen
    let nomeProduto = produto.split('-')[0]; //pega oq esta na primeira posição (antes do ifen)
    let valorUnitario = produto.split('R$')[1]; //pega oq esta na segunda posição (depois do R$)
    let quantidade = document.getElementById('quantidade');
    // alert(nomeProduto);
    // alert(valorUnitario);
    // alert(produto.value)
    // alert(quantidade.value);
    let preco = quantidade.value * valorUnitario; //calcula o valor total do iten
    // alert(preco);

    //calcular o preço, nossos subtotal 
    //adicionar ao carrinho
    //atualizar o valor total

}

function limpar() {

}