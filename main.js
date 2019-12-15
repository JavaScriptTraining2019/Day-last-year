let dateLastYear = (function(){

    function getTodaysDate(){

        let todaysDate, day, days;

        todaysDate = new Date();
        todaysDate.setFullYear(todaysDate.getFullYear() -1);
        day = todaysDate.getDay();
        days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        lastYearsDay = days[day - 1];

        return lastYearsDay;

    }

    function popUpDomEl(){
        let jsPopUpDomEl = document.querySelector("#time-popup__header"),
          jsTimePopup = document.querySelector("#time-popup");
        
        return {
            h1Popup: jsPopUpDomEl,
            divTimePopup: jsTimePopup
        };
    }

    function dayMessage(){
        let day = getTodaysDate(),
            jsPopUpDomEl = popUpDomEl().h1Popup,
            jsTimePopUpDomEl = popUpDomEl().divTimePopup;

        jsPopUpDomEl.textContent = day; 
        jsTimePopUpDomEl.classList.remove("is-hidden");
    }

    function closeTimePopup(){
        let jsTimePopUpDomEl = popUpDomEl().divTimePopup;

        jsTimePopUpDomEl.classList.add("is-hidden");
    }

    // function displayBlock(){
    //     let popUpDomEl = popUpDomEl();
    //     popUpDomEl.classList.add(".u-display-block");
    // }

    return{
        getDay: dayMessage,
        closePopup: closeTimePopup
    }

})();

document.querySelector("#cta-time").addEventListener("click",  dateLastYear.getDay);

document.querySelector("#time-popup").addEventListener("click", dateLastYear.closePopup);
