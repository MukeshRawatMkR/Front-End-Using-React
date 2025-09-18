export function getMaskedString(originalString, guessedLetters) {
    guessedLetters = guessedLetters.map(letter =>letter.toUpperCase());//to make it case insensitive
    
    let guessedLetterSet=new Set(guessedLetters);
   const result = originalString.toUpperCase().split('').map(char=>{
        if(guessedLetterSet.has(char)){
            return char;
        }
        else {
            return '_';
        }
    });

    return result.join(' ');

}
    
 
    

