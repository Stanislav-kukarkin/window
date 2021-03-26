const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {

        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        trigger.forEach(item => {
           item.addEventListener('click', (e) => {
            if (e.target){
              e.preventDefault();
             }
             modal.style.display = "block";
             document.body.style.overflow = "hidden";// обычный вариант
             //document.body.classList.add("modal-open");// добавление классов с bootstrap
            });  
        });

        close.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.style.overflow = "";// обычный вариант
            //document.body.classList.remove("modal-open");// добавление классов с bootstrap
        });

        modal.addEventListener('click', (e)=>{
            if (e.target === modal){
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
    showModalByTime('.popup', 60000);

};
export default modals;