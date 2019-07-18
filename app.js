console.log('this is linked')

$(() => { 
    const handleData = (data)=> {
        for (let i=0; i <data.length; i++) {
            console.log('got ', data[i], i)
            const $title = $('<ul>').text(
            data[i].name); 
            $('.container').append($title);
            const $button = $('<button>').val(data[i].name)
            $title.append($button)
            $button.text('learn more')
            $button.addClass('boozyInfo')

            const $gMapsFrame = $('<iframe>');
            $gMapsFrame.attr('src', `https://www.google.com/maps/embed/v1/place?q=40.7127837,-74.0059413&key=AIzaSyCPFw1yWIAYr0WspFZHGTa11KDdmgCRBX4`)
            $('.container').append($gMapsFrame)
        }
    }   
    $('.button').on('click', event => {
        const userInput= $(event.target).text();
        const textValue = $('.text_value').val()     
            const endpoint = `https://api.openbrewerydb.org/breweries?by_name=${textValue}`   // search by brewery name
        $.ajax({
        url: endpoint
        }).then(handleData);
    });

    const handleData2 = (data)=> {
        for (let i=0; i <data.length; i++){
            console.log('got ', data[i]);
            const $title = $('<h1>').text(
            data[i].name + ' is a brewery in ' + data[i].city + ' ' + data[i].state + 
            '. It is a ' + data[i].brewery_type + ' brewery. ' + `http://maps.google.com/?q=${data[i].street},${data[i].city},${data[i].state},${data[i].postal_code}`)
            $('.container').append($title);
    
    }
    };

    $('.container').on('click', '.boozyInfo', (event) => {
        event.preventDefault();
        const textValue = $(event.currentTarget).val();

                    // add new function here

        const endpoint = `https://api.openbrewerydb.org/breweries?by_name=${textValue}`
        $.ajax({
        url: endpoint
        }).then(handleData2);
        });  

 
////////////////////////////////////////////  BREWERY MAP DB /////////////////////////////////////////////////////

const handleData3 = (data)=> {
    for (let i=0; i <data.length; i++){
        console.log('got ', data[i], i);
        const $title2 = $('<ul>').text(
        data[i].name + `http://maps.google.com/?q=${data[i].street},${data[i].city},${data[i].state},${data[i].postal_code}`)
        $('.container2').append($title2);

}
};

$('.button2').on('click', (event) => {
    event.preventDefault();
    const userInput= $(event.target).text();  
    const textValue2 = $('.text_value2').val() 
    
    const endpoint = `https://api.openbrewerydb.org/breweries?by_city=${textValue2}`
    $.ajax({
    url: endpoint
    }).then(handleData3);
});

});


// console.log('this is linked')
// $(() => { 
//     const handleData = (data)=> {
//     for (let i=0; i <data.length; i++){
//              console.log('got ', data[i])
//                 const $title = $('<ul>').text(
//                 data[i].name + ' PAIRS WELL WITH ' + data[i].food_pairing); 
//                 $('.container').append($title);
//                 }
//         }
//         // console.log('got',data[i])
//     $('.button').on('click', event => {
//         // const userInput= $(event.target).text();
//         const beerName = $('.text_value').val()
//         console.log(beerName)
//     const endpoint = `http://ontariobeerapi.ca/beers/`     // ${beerName}  // search by name
//     // set variable to api then do data. whatever[19].name
//     //there are only 325 items in this API
//     $.ajax({
//     url: endpoint
//     }).then(handleData);
// });
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // const endpoint = 'https://api.openbrewerydb.org/breweries?by_state=connecticut' BY CT
        // const endpoint = `https://api.openbrewerydb.org/breweries?by_state=${textValue}&page=1&per_page=50`  // BY user input State
            //const endpoint = `https://api.openbrewerydb.org/breweries?by_state=${textValue}&page2&per_page=50`  // page 2, BY user input State
            // `https://api.punkapi.com/v2/beers?beer_name=${beerName}`     // ${beerName}  // search by name
        
/// AIzaSyCPFw1yWIAYr0WspFZHGTa11KDdmgCRBX4 google API key


// const $scriptTag = $('<script>')
// $scriptTag.src('api link with key')




// use href to link to google maps seperate page
// template literals











































/////////////////////////////////// Current output////////////////////////////////////////////////////////////////
// got  
// {id: 1646, name: "Beaver Beer Co", brewery_type: "contract", street: "307 Greens Farms Rd", city: "Westport", …}
// brewery_type: "contract"
// city: "Westport"
// country: "United States"
// id: 1646
// latitude: "41.12587"
// longitude: "-73.311685"
// name: "Beaver Beer Co"
// phone: ""
// postal_code: "06880-6227"
// state: "Connecticut"
// street: "307 Greens Farms Rd"
// tag_list: Array(0)
// length: 0
// __proto__: Array(0)
// updated_at: "2018-08-24T00:25:23.884Z"
// website_url: "http://www.beaverbeer.com"
// __proto__:
// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ __defineGetter__()
// __defineSetter__: ƒ __defineSetter__()
// __lookupGetter__: ƒ __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter__()
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()



{/* <iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=40.7127837,-74.0059413&amp;key=YOUR_API_KEY"></iframe>


const $gMapsFrame = $('<iframe>');
$gMapsFrame.attr('src', 'https://www.google.com/maps/embed/v1/place?q=40.7127837,-74.0059413') */}