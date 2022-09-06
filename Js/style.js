  let myText = "salah Abdelgied ...";
  let i = 0;

typeWriter = ()=> {
   if(i < myText.length) {
      document.querySelector('h1').innerHTML += myText.charAt(i);
      i++;
      setTimeout(typeWriter, 300);
   }
}
typeWriter();







//  typeWriter = ()=> {
//     document.getElementById('text').textContent = myText.slice(0,i);
//     i++

//     if(i > myText.length) {
//         i =1;
//     }
//  }

//  setInterval(function() {
//     typeWriter();
//  },300);


let menue = document.getElementById('menue');
let action = document.getElementById('action');

menue.addEventListener("click", ()=> {
   handelMenu();
});

handelMenu = ()=> {
   menue.classList.toggle('is-active');
   action.classList.toggle('is-active');
}


