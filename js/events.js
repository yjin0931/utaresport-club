/* =========================================================
   EVENT DATA
========================================================= */

const events = [

    {
        id: 1,

        name: "UTAR Valorant Friendly Match",

        type: "Friendly Match",

        image: "assets/events/friendlymatch.png",

        day: "03",

        month: "SEP",

        year: "2026",

        date: "03 September 2026",

        time: "11:30 AM - 4:30 PM",

        venue: "UTAR N102",

        description:
            "Get ready for an exciting day of Valorant friendly match! "
    },


    {
        id: 2,

        name: "LOL Gaming Night",

        type: "Social",

        image: "assets/events/gamingnight.png",

        day: "16",

        month: "SEP",

        year: "2026",

        date: "16 September 2026",

        time: "7:00 PM - 9:00 PM",

        venue: "UTAR ICT Gaming Room",

        description:
            "Take a break from classes and enjoy a casual gaming night with others!"
    },


    {
        id: 3,

        name: "Welcome to Esports Workshop",

        type: "Workshop",

        image: "assets/events/workshop.png",

        day: "18",

        month: "SEP",

        year: "2026",

        date: "18 September 2026",

        time: "2:00 PM - 4:30 PM",

        venue: "UTAR IDK2",

        description:
            "New to esports? Let's step into esport world. Learn about competitive gaming, tournament formats, teamwork and the esports industry in this beginner-friendly workshop."
    },


    {
        id: 4,

        name: "Meet & Play Day",

        type: "Social",

        image: "assets/events/playday.png",

        day: "20",

        month: "SEP",

        year: "2026",

        date: "20 September 2026",

        time: "2:00 PM - 5:00 PM",

        venue: "UTAR ICT Gaming Room",

        description:
            "Meet new friends and enjoy a day of casual gaming together! "
    },


    {
        id: 5,

        name: "HOK World Championship Watch Along",

        type: "Social",

        image: "assets/events/watchparty.png",

        day: "05",

        month: "OCT",

        year: "2026",

        date: "05 October 2026",

        time: "6:00 PM - 10:00 PM",

        venue: "UTAR Multipurpose Hall",

        description:
            "Cheer together with the UTAR gaming community! Watch professional esports teams compete on the big screen and experience the excitement together."
    },

];



/* =========================================================
   CURRENT SETTINGS
========================================================= */

let currentEventType = "all";

let currentEventID = null;



/* =========================================================
   LOCAL STORAGE
========================================================= */

function getSavedEvents() {

    const saved =
        localStorage.getItem("savedEvents");


    if (!saved) {

        return [];

    }


    try {

        return JSON.parse(saved);

    }
    catch (error) {

        return [];

    }

}



function storeSavedEvents(savedEvents) {

    localStorage.setItem(

        "savedEvents",

        JSON.stringify(savedEvents)

    );

}



function isEventSaved(id) {

    const savedEvents =
        getSavedEvents();


    return savedEvents.includes(id);

}



/* =========================================================
   DISPLAY EVENTS
========================================================= */

function displayEvents() {


    const searchText =

        $("#eventSearch")
            .val()
            .trim()
            .toLowerCase();



    const savedEvents =
        getSavedEvents();



    const filteredEvents =

        events.filter(

            function (event) {


                let typeMatch;



                /* INTERESTED EVENTS */

                if (
                    currentEventType === "Saved"
                ) {

                    typeMatch =
                        savedEvents.includes(
                            event.id
                        );

                }


                /* ALL */

                else if (
                    currentEventType === "all"
                ) {

                    typeMatch = true;

                }


                /* CATEGORY */

                else {

                    typeMatch =
                        event.type ===
                        currentEventType;

                }



                /* SEARCH */

                const searchMatch =

                    event.name
                        .toLowerCase()
                        .includes(searchText)

                    ||

                    event.type
                        .toLowerCase()
                        .includes(searchText);



                return (
                    typeMatch &&
                    searchMatch
                );

            }

        );



    $("#eventsGrid")
        .empty();



    $("#eventCount")
        .text(

            filteredEvents.length +

            (
                filteredEvents.length === 1
                    ? " EVENT"
                    : " EVENTS"
            )

        );



    /* No Results */

    if (
        filteredEvents.length === 0
    ) {


        if (
            currentEventType === "Saved"
        ) {

            $("#eventEmptyTitle")
                .text(
                    "No saved events."
                );


            $("#eventEmptyText")
                .text(
                    "Open an event and select Add to Interested Events."
                );

        }

        else {

            $("#eventEmptyTitle")
                .text(
                    "No events found."
                );


            $("#eventEmptyText")
                .text(
                    "Try another event name or category."
                );

        }


        $("#eventEmpty")
            .show();


        return;

    }



    $("#eventEmpty")
        .hide();



    /* Create Cards */

    filteredEvents.forEach(

        function (event) {


            const saved =
                savedEvents.includes(
                    event.id
                );


            const card = `

                <article class="event-card">

                    <div class="event-image-box">

                        <img
                            src="${event.image}"
                            alt="${event.name}"
                            class="event-image">

                    </div>


                    <div class="event-card-body">

                        <div class="event-date">
                            ${event.month} ${event.day} ${event.year}
                        </div>

                        <span class="event-type">
                            ${event.type}
                        </span>

                        <h3>
                            ${event.name}
                        </h3>

                       <div class="event-details">

                            <p>
                                <strong>TIME:</strong>
                                ${event.time}
                            </p>

                            <p>
                                <strong>VENUE:</strong>
                                ${event.venue}
                            </p>

                        </div>

                        <button
                            class="event-view"
                            data-id="${event.id}">

                            VIEW DETAILS

                            <span>→</span>

                        </button>

                    </div>

                </article>

            `;

            $("#eventsGrid")
                .append(card);

        }

    );

}



