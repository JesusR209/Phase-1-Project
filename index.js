let button = document.getElementById('btn');

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
    }
        )
    }
})
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