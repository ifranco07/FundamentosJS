function wrapping(gifts) {
    //const decorados = [];
    //for(const gift of gifts){
      //const tapaSuperior = '*'.repeat(gift.length +2);
      //const tapaInferior = '*'.repeat(gift.length +2);
      //envueltos.push(`${tapaSuperior}\n*${gift}*\n${tapaInferior}`)
  
    //}
    //return envueltos;
    return gifts.map(gift =>{
      const tapas = '*'.repeat(gift.length + 2);
      return `${ tapas }\n*${ gift }*\n${ tapas }`;
    });
  }
  
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped[2])