
// Creare un array di oggetti: ogni oggetto descriverà     Es: 26/03/21
// una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// function bicicletta(){
//   let arrBicycle =
//  [
//    {
//      'nome': 'Bike',
//      'peso': 50
//    },
//    {
//      'nome': 'Bike',
//      'peso': 29
//    },
//    {
//      'nome': 'Bike',
//      'peso': 56
//    },
//    {
//      'nome': 'Bike',
//      'peso': 25
//    }
//  ]
//
//  let smallBike = Number.MAX_SAFE_INTEGER;
//  for ( let i = 0; i < arrBicycle.length; i++) {
//   // console.log(arrBicycle[i]);
//
//   const peso = arrBicycle[i]['peso'];
//   // console.log(peso);
//   if (peso < smallBike) {
//    smallBike = peso;
//
//   }
//
//  }
//  console.log('La bicicletta che ha un peso minore, pesa: ', smallBike +'g');
// }
//
// function init(){
//  bicicletta();
// }
//
// $(document).ready(init);



//Secondo esercizio
// Creare un array di oggetti di squadre di calcio.   Es: 26/03/21
// Ogni squadra avrà diverse proprietà:
// nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare,
// le altre saranno tutte settate a 0.

// function es1(){
//
//   let teamFootball =
//   [
//     {
//       'nome': 'Roma',
//       'puntiFatti': 0,
//       'falliSubiti':0
//     },
//     {
//       'nome': 'Lazio',
//       'puntiFatti': 0,
//        'falliSubiti':0
//     },
//     {
//       'nome': 'Fiorentina',
//       'puntiFatti': 0,
//        'falliSubiti':0
//     },
//     {
//       'nome': 'Sassuolo',
//       'puntiFatti': 0,
//        'falliSubiti':0
//     }
//   ]
//     // console.log(teamFootball);
//   // console.log(teamFootball[0]['nome']);  per entrare nello specifico singolo, poichè non ho un for e quindi non posso usare la teamFootball[i];
//
//   for (let i = 0; i < teamFootball.length; i++) {
//     // console.log(teamFootball[i]['puntiFatti']);
//     // console.log(teamFootball[i]['falliSubiti']);
//    const accessArray  = teamFootball[i];
//    accessArray['puntiFatti'] = getRandom(1, 100);
//    accessArray['falliSubiti'] = getRandom(1, 100);
//  }
//
//
//
//
//  // Usando la destrutturazione creiamo un nuovo array
//  // i cui elementi contengono solo nomi e falli subiti
//  // e stampiamo tutto in console.
//  const array = [];
//  for (let i=0;i<teamFootball.length;i++) {
//    const accessArray  = teamFootball[i];
//    let { puntiFatti, falliSubiti  } = accessArray;
//    let resObj = { puntiFatti, falliSubiti};
//    array.push(resObj);
//  }
//   console.log(teamFootball);
//   console.log(array);
//
// }
//
// // Generare numeri random al posto degli 0 nelle proprietà:
// // punti fatti e falli subiti
// function getRandom(min, max) {
//   let numMin = min;
//   let numMax = max;
//   let rnd = Math.floor(Math.random()* numMax) + numMin;
//   // console.log(rnd);
//   return rnd;
// }
//
//
//
// function init(){
//  es1();
//
// }
// $(document).ready(init);





// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

function myFunction(){
  const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  var indMin = arr[3];
  var indMax = arr[7];
  // console.log(arr);


  //FILTER
  // const newArray = arr.filter(item => item >= indMin && item <= indMax );
  // console.log(newArray);


  //FOREACH
  const newArray = [];
  arr.forEach((item, i) => {
  if(item >= indMin && item <= indMax){
    newArray.push(item);
  }
  });
  console.log(newArray);

}

$(myFunction);
