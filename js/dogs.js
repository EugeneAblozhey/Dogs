//https://dog.ceo/dog-api/

const URL_DOG = 'https://dog.ceo/api/breeds/image/random';

const generateDogImage = () => {
    fetch(`${URL_DOG}`)
    .then(
        (request) => {
            return request.json();
        }
    )
    .then(
        (data) => {
            let containerDogs = document.querySelector('#dogs');
            containerDogs.innerHTML = '';

            containerDogs.innerHTML += `
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <img src="${data.message}" alt="dog">  
                    <span class="card-title">Good boy or good girl!</span>
                </div>
            </div>
            `
        }
    )
    .catch(
        (err) => {
            console.log(err);
        }
    )
}

const generateMoreDogImages = (countEl) => {
    fetch(`${URL_DOG}/${countEl}`)
    .then(
        (request) => {
            return request.json();
        }
    )
    .then(
        (data) => {
            let containerDogs = document.querySelector('#dogs');
            //containerDogs.innerHTML = '';

            data.message.forEach(element => {
                containerDogs.innerHTML += `
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <img src="${element}" alt="dog">  
                            <span class="card-title">Good boy or good girl!</span>
                        </div>
                    </div>
                    `
            });

            
        }
    )
    .catch(
        (err) => {
            console.log(err);
        }
    )
}

generateMoreDogImages(3);

// document.querySelector('#new-dog').addEventListener('click', generateDogImage);
// document.querySelector('#more-dogs').addEventListener('click', () => {
//     generateMoreDogImages(3);
// });
window.addEventListener('scroll', function(e){
    let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
    if (windowRelativeBottom < document.documentElement.clientHeight){
        generateMoreDogImages(3);
    }
    
})













