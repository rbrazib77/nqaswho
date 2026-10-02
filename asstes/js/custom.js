
// Curriculum Execution 
    function toggleCurriculumExecutionFile() {
        const yesOption = document.querySelector(
            'input[name="curriculum_execution"][value="yes"]'
        );

        const fileSection = document.getElementById(
            'curriculumExecutionFile'
        );

        if (yesOption.checked) {
            fileSection.style.display = 'block';
        } else {
            fileSection.style.display = 'none';
        }
    }

// Only Year Picker
    function togglePhaseEvaluation() {
        const yesOption = document.querySelector(
            'input[name="phase_wise_evaluation"][value="yes"]'
        );

        const fileSection = document.getElementById(
            'phaseEvaluationFile'
        );

        if (yesOption.checked) {
            fileSection.style.display = 'block';
        } else {
            fileSection.style.display = 'none';
        }
    }



// 7
function toggleExternalVisitDate() {
    const selectedOption = document.querySelector(
        'input[name="student_counseling"]:checked',
    );

    const dateField =
        document.getElementById("externalVisitDate");

    if (selectedOption && selectedOption.value === "yes") {
        dateField.style.display = "block";
    } else {
        dateField.style.display = "none";
    }
}
               

// 12
    function toggleMEUNumber() {
        const yesOption = document.querySelector(
            'input[name="functioning_meu"][value="yes"]'
        );

        const numberField = document.getElementById(
            'meuNumberField'
        );

        if (yesOption.checked) {
            numberField.style.display = 'block';
        } else {
            numberField.style.display = 'none';
        }
    }


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

            