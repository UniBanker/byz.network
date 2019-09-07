$(function() {
  $("#slider-vertical").slider({
    orientation: "vertical",
    range: "min",
    min: 0.0,
    max: 7,
    value: 2,
    step: 0.1,
    slide: function(event, ui) {
      $("#amount").val(ui.value);
      drawChartPie();
    }
  });
  $("#amount").val($("#slider-vertical").slider("value"));
});

function gotoSwap(){
  btcAdress = byzAddress.substring(3,byzAddress.length);
  window.location.href = "http://byz.network/claim/?btcAddress=" + btcAdress + "&blue="+ this.blueToSwap;
}

function checkAddress(){
  this.byzAddress = $('#byzAddress').val();
  
  $("#successValidatingByzAddress").hide();
  
  
  if (/^BYZ3[a-km-zA-HJ-NP-Z1-9]{24,33}$/.test(byzAddress)) {
  $("#byzAddress").prop('disabled', true);
  $("#errorValidatingByzAddress").hide();
  $("#successValidatingByzAddress").fadeIn(250);
  this.addresValidated = true;
  if (!isNaN($("#amountToSwap").val())){
    $("#errorAmount").hide(); 
    $("#swapButton").prop('disabled', false);
  }

}else{
  $("#errorValidatingByzAddress").fadeIn(250);
  $("#swapButton").prop('disabled', true);
  this.addresValidated = false;
}
};

function checkAmount(){
  this.blueToSwap = $("#amountToSwap").val();
  console.log(this.addresValidated);
  console.log(!isNaN($("#amountToSwap").val()));
  if (!isNaN($("#amountToSwap").val())){
    $("#errorAmount").hide(); 
    if(this.addresValidated){
      $("#swapButton").prop('disabled', false);
    }
  }else {
   $("#errorAmount").fadeIn(250); 
   $("#swapButton").prop('disabled', true);
  }
};



google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChartPie);

//Set Bitcoin per block
var BitcoinBlock = 12.5;
var BlocksPerDay = 144;
var DaysinWeek = 7;
var WeeksinMonth = 4;
var WeeksinYear = 52;
var BTCPRICE = 10000;
//Set total BYZ in millions
var BYZtotal = 3000 * 10 ** 6;
var DailyEmission = BlocksPerDay * BitcoinBlock;

function drawChartPie() {
  var checked = $("input[type=checkbox]").prop("checked");
  var BYZ = parseFloat(document.querySelector("#BYZ").value);
  var MTHs = parseFloat(document.querySelector("#amount").value);
  var ratio = BYZ / BYZtotal;
  var ShareOfTotal = MTHs / 75;
  var Daily = DailyEmission * ShareOfTotal * ratio * BTCPRICE;
  if (checked) {
    Daily = Daily * 10;
  }
  var Weekly = Daily * DaysinWeek;
  var Monthly = Weekly * WeeksinMonth;
  var Yearly = Weekly * WeeksinYear;

  $(document).ready(function() {
    /* $('.msg').html('BTC Earned <br>Daily : ' + Daily/BTCPRICE + '<br>Weekly : ' + Weekly/BTCPRICE + '<br>Monthly : ' + Monthly/BTCPRICE + '<br>Yearly : ' + Yearly/BTCPRICE ); */
    $(".msg2").html(MTHs + " MTH/s");
  });

  var data3 = google.visualization.arrayToDataTable([
    ["Name", "Earned", { role: "style" }, { role: "annotation" }],
    [
      "Week",
      Weekly,
      "annotation-color: #ffffff",
      "Week: $" + Weekly.toFixed(2)
    ],
    [
      "Month",
      Monthly,
      "opacity: 0.8; annotations-color: white; annotation-color: white; annotation-color: #ffffff;",
      "Month: $" + Monthly.toFixed(2)
    ],
    [
      "Year",
      Yearly,
      "stroke-color: #6633cc; stroke-opacity: 0.6; stroke-width: 4;  fill-color: #330099; fill-opacity: 0.2; annotations-color: #ffffff",
      "Year: $" + Yearly.toFixed(2)
    ]
  ]);

  var options3 = {
    annotations: {
      textStyle: {
        // The color of the text.
        color: "#ffffff",

        // The transparency of the text.
        opacity: 0.8
      }
    },
    animation: {
      startup: true,
      duration: 700,
      easing: "inAndOut"
    },
    legend: "none",
    axisFontSize: 0,
    bar: { groupWidth: "99%" },

    backgroundColor: { fill: "transparent" },
    animation: {
      duration: 1000,
      easing: "in"
    },
    vAxis: {
      gridlines: {
        color: "none"
      },
      baselineColor: "#fff",
      gridlineColor: "#fff",
      textPosition: "none"
    },
    hAxis: {
      gridlines: {
        color: "none"
      },
      baselineColor: "#fff",
      gridlineColor: "#fff",
      textPosition: "none"
    }
  };

  var chart3 = new google.visualization.ColumnChart(
    document.getElementById("chart_divPie")
  );

  chart3.draw(data3, options3);
}
