class Produto {
    constructor(codigo, nome, preco, quantidadeEstoque) {
      this.codigo = codigo;
      this.nome = nome;
      this.preco = preco;
      this.quantidadeEstoque = quantidadeEstoque;
    }
  
    comprarProduto(quantidade) {
          if (quantidade <= this.quantidadeEstoque) {
        const precoTotal = quantidade * this.preco;
        this.quantidadeEstoque -= quantidade;
        return precoTotal;
      }      else {
        console.log("Sem a quantidade necessaria.");
             return 0;
      }
    }
  
    exibirInformacoes() {
      console.log(`Referencia: ${this.codigo}`);
      console.log(`Nome: ${this.nome}`);
      console.log(`Preço Unitário: R$ ${this.preco.toFixed(2)}`);
    }
  }
  

    
  
  const produtos = [
    new Produto(1, "Leite", 3.99, 20),
    new Produto(2, "Carne", 7.49, 25),
    new Produto(3, "Biscoito", 2.99, 19),
  ];

  let produtoMaiorPreco = produtos[0];
            for (const produto of produtos) {
         if (produto.preco > produtoMaiorPreco.preco) {
      produtoMaiorPreco = produto;
    }
  }
  
  console.log("Produto de maior preço:");
  produtoMaiorPreco.exibirInformacoes();
  

     let quantidadeTotalEstoque = 0;
        for (const produto of produtos) {
    quantidadeTotalEstoque += produto.quantidadeEstoque;
  }
  
  console.log(`Quantidade estoque geral: ${quantidadeTotalEstoque}`);