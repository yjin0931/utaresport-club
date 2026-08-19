/* =========================================================
   UTAR ESPORT CLUB
   TEAMS
========================================================= */


/* =========================================================
   TEAM DATA
========================================================= */

const teams = [

    /* =====================================================
       UTAR NOVA
    ====================================================== */

    {
        id: 1,

        name: "UTAR NOVA",

        game: "Valorant",

        category: "Competitive",

        captain: "Daniel Lim",

        members: 5,

        status: "Active",

        logo: "assets/games/valorant.png",

        description:
            "UTAR Nova is the club's Valorant competitive roster, focused on teamwork, tactical play and consistent improvement.",

        players: [

            {
                name: "Daniel Lim",
                role: "Duelist"
            },

            {
                name: "Ethan Wong",
                role: "Controller"
            },

            {
                name: "Joshua Tan",
                role: "Initiator"
            },

            {
                name: "Adrian Lee",
                role: "Sentinel"
            },

            {
                name: "Marcus Ho",
                role: "Flex"
            }

        ]

    },


    /* =====================================================
       UTAR TITAN
    ====================================================== */

    {
        id: 2,

        name: "UTAR TITAN",

        game: "Honor of Kings",

        category: "Competitive",

        captain: "Wei Jian Hao",

        members: 5,

        status: "Active",

        logo: "assets/games/honor-of-kings.png",

        description:
            "UTAR Titan is a competitive Honor of Kings roster focused on teamwork, objective control and coordinated play.",

        players: [

            {
                name: "Wei Jian Hao",
                role: "Jungler"
            },

            {
                name: "Chen Wei Ming",
                role: "Clash Lane"
            },

            {
                name: "Lim Jun Kai",
                role: "Mid Lane"
            },

            {
                name: "Tan Zhi Hao",
                role: "Farm Lane"
            },

            {
                name: "Ong Zi Xuan",
                role: "Roamer"
            }

        ]

    },


    /* =====================================================
       UTAR RIFT
    ====================================================== */

    {
        id: 3,

        name: "UTAR RIFT",

        game: "League of Legends",

        category: "Competitive",

        captain: "Marcus Tan",

        members: 5,

        status: "Active",

        logo: "assets/games/league-of-legends.png",

        description:
            "UTAR Rift represents the club in League of Legends with a focus on strategy, communication and team play.",

        players: [

            {
                name: "Marcus Tan",
                role: "Mid Laner"
            },

            {
                name: "Kevin Chong",
                role: "Jungler"
            },

            {
                name: "Aaron Goh",
                role: "Mid Laner"
            },

            {
                name: "Nicholas Lim",
                role: "Bot Laner"
            },

            {
                name: "Darren Yap",
                role: "Support"
            }

        ]

    },


    /* =====================================================
       UTAR STRIKE
    ====================================================== */

    {
        id: 4,

        name: "UTAR STRIKE",

        game: "EA FC",

        category: "Competitive",

        captain: "Ryan Wong",

        members: 3,

        status: "Active",

        logo: "assets/games/ea-fc.png",

        description:
            "UTAR Strike is the club's EA FC competitive team, focused on football strategy, passing and attacking play.",

        players: [

            {
                name: "Ryan Wong",
                role: "Attacker"
            },

            {
                name: "Brandon Teoh",
                role: "Midfielder"
            },

            {
                name: "Caleb Ong",
                role: "Defender"
            }

        ]

    },


    /* =====================================================
       UTAR IRON
    ====================================================== */

    {
        id: 5,

        name: "UTAR IRON",

        game: "Tekken 8",

        category: "Fighting",

        captain: "Jason Lee",

        members: 4,

        status: "Active",

        logo: "assets/games/tekken-8.png",

        description:
            "UTAR Iron is a fighting game roster representing the club in Tekken 8 competitions and practice sessions.",

        players: [

            {
                name: "Jason Lee",
                role: "Fighter"
            },

            {
                name: "Marcus Lim",
                role: "Fighter"
            },

            {
                name: "Dylan Wong",
                role: "Fighter"
            },

            {
                name: "Samuel Tan",
                role: "Fighter"
            }

        ]

    },


    /* =====================================================
       UTAR PULSE
    ====================================================== */

    {
        id: 6,

        name: "UTAR PULSE",

        game: "Valorant",

        category: "Development",

        captain: "Sofia Tan",

        members: 6,

        status: "Recruiting",

        logo: "assets/games/valorant.png",

        description:
            "UTAR Pulse is a development roster designed for members who want to build competitive experience.",

        players: [

            {
                name: "Sofia Tan",
                role: "Duelist"
            },

            {
                name: "Justin Low",
                role: "Duelist"
            },

            {
                name: "Marcus Wong",
                role: "Initiator"
            },

            {
                name: "Ryan Tan",
                role: "Sentinel"
            },

            {
                name: "Kelvin Goh",
                role: "Flex"
            },

            {
                name: "Lucas Cheng",
                role: "Initiator"
            }

        ]

    }

];



