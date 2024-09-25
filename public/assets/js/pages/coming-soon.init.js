$("[data-countdown]").each(function () {
  var n = $(this),
    s = $(this).data("countdown");
  n.countdown(s, function (n) {
    $(this).html(
      n.strftime(
        '<div className="coming-box">%D <span>Days</span></div> <div className="coming-box">%H <span>Hours</span></div> <div className="coming-box">%M <span>Minutes</span></div> <div className="coming-box">%S <span>Seconds</span></div> '
      )
    );
  });
});
