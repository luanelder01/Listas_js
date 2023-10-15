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
      } else {
        console.log("Sem quantidade suficiente.");
        return 0;
      }
    }
  
        exibirInformacoes() {
      console.log(`Referencia: ${this.codigo}`);
      console.log(`Nome: ${this.nome}`);
      console.log(`Valor Unitário: R$ ${this.preco.toFixed(2)}`);
    }
  }

  
    const produto1 = new Produto(1, "Embalagem 12Leites", 35.55, 99);
  console.log("Informações:");
  produto1.exibirInformacoes();
  
  
  console.log("Compra 4unidades de Embalagem 12Leites:");
  
  
  const precoTotalCompra = produto1.comprarProduto(4);
  
    if (precoTotalCompra > 0) {
    console.log(`Preço Total da Compra: R$ ${precoTotalCompra.toFixed(2)}`);
  }      else {
    console.log("Falha.");
  }
  console.log(`Quantidade Estoque Embalagem de Leite: ${produto1.quantidadeEstoque}`);