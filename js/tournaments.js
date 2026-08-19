/* =========================================================
   TOURNAMENT DATA
========================================================= */

const tournaments = [

    {
        id: 1,
        name: "UTAR Valorant Cup 2026",
        game: "Valorant",
        image: "assets/games/valorant.png",
        date: "01 September 2026",
        participants: "8 Teams",
        format: "5 vs 5",
        prize: "RM 300",
        status: "Upcoming",
        description:
            "A competitive Valorant tournament where team put their teamwork, strategy and sharp aim to the test. Pick your agent and fight for the glory!"
    },

    {
        id: 2,
        name: "UTAR EA FC Championship",
        game: "EA FC",
        image: "assets/games/ea-fc.png",
        date: "12 September 2026",
        participants: "16 Players",
        format: "1 vs 1",
        prize: "RM 200",
        status: "Upcoming",
        description:
            "An EA FC tournament where players compete one-on-one to prove their football skills. Take control of the pitch and score your way to victory!"
    },

    {
        id: 3,
        name: "UTAR HOK Cup 2026",
        game: "Honor of Kings",
        image: "assets/games/honor-of-kings.png",
        date: "21 August 2026",
        participants: "8 Teams",
        format: "5 vs 5",
        prize: "RM 600",
        status: "Ongoing",
        description:
            "A Honor of Kings tournament where teams battle to prove their game strategy and teamwork. Time to choose your hero and lead your team to the victory!"
    },

    {
        id: 4,
        name: "LOL Masters Cup",
        game: "League of Legends",
        image: "assets/games/league-of-legends.png",
        date: "28 September 2026",
        participants: "8 Teams",
        format: "5 vs 5",
        prize: "RM 300",
        status: "Upcoming",
        description:
            "A Lengeu of Legends tournament where teams to shows their teamwork. Choose your lengend, choose your master and show your confidence!"
    },

    {
        id: 5,
        name: "TEKKEN 8: Campus Battle Royale",
        game: "TEKKEN 8",
        image: "assets/games/tekken-8.png",
        date: "12 August 2026",
        participants: "16 Players",
        format: "1 vs 1",
        prize: "RM 250",
        status: "Completed",
        description:
            "A Tekken 8 tournament where players battle one-on-one to prove their fighting skills. Choose your fighter and fight your way to victory!"
    }

];



/* =========================================================
   CURRENT FILTER
========================================================= */

let currentStatus =
    sessionStorage.getItem("tournamentFilter") || "all";



/* =========================================================
   DISPLAY TOURNAMENTS
========================================================= */

function displayTournaments() {

    const searchText =
        $("#tournamentSearch")
            .val()
            .trim()
            .toLowerCase();


    /* Filter the tournament list */

    const filteredTournaments =
        tournaments.filter(function (tournament) {

            /* Check tournament status */

            const statusMatch =
                currentStatus === "all" ||
                tournament.status === currentStatus;


            /* Check tournament name */

            const searchMatch =
                tournament.name
                    .toLowerCase()
                    .includes(searchText)

                ||

                tournament.game
                    .toLowerCase()
                    .includes(searchText);


            return statusMatch && searchMatch;

        });


    /* Clear the old tournament cards */

    $("#tournamentsGrid").empty();


    /* Update number of tournaments */

    $("#tournamentCount").text(

        filteredTournaments.length +

        (
            filteredTournaments.length === 1
                ? " TOURNAMENT"
                : " TOURNAMENTS"
        )

    );


    /* If there are no results */

    if (filteredTournaments.length === 0) {

        $("#tournamentEmpty").show();

        return;

    }


    /* Hide no-result message */

    $("#tournamentEmpty").hide();


    /* Create tournament cards */

    filteredTournaments.forEach(function (tournament) {

        const statusClass =
            tournament.status.toLowerCase();


        const card = `

            <article
                class="tournament-card"
                data-game="${tournament.game}">

                <!-- Tournament Card Top -->

                <div class="tournament-card-top">

                <span
                    class="tournament-status ${statusClass}">
                    ${tournament.status}
                </span>

                <img
                    src="${tournament.image}"
                    alt="${tournament.game}"
                    class="tournament-game-image">

            </div>


                <!-- Tournament Card Body -->

                <div class="tournament-card-body">

                    <h3>
                        ${tournament.name}
                    </h3>


                    <p class="tournament-date">

                        ${tournament.date}

                    </p>


                    <!-- Game -->

                    <div class="game-line">

                        <span>
                            GAME
                        </span>

                        <strong>
                            ${tournament.game}
                        </strong>

                    </div>


                    <!-- Tournament Information -->

                    <div class="tournament-meta">

                        <div>

                            <span>
                                PARTICIPANTS
                            </span>

                            <strong>
                                ${tournament.participants}
                            </strong>

                        </div>


                        <div>

                            <span>
                                PRIZE
                            </span>

                            <strong>
                                ${tournament.prize}
                            </strong>

                        </div>


                        <div>

                            <span>
                                MATCH FORMAT
                            </span>

                            <strong>
                                ${tournament.format}
                            </strong>

                        </div>


                        <div>

                            <span>
                                STATUS
                            </span>

                            <strong>
                                ${tournament.status}
                            </strong>

                        </div>

                    </div>


                    <!-- View Details -->

                    <button
                        class="tournament-view"
                        data-id="${tournament.id}">

                        VIEW DETAILS

                        <span>
                            →
                        </span>

                    </button>

                </div>

            </article>

        `;


        $("#tournamentsGrid").append(card);

    });

}



