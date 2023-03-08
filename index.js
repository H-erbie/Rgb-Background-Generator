const hexNum = ['0', '1', '2', '3', '4', '5', '6', '7', 'a', 'b', 'c', 'd', 'e', 'f'];
let hex1 = '';
let hex2 = '';
document.querySelector('.gen').addEventListener('click', () => {
 hexBackgound = () => {
    hex1 = '', hex2 = '';
    for(let i = 0; i < 6; i++){
        hex1 += [Math.floor(Math.random() * hexNum.length)];
        hex2 += [Math.floor(Math.random() * hexNum.length)];
        document.querySelector('#hex1').innerHTML = `The background's hex is: #${hex1}`;
        document.querySelector('#hex2').innerHTML = `#${hex2}`;
        document.body.style.background = `linear-gradient(45deg, #${hex1}, #${hex2})`
    }
}
hexBackgound();

})
document.querySelector('.copy').addEventListener('click', () => {
    const gradient = `background: linear-gradient(45deg, #${hex1}, #${hex2})`
    navigator.clipboard.writeText(gradient);
})
    