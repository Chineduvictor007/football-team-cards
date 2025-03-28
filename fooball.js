const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("coachName");
const playerCards = document.getElementById("players");
const playerDropdownList = document.getElementById("player1");



// Team data
const myFavoriteFootballTeam = {
    team: "Argentina",
    sport: "Football",
    year: "1986",
    headCoach: {
        coachName: "Carlos Bilardo"
    },
    isWorldCupWinner: true,
    players: [
        { name: "Thiago Almada", position: "forward", number: 1, nickname: null },
        { name: "Nico Paz", position: "midfielder", number: 2, nickname: null },
        { name: "Máximo Perrone ", position: "midfielder", number: 3, nickname: "El Bocha" },
        { name: "Rodrigo De Paul ", position: "midfielder", number: 10, nickname: "El Pibe de Oro" },
        { name: "Ángel Correa", position: "forward", number: 11, nickname: "The Philosopher of Football" },
        { name: "Nicolás González", position: "forward", number: 11, nickname: null },
        { name: "Giuliano Simeone", position: "forward", number: 11, nickname: null },
        { name: "Santiago Castro ", position: "forward", number: 11, nickname: null },
        { name: "Benjamín Domínguez ", position: "forward", number: 11, nickname: null },
        { name: "Leonardo Balerdi", position: "defender", number: 15, nickname: null },
        { name: "Nicolás Tagliafico", position: "defender", number: 15, nickname: null },
        { name: "Germán Pezzella ", position: "defender", number: 15, nickname: "El loco" },
        { name: "Juan Foyth", position: "defender", number: 15, nickname: null },
        { name: "Facundo Medina", position: "defender", number: 15, nickname: null },
        { name: "Walter Benítez ", position: "goalkeeper", number: 1, nickname: null },
        { name: "Gerónimo Rulli", position: "goalkeeper", number: 1, nickname: null },
        { name: "Emiliano Martínez", position: "goalkeeper", number: 1, nickname: null }
    ]
};

Object.freeze(myFavoriteFootballTeam);

const { sport, team, year, players } = myFavoriteFootballTeam;
const coach = myFavoriteFootballTeam.headCoach.coachName;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coach;

// Function to display player cards
function setPlayersCards(arr = players) {
    playerCards.innerHTML = arr.map(({ name, position, number, nickname }) =>
        `
    <div class="player-card">
      <h2>${name}</h2>
      <p>Position: ${position}</p>
      <p>Number: ${number}</p>
      <p>Nickname: ${nickname ? nickname : "N/A"}</p>
    </div>
    `
    ).join("");
}

setPlayersCards();

// Event listener for filtering
playerDropdownList.addEventListener("change", (e) => {
    const filter = e.target.value;
    let filteredPlayers;

    if (filter === "All") {
        filteredPlayers = players;
    } else if (filter === "nickname") {
        filteredPlayers = players.filter(player => player.nickname);
    } else {
        filteredPlayers = players.filter(player => player.position === filter);
    }

    setPlayersCards(filteredPlayers);
});