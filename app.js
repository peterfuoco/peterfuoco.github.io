console.log('this is linked')

$(() => { 
    const handleData = (data)=> {
        for (let i=0; i <data.length; i++) {
            console.log('got ', data[i], i)
            const $title = $('<ul>').text(
            data[i].name); 
            $('.breweryResults').append($title);
            const $button = $('<button>').val(data[i].name)
            $title.append($button)
            $button.text('Description')
            $button.addClass('boozyInfo')
            const $websiteLink = $('<href>').val(data[i].website_url)
            $title.append($websiteLink)
        }
    }   
    $('.button2').on('click', event => {
        const userInput= $(event.target).text();
         $('.breweryResults').empty()
        const textValue = $('.text_value2').val()     
            const endpoint = `https://api.openbrewerydb.org/breweries?by_city=${textValue}`   // search by brewery name
        $.ajax({
        url: endpoint
        }).then(handleData);
    });

    const handleData2 = (data)=> {
        // for (let i=0; i <data.length; i++){
            // console.log('got ', data[data.length - 1]);
            let minedData = data[data.length - 1]
            console.log( $(`#${minedData.id}`).length )
            if ( $(`#${minedData.id}`).length === 0 ) {
                const $displayModal = $('<div>').attr('id', `${minedData.id}`);
                $displayModal.addClass('modal')
                $('.breweryResults').prepend($displayModal)
                const $title2 = $('<h1>').text(
                minedData.name + ' is a '+ minedData.brewery_type + ' brewery in ' + minedData.city + ', ' + minedData.state + 
                '.')
                const $title3 = $('<h2>').text('Website: ' + minedData.website_url)
                const $title4 = $('<h3>').text('Phone: ' + minedData.phone)
                $(`#${minedData.id}`).append($title2);
                $(`#${minedData.id}`).append($title3);
                $(`#${minedData.id}`).append($title4);
                const $gMapsFrame = $('<iframe>');
                $gMapsFrame.attr('src', `https://www.google.com/maps/embed/v1/place?q=${minedData.street}${minedData.city}${minedData.state}${minedData.postal_code}&key=AIzaSyCPFw1yWIAYr0WspFZHGTa11KDdmgCRBX4`)
                $(`#${minedData.id}`).append($gMapsFrame)
                
                $(`#${minedData.id}`).on('click', (event) => {
                    event.preventDefault();
                    $(`#${minedData.id}`).css('display','none')
                })    
            } else {
 
                $(`#${minedData.id}`).css('display','block')
                
            }
    };

    $('.container').on('click', '.boozyInfo', (event) => {
        event.preventDefault();
        const textValue = $(event.currentTarget).val();
        //$('#modal').css('display', 'block')
        const endpoint = `https://api.openbrewerydb.org/breweries?by_name=${textValue}`
        $.ajax({
        url: endpoint
        }).then(handleData2);
        });  


 
// ////////////////////////////////////////////  BREWERY MAP DB /////////////////////////////////////////////////////

// const handleData3 = (data)=> {
//     let brewMarkersArr = [];
//     for (let i=0; i <data.length; i++){
//         console.log('got ', data[i], i);
//         const brewMarkers= `${data[i].street}${data[i].city}${data[i].state}${data[i].postal_code}`
//         brewMarkersArr.push(brewMarkers)
//         const $gMapsFrame = $('<iframe>');
//         brewMarkers2 = $gMapsFrame.attr('src', `https://www.google.com/maps/embed/v1/place?q=${brewMarkers}&key=AIzaSyCPFw1yWIAYr0WspFZHGTa11KDdmgCRBX4`)
//         $('.container2').append($gMapsFrame)

// }
// };
// // initiallize function outside
// $('.button2').on('click', (event) => {
//     event.preventDefault();
//     const userInput= $(event.target).text();  
//     const textValue2 = $('.text_value2').val() 
            
    
    
//     const endpoint = `https://api.openbrewerydb.org/breweries?by_city=${textValue2}`
//     $.ajax({
//     url: endpoint
//     }).then(handleData3);
// });

});

