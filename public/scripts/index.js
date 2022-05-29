//! ------------------------------------- Imports random Npc name , Roles array , Creation Date and time ------------------------------------- !\\
import { randomNpcsName , gameRolesArray , dateAtTheMomment } from "./somedata.js"
//! ------------------------------------- DOM elements ------------------------------------- !\\
let $ = document;

let playAmount = $.querySelector(".playeramountnum");
let playerAmountSubmit = $.querySelector(".gameexpl-submitbtn");
let gameMap = $.querySelector(".gamemap-locations");
let numberOfPlayersInput = $.querySelector(".gameexpl-usernuminputform");
let timerDis = $.querySelector(".gamepage-timer");
//! ------------------------------------- Randomized Roles for player ------------------------------------- !\\
let gameMembers = [];
// Generates a random role
function roles(players) {
   let usersRole;
   let userRoleIndex = Math.floor(Math.random() * gameRolesArray.length)
   for (let i = 0; i < players; i++) {
      usersRole = gameRolesArray[userRoleIndex];
      RolesToUsers(usersRole, randomNpcsName());
      gameRolesArray.splice(userRoleIndex, 1);
   }
   // userDataLocalStorage(gameMembers);
 }
//! ------------------------------------- Randomized Roles for player ------------------------------------- !\\

function RolesToUsers(role, name) {
   let gameUser = {
      name: name,
      id: gameMembers.length + 1,
      role: role,
      crationDate: dateAtTheMomment()
   };
   gameMembers.push(gameUser);
   console.log(gameUser);
}

//! ------------------------------------- Submit the number of players ------------------------------------- !\\

function numberOfPlayersSubmit(){
   let numberOfPlayersValue = playAmount.value;
   let numberOfPlayers;

   if (numberOfPlayersValue < 8 || numberOfPlayersValue > 10) {
      alert("please choose a number between 8 to 10");
   } else {
      // gameDataLocalStorage(true, numberOfPlayersNum);
      numberOfPlayers = 9;
      return roles(numberOfPlayers);
   }
}

playerAmountSubmit.addEventListener("click", (e)=>{
   e.preventDefault();
   numberOfPlayersSubmit()
})