/* =========================================================
   DISPLAY TEAMS
========================================================= */

function displayTeams(data) {


    const grid =
        document.getElementById(
            "teamsGrid"
        );


    const empty =
        document.getElementById(
            "teamsEmpty"
        );


    const count =
        document.getElementById(
            "teamCount"
        );


    grid.innerHTML = "";


    count.textContent =
        `${data.length} ${
            data.length === 1
                ? "TEAM"
                : "TEAMS"
        }`;



    if (!data.length) {

        empty.style.display =
            "block";

        return;

    }


    empty.style.display =
        "none";



    data.forEach(
        function(team) {


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "team-card";


            card.dataset.game =
                team.game;


            card.dataset.id =
                team.id;



            card.innerHTML = `

                <div class="team-card-top">


                    <span class="team-game-label">

                        ${team.game}

                    </span>


                    <img
                        src="${team.logo}"
                        alt="${team.game} logo"
                        class="team-game-logo">


                </div>



                <div class="team-card-body">


                    <span class="team-category">

                        ${team.category}

                    </span>



                    <h3 class="team-name">

                        ${team.name}

                    </h3>



                    <p class="team-game">

                        ${team.game}

                    </p>



                    <div class="team-meta">


                        <div>

                            <span>
                                CAPTAIN
                            </span>

                            <strong>
                                ${team.captain}
                            </strong>

                        </div>



                        <div>

                            <span>
                                MEMBERS
                            </span>

                            <strong>
                                ${team.members}
                            </strong>

                        </div>


                    </div>



                    <button
                        class="team-view"
                        data-id="${team.id}">

                        VIEW TEAM

                        <span>
                            →
                        </span>

                    </button>


                </div>

            `;


            grid.appendChild(card);

        }
    );

}



/* =========================================================
   FILTER
========================================================= */

let currentGame =
    "all";



function filterTeams() {


    const search =
        document
            .getElementById(
                "teamSearch"
            )
            .value
            .trim()
            .toLowerCase();



    const result =
        teams.filter(
            function(team) {


                const searchMatch =

                    team.name
                        .toLowerCase()
                        .includes(search)

                    ||

                    team.game
                        .toLowerCase()
                        .includes(search)

                    ||

                    team.captain
                        .toLowerCase()
                        .includes(search);



                const gameMatch =

                    currentGame === "all"

                    ||

                    team.game ===
                    currentGame;



                return (
                    searchMatch &&
                    gameMatch
                );

            }
        );


    displayTeams(result);

}



/* =========================================================
   SEARCH
========================================================= */

document
    .getElementById(
        "teamSearch"
    )
    .addEventListener(
        "input",
        filterTeams
    );



/* =========================================================
   FILTER BUTTONS
========================================================= */

$(".game-filter").on(
    "click",
    function() {


        $(".game-filter")
            .removeClass(
                "active"
            );


        $(this)
            .addClass(
                "active"
            );


        currentGame =
            $(this).data(
                "game"
            );


        filterTeams();

    }
);



/* =========================================================
   OPEN TEAM MODAL
========================================================= */

