function caesarCipher(offset: number, input: string): string {
    let result = '';
  
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
  
      if (char === ' ') {
        result += ' ';
      } else {
        const asciiCode = char.charCodeAt(0);
        const isLowercase = asciiCode >= 97 && asciiCode <= 122;
        const shiftedAsciiCode = ((asciiCode - 97 + offset) % 26) + 97;
  
        result += String.fromCharCode(isLowercase ? shiftedAsciiCode : shiftedAsciiCode - 32);
      }
    }
  
    return result;
  }
  
  console.log(caesarCipher(3, "abc")); // def
  console.log(caesarCipher(2, "alta")); // cnvc
  console.log(caesarCipher(10, "alterraacademy")); // kvdobbkkmknowi
  console.log(caesarCipher(1, "abcdefghijklmnopqrstuvwxyz")); // bcdefghijklmnopqrstuvwxyza
  console.log(caesarCipher(1000, "abcdefghijklmnopqrstuvwxyz")); // mnopqrstuvwxyzabcdefghijkl
  