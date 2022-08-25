let button = document.getElementById('btn');
let clearButton = document.getElementById('Clear');
let gramz = document.getElementById('grams');
let output = document.getElementById('output')
let type = document.getElementById('type')

type.addEventListener('mouseover', () => {
    document.getElementById('type').style.background = "linear-gradient(to right, rgb(200, 183, 52), rgb(160, 83, 202))";
})
type.addEventListener('mouseleave', () => {
    document.getElementById('type').style.background = "white";
})


clearButton.addEventListener('dblclick', () => {
    input = gramz.value = ''
 
    })



//You are parsing the integer of grams. value and making it
//usable in the function by allowing JS to format it
button.addEventListener('click', function(){
    const gram = parseInt(document.getElementById('grams').value);
    const type = document.getElementById('type').value;
//You are grabbing the highlighting 'grams' with .focus
// to see if it returns nothing or NaN
// if it does the website will show an error with message written in 'error'
    if(gram === '' || isNaN(gram)){
        document.getElementById('grams').focus();
        document.getElementById('error').innerHTML = 'Please provide a valid gram';
        document.getElementById('output').innerHTML = '';
    }else{
        //Here the code has 'error' displayed nothing is written in but convert is pushed
        //switch executes different blocks of code depending on which measurement is chosen
        document.getElementById('error').innerHTML = ''
        switch(type){
            case 'Pounds':
                convert_pounds(gram);
                break;
            case 'Kilograms':
                convert_kilogram(gram);
                break;
            case 'Ounces':
                    convert_ounces(gram);
                    break;
            case 'Stones':
                convert_stones(gram);
                        break;
            default:
                alert('Error');
        }
        //These functions grab the rate for their measurement to convert from grams to new measurement
        //they change the output from ' ' the newly converted amount and
        //used tofixed(3) to round to the 3rd decimal
        function  convert_pounds(gram){
            let rate = 0.0022, pounds;
            pounds = gram * rate;
            document.getElementById('output').innerHTML = gram + "grams = " +
            pounds.toFixed(3) + 'pounds.';
        }
        function  convert_kilogram(gram){
            let rate = 0.001, kilogram;
            kilogram = gram * rate;
            document.getElementById('output').innerHTML = gram + "grams = " +
            kilogram.toFixed(3) + 'kg.';
        }
        function  convert_ounces(gram){
            let rate = 0.035274, ounces;
            ounces = gram * rate;
            document.getElementById('output').innerHTML = gram + "grams = " +
            ounces.toFixed(3) + 'ounces.';
        }
        function  convert_stones(gram){
            let rate = 0.00015747, stones;
            stones = gram * rate;
            document.getElementById('output').innerHTML = gram + "grams = " +
            stones.toFixed(3) + 'stones.';

        }
    }})
//grabbing JSON file JSON-ifying the file(readable format)

function showUser() {
    fetch("http://localhost:3000/pictures")
    .then(response => response.json())
    .then(response => response.forEach ((pictures)=> {
        console.log(response)
        imageHolder(pictures)
    }))
}

showUser()
//Holds images from db.json, gets image tag, creates new element
//adds class of scale image (used in CSS)
function imageHolder(pictures) {
    const imageOne = document.getElementById('image1')
    const img = document.createElement('img')
    img.classList.add('scaleimage')
    //'img' source is url found in JSON file and we are attaching it with append to 'image1' 
    img.src= pictures.pictureURL
    imageOne.append(img)
}

// clearButton.addEventListener('dblclick', () => {
//     gramz.forEach(input = gramz.value = '')
 
//     })

// You'd pretty much have to rewrite the code for 
// it in terms of dot notations.
// .I.e. key.item and render it to where you'd want it to be in