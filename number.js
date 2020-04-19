//KEY
//2="yu"
//3="gi"
//5="oh"

function fizzer(n){
  let resukt=[];
  for (let i=1;<n+1++){
    if((i % 5==0)&&(i%3==0)&&(i%2==0)){
     result.push('yu-gi-oh');
    } else if ((i % 5 ==0) && (i%3==0)){
     result.push('gi-oh');
    } else if ((i % 5 == 0) && (i % 2 == 0)) {
     result.push('yu-oh');
    } else if ((i % 3 == 0) && (i % 2 == 0)) {
     result.push('yu-gi');
    }else if (i % 5 == 0) {
     result.push('oh');
    }else if (i % 3 == 0) {
     result.push('gi');
    }else if (i % 2 == 0) {
     result.push('yu');   
    }else{
     result.push(i);   
    }    
   }   
    console.log(result);
}
fizzer(30);