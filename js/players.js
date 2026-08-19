/* =========================================================
   UTAR ESPORT CLUB
   PLAYERS
========================================================= */

const players = [

    {
        id: 1,
        name: "Daniel Lim",
        initials: "DL",
        team: "UTAR NOVA",
        game: "Valorant",
        role: "Duelist",
        captain: true,
        status: "Active",
        description:
            "Daniel leads UTAR Nova and focuses on aggressive plays, communication and team coordination."
    },

    {
        id: 2,
        name: "Ethan Wong",
        initials: "EW",
        team: "UTAR NOVA",
        game: "Valorant",
        role: "Controller",
        captain: false,
        status: "Active",
        description:
            "Ethan supports the team through strategic utility usage and map control."
    },

    {
        id: 3,
        name: "Joshua Tan",
        initials: "JT",
        team: "UTAR NOVA",
        game: "Valorant",
        role: "Initiator",
        captain: false,
        status: "Active",
        description:
            "Joshua focuses on gathering information and creating opportunities for the team."
    },

    {
        id: 4,
        name: "Adrian Lee",
        initials: "AL",
        team: "UTAR NOVA",
        game: "Valorant",
        role: "Sentinel",
        captain: false,
        status: "Active",
        description:
            "Adrian provides defensive support and maintains control of important areas."
    },

    {
        id: 5,
        name: "Marcus Ho",
        initials: "MH",
        team: "UTAR NOVA",
        game: "Valorant",
        role: "Flex",
        captain: false,
        status: "Active",
        description:
            "Marcus adapts his playstyle according to the team's strategy."
    },


    {
        id: 6,
        name: "Wei Jian Hao",
        initials: "WJ",
        team: "UTAR TITAN",
        game: "Honor of Kings",
        role: "Jungler",
        captain: true,
        status: "Active",
        description:
            "Wei Jian Hao leads UTAR Titan and focuses on map control, objectives and coordinated rotations."
    },

    {
        id: 7,
        name: "Chen Wei Ming",
        initials: "CW",
        team: "UTAR TITAN",
        game: "Honor of Kings",
        role: "Clash Lane",
        captain: false,
        status: "Active",
        description:
            "Chen Wei Ming specialises in lane pressure and supporting the team's objectives."
    },

    {
        id: 8,
        name: "Lim Jun Kai",
        initials: "LJ",
        team: "UTAR TITAN",
        game: "Honor of Kings",
        role: "Mid Lane",
        captain: false,
        status: "Active",
        description:
            "Lim Jun Kai focuses on mid-lane control and creating opportunities during team fights."
    },

    {
        id: 9,
        name: "Tan Zhi Hao",
        initials: "TZ",
        team: "UTAR TITAN",
        game: "Honor of Kings",
        role: "Farm Lane",
        captain: false,
        status: "Active",
        description:
            "Tan Zhi Hao provides consistent damage and focuses on team-fight positioning."
    },

    {
        id: 10,
        name: "Ong Zi Xuan",
        initials: "OZ",
        team: "UTAR TITAN",
        game: "Honor of Kings",
        role: "Roamer",
        captain: false,
        status: "Active",
        description:
            "Ong Zi Xuan supports the team through roaming and coordinated engagements."
    },


    {
        id: 11,
        name: "Marcus Tan",
        initials: "MT",
        team: "UTAR RIFT",
        game: "League of Legends",
        role: "Top Laner",
        captain: true,
        status: "Active",
        description:
            "Marcus leads UTAR Rift and focuses on strategic decision-making."
    },

    {
        id: 12,
        name: "Kevin Chong",
        initials: "KC",
        team: "UTAR RIFT",
        game: "League of Legends",
        role: "Jungler",
        captain: false,
        status: "Active",
        description:
            "Kevin focuses on jungle pathing, objectives and supporting lanes."
    },

    {
        id: 13,
        name: "Aaron Goh",
        initials: "AG",
        team: "UTAR RIFT",
        game: "League of Legends",
        role: "Mid Laner",
        captain: false,
        status: "Active",
        description:
            "Aaron controls the mid lane and contributes to the team's map strategy."
    },

    {
        id: 14,
        name: "Nicholas Lim",
        initials: "NL",
        team: "UTAR RIFT",
        game: "League of Legends",
        role: "Bot Laner",
        captain: false,
        status: "Active",
        description:
            "Nicholas focuses on damage output and team-fight positioning."
    },

    {
        id: 15,
        name: "Darren Yap",
        initials: "DY",
        team: "UTAR RIFT",
        game: "League of Legends",
        role: "Support",
        captain: false,
        status: "Active",
        description:
            "Darren supports the team through vision control and engagements."
    },


    {
        id: 16,
        name: "Ryan Wong",
        initials: "RW",
        team: "UTAR STRIKE",
        game: "EA FC",
        role: "Attacker",
        captain: true,
        status: "Active",
        description:
            "Ryan leads UTAR Strike and focuses on attacking play and match strategy."
    },

    {
        id: 17,
        name: "Brandon Teoh",
        initials: "BT",
        team: "UTAR STRIKE",
        game: "EA FC",
        role: "Midfielder",
        captain: false,
        status: "Active",
        description:
            "Brandon focuses on midfield control and creating scoring opportunities."
    },

    {
        id: 18,
        name: "Caleb Ong",
        initials: "CO",
        team: "UTAR STRIKE",
        game: "EA FC",
        role: "Defender",
        captain: false,
        status: "Active",
        description:
            "Caleb focuses on defensive organisation."
    },


    {
        id: 19,
        name: "Jason Lee",
        initials: "JL",
        team: "UTAR IRON",
        game: "Tekken 8",
        role: "Fighter",
        captain: true,
        status: "Active",
        description:
            "Jason leads UTAR Iron and focuses on matchup knowledge and timing."
    },

    {
        id: 20,
        name: "Marcus Lim",
        initials: "ML",
        team: "UTAR IRON",
        game: "Tekken 8",
        role: "Fighter",
        captain: false,
        status: "Active",
        description:
            "Marcus focuses on neutral game and adapting to opponents."
    },

    {
        id: 21,
        name: "Dylan Wong",
        initials: "DW",
        team: "UTAR IRON",
        game: "Tekken 8",
        role: "Fighter",
        captain: false,
        status: "Active",
        description:
            "Dylan specialises in offensive pressure and matchup practice."
    },

    {
        id: 22,
        name: "Samuel Tan",
        initials: "ST",
        team: "UTAR IRON",
        game: "Tekken 8",
        role: "Fighter",
        captain: false,
        status: "Active",
        description:
            "Samuel focuses on defensive play and punishment."
    },


    {
        id: 23,
        name: "Sofia Tan",
        initials: "ST",
        team: "UTAR PULSE",
        game: "Valorant",
        role: "Controller",
        captain: true,
        status: "Recruiting",
        description:
            "Sofia leads the development roster and helps newer members improve."
    },

    {
        id: 24,
        name: "Justin Low",
        initials: "JL",
        team: "UTAR PULSE",
        game: "Valorant",
        role: "Duelist",
        captain: false,
        status: "Recruiting",
        description:
            "Justin is developing his entry-fragging and competitive skills."
    },

    {
        id: 25,
        name: "Marcus Wong",
        initials: "MW",
        team: "UTAR PULSE",
        game: "Valorant",
        role: "Initiator",
        captain: false,
        status: "Recruiting",
        description:
            "Marcus focuses on information gathering and utility usage."
    },

    {
        id: 26,
        name: "Ryan Tan",
        initials: "RT",
        team: "UTAR PULSE",
        game: "Valorant",
        role: "Sentinel",
        captain: false,
        status: "Recruiting",
        description:
            "Ryan focuses on defensive setups and map awareness."
    },

    {
        id: 27,
        name: "Kelvin Goh",
        initials: "KG",
        team: "UTAR PULSE",
        game: "Valorant",
        role: "Flex",
        captain: false,
        status: "Recruiting",
        description:
            "Kelvin is developing his ability to switch between roles."
    },

    {
        id: 28,
        name: "Lucas Cheng",
        initials: "LC",
        team: "UTAR PULSE",
        game: "Valorant",
        role: "Initiator",
        captain: false,
        status: "Recruiting",
        description:
            "Lucas is building his competitive experience and communication."
    }

];


