let $ = document;
// DOM Elemnts
let playAmount = $.querySelector(".playeramountnum");
let playerAmountSubmit = $.querySelector(".gameexpl-submitbtn");
let gameMap = $.querySelector(".gamemap-locations");
let numberOfPlayersInput = $.querySelector(".gameexpl-usernuminputform");
let timerDis = $.querySelector(".gamepage-timer");
// Game Roles
let gameRoles = [
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
// Game Users
let gameMembers = [];
// Random Names for NPCS
let randomNpcsName = ()=>{
   let npcNameIndex;
   let npcRandomNameOutput;
   
   for (let i = 0; i < randomNames.length; i++){
      npcNameIndex = Math.floor(Math.random() * randomNames.length);
      npcRandomNameOutput = randomNames[npcNameIndex]
      randomNames.splice(npcNameIndex, 1);
      return npcRandomNameOutput
   }
}
// Randomized Roles for player
function roles(players) {
   let randomizer;
   let usersRole;

   for (let i = 0; i < players; i++) {
      randomizer = Math.floor(Math.random() * gameRoles.length);
      usersRole = gameRoles[randomizer];
      RolesToUsers(usersRole, randomNpcsName());
      gameRoles.splice(randomizer, 1);
   }

   userDataLocalStorage(gameMembers);
}
function RolesToUsers(role, name) {
   gameUser = {
      name: name,
      id: gameMembers.length + 1,
      role: role,
   };
   gameMembers.push(gameUser);
}
// Submit the number of players
function numberOfPlayersSubmit(){
    let numberOfPlayersNum = playAmount.value;
    let PLayerListArray = gameMembers;
    let numberOfPlayers;
 
    if (numberOfPlayersNum < 8 || numberOfPlayersNum > 10) {
       alert("please choose a number between 8 to 10");
    } else {
       gameDataLocalStorage(true, numberOfPlayersNum);
       numberOfPlayers = JSON.parse(localStorage.getItem("Number-of-players"));
       return roles(numberOfPlayers);
    }
}
// Saving Number of players and if the players are Ready
function gameDataLocalStorage(data, players) {
    let isPlayersReady = data;
    let NumberOfPlayers = JSON.stringify(localStorage.setItem("Number-of-players", players));
    let PlayersReadyState = JSON.stringify(
    localStorage.setItem("Readiness-Status", isPlayersReady)
   );
}
// Saving UserInfo
function userDataLocalStorage(playerList) {
   let usersData = localStorage.setItem("Player-list", JSON.stringify(playerList));
}
// Creates boxes and Building based on number of players
function buildingCreator() {
    let readinessStatus = JSON.parse(localStorage.getItem("Readiness-Status"));
    let numberOfPlayers = JSON.parse(localStorage.getItem("Player-list"));
    let buildingIdCounter = 0;
    let onLoadAnimationDelay = 50;
   
   if (readinessStatus) {
       numberOfPlayersInput.style.display = "none";
       numberOfPlayers.forEach((player) => {
         buildingIdCounter++;
         onLoadAnimationDelay += 100;
         gameMap.insertAdjacentHTML("beforeend",
            `<div class="buildings${buildingIdCounter} building"  data-aos="fade-left" data-aos-delay="${onLoadAnimationDelay}">
                <div class="gamepage-buildingboxes${buildingIdCounter} gamepage-buildingboxes">
                     <div class="gamepage-userinformation">
                         <img
                         src="../resource/images/thumbnails/image.jpg"
                         class="gamepage-userprofilepicture"
                         alt="userprofile"
                         />
                        <h3 class="gamepage-username">${player.name}</h3> 
                    </div>
                </div>
            </div>`
         );
      });
      let buildings = $.querySelectorAll(".building")
      console.log(buildings);
   } else {
      return console.log("no one is here");
   }
}
// Timer Counter
function timerCounter(seconds) {
  let timerSecs = seconds

  let timerCountDown = setInterval(()=>{
    timerSecs--;
    if(timerSecs <= 0){
      clearInterval(timerCountDown)
    }
    displayTimer(timerSecs)
  } , 1000) 
}
// Showing and Calculating the minutes and seconds
function displayTimer(sec){
  const minutes = Math.floor(sec / 60)
  const seconds = Math.floor(sec % 60) 
//   timerDis.innerHTML = `${ minutes < 10 ? "0" : "" }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}



playerAmountSubmit.addEventListener("click", numberOfPlayersSubmit)
window.addEventListener("load", buildingCreator());
