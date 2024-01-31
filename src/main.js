import iziToast from "izitoast";
console.log(iziToast);
import "izitoast/dist/css/iziToast.min.css";


const refs = {
formEl: document.querySelector('.js-search-form'),
imgEl: document.querySelector('.js-image-container'),
};

console.log(refs);

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    const query = e.target.elements.text.value;

    getImg(query).then(data => {
        console.log(data);

        if (data.hits.length === 0) {
            iziToast.error({
               position: "topRight",
               message: 'Sorry, there are no images matching your search query. Please try again!',
               
});
        }
    });
}

// Функція, запит на сервер

function getImg(imgEl) {
    const BASE_URL = 'https://pixabay.com/api/';
    
    const PARAMS = new URLSearchParams({
        key: '42120259-494341598d0c2875f9db82d6d',
        q: imgEl,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    }); 

    const url = `${BASE_URL}?${PARAMS.toString()}`;

    console.log(PARAMS.toString());
    console.log(url);
    
    const options = {
        headers: {
            API_KEY: '42120259-494341598d0c2875f9db82d6d',
        },
    };

   
   return fetch(url).then(response=>response.json());
}


// Функція розмітки

function imgTemplate(searchEl) {
    
}

