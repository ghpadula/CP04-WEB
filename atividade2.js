function adicionarProduto(id, nome, valor, quantidade) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push({ id, nome, valor, quantidade });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    exibirCarrinho();
}

document.querySelectorAll('button').forEach(button => {       
    button.addEventListener('click', () => {
        const produtoId = Number(button.id);        
        let nome, valor, quantidade;

        switch (produtoId) {    
            case 1:
                nome = 'Camiseta';
                valor = 29.99;
                quantidade = 2;
                break;
            case 2:
                nome = 'Calça Jeans';
                valor = 99.90;
                quantidade = 1;
                break;
            case 3:
                nome = 'Tênis';
                valor = 149.90;
                quantidade = 1;
                break;
            default:
                return; 
        }

        adicionarProduto(produtoId,nome,valor,quantidade);

       /* let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        carrinho.push({ id: produtoId, nome, valor, quantidade });
        localStorage.setItem('carrinho', JSON.stringify(carrinho));*/
        exibirCarrinho();
    });
});

function removerProduto(id) {
   
    let carrinho = JSON.parse(localStorage.getItem('carrinho'));    
    carrinho = carrinho.filter(produto => produto.id !== id);    
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    exibirCarrinho();
}

function exibirCarrinho() {
   
    let carrinho = JSON.parse(localStorage.getItem('carrinho'));
    

    if (carrinho && carrinho.length > 0) {
               const listaProdutos = document.getElementById('lista-produtos');
        listaProdutos.innerHTML = '';

        carrinho.forEach(produto => {
            const li = document.createElement('li');
            li.innerHTML = `${produto.nome} - Quantidade: ${produto.quantidade} - Valor: R$ ${produto.valor.toFixed(2)}`;

            listaProdutos.appendChild(li);
        });
    } else {        
        const listaProdutos = document.getElementById('lista-produtos');
        listaProdutos.innerHTML = 'O carrinho está vazio!';
    }
}

exibirCarrinho();