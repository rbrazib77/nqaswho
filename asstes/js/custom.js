
function toggleAcademicCalendarFile() {
    const yesRadio = document.querySelector(
    'input[name="academic_calendar"][value="yes"]',
    );

    const fileBox = document.getElementById(
    "academic-calendar-file",
    );

    if (yesRadio.checked) {
    fileBox.style.display = "block";
    } else {
    fileBox.style.display = "none";
    document.getElementById(
        "academic_calendar_document",
    ).value = "";
    }
}
            