/*function palindome(str){
    let re=/[^A-Za-z0-9]/g;
    let lowRegStr=str.toLowerCase().replace(re,"");
    let reverseStr=lowRegStr.split("").reverse().join("");
    if(lowRegStr===reverseStr){
        console.log(`Palindome`);
    }else{
        console.log(`Not Palindome`);
    }
};
palindome("english");*/
 let form=document.querySelector('form');
 let name=document.querySelector('#name');
 let submit=document.querySelector('#submit');

 let palindome =function(name){
     if(name==name.split('').reverse().join('')){
         console.log(`${name} is Palindome`);
     }else{
         console.log(`${name} is not Palindome`);
     }
 };
submit.addEventListener('click',(event)=>{
    event.preventDefault();
    palindome(name.value);
});