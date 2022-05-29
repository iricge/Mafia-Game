// Mafia and City roles
export let gameRolesArray = [
  "Doctor , دکتر",
  "Detective , کاراگاه",
  "Simple-citizen , شهروند ساده",
  "Simple-citizen , شهروند ساده",
  "Simple-citizen , شهروند ساده",
  "Simple-citizen , شهروند ساده",
  "Mafia , مافیا",
  "Mafia , مافیا",
  "Mafia , مافیا",
  "Mafia , مافیا",
];
// Random Npc names
let randomNames = [
  "Nelson Goff",
  "Lola-Rose Chung",
  "Alicia Stokes",
  "Lilia Hartley",
  "Zidan Forster",
  "Hajra Hunt",
  "Christos Nicholson",
  "Kyal Wall",
  "Faizah Barrow",
  "Buddy Cline",
  "Isaak Fry",
  "Reanna Little ",
  "Francesco Leal",
  "Taybah Moreno",
  "Janae Britton",
  "Cecil Sharpe",
  "Tai Lucero",
  "Aronas Mendez",
  "Ridwan Cross",
  "Brandy Wormald",
  "Faris Morrow",
  "Astrid Gray",
  "Traci Bender",
  "Rosalie Mcghee",
  "Alara Mcintyre",
  "Xander Cordova",
  "Mysha Mcnamara",
  "Cherish Bravo",
  "Nathalie Pickett",
  "Nisha Lyon",
  "Kiaan Richardson",
  "Aayush Hicks",
  "Kya Lopez",
  "Menaal Stacey",
  "Ailsa Tyler",
  "Boyd Jennings",
  "Kie Betts",
  "Musab Delgado",
  "Kimberley Morris",
  "Mira Warner",
  "Hettie Hammond",
  "Leigha Workman",
  "Dillan Swift",
  "Callie Reyes",
  "Sue Lucero",
  "Taya Whittaker",
  "Seren Thorne",
  "Randall Levine",
  "Malaikah Yang",
  "Shaquille Gentry",
  "Leia Childs",
  "Prisha Webb",
  "Korben Santiago",
  "Sanya Barton",
  "Izaan Baxter",
  "Hammad Guzman",
  "Waqar Lara",

]

let date = new Date();

let days = ["SUN","MON","TUE","WED","THU","FRI","SAT"]

// Random Name Generator
export function randomNpcsName(){
  let npcNameIndex;
  let npcRandomNameOutput;
  
  for (let i = 0; i < randomNames.length; i++){
     npcNameIndex = Math.floor(Math.random() * randomNames.length);
     npcRandomNameOutput = randomNames[npcNameIndex]
     randomNames.splice(npcNameIndex, 1);
     return npcRandomNameOutput
  }
}
// Returns the Date and time
export function dateAtTheMomment(){

  return `Date: ${date.getFullYear()}, ${date.getMonth()}, ${days[date.getDay()]} || Time: ${date.getHours()}, ${date.getMinutes()}, ${date.getSeconds()}`

}
// 