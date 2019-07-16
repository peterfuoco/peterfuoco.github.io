console.log('this is linked')

$(() => { 
    const handleData = (data)=> {
    for (let i=0; i <data.length; i++){
             console.log('got ', data[i].name)
                const $title = $('<ul>').text(
                data[i].name + ' ' + data[i].name); 
                $('.container').append($title);
                }
        }
    
        // console.log('got',data[i])
    $('.button').on('click', event => {
        const userInput= $(event.target).text();
        const textValue = $('.text_value').val()
        // console.log(textValue)

    // const endpoint = `https://api.openbrewerydb.org/breweries`   
    // const endpoint = 'https://api.openbrewerydb.org/breweries?by_state=connecticut' BY STATE
    const endpoint = `https://api.openbrewerydb.org/breweries?by_state=${textValue}`

    
    $.ajax({
    url: endpoint
    }).then(handleData);
});
});

