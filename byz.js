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

function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}
var aDay = 24*60*60*1000


setTimeout(function(){
  ///SET MODIFIER
  var modifier = 4;

  fetch("https://api.byz.network/api/allEvents")
  
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log("There has been " + myJson.length + " swaps");
    var latestSwap = myJson[myJson.length-1];
    var secondToLatest = myJson[myJson.length-2];
    var thirdToLatest = myJson[myJson.length-3];
    
    setTimeout(function(){
      fetch("https://api.blockcypher.com/v1/eth/main/blocks/"+ latestSwap.blockNum)
        .then(function(response) {
          return response.json();
        })
        .then(function(blockTime) {
          setTimeout(function(){$('#modalDialog').modal('hide');},7000)
          $('#modalDialog').modal(0,1,1,1);
          $('#timeAgo').html( timeSince(new Date(blockTime.time)) +" ago...");
          $('#amountModal').html("Someone swapped some BLUE<br />and got " + (latestSwap.amt/10**8)*5 +" BYZ!");
        });
    },10000);

    setTimeout(function(){
      
      fetch("https://api.byz.network/api/allEvents")
  
      .then(function(response) {
        return response.json();
      })
      .then(function(secondCheck) {
        console.log("There has been " + secondCheck.length + " swaps Last check was :" + myJson.length);
        secondCheck.length>myJson.length ? secondToLatest = secondCheck[secondCheck.length-2] : secondToLatest = myJson[myJson.length-2];

        fetch("https://api.blockcypher.com/v1/eth/main/blocks/"+ secondToLatest.blockNum)
          .then(function(response) {
            return response.json();
          })
          .then(function(blockTime) {
            setTimeout(function(){$('#modalDialog').modal('hide');},7000)
            $('#modalDialog').modal(0,1,1,1);
            $('#timeAgo').html( timeSince(new Date(blockTime.time)) +" ago...");
            $('#amountModal').html("Someone swapped some BLUE<br />and got " + (secondToLatest.amt/10**8)*5 +" BYZ!");
          });
      }
    )},25000);

    setTimeout(function(){
      
      fetch("https://api.byz.network/api/allEvents")
  
      .then(function(response) {
        return response.json();
      })
      .then(function(thirdCheck) {
        console.log("There has been " + thirdCheck.length + " swaps Last check was :" + myJson.length);
        thirdCheck.length>myJson.length ? thirdToLatest = thirdCheck[thirdCheck.length-3] : thirdToLatest = myJson[myJson.length-3];

        fetch("https://api.blockcypher.com/v1/eth/main/blocks/"+ thirdToLatest.blockNum)
          .then(function(response) {
            return response.json();
          })
          .then(function(blockTime) {
            
            $('#modalDialog').modal(0,1,1,1);
            setTimeout(function(){$('#modalDialog').modal('hide');},7000)
            $('#timeAgo').html( timeSince(new Date(blockTime.time)) +" ago...");
            $('#amountModal').html("Someone swapped some BLUE<br />and got " + (thirdToLatest.amt/10**8)*5 +" BYZ!");
          });
      }
    )},39000);

  });
}, 100);

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
