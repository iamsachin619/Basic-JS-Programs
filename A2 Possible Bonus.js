//board game

function possibleBonus(a, b){
    if(a > b){
        return false;
    }else{
        if(b-a < 6 ){
            return true;
        }else{
            return false;
         }
    }
}