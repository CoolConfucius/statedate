$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "exercise_data.csv",
    dataType: "text",
    success: function(data) {processData(data);}
  });

  var map = AmCharts.makeChart( "chartdiv", {
    "type": "map",
    "theme": "light",
    "dataProvider": {
      "map": "worldLow",
      "zoomLevel": 3.5,
      "zoomLongitude": -96,
      "zoomLatitude": 37,
      "areas": [ {
        "id": "US",
        "color": "#00CC00"
      }
      ]
    }
    ,

    "areasSettings": {
      "rollOverOutlineColor": "#FFFFFF",
      "rollOverColor": "#009900",
      "alpha": 0.8,
      "unlistedAreasAlpha": 0
    }

  } );
});

function processData(allText) {
    // console.log("allText: \n" + allText);
    // var record_num = 5;  // or however many elements there are in each row
    // var allTextLines = allText.split(/\r\n|\n/);
    // console.log("allTextLines: \n" + allTextLines);
    // var entries = allTextLines[0].split(',');
    // console.log("entries: \n" + entries);
    // var lines = [];

    // var headings = entries.splice(0,record_num);
    // while (entries.length>0) {
    //     var tarr = [];
    //     for (var j=0; j<record_num; j++) {
    //         tarr.push(headings[j]+":"+entries.shift());
    //     }
    //     lines.push(tarr);
    // }
    // console.log(lines);




    console.log(Papa.parse(allText));
  }