async function Tabuada(numeroBase, numeroTab) {
  if (isNaN(numeroBase) || isNaN(numeroTab)) {
    return Promise.reject('O valor informado deve ser um número!!');
  }
  return numeroBase * numeroTab;
}
 
async function showTabuada(numeroTab) {
  try {
    console.log(`--- Realizando o cálculo da tabuada do ${numeroTab} ---`);
    
    let numeroBase = 1;
 
    while (numeroBase <= 10) {
      const resultado = await Tabuada(numeroBase, numeroTab);
      
      console.log(`${numeroBase} x ${numeroTab} = ${resultado}`);
      
      numeroBase++;
    }

    console.log("-----------------------------------------");
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
}
 
showTabuada(25);
 