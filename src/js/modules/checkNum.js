const checkNumInputs = (selector) =>{

    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(item => {
        item.addEventListener('input', ()=>{
            item.value = item.value.replace(/\D/, '');
        });// если пользователь ввел не число заменяет на пустую строку
    });
};
export default checkNumInputs;
