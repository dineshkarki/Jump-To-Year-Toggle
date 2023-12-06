function jumpToYearToggle(event) {
    var jumpToYearSelector = document.querySelector(".jumpToYearBtn");
    var yearCalendar = document.querySelector(".yearCalendar");
        jumpToYearSelector.classList.toggle('jumpToYearBtnOpen');
        yearCalendar.classList.toggle('yearCalendarShow');

}

yearPageContainer.addEventListener('blur', (event) => {
    setTimeout(() => {
        jumpToYearSelector.classList.remove("jumpToYearBtnOpen");
        yearCalendar.classList.remove('yearCalendarShow');
    }, 300);

});