 const qs1 = prompt("Who wrote the national anthem of Pakistan? \n A) Faiz Ahmed Faiz B) Hafeez Jalandhari ").toLocaleUpperCase()
 const qs2 = prompt("On which date did Pakistan come into existence? \n A) 14 August 1947 B) 15 August 1947 ").toLocaleUpperCase()
  const qs3 = prompt("What is the national bird of Pakistan? \n A) Bulbul B) Chakor ").toLocaleUpperCase()
   const qs4 = prompt("Which is the largest province of Pakistan by area? \n A) Punjab  B) Balochistan").toLocaleUpperCase()
    const qs5 = prompt("In which city is Minar-e-Pakistan located? \n A) Karachi B) Lahore ").toLocaleUpperCase()
  
     let pass= "pass"
     let fail= "fail"
    let score =0
   
   
    function quizy(){
         
        score +=1 

    }


    if (qs1=="B"){
        quizy()
    }


     if (qs2=="A"){
        quizy()
    }

     if (qs3=="B"){
        quizy()
    }

     if (qs4=="B"){
        quizy()
    }


     if (qs5=="B"){
        quizy()
    }

   
 
if  (score === 3 || score === 4 || score === 5){
    alert(`Your Total Score is ${score} Congratulations ${pass}`);

}
 else{
       alert(`Your Total Score is ${score} next try ${fail}`);

 }
    