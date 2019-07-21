console.log("this is linked");

$(() => {
  const handleData = data => {
    for (let i = 0; i < data.length; i++) {
      console.log("got ", data[i], i);
      const $title = $("<ul>")
        .text(data[i].name)
        .addClass("listBackgrounds");
      $(".breweryResults").css("display", "block");
      $(".breweryResults").append($title);
      const $button = $("<button>").val(data[i].name);
      $title.prepend($button);
      $button.text("Details");
      $button.addClass("boozyInfo");
      const $websiteLink = $("<href>").val(data[i].website_url);
      $title.append($websiteLink);
    }
  };
  $(".button2").on("click", event => {
    const userInput = $(event.target).text();
    $(".breweryResults").empty();
    $(".breweryResults").css("display", "none");
    const textValue = $(".text_value2").val();
    const endpoint = `https://api.openbrewerydb.org/breweries?by_city=${textValue}`; // search by brewery name
    $.ajax({
      url: endpoint
    }).then(handleData);
  });

  const handleData2 = data => {
    let minedData = data[data.length - 1];
    console.log($(`#${minedData.id}`).length);
    if ($(`#${minedData.id}`).length === 0) {
      const $displayModal = $("<div>").attr("id", `${minedData.id}`);
      const $xButton = $("<p>")
        .text("X")
        .attr("id", "datX");
      $displayModal.append($xButton);
      $displayModal.addClass("modal");
      $(".breweryResults").prepend($displayModal);
      const $title2 = $("<h1>")
        .text(
          minedData.name +
            " is a " +
            minedData.brewery_type +
            " brewery in " +
            minedData.city +
            ", " +
            minedData.state +
            "."
        )
        .attr("id", "individualBreweryText");
      const $title3 = $("<a>").text(minedData.name);
      $title3
        .attr("href", minedData.website_url)
        .attr("id", "linkText")
        .attr("target", "_blank");
      const $title4 = $("<h3>").text("Phone: " + minedData.phone);
      $(`#${minedData.id}`).append($title2);
      $(`#${minedData.id}`).append($title3);
      $(`#${minedData.id}`).append($title4);
      const $gMapsFrame = $("<iframe>");
      $gMapsFrame.attr(
        "src",
        `https://www.google.com/maps/embed/v1/place?q=${minedData.street}${
          minedData.city
        }${minedData.state}${
          minedData.postal_code
        }&key=AIzaSyCPFw1yWIAYr0WspFZHGTa11KDdmgCRBX4`
      );
      $(`#${minedData.id}`).append($gMapsFrame);

      $(`#datX`).on("click", event => {
        //X id
        event.preventDefault();
        $(`#${minedData.id}`).css("display", "none");
      });
    } else {
      $(`#${minedData.id}`).css("display", "block");
    }
  };

  $(".container").on("click", ".boozyInfo", event => {
    event.preventDefault();
    const textValue = $(event.currentTarget).val();
    //$('#modal').css('display', 'block')
    const endpoint = `https://api.openbrewerydb.org/breweries?by_name=${textValue}`;
    $.ajax({
      url: endpoint
    }).then(handleData2);
  });
});