/* =========================================================
   FILTER
========================================================= */

$(".event-filter").on(

    "click",

    function () {


        $(".event-filter")
            .removeClass(
                "is-active"
            );


        $(this)
            .addClass(
                "is-active"
            );


        currentEventType =
            $(this)
                .data(
                    "type"
                );


        displayEvents();

    }

);



/* =========================================================
   SEARCH
========================================================= */

$("#eventSearch").on(

    "input",

    function () {

        displayEvents();

    }

);



/* =========================================================
   OPEN EVENT DETAILS
========================================================= */

$(document).on(

    "click",

    ".event-view",

    function () {


        const eventID =

            Number(

                $(this)
                    .data("id")

            );



        const selectedEvent =

            events.find(

                function (event) {

                    return (
                        event.id === eventID
                    );

                }

            );



        if (!selectedEvent) {

            return;

        }



        currentEventID =
            selectedEvent.id;



        $("#modalEventType")
            .text(
                selectedEvent.type
            );


        $("#modalEventName")
            .text(
                selectedEvent.name
            );


        $("#modalEventDescription")
            .text(
                selectedEvent.description
            );


        $("#modalEventDate")
            .text(
                selectedEvent.date
            );


        $("#modalEventTime")
            .text(
                selectedEvent.time
            );


        $("#modalEventVenue")
            .text(
                selectedEvent.venue
            );


        $("#modalEventCategory")
            .text(
                selectedEvent.type
            );



        updateEventSaveButton();



        $("#eventSaveMessage")
            .hide();



        $("#eventModal")
            .addClass(
                "is-open"
            );


        $("body")
            .css(
                "overflow",
                "hidden"
            );

    }

);



/* =========================================================
   UPDATE SAVE BUTTON
========================================================= */

function updateEventSaveButton() {


    if (
        isEventSaved(
            currentEventID
        )
    ) {

        $("#saveEvent")
            .text(
                "REMOVE FROM INTERESTED EVENTS"
            );

    }

    else {

        $("#saveEvent")
            .text(
                "ADD TO INTERESTED EVENTS"
            );

    }

}



/* =========================================================
   SAVE EVENT
========================================================= */

$("#saveEvent").on(

    "click",

    function () {


        if (
            currentEventID === null
        ) {

            return;

        }



        let savedEvents =
            getSavedEvents();



        /* Remove */

        if (
            savedEvents.includes(
                currentEventID
            )
        ) {


            savedEvents =
                savedEvents.filter(

                    function (id) {

                        return (
                            id !== currentEventID
                        );

                    }

                );


            storeSavedEvents(
                savedEvents
            );


            $("#eventSaveMessage")
                .addClass("removed")
                .text(
                    "Event removed from Interested Events."
                )
                .stop(true, true)
                .fadeIn();

        }


        /* Save */

        else {


            savedEvents.push(
                currentEventID
            );


            storeSavedEvents(
                savedEvents
            );


            $("#eventSaveMessage")
                .removeClass("removed")
                .text(
                    "Event added to Interested Events!"
                )
                .stop(true, true)
                .fadeIn();

        }



        updateEventSaveButton();


        displayEvents();

    }

);



/* =========================================================
   CLOSE MODAL
========================================================= */

function closeEventModal() {


    $("#eventModal")
        .removeClass(
            "is-open"
        );


    $("body")
        .css(
            "overflow",
            ""
        );

}



$("#eventModalClose").on(

    "click",

    closeEventModal

);



$("#eventModalCloseButton").on(

    "click",

    closeEventModal

);



/* Click outside modal */

$("#eventModal").on(

    "click",

    function (event) {


        if (
            event.target === this
        ) {

            closeEventModal();

        }

    }

);



/* ESC key */

$(document).on(

    "keydown",

    function (event) {


        if (
            event.key === "Escape"
        ) {

            closeEventModal();

        }

    }

);



/* =========================================================
   FIRST LOAD
========================================================= */

displayEvents();