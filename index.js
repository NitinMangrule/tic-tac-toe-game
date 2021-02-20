let wrapper = document.getElementById('wrapper');
let clickCount = 0;
let oArray = [];
let xArray = [];
let testArray = [['0', '1', '2'], ['0', '4', '8'], ['0', '3', '6'], ['3', '4', '5'], ['1', '4', '7'], ['2', '5', '8'], ['6', '7', '8'], ['2', '4', '6']];
wrapper.addEventListener('click', (event) => {
    if (clickCount >= 9) {
        reset();
    }
    if (!event.target.innerText && event.target.classList.contains('item')) {
        if (clickCount % 2 === 0) {
            event.target.classList.add('green');
            event.target.innerText = 'O';
            oArray.push(event.target.id);
            validate('O');
        } else {
            event.target.classList.add('red');
            event.target.innerText = 'X';
            xArray.push(event.target.id);
            validate('X');
        }
        clickCount++;

    }
});

function reset() {
    oArray = [];
    xArray = [];
    clickCount = 0;
    let items = document.querySelectorAll('.item');
    items.forEach((item) => {
        item.innerText = '';
        item.classList.remove('red');
        item.classList.remove('green');
    })
}
function successDisplay() {
    setTimeout(() => {
        alert('Winner..');
        reset();
    }, 0);

}
function validate(type) {
    let flag;
    testArray.forEach((arr) => {
        if (flag) {
            return;
        }
        if (type === 'O') {
            flag = arr.every((el) => oArray.indexOf(el) !== -1);
        } else {
            flag = arr.every((el) => xArray.indexOf(el) !== -1);
        }
    });
    if (flag) {
        successDisplay();
    }
}