/* =========================================================
   DISPLAY
========================================================= */

function displayPlayers(data) {

    const grid =
        document.getElementById(
            "playersGrid"
        );


    const empty =
        document.getElementById(
            "playersEmpty"
        );


    const count =
        document.getElementById(
            "playerCount"
        );


    grid.innerHTML = "";


    count.textContent =
        `${data.length} ${
            data.length === 1
                ? "PLAYER"
                : "PLAYERS"
        }`;


    if (!data.length) {

        empty.style.display =
            "block";

        return;

    }


    empty.style.display =
        "none";


    data.forEach(
        function(player) {


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "player-card";


            card.dataset.game =
                player.game;


            card.dataset.id =
                player.id;


            card.innerHTML = `

                <div class="player-card-top">

                    <span class="player-game-label">
                        ${player.game}
                    </span>

                    ${
                        player.captain
                            ? `
                                <span
                                    class="player-captain-label">

                                    CAPTAIN

                                </span>
                              `
                            : ""
                    }

                    <div class="player-avatar">
                        ${player.initials}
                    </div>

                </div>


                <div class="player-content">

                    <div class="player-role">
                        ${player.role}
                    </div>


                    <h3 class="player-name">
                        ${player.name}
                    </h3>


                    <div class="player-team">
                        ${player.team}
                    </div>


                    <div class="player-card-footer">

                        <span class="player-status">
                            ● ${player.status}
                        </span>


                        <button
                            class="player-view"
                            data-id="${player.id}">

                            VIEW →

                        </button>

                    </div>

                </div>

            `;


            grid.appendChild(card);

        }
    );

}


