const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClockOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            window = document.querySelectorAll('[data-modal]');

        trigger.forEach(item => {
           item.addEventListener('click', (e) => {
            if (e.target){
              e.preventDefault();
             }

             window.forEach(item => {
                item.style.display = 'none';
             });

             modal.style.display = "block";
             document.body.style.overflow = "hidden";// обычный вариант
             //document.body.classList.add("modal-open");// добавление классов с bootstrap
            });  
        });

        close.addEventListener('click', () => {

            window.forEach(item => {
                item.style.display = 'none';
             });

            modal.style.display = "none";
            document.body.style.overflow = "";// обычный вариант
            //document.body.classList.remove("modal-open");// добавление классов с bootstrap
        });

        modal.addEventListener('click', (e)=>{
            if (e.target === modal && closeClockOverlay){
                window.forEach(item => {
                    item.style.display = 'none';
                 });

                modal.style.display = "none";
                document.body.style.overflow = "";// обычный вариант
                //document.body.classList.remove("modal-open");// добавление классов с bootstrap
            }
        });
    }

    function showModalByTime (selector, time){
        setTimeout(function(){
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";

        }, time);
    }

    //const callEngineerBtn = document.querySelector('.popup_engineer_btn'),
    //    modalEngineer = document.querySelector('.popup_engineer'),
    //    modalEngineerClose = document.querySelector('.popup_engineer .popup_close');

    bindModal ('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal ('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    showModalByTime('.popup', 60000);

};
export default modals;