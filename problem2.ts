function ubahHuruf(sentence: string): string {
    const alphabetBob = 'KLMNOPQRSTUVWXYZABCDEFGHIJ';
    let result = '';
  
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
      const index = char.toUpperCase().charCodeAt(0) - 65;
  
      if (index >= 0 && index <= 25) {
        const newChar = alphabetBob[index];
        result += char === char.toUpperCase() ? newChar : newChar.toLowerCase();
      } else {
        result += char;
      }
    }
  
    return result;
  }
  
  console.log(ubahHuruf("SEPULSA OKE"));     // COZEVCK YUO
  console.log(ubahHuruf("ALTERRA ACADEMY")); // KVDOBBK KMKNOWI
  console.log(ubahHuruf("INDONESIA"));       // SXNYXOCSK
  console.log(ubahHuruf("GOLANG"));          // QYVKXQ
  console.log(ubahHuruf("PROGRAMMER"));      // ZBYQBKWWOB
  