/* =========================================================
   FILTER
========================================================= */

let playerGame =
    "all";


function filterPlayers() {

    const search =
        document
            .getElementById(
                "playerSearch"
            )
            .value
            .trim()
            .toLowerCase();


    const result =
        players.filter(
            function(player) {


                const textMatch =

                    player.name
                        .toLowerCase()
                        .includes(search)

                    ||

                    player.team
                        .toLowerCase()
                        .includes(search)

                    ||

                    player.game
                        .toLowerCase()
                        .includes(search)

                    ||

                    player.role
                        .toLowerCase()
                        .includes(search);


                const gameMatch =

                    playerGame ===
                    "all"

                    ||

                    player.game ===
                    playerGame;


                return (
                    textMatch &&
                    gameMatch
                );

            }
        );


    displayPlayers(result);

}


$("#playerSearch").on(
    "input",
    filterPlayers
);


/* =========================================================
   GAME BUTTONS
========================================================= */

$(".player-game-chip").on(
    "click",
    function() {

        $(".player-game-chip")
            .removeClass(
                "is-active"
            );


        $(this)
            .addClass(
                "is-active"
            );


        playerGame =
            $(this).data(
                "game"
            );


        filterPlayers();

    }
);


/* =========================================================
   OPEN MODAL
========================================================= */

function openPlayer(id) {

    const player =
        players.find(
            function(item) {

                return item.id === id;

            }
        );


    if (!player) {
        return;
    }


    $("#modalPlayerAvatar")
        .text(
            player.initials
        );


    $("#modalPlayerName")
        .text(
            player.name
        );


    $("#modalPlayerType")
        .text(
            player.captain
                ? "TEAM CAPTAIN"
                : "PLAYER"
        );


    $("#modalPlayerGame")
        .text(
            player.game
        );


    $("#modalPlayerDescription")
        .text(
            player.description
        );


    $("#modalPlayerTeam")
        .text(
            player.team
        );


    $("#modalPlayerRole")
        .text(
            player.role
        );


    $("#modalPlayerStatus")
        .text(
            player.status
        );


    localStorage.setItem(
        "selectedPlayer",
        player.name
    );


    localStorage.setItem(
        "selectedPlayerTeam",
        player.team
    );


    $("#playerModal")
        .addClass(
            "is-open"
        );

}


/* =========================================================
   CARD CLICK
========================================================= */

$(document).on(
    "click",
    ".player-card",
    function(event) {

        const button =
            $(event.target)
                .closest(
                    ".player-view"
                );


        const id =
            button.length
                ? Number(
                    button.data("id")
                  )
                : Number(
                    $(this).data("id")
                  );


        openPlayer(id);

    }
);


/* =========================================================
   CLOSE
========================================================= */

function closePlayer() {

    $("#playerModal")
        .removeClass(
            "is-open"
        );

}


$("#playerModalClose")
    .on(
        "click",
        closePlayer
    );


$("#playerModalCloseButton")
    .on(
        "click",
        closePlayer
    );


$("#playerModal")
    .on(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closePlayer();

            }

        }
    );


$(document).on(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closePlayer();

        }

    }
);


/* =========================================================
   INITIAL
========================================================= */

displayPlayers(players);