//////////////////////////////////////////////// END 
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


 // const $gMapsFrame = $('<iframe>');
            // $gMapsFrame.attr('src', `https://www.google.com/maps/embed/v1/place?q=${data[i].street}${data[i].city}${data[i].state}${data[i].postal_code}&key=AIzaSyCPFw1yWIAYr0WspFZHGTa11KDdmgCRBX4`)
            // $('.container').append($gMapsFrame)


            // data[i].name + ' is a brewery in ' + data[i].city + ' ' + data[i].state + 
            // '. It is a ' + data[i].brewery_type + ' brewery. ' + `http://maps.google.com/?q=${data[i].street},${data[i].city},${data[i].state},${data[i].postal_code}`)
            // $('.container').append($title);



/////////////////////////////////////////////////////////////////////////////////////


// jQuery(function($) {
//     // Asynchronously Load the map API 
//     var script = document.createElement('script');
//     script.src = "https://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
//     document.body.appendChild(script);
// });

// function initialize() {
//     var map;
//     var bounds = new google.maps.LatLngBounds();
//     var mapOptions = {
//         mapTypeId: 'hybrid'
//      // mapTypeId: 'satellite'
//         // mapTypeId: 'roadmap'
//       // mapTypeId: 'terrain'
//     };
                    
//     // Display a map on the page
//     map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
//     map.setTilt(45);
        
//     // Multiple Markers
//     var markers = [
//         ['Abu Dhabi', 23.4503101,53.6555362],
//         ['Dubai, UAE ', 25.075677,54.9489376],
//       ['Ajman, UAE ', 25.3993862,55.4603624],
//       ['Fujairah, UAE ', 25.2875526,55.8887813],
//       ['Sharjah', 25.3166,55.476935],
//       ['Ras al-Khaimah', 25.7263233,55.827848],
//       ['Umm al-Qaiwain', 25.5096566,55.5952655]
//     ];
                        
//     // Info Window Content
//     var infoWindowContent = [
//         ['<div class="info_content">' +
//         '<h3>Abu Dhabi</h3>' +
//         '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
//          '<p>LYMO Users: 24</p>' + '<p>LYMO Drivers: 33</p>' +'</div>'],
//        ['<div class="info_content">' +
//         '<h3>Dubai, UAE </h3>' +
//         '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
//          '<p>LYMO Users: 24</p>' + '<p>LYMO Drivers: 33</p>' +'</div>'],
//       ['<div class="info_content">' +
//         '<h3>Ajman, UAE</h3>' +
//         '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
//          '<p>LYMO Users: 24</p>' + '<p>LYMO Drivers: 33</p>' +'</div>'],
//       ['<div class="info_content">' +
//         '<h3>Fujairah, UAE</h3>' +
//         '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
//          '<p>LYMO Users: 24</p>' + '<p>LYMO Drivers: 33</p>' +'</div>'],
//       ['<div class="info_content">' +
//         '<h3>Sharjah</h3>' +
//         '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
//          '<p>LYMO Users: 24</p>' + '<p>LYMO Drivers: 33</p>' +'</div>'],
//       ['<div class="info_content">' +
//         '<h3>Ras al-Khaimah</h3>' +
//         '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
//          '<p>LYMO Users: 24</p>' + '<p>LYMO Drivers: 33</p>' +'</div>'],
//       ['<div class="info_content">' +
//         '<h3>Umm al-Qaiwain</h3>' +
//         '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' +
//          '<p>LYMO Users: 24</p>' + '<p>LYMO Drivers: 33</p>' +'</div>']
//     ];
        
//     // Display multiple markers on a map
//     var infoWindow = new google.maps.InfoWindow(), marker, i;
    
//     // Loop through our array of markers & place each one on the map  
//     for( i = 0; i < markers.length; i++ ) {
//         var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
//         bounds.extend(position);
//         marker = new google.maps.Marker({
//             position: position,
//             map: map,
//             title: markers[i][0]
//         });
        
//         // Allow each marker to have an info window    
//         google.maps.event.addListener(marker, 'click', (function(marker, i) {
//             return function() {
//                 infoWindow.setContent(infoWindowContent[i][0]);
//                 infoWindow.open(map, marker);
//             }
//         })(marker, i));

//         // Automatically center the map fitting all markers on the screen
//         map.fitBounds(bounds);
//     }

//     // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
//     var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
//         this.setZoom(7);
//         google.maps.event.removeListener(boundsListener);
//     });
    
// }