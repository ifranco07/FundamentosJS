function wrapping(gifts) {
    const decorados = [];
    for(const gift of gifts){
      const tapaSuperior = '*'.repeat(gift.length +2);
      const tapaInferior = '*'.repeat(gift.length +2);
      decorados.push(`${tapaSuperior}\n*${gift}*\n${tapaInferior}`)
  
    }
    return decorados;
  }
  
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped[2])