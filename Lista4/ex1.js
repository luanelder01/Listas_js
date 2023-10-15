function converterReal(valor, moeda) {
    const taxas = {
      USD: 5.35,
      EUR: 6.38,
      ARS: 0.056,
    }
  
    if (moeda in taxas) {
      const taxaDeCambio = taxas[moeda];
      const valorConvertido = valor * taxaDeCambio;
      return valorConvertido;
    } else {
      return "Impossivel converter";
    }
  }
  
  
  
  
  
  
    const valorEmUSD = 15;
  const valorConvertidoEmBRLUSD = converterReal(valorEmUSD, "USD");
  console.log(`${valorEmUSD} em dolar, ${valorConvertidoEmBRLUSD} em real`);
  
    const valorEmEUR = 300;
  const valorConvertidoEmBRLEUR = converterReal(valorEmEUR, "EUR");
  console.log(`${valorEmEUR} em euro, ${valorConvertidoEmBRLEUR} em real`);
  
    const valorEmARS = 250;
  const valorConvertidoEmBRLARS = converterReal(valorEmARS, "ARS");
  console.log(`${valorEmARS} em peso argentino, ${valorConvertidoEmBRLARS} em real`);