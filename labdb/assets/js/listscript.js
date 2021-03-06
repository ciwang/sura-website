/*****************
 * Initialize List
 *****************/

// valueNames: class names for the different values of each list item
// page: how many items that should be visible at the same time. Default 200
// item: ID of item template element
var options = {
  valueNames: ['name', 'pi', 'category', 'department', 'goals', 'primary', 'secondary', 'website'],
  page: 1000,
  item: 'template'
};

var labsList = new List('labs', options);

/***************************************
 * Retrieve Data from Google Spreadsheet
 ***************************************/

var updateResults = function(error, options, response) {
    console.log("Errors:", error);
    var data = [];
    for (var i=1; i<response["rows"].length; i++) {
        data.push(response["rows"][i]["cells"]);
    }
    console.log("Total number of labs:", data.length);
    labsList.add(data);

    // make website links clickable
    $("a.website").each( function() {
      $( this ).attr("href", $( this ).text());
    });

    // hide loading spinner
    $("#loading_spinner").hide();
}

var params = {
  url: 'https://docs.google.com/spreadsheets/d/11jJmYO_zn8LBk68KZWdsf0Uz_E7BQeL9AiB2gz6MSy0/edit#gid=547440635',
  query: "select *",
  callback: updateResults,
  reset: true
};

sheetrock(params);


/***********
 * Filtering
 ***********/

$('#filter-category').change(function () {
    var selection = this.value;
    if (selection) {
        labsList.filter(function(item) {
          return (item.values().category == selection);
        });
    } else {
        labsList.filter();
    }
});