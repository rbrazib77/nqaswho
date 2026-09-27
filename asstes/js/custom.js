
document.addEventListener("change", function (event) {
    if (
        event.target.matches(
            'input[name="academic_calendar"]'
        )
    ) {
        const fileBox =
            document.getElementById(
                "academic-calendar-file"
            );

        const fileInput =
            fileBox.querySelector(
                'input[type="file"]'
            );

        if (event.target.value === "yes") {

            fileBox.style.display = "block";

        } else {

            fileBox.style.display = "none";

            fileInput.value = "";
        }
    }

    /* Phase Wise Evaluation */
    if (
        event.target.matches(
            'input[name="phase_wise_evaluation"]'
        )
    ) {

        const followupBox =
            document.getElementById(
                "phase-evaluation-followup"
            );

        const frequencyInput =
            followupBox.querySelector(
                'input[name="phase_evaluation_frequency"]'
            );

        if (event.target.value === "yes") {

            followupBox.style.display = "block";

        } else {

            followupBox.style.display = "none";

            frequencyInput.value = "";
        }
    }

});


// Only Year Picker
document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    document.querySelectorAll(".nqas-year-picker").forEach(function (picker) {
        const input = picker.querySelector("input");
        const calendar = picker.querySelector(".nqas-year-calendar");
        const yearList = picker.querySelector(".nqas-year-list");
        const yearRange = picker.querySelector(".nqas-year-range");
        const prevButton = picker.querySelector(".nqas-year-prev");
        const nextButton = picker.querySelector(".nqas-year-next");

        let startYear = currentYear - 4;

        function generateYears() {
            yearList.innerHTML = "";
            const endYear = startYear + 11;
            yearRange.textContent =
                `${startYear} - ${endYear}`;

            for (let year = startYear; year <= endYear; year++) {
                const button = document.createElement("button");
                button.type = "button";
                button.textContent = year;
                // Current year highlight
                if (year === currentYear) {
                    button.classList.add("current-year");
                }

                // Select year
                button.addEventListener("click", function () {
                    input.value = year;
                    calendar.classList.remove("show");
                });

                yearList.appendChild(button);
            }
        }
        // Open calendar
        input.addEventListener("click", function () {
            generateYears();
            // Close other calendars
            document
                .querySelectorAll(".nqas-year-calendar.show")
                .forEach(function (otherCalendar) {

                    if (otherCalendar !== calendar) {
                        otherCalendar.classList.remove("show");
                    }

                });

            calendar.classList.toggle("show");
        });

        // Previous years
        prevButton.addEventListener("click", function () {
            startYear -= 12;
            generateYears();
        });


        // Next years
        nextButton.addEventListener("click", function () {
            startYear += 12;
            generateYears();
        });

        // Close when click outside
        document.addEventListener("click", function (event) {
            if (!picker.contains(event.target)) {
                calendar.classList.remove("show");
            }

        });

    });

});

            