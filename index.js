let button = document.getElementById('btn');
let clear = document.getElementById('Clear');
let gramz = document.getElementById('grams');
let output = document.getElementById('output')

clear.addEventListener('click', () => {
    gramz.forEach(input = gramz.value = '')
    if(gramz.value === '') {
        document.getElementById('output').innerHTML = ''
    }
    })


console.log(gramz)



button.addEventListener('click', function(){
    const gram = parseInt(document.getElementById('grams').value);
    const type = document.getElementById('type').value;

    if(gram === '' || isNaN(gram)){
        document.getElementById('grams').focus();
        document.getElementById('error').innerHTML = 'Please provide a valid gram';
        document.getElementById('output').innerHTML = '';
    }else{
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


    // button.addEventListener('click', function(){
    //     const gram = parseInt(document.getElementById('grams').value);
    //     const type = document.getElementById('type').value;







    // document.getElementById('Clear').addEventListener('click',
    // function clearInputField() {
    //     document.getElementById(gram).value = '';
    // })
    

//     console.log()
// function showUser() {
//     const baseURL = "https://i.kym-cdn.com/entries/icons/mobile/000/020/633/le_monke.jpg"
//     fetch(baseURL)
//     .then(response => response.json())
//     .then(response => response.foreach ((response)=> {
//         console.log(response.link)
//         response.link
//     }))
// }

// showUser()