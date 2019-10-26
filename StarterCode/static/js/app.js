// from data.js
var tableData = data;

var button = d3.select("#filter-btn");

button.on("click", function() {



    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    // Filtering data on date
    var filteredData = tableData.filter(data => data.datetime === inputValue);

    var tableBody = d3.select('tbody');

    filteredData.forEach(function(result) {
        var row = tableBody.append('tr');
        Object.entries(result).forEach(function([key,value]) {
            var cell = row.append('td');
            cell.text(value);
        });
    });
});
var clear_button = d3.select('#remove')
clear_button.on('click', function() {
    var tableBody = d3.select('tbody');

    tableBody.html("");
})