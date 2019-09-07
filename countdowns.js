// To activate any countdown, use <div class=CountdownX>
let CountdownPhase = 0;

$("#Countdown1")
  .countdown("2019/08/31 10:00:00 GMT+0200")
  .on("update.countdown", function(event) {
    var format = "%H:%M:%S";
    if (event.offset.totalDays > 0) {
      format = "%-d day%!d " + format;
    }
    if (event.offset.weeks > 0) {
      format = "%-w week%!w " + format;
    }
    $(this).html("in " + event.strftime(format));
  })
  .on("finish.countdown", function(event) {
    CountdownPhase = 1;
    ratio();
    countdowncheker();
    $(this)
      .html("NOW!")
      .parent()
      .addClass("disabled");
  });

function ratio() {
  if (CountdownPhase == 0) {
    $("#ratio").html("Swap not yet started");
  }
  if (CountdownPhase == 1) {
    $("#ratio").html("1 BLUE = 5 BYZ");
  }
  if (CountdownPhase == 2) {
    $("#ratio").html("1 BLUE = 4 BYZ");
  }
  if (CountdownPhase == 3) {
    $("#ratio").html("1 BLUE = 3 BYZ");
  }
  if (CountdownPhase == 4) {
    $("#ratio").html("1 BLUE = 2 BYZ");
  }
  if (CountdownPhase == 5) {
    $("#ratio").html("1 BLUE = 2 BYZ");
  }
  if (CountdownPhase == 6) {
    $("#ratio").html("SWAP IS OVER");
  }
}
ratio();

function countdowncheker() {
  if (CountdownPhase > 0) {
    if (CountdownPhase == 1) {
      $("#Countdown2")
        .countdown("2019/09/06 10:00:00 GMT+1000")
        .on("update.countdown", function(event) {
          var format = "%H:%M:%S";
          if (event.offset.totalDays > 0) {
            format = "in %-d day%!d " + format;
          }
          if (event.offset.weeks > 0) {
            format = "%-w week%!w " + format;
          }
          $(this).html(event.strftime(format));
        })
        .on("finish.countdown", function(event) {
          CountdownPhase = 2;

          ratio();
          $(this)
            .html("Swap period over")
            .parent()
            .addClass("disabled");
          countdowncheker();
        });
    }
    if (CountdownPhase == 2) {
      $("#Countdown3")
        .countdown("2019/10/06 10:00:00 GMT+1000")
        .on("update.countdown", function(event) {
          var format = "%H:%M:%S";
          if (event.offset.totalDays > 0) {
            format = "%-d day%!d " + format;
          }
          if (event.offset.weeks > 0) {
            format = "in %-w week%!w " + format;
          }
          $(this).html(event.strftime(format));
        })
        .on("finish.countdown", function(event) {
          CountdownPhase = 3;
          ratio();
          $(this)
            .html("Swap period over")
            .parent()
            .addClass("disabled");
          countdowncheker();
        });
    }

    if (CountdownPhase == 3) {
      $("#Countdown4")
        .countdown("2019/11/06 10:00:00 GMT+1000")
        .on("update.countdown", function(event) {
          var format = "%H:%M:%S";
          if (event.offset.totalDays > 0) {
            format = "%-d day%!d " + format;
          }
          if (event.offset.weeks > 0) {
            format = "%-w week%!w " + format;
          }
          $(this).html(event.strftime(format));
        })
        .on("finish.countdown", function(event) {
          CountdownPhase = 4;
          ratio();
          $(this)
            .html("Swap period over")
            .parent()
            .addClass("disabled");
          countdowncheker();
        });
    }

    if (CountdownPhase == 4) {
      $("#Countdown5")
        .countdown("2019/12/06 10:00:00 GMT+1000")
        .on("update.countdown", function(event) {
          var format = "%H:%M:%S";
          if (event.offset.totalDays > 0) {
            format = "%-d day%!d " + format;
          }
          if (event.offset.weeks > 0) {
            format = "%-w week%!w " + format;
          }
          $(this).html(event.strftime(format));
        })
        .on("finish.countdown", function(event) {
          CountdownPhase = 5;
          ratio();
          $(this)
            .html("Swap period over")
            .parent()
            .addClass("disabled");
          countdowncheker();
        });
    }

    if (CountdownPhase == 5) {
      $("#Countdown6")
        .countdown("2020/1/06 10:00:00 GMT+1000")
        .on("update.countdown", function(event) {
          var format = "%H:%M:%S";
          if (event.offset.totalDays > 0) {
            format = "%-d day%!d " + format;
          }
          if (event.offset.weeks > 0) {
            format = "%-w week%!w " + format;
          }
          $(this).html(event.strftime(format));
        })
        .on("finish.countdown", function(event) {
          CountdownPhase = 6;
          ratio();
          $(this)
            .html("Swap period over")
            .parent()
            .addClass("disabled");
          return true;
        });
    }
  }
}
