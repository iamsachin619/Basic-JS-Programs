//Y2K problem

function Y2KConverter(year){
    if(year<35){
        return year+2000;
    }else{
        return year+1900;
    }
}