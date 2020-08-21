

var userAge =[17,19,16,20];

var is_subscrib = [false,false,true,true];

for (var index=0; index < userAge.length;index++) {
    if((userAge[index] < 18) && (is_subscrib[index]==false)) {
        console.log("user is younger than 18 and not subscrib");
    } 
    
    else if ((userAge[index]>=18) && (is_subscrib[index]==false)) {
        console.log("user is 18 and older and not subscrib");
    }
    
     else if ((userAge[index]<18) && (is_subscrib[index]==true)) {
        console.log("user is youger than 18 and  subscrib");
    } 
    
    else if ((userAge[index]>=18) && (is_subscrib[index]==true)) {
        console.log("user is 18 and older and  subscrib");
    } 
    else {
        console.log("error");
    }
    console.log(index);

    
    
    
}









