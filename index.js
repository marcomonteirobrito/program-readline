const readline = require('readline')

const handleReadLine = readline && readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

handleReadLine.question(`Informe os dados : `, data => {

  function calcPetshop() {
    var info = data.split(" ");
    var date = info[0];
    var small = info[1];
    var big = info[2];

    var verifDate = function () {
      var verif = new Date(date);
      vfds = verif.getDay() == 0 || verif.getDay() == 6 ? true : false;
    }

    verifDate();

    var myCanHappy = function () {
      distance1 = 2;
      var smallPrice = 20;
      var bigPrice = 40;

      if (vfds == false) {
        total1 = (smallPrice * small) + (bigPrice * big);
      } else {
        total1 = ((smallPrice + (smallPrice * 0.2)) * small) + ((bigPrice + (bigPrice * 0.2)) * big);
      }
    };

    var goRex = function () {
      distance2 = 1.7;
      var smallPrice = 15;
      var bigPrice = 50;

      if (vfds == false) {
        total2 = (smallPrice * small) + (bigPrice * big);
      } else {
        total2 = ((smallPrice + 5) * small) + ((bigPrice + 5) * big);
      }
    };

    var chow = function () {
      distance3 = 0.8;
      var smallPrice = 30;
      var bigPrice = 45;
      total3 = (smallPrice * small) + (bigPrice * big);
    };

    myCanHappy();
    goRex();
    chow();

    var calcBest = function () {

      if (total1 < total2 && total1 < total3) {
        console.log(`Meu Canino Feliz é o melhor petshop, com o valor total dos banhos de R$ ${total1},00`);
      }
      else if (total2 < total1 && total2 < total3) {
        console.log(`Vai Rex é o melhor petshop, com o valor total dos banhos de R$ ${total2},00`);
      }
      else if (total3 < total1 && total3 < total2) {
        console.log(`ChowChawgas é o melhor petshop, com o valor total dos banhos de R$ ${total3},00`);
      } else {
        if (distance1 < distance2 && distance1 < distance3) {
          console.log(`Meu Canino Feliz é o melhor petshop, com o valor total dos banhos de R$ ${total1},00`);
        } else if (distance2 < distance1 && distance2 < distance3) {
          console.log(`Vai Rex é o melhor petshop, com o valor total dos banhos de R$ ${total2},00`);
        } else {
          console.log(`ChowChawgas é o melhor petshop, com o valor total dos banhos de R$ ${total3},00`);
        }
      }
    };

    calcBest();

  }

  calcPetshop();
  handleReadLine.close()

});



