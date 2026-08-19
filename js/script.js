/* =========================================================
   UTAR ESPORT CLUB — shared behaviour

   Storage technologies:
   - Cookie        -> remembers member name
   - localStorage -> Join Us application draft
   - sessionStorage -> form step / recently viewed items
   ========================================================= */


/* =========================================================
   COOKIE HELPERS
========================================================= */

function setCookie(name, value, days) {

    const expires =
        new Date(
            Date.now() + days * 864e5
        ).toUTCString();

    document.cookie =
        `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;

}


function getCookie(name) {

    return document.cookie
        .split('; ')
        .reduce(function (result, cookie) {

            const parts = cookie.split('=');

            const key = parts.shift();

            const value = parts.join('=');

            return key === name
                ? decodeURIComponent(value)
                : result;

        }, null);

}



/* =========================================================
   DOCUMENT READY
========================================================= */

$(function () {


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    $('.nav-toggle').on('click', function () {

        $('.nav-links').toggleClass('is-open');

        $(this).attr(
            'aria-expanded',
            $('.nav-links').hasClass('is-open')
        );

    });



    /* =====================================================
       COOKIE / RETURNING MEMBER
    ===================================================== */

    const knownName =
        getCookie('club_member_name');


    if (knownName) {

        $('#welcomePill')
            .text(
                'Welcome back, ' + knownName
            )
            .addClass('is-visible');

    }
    else {

        $('#cookieNotice')
            .addClass('is-visible');

    }


    $('#cookieAccept').on(
        'click',
        function () {

            setCookie(
                'club_cookie_ack',
                'yes',
                180
            );

            $('#cookieNotice')
                .removeClass('is-visible');

        }
    );


    $('#cookieDismiss').on(
        'click',
        function () {

            $('#cookieNotice')
                .removeClass('is-visible');

        }
    );



    /* =====================================================
       GALLERY PAGE
    ===================================================== */

    if ($('#galleryGrid').length) {


        /* Filter */

        $('.chip').on(
            'click',
            function () {

                $('.chip')
                    .removeClass('is-active');

                $(this)
                    .addClass('is-active');


                const game =
                    $(this).data('game');


                $('.ticket').each(
                    function () {

                        const match =
                            game === 'all' ||
                            $(this).data('game') === game;


                        $(this).toggle(match);

                    }
                );

            }
        );



        /* Session storage */

        function getViewed() {

            return JSON.parse(
                sessionStorage.getItem(
                    'club_viewed'
                ) || '[]'
            );

        }


        function renderRecentStrip() {

            const viewed =
                getViewed();


            if (viewed.length === 0) {

                $('#recentStrip')
                    .removeClass('is-visible');

                return;

            }


            const tags =
                viewed
                    .slice(-5)
                    .map(
                        function (item) {

                            return `<span>${item}</span>`;

                        }
                    )
                    .join('');


            $('#recentTags')
                .html(tags);


            $('#recentCount')
                .text(viewed.length);


            $('#recentStrip')
                .addClass('is-visible');

        }


        renderRecentStrip();



        $('#clearRecent').on(
            'click',
            function () {

                sessionStorage.removeItem(
                    'club_viewed'
                );

                renderRecentStrip();

            }
        );



        /* Lightbox */

        $('.ticket').on(
            'click',
            function () {

                const title =
                    $(this).data('title');

                const game =
                    $(this).data('game-label');

                const date =
                    $(this).data('date');

                const desc =
                    $(this).data('desc');

                const icon =
                    $(this)
                        .find('.ticket-art')
                        .html();


                $('#lightboxArt')
                    .html(icon);


                $('#lightboxTitle')
                    .text(title);


                $('#lightboxMeta')
                    .text(
                        game +
                        '  •  ' +
                        date
                    );


                $('#lightboxDesc')
                    .text(desc);


                $('#lightboxBackdrop')
                    .addClass('is-open');



                const viewed =
                    getViewed();


                if (!viewed.includes(title)) {

                    viewed.push(title);


                    sessionStorage.setItem(
                        'club_viewed',
                        JSON.stringify(viewed)
                    );


                    renderRecentStrip();

                }

            }
        );



        $('#lightboxClose, #lightboxBackdrop')
            .on(
                'click',
                function (e) {

                    if (e.target === this) {

                        $('#lightboxBackdrop')
                            .removeClass('is-open');

                    }

                }
            );


        $(document).on(
            'keydown',
            function (e) {

                if (e.key === 'Escape') {

                    $('#lightboxBackdrop')
                        .removeClass('is-open');

                }

            }
        );

    }



    /* =====================================================
       JOIN US PAGE
       ===================================================== */

    if ($('#joinForm').length) {


        const DRAFT_KEY =
            'club_join_draft';


        const STEP_KEY =
            'club_join_step';


        let currentStep =
            parseInt(
                sessionStorage.getItem(
                    STEP_KEY
                ) || '1',
                10
            );


        let selectedLane =
            null;



        /* ---------- Read draft ---------- */

        function readDraft() {

            try {

                return JSON.parse(
                    localStorage.getItem(
                        DRAFT_KEY
                    ) || '{}'
                );

            }
            catch (e) {

                return {};

            }

        }



        /* ---------- Save draft ---------- */

        function saveDraft(partial) {

            const draft =
                Object.assign(
                    readDraft(),
                    partial
                );


            localStorage.setItem(
                DRAFT_KEY,
                JSON.stringify(draft)
            );


            return draft;

        }



        /* ---------- Existing draft ---------- */

        const existingDraft =
            readDraft();


        if (
            existingDraft.fullName ||
            existingDraft.lane
        ) {

            $('#draftName')
                .text(
                    existingDraft.fullName ||
                    'a previous applicant'
                );


            $('#draftBanner')
                .addClass('is-visible');

        }



        /* ---------- Restore draft ---------- */

        $('#draftRestore').on(
            'click',
            function () {

                applyDraftToForm(
                    existingDraft
                );


                if (existingDraft.lane) {

                    selectLane(
                        existingDraft.lane,
                        false
                    );

                }


                $('#draftBanner')
                    .removeClass('is-visible');

            }
        );



        /* ---------- Discard draft ---------- */

        $('#draftDiscard').on(
            'click',
            function () {

                localStorage.removeItem(
                    DRAFT_KEY
                );


                $('#draftBanner')
                    .removeClass('is-visible');

            }
        );



        /* ---------- Apply saved values ---------- */

        function applyDraftToForm(d) {

            if (d.fullName) {

                $('#fullName')
                    .val(d.fullName);

            }


            if (d.studentId) {

                $('#studentId')
                    .val(d.studentId);

            }


            if (d.email) {

                $('#email')
                    .val(d.email);

            }


            if (d.program) {

                $('#program')
                    .val(d.program);

            }


            if (d.game) {

                $('#game')
                    .val(d.game);

            }

        }



        /* ---------- Lane selection ---------- */

        function selectLane(
            laneKey,
            persist
        ) {

            selectedLane =
                laneKey;


            $('.lane-card')
                .removeClass(
                    'is-selected'
                );


            $(
                `.lane-card[data-lane="${laneKey}"]`
            )
                .addClass(
                    'is-selected'
                );


            if (persist !== false) {

                saveDraft({
                    lane: laneKey
                });

            }

        }



        $('.lane-card').on(
            'click',
            function () {

                selectLane(
                    $(this).data('lane')
                );

            }
        );



        /* ---------- Stepper ---------- */

        function renderStepper() {


            $('.stepper .dot').each(
                function (i) {

                    const step =
                        i + 1;


                    $(this)
                        .toggleClass(
                            'is-active',
                            step === currentStep
                        );


                    $(this)
                        .toggleClass(
                            'is-done',
                            step < currentStep
                        );

                }
            );



            $('.form-step')
                .hide();


            $(
                `.form-step[data-step="${currentStep}"]`
            )
                .show();


            sessionStorage.setItem(
                STEP_KEY,
                String(currentStep)
            );



            if (currentStep === 3) {

                buildSummary();

            }


            window.scrollTo({
                top:
                    $('#joinForm').offset().top - 90,
                behavior: 'smooth'
            });

        }



        /* ---------- Summary ---------- */

        function buildSummary() {

            const d =
                readDraft();


            const laneLabel = {

                competitive:
                    'Competitive Roster',

                casual:
                    'Casual & Social',

                creator:
                    'Content & Broadcast'

            }[selectedLane] || '—';



            const rows = [

                [
                    'Division',
                    laneLabel
                ],

                [
                    'Name',
                    d.fullName || '—'
                ],

                [
                    'Student ID',
                    d.studentId || '—'
                ],

                [
                    'Email',
                    d.email || '—'
                ],

                [
                    'Programme',
                    d.program || '—'
                ],

                [
                    'Main game',
                    d.game || '—'
                ]

            ];



            $('#summaryList')
                .html(

                    rows
                        .map(
                            function (row) {

                                return `
                                    <li>
                                        <span>${row[0]}</span>
                                        <span>${row[1]}</span>
                                    </li>
                                `;

                            }
                        )
                        .join('')

                );

        }



        /* ---------- Step 1 -> Step 2 ---------- */

        $('#toStep2').on(
            'click',
            function () {

                if (!selectedLane) {

                    $('#laneError')
                        .show();

                    return;

                }


                $('#laneError')
                    .hide();


                currentStep = 2;


                renderStepper();

            }
        );



        /* ---------- Back to Step 1 ---------- */

        $('#backTo1').on(
            'click',
            function () {

                currentStep = 1;

                renderStepper();

            }
        );



        /* ---------- Back to Step 2 ---------- */

        $('#backTo2').on(
            'click',
            function () {

                currentStep = 2;

                renderStepper();

            }
        );



        /* =================================================
           STEP 2 VALIDATION
        ================================================= */

        $('#toStep3').on(
            'click',
            function () {


                const required = [

                    '#fullName',

                    '#studentId',

                    '#email',

                    '#program'

                ];


                let ok = true;



                /* Required fields */

                required.forEach(
                    function (selector) {


                        const $field =
                            $(selector);


                        const $wrap =
                            $field.closest(
                                '.field'
                            );


                        if (
                            !$field
                                .val()
                                .trim()
                        ) {


                            $wrap.addClass(
                                'has-error'
                            );


                            ok = false;

                        }
                        else {


                            $wrap.removeClass(
                                'has-error'
                            );

                        }

                    }
                );



                /* =================================================
                   EMAIL VALIDATION FIX
                ================================================= */

                const email =
                    $('#email')
                        .val()
                        .trim();


                if (
                    email &&
                    !/^\S+@\S+\.\S+$/.test(email)
                ) {


                    $('#email')
                        .closest('.field')
                        .addClass(
                            'has-error'
                        );


                    ok = false;

                }
                else if (email) {


                    $('#email')
                        .closest('.field')
                        .removeClass(
                            'has-error'
                        );

                }



                /* Stop if validation failed */

                if (!ok) {

                    return;

                }



                /* Save valid form */

                saveDraft({

                    fullName:
                        $('#fullName')
                            .val()
                            .trim(),

                    studentId:
                        $('#studentId')
                            .val()
                            .trim(),

                    email:
                        email,

                    program:
                        $('#program')
                            .val()
                            .trim(),

                    game:
                        $('#game')
                            .val()

                });



                currentStep = 3;


                renderStepper();

            }
        );



        /* =================================================
           LIVE SAVE
        ================================================= */

        $(
            '#fullName, #studentId, #email, #program, #game'
        )
        .on(
            'change',
            function () {


                saveDraft({

                    fullName:
                        $('#fullName')
                            .val()
                            .trim(),

                    studentId:
                        $('#studentId')
                            .val()
                            .trim(),

                    email:
                        $('#email')
                            .val()
                            .trim(),

                    program:
                        $('#program')
                            .val()
                            .trim(),

                    game:
                        $('#game')
                            .val()

                });

            }
        );



        /* =================================================
           SUBMIT APPLICATION
        ================================================= */

        $('#submitApplication').on(
            'click',
            function () {


                if (
                    !$('#agreeTerms')
                        .is(':checked')
                ) {


                    $('#agreeError')
                        .show();


                    return;

                }



                $('#agreeError')
                    .hide();



                const d =
                    readDraft();



                const memberId =
                    'NX-' +
                    Math.floor(
                        1000 +
                        Math.random() * 9000
                    );



                /* Cookie */

                setCookie(
                    'club_member_name',
                    d.fullName || 'Member',
                    30
                );



                /* Clear draft */

                localStorage.removeItem(
                    DRAFT_KEY
                );


                sessionStorage.removeItem(
                    STEP_KEY
                );



                /* Confirmation */

                $('#confirmName')
                    .text(
                        d.fullName || 'Member'
                    );


                $('#confirmId')
                    .text(memberId);



                $('.form-step')
                    .hide();


                $('#stepConfirm')
                    .show();


                $('.stepper')
                    .hide();



                window.scrollTo({

                    top:
                        $('#joinForm')
                            .offset()
                            .top - 90,

                    behavior:
                        'smooth'

                });

            }
        );



        /* Initial render */

        renderStepper();

    }



    /* =====================================================
       TRIVIA WIDGET
       Open Trivia DB
    ===================================================== */

    if ($('#triviaCard').length) {


        function decodeHTML(html) {

            const textarea =
                document.createElement(
                    'textarea'
                );


            textarea.innerHTML =
                html;


            return textarea.value;

        }



        function shuffle(array) {

            for (
                let i = array.length - 1;
                i > 0;
                i--
            ) {


                const j =
                    Math.floor(
                        Math.random() *
                        (i + 1)
                    );


                [
                    array[i],
                    array[j]
                ] = [
                    array[j],
                    array[i]
                ];

            }


            return array;

        }



        function loadQuestion() {


            $('#triviaOptions')
                .empty();


            $('#triviaFeedback')
                .text('');


            $('#triviaQuestion')
                .text(
                    'Loading a question…'
                );


            $('#triviaNext')
                .prop(
                    'disabled',
                    true
                );


            $('#triviaStatus')
                .show();



            $.ajax({

                url:
                    'https://opentdb.com/api.php?amount=1&category=15&type=multiple',

                method:
                    'GET',

                dataType:
                    'json',

                timeout:
                    8000

            })


            .done(
                function (res) {


                    $('#triviaStatus')
                        .hide();



                    if (
                        !res.results ||
                        !res.results.length
                    ) {

                        showError();

                        return;

                    }



                    const q =
                        res.results[0];


                    const correct =
                        decodeHTML(
                            q.correct_answer
                        );


                    const question =
                        decodeHTML(
                            q.question
                        );


                    const options =
                        shuffle(
                            [
                                correct,
                                ...q.incorrect_answers
                                    .map(
                                        decodeHTML
                                    )
                            ]
                        );



                    $('#triviaQuestion')
                        .text(question);



                    options.forEach(
                        function (option) {


                            const $button =
                                $(
                                    '<button class="trivia-option" type="button"></button>'
                                )
                                .text(option);



                            $button.on(
                                'click',
                                function () {


                                    const isCorrect =
                                        option ===
                                        correct;



                                    $('.trivia-option')
                                        .prop(
                                            'disabled',
                                            true
                                        );



                                    $(this)
                                        .addClass(
                                            isCorrect
                                                ? 'is-correct'
                                                : 'is-wrong'
                                        );



                                    if (!isCorrect) {


                                        $('.trivia-option')
                                            .filter(
                                                function () {

                                                    return (
                                                        $(this)
                                                            .text() ===
                                                        correct
                                                    );

                                                }
                                            )
                                            .addClass(
                                                'is-correct'
                                            );

                                    }



                                    $('#triviaFeedback')
                                        .text(

                                            isCorrect
                                                ? 'Correct — nice one!'
                                                : 'Not quite — correct answer highlighted.'

                                        );



                                    $('#triviaNext')
                                        .prop(
                                            'disabled',
                                            false
                                        );

                                }
                            );



                            $('#triviaOptions')
                                .append(
                                    $button
                                );

                        }
                    );

                }
            )


            .fail(
                function () {

                    showError();

                }
            );

        }



        function showError() {

            $('#triviaStatus')
                .hide();


            $('#triviaQuestion')
                .text(
                    'Could not reach the trivia API right now — check your connection and click Next to retry.'
                );


            $('#triviaNext')
                .prop(
                    'disabled',
                    false
                );

        }



        $('#triviaNext')
            .on(
                'click',
                loadQuestion
            );


        loadQuestion();

    }



    /* =====================================================
       FAQ PAGE
    ===================================================== */

    if ($('#faqList').length) {


        $('.faq-q').on(
            'click',
            function () {


                $(this)
                    .closest('.faq-item')
                    .toggleClass(
                        'is-open'
                    );

            }
        );

    }


});