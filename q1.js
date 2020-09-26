console.log("Compression");

var string1 = "abaasass";
var array1 = string1.split("");
console.log(array1);

function question1(string){    
    var output = string.split("");
    //console.log(output);
    //console.log(output.length);

    var first = output[0];
    var newString = "";
    while(output.length>0){
        var curLength = output.length;
        var count = 0;
        first = output[0];
        for(var i = 0 ;i <curLength;i++){
            if(output[i]==first){
                count++;
            }
            else{
                break;
            }
        }
        if(count>1){
            newString = newString.concat('',first);
            newString = newString.concat('',count);
            
            while(count>0){               
                output.shift();
                count--;
            }
        }    
        else if(count ==1){          
            newString = newString.concat('',first);
            output.shift();
        }   
    }//end while
    console.log("newString is :",newString);

}    
const str1 = 'Hello';
const str2 = 2;

console.log(str1.concat('', str2));
// expected output: "Hello World"
question1(string1);
question1("aaaabbbbcddaaaaeeee");