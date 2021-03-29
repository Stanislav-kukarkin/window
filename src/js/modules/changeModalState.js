import checkNumInputs from './checkNum';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

        checkNumInputs('#width');
        checkNumInputs('#height');

    function bindActionTwoElems (event, elem, prop){
        elem.forEach((item, i) =>{
            item.addEventListener(event, ()=>{
                switch(item.nodeName){//проверяем какой тип элемента
                    case 'SPAN' :
                        state[prop] = i;
                    //console.log('span');
                    break;

                    case 'INPUT' :
                    if (item.getAttribute('type') === 'checkbox'){
                        i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";//что бы было удобнее и чекбоксы уже давали инфу удобно
                        elem.forEach((box, j)=>{
                            box.checked = false;
                            if ( i == j){
                                box.checked = true;
                            }
                            //можно нажать только одну галочку
                        });
                        //console.log('checkbox');
                    } else {
                        state[prop] = item.value;
                        //console.log('input');
                    }
                    break;

                    case 'SELECT' :
                        state[prop] = item.value;
                    //console.log('select');
                    break;
                }
                console.log(state);
                //if (elem.length > 1){
                //    state[prop] = i;
                //} else {
                //    state[prop] = item.value;
                //}
                //console.log(state);
            });
        });
    }

    bindActionTwoElems('click', windowForm, 'form');
    bindActionTwoElems('input', windowWidth, 'width');
    bindActionTwoElems('input', windowHeight, 'height');
    bindActionTwoElems('change', windowType, 'type');
    bindActionTwoElems('input', windowProfile, 'profile ');
};
export default changeModalState;


