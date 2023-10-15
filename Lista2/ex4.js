function reajuste(salario) {
    let percentual;
    let novoSalario;
  
    if (salario <= 280) {
      percentual = 0.2;
    } else if (salario > 280 && salario <= 700) {
      percentual = 0.15;
    } else if (salario > 700 && salario <= 1500) {
      percentual = 0.1;
    } else {
      percentual = 0.05;
    }
  
    const valorAumento = salario * percentual;
    novoSalario = salario + valorAumento;
  
    return {
      salarioAntesReajuste: salario,
      valorAumento: valorAumento,
      novoSalario: novoSalario,
    };
  }
   const salarioAtual = 1599;
  
  const resultadoReajuste = reajuste(salarioAtual);
  
  console.log(`Salário: $ ${resultadoReajuste.salarioAntesReajuste.toFixed(2)}`);
  console.log(`Aumento: $ ${resultadoReajuste.valorAumento.toFixed(2)}`);
  console.log(`Novo salário: $ ${resultadoReajuste.novoSalario.toFixed(2)}`);
  