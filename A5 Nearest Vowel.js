//nearest vowel
function nearestVowel(str) {
  
    //indexing of alphabets and vowels
    var alphabets = 'abcdefghijklmnopqrstuvwxyz';
    var alphabetsIndices = {};
    for (var i = 1; i <= alphabets.length; i++) {
        alphabetsIndices[alphabets[i -1]] = i;
    }
    var vowels = 'aeiou';
    var vowelIndices = {};
    for (var i = 0; i < vowels.length; i++) {
        
            vowelIndices[vowels[i]] = alphabetsIndices[vowels[i]];
        
    }
    // console.log(vowelIndices,alphabetsIndices)


    //if input is a vowel throw the vowel
    for(let vowels in vowelIndices){
        if(str === vowels){
            return str;
        }
    }

    //find nearest upper and lower vowels
    let ud,ld
    for(let vowel in vowelIndices){
        // console.log(alphabetsIndices[str],vowelIndices[vowel])
        if(alphabetsIndices[str] > vowelIndices[vowel]){
            ld = vowel;
        }else{
            ud = vowel;
            break
        }

    }

    //found upper nearest and lower nearest vowel
    // console.log(ud,ld)
    // find nearest vowel by checking whose diffrence is more
    if(Math.abs(alphabetsIndices[str] - vowelIndices[ud]) < Math.abs(vowelIndices[ld] - alphabetsIndices[str])){
        return ud;
    }else{
        return ld;
    }
}
