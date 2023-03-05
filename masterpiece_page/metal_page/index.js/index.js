`use strict`

const header = document.querySelector(`header`),
    headerBigNav = header.querySelector(`.headerBigNav`);

window.addEventListener(`wheel`, (e) => {

    if(e.deltaY > 0) {
        headerBigNav.style.top = `-81px`;
    };
    if(e.deltaY < 0) {
        headerBigNav.style.top = `0`;
    };
});

// =======================================================

const main = document.querySelector(`main`),
    main_items = main.querySelector(`.main_items`),
    button = main.querySelector(`button`),
    dialog = main.querySelector(`dialog`),
    input_all = dialog.getElementsByTagName(`input`);

let itemObjAr = [
    {
        itemName : 'Item01',
        price : '1,000,000',
        order : 'Availabal',
        bgImage : '../image_folder/itemOne_01.jpeg',
    },
    {
        itemName : 'Item01',
        price : '1,000,000',
        order : 'Availabal',
        bgImage : '../image_folder/itemOne_02.jpeg',
    },
    {
        itemName : 'Item01',
        price : '1,000,000',
        order : 'Availabal',
        bgImage : '../image_folder/itemOne_03.jpeg',
    },
];

for (let i = 0; i < itemObjAr.length; i++) {
    main_items.innerHTML += '<a href="../item_detail_page/item1.html" class="all_item"></a>'
}

const a_list = main_items.getElementsByTagName('a');

for (let i = 0; i < itemObjAr.length; i++) {
    a_list[i].style.background = `url(${itemObjAr[i].bgImage}) center / 100% no-repeat`;
}

function addItemBtn(name, price, order, bgImage) {
    itemObjAr = [
        ...itemObjAr,
        {
            itemName : name,
            price : price,
            order : order,
            bgImage : bgImage,
        },
    ];
    let arIdx = itemObjAr.length-1
    main_items.innerHTML += '<a href="../item_detail_page/item1.html" class="all_item"></a>'
    a_list[arIdx].style.background = `url(${itemObjAr[arIdx].bgImage}) center / 100% no-repeat`;
}

button.addEventListener('click', ()=> {
    dialog.showModal();
});

dialog.addEventListener(`close`, ()=> {
    if(dialog.returnValue === 'resister') {
        addItemBtn(input_all[0].value, input_all[1].value ,input_all[2].value , input_all[3].value);
        for (let i = 0; i < input_all.length-1; i++) {
            input_all[i].value = '';
        }
    }
});