function openTeam(id) {


    const team =
        teams.find(
            function(item) {

                return item.id === id;

            }
        );



    if (!team) {

        return;

    }



    /* =====================================================
       BASIC TEAM INFORMATION
    ====================================================== */

    $("#modalGameLogo")
        .attr(
            "src",
            team.logo
        );


    $("#modalGameLogo")
        .attr(
            "alt",
            team.game + " logo"
        );


    $("#modalCategory")
        .text(
            team.category
        );


    $("#modalTeamName")
        .text(
            team.name
        );


    $("#modalGame")
        .text(
            team.game
        );


    $("#modalDescription")
        .text(
            team.description
        );


    $("#modalCaptain")
        .text(
            team.captain
        );


    $("#modalMembers")
        .text(
            team.members
        );


    $("#modalStatus")
        .text(
            team.status
        );



    /* =====================================================
       TEAM ROSTER
    ====================================================== */

    const roster =
        $("#modalTeamPlayers");


    roster.empty();



    team.players.forEach(
        function(player, index) {


            const playerRow = `

                <div class="team-roster-player">


                    <span
                        class="roster-number">

                        ${String(
                            index + 1
                        ).padStart(
                            2,
                            "0"
                        )}

                    </span>


                    <div
                        class="roster-player-info">


                        <strong>

                            ${player.name}

                        </strong>


                        <span>

                            ${player.role}

                        </span>


                    </div>


                    ${
                        player.name ===
                        team.captain

                        ?

                        `
                        <span
                            class="roster-captain">

                            CAPTAIN

                        </span>
                        `

                        :

                        ""
                    }


                </div>

            `;


            roster.append(
                playerRow
            );

        }
    );



    /* =====================================================
       LOCAL STORAGE
    ====================================================== */

    localStorage.setItem(
        "selectedTeam",
        team.name
    );


    localStorage.setItem(
        "selectedGame",
        team.game
    );



    /* =====================================================
       SHOW MODAL
    ====================================================== */

    $("#teamModal")
        .addClass(
            "is-open"
        );

}



/* =========================================================
   TEAM CARD / VIEW BUTTON
========================================================= */

$(document).on(
    "click",
    ".team-card",
    function(event) {


        const button =
            $(event.target)
                .closest(
                    ".team-view"
                );


        if (button.length) {


            openTeam(
                Number(
                    button.data(
                        "id"
                    )
                )
            );


            return;

        }



        openTeam(
            Number(
                $(this).data(
                    "id"
                )
            )
        );

    }
);



/* =========================================================
   CLOSE MODAL
========================================================= */

function closeTeam() {

    $("#teamModal")
        .removeClass(
            "is-open"
        );

}



$("#modalClose")
    .on(
        "click",
        closeTeam
    );


$("#modalCloseButton")
    .on(
        "click",
        closeTeam
    );



$("#teamModal")
    .on(
        "click",
        function(event) {


            if (
                event.target === this
            ) {

                closeTeam();

            }

        }
    );



/* =========================================================
   ESC KEY
========================================================= */

$(document).on(
    "keydown",
    function(event) {


        if (
            event.key ===
            "Escape"
        ) {

            closeTeam();

        }

    }
);



/* =========================================================
   INITIAL DISPLAY
========================================================= */

displayTeams(
    teams
);



$("#loadGamesButton").on(
    "click",
    function() {

        const button =
            $(this);


        button
            .prop(
                "disabled",
                true
            )
            .text(
                "LOADING..."
            );


        $("#apiLoading")
            .text(
                "Fetching games from the API..."
            );


        $.ajax({

            url:
                "https://www.freetogame.com/api/games",

            method:
                "GET",

            dataType:
                "json",


            success:
                function(data) {

                    const games =
                        data
                            .sort(
                                function() {

                                    return (
                                        Math.random() -
                                        0.5
                                    );

                                }
                            )
                            .slice(
                                0,
                                3
                            );


                    const container =
                        $("#apiGames");


                    container.empty();


                    games.forEach(
                        function(game) {

                            const gameCard = `

                                <article
                                    class="api-game-card">

                                    <img
                                        src="${game.thumbnail}"
                                        alt="${game.title}">


                                    <div
                                        class="api-game-content">

                                        <span>
                                            ${game.genre}
                                        </span>


                                        <h3>
                                            ${game.title}
                                        </h3>


                                        <p>
                                            ${game.short_description}
                                        </p>


                                        <a
                                            href="${game.game_url}"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="team-view">

                                            VIEW GAME

                                            <span>
                                                →
                                            </span>

                                        </a>

                                    </div>

                                </article>

                            `;


                            container.append(
                                gameCard
                            );

                        }
                    );


                    $("#apiLoading")
                        .text(
                            "Games successfully loaded from the REST API."
                        );

                },


            error:
                function() {

                    $("#apiLoading")
                        .text(
                            "Unable to load games. Please try again."
                        );

                },


            complete:
                function() {

                    button
                        .prop(
                            "disabled",
                            false
                        )
                        .text(
                            "LOAD OTHER GAMES"
                        );

                }

        });

    }
);