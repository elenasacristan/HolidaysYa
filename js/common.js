function createTable(ndx) {

    var allDimension = ndx.dimension(function (d) {
        return (d);
    });



    var tableChart = dc.dataTable('#table');
    tableChart
        .useViewBoxResizing(true) // allows chart to be responsive
        .dimension(allDimension)
        .group(function (data) {
            return (data);
        })
        .size(Infinity)
        .columns([
            {
                label: "Month",
                format: function (d) { return d.month }
            },
            {
                label: "City",
                format: function (d) { return d.city }
            },
            {
                label: "Country",
                format: function (d) { return d.country }
            },
            {
                label: "Hostel",
                format: function (d) { return d.hostelNight }
            },
            {
                label: "Meals",
                format: function (d) { return d.meals }
            },
            {
                label: "Drinks",
                format: function (d) { return d.drinks }
            },
            {
                label: "Transport",
                format: function (d) { return d.transport }
            },
            {
                label: "Attractions",
                format: function (d) { return d.attractions }
            },
            {
                label: "min.Temperature(C)",
                format: function (d) { return d.minTemp }
            },
            {
                label: "max.Temperature(C)",
                format: function (d) { return d.maxTemp }
            },
            {
                label: "Precipitation",
                format: function (d) { return d.precipitation }
            },
            {
                label: "Currency",
                format: function (d) { return d.currency }
            },
            {
                label: "Visitors per year\n (Millions)",
                format: function (d) { return d.visitorsCity }
            },
            {
                label: "Find out more...",
                format: function (d) { return d.wikiLink }
            }
        ])

        .sortBy(function (d) {
            return d.value;
        })
        .showGroups(false)// this will remove the [object][object] at the top of the rows
        .order(d3.ascending);
}


function showTitle(option) {
    document.getElementById("Title").innerHTML = `<h2>Results By ${option}</h2>`;
}