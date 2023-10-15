class Produto {
     constructor(codigo, nome, preco, quantidadeEstoque) {
      this.codigo = codigo;
      this.nome = nome;
      this.preco = preco;
      this.quantidadeEstoque = quantidadeEstoque;
    }
  
    exibirInformacoes() {
      return {
        codigo: this.codigo,
        nome: this.nome,
        preco: this.preco,
        quantidadeEstoque: this.quantidadeEstoque,
      };
    }
  }
  

  const produtos = [
    new Produto(1, "Leite", 3.99, 20),
    new Produto(2, "Carne", 7.49, 25),
    new Produto(3, "Biscoito", 2.99, 19),
  ];
  
  function buscarProdutoPorNomeEPreco(arrayProdutos, nomeProduto, precoProduto) {
    for (const produto of arrayProdutos) {
        if (produto.nome === nomeProduto && produto.preco === precoProduto) {
        return produto.exibirInformacoes();
      }
    }
    return 'Produto não cadastrado';
  }
  
     const nomeBuscado = "Produto B";
  const precoBuscado = 7.49;
  
    const informacoesDoProduto = buscarProdutoPorNomeEPreco(produtos, nomeBuscado, precoBuscado);
  console.log(informacoesDoProduto);  