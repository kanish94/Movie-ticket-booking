let seatCount = 0,
    seatPriceArr = [];


const movies = document.querySelector('#movies'),
    container = document.querySelector('.container'),
    count = document.querySelector('#count'),
    total = document.querySelector('#total');


// Seat selection event Listener
container.addEventListener('click', function (e) {

    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        let check = e.target.classList.toggle('selected');

        calculatePrice(check);
    }
});


// Reset when movie is changed
movies.addEventListener('change', function () {

    seatPriceArr = [];
    seatCount = 0;
    let price = 0;
    UIUpdate(seatCount, price);

    document.querySelectorAll('.container .selected').forEach(function (current) {
        current.classList.remove('selected');
    });
});


// Price Calculation
function calculatePrice(check) {

    let seatPrice = 0;

    if (check) {

        let price = parseInt(movies.value);
        seatPriceArr.push(price);
        seatCount++;

    } else {

        seatCount--;
        seatPriceArr.pop();
    }

    seatPriceArr.forEach(function (current) {
        return seatPrice = seatPrice + current;
    });

    UIUpdate(seatCount, seatPrice);
}


// Update UI
function UIUpdate(seatCount, price) {

    count.innerText = seatCount;
    total.innerText = price;
}