/* =========================================================
   TOURNAMENT FILTER
========================================================= */

$(".tournament-filter").on(
    "click",
    function () {

        /* Remove active class from all buttons */

        $(".tournament-filter")
            .removeClass("is-active");


        /* Add active class to clicked button */

        $(this)
            .addClass("is-active");


        /* Get the selected status */

        currentStatus =
            $(this).data("status");


        /* Save filter in sessionStorage */

        sessionStorage.setItem(
            "tournamentFilter",
            currentStatus
        );


        /* Display filtered tournaments */

        displayTournaments();

    }
);



/* =========================================================
   SEARCH
========================================================= */

$("#tournamentSearch").on(
    "input",
    function () {

        displayTournaments();

    }
);



/* =========================================================
   VIEW TOURNAMENT DETAILS
========================================================= */

$(document).on(
    "click",
    ".tournament-view",
    function () {

        /* Get tournament ID */

        const tournamentID =
            Number(
                $(this).data("id")
            );


        /* Find the selected tournament */

        const tournament =
            tournaments.find(
                function (item) {

                    return item.id === tournamentID;

                }
            );


        /* Stop if tournament cannot be found */

        if (!tournament) {

            return;

        }


        /* Put tournament information into modal */

        $("#modalTournamentName")
            .text(tournament.name);


        $("#modalDescription")
            .text(tournament.description);


        $("#modalGame")
            .text(tournament.game);


        $("#modalDate")
            .text(tournament.date);


        $("#modalParticipants")
            .text(tournament.participants);


        $("#modalFormat")
            .text(tournament.format);


        $("#modalPrize")
            .text(tournament.prize);

        $("#modalStatus")
            .text(tournament.status);


        $("#modalStatusDetail")
            .text(tournament.status);


        /* Open modal */

        $("#tournamentModal")
            .addClass("is-open");

        $("body")
            .css("overflow", "hidden");

    }
);



/* =========================================================
   CLOSE MODAL
========================================================= */

function closeTournamentModal() {

    $("#tournamentModal")
        .removeClass("is-open");


    $("body")
        .css("overflow", "");

}



/* Top CLOSE button */

$("#modalClose").on(
    "click",
    function () {

        closeTournamentModal();

    }
);



/* Bottom CLOSE button */

$("#modalCloseButton").on(
    "click",
    function () {

        closeTournamentModal();

    }
);



/* =========================================================
   CLICK OUTSIDE MODAL TO CLOSE
========================================================= */

$("#tournamentModal").on(
    "click",
    function (event) {

        if (event.target === this) {

            closeTournamentModal();

        }

    }
);



/* =========================================================
   ESC KEY TO CLOSE
========================================================= */

$(document).on(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeTournamentModal();

        }

    }
);



/* =========================================================
   RESTORE SESSION FILTER
========================================================= */

/*
   These are the only valid filters.
*/

const validFilters = [
    "all",
    "Upcoming",
    "Ongoing",
    "Completed"
];


if (!validFilters.includes(currentStatus)) {

    currentStatus = "all";

}


/* Remove active class */

$(".tournament-filter")
    .removeClass("is-active");


/* Restore selected filter */

$(
    `.tournament-filter[data-status="${currentStatus}"]`
)
    .addClass("is-active");



/* =========================================================
   FIRST PAGE LOAD
========================================================= */

displayTournaments();