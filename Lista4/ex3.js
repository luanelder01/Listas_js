function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
   if (cpf.length !== 11) {
      return false;
    }
   const primeiroDigito = cpf.charAt(0);
    if (cpf.split('').every(digito => digito === primeiroDigito)) {
      return false;
    }
  
let soma = 0;
 for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    } 
    let primeiroDigitoVerificador = 11 - (soma % 11);
     if (primeiroDigitoVerificador >= 10) {
      primeiroDigitoVerificador = 0;
    }
   if (parseInt(cpf.charAt(9)) !== primeiroDigitoVerificador) {
      return false;
    }
          soma = 0;
 for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
 let segundoDigitoVerificador = 11 - (soma % 11);
    if (segundoDigitoVerificador >= 10) {
      segundoDigitoVerificador = 0;
    }
    if (parseInt(cpf.charAt(10)) !== segundoDigitoVerificador) {
      return false;
    }
    return true;
  }
    const cpfValido = '529.982.247-25';
  const cpfInvalido = '555.555.555-55';
  
  console.log(validarCPF(cpfValido)); 
  console.log(validarCPF(cpfInvalido));
  