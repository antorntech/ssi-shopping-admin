!(function (t) {
  "use strict";
  function e() {}
  (e.prototype.init = function () {
    t("#sa-basic").on("click", function () {
      Swal.fire({
        title: "Any fool can use a computer",
        confirmButtonColor: "#556ee6",
      });
    }),
      t("#sa-title").click(function () {
        Swal.fire({
          title: "The Internet?",
          text: "That thing is still around?",
          icon: "question",
          confirmButtonColor: "#556ee6",
        });
      }),
      t("#sa-success").click(function () {
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
          showCancelButton: !0,
          confirmButtonColor: "#556ee6",
          cancelButtonColor: "#f46a6a",
        });
      }),
      t("#sa-warning").click(function () {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: !0,
          confirmButtonColor: "#34c38f",
          cancelButtonColor: "#f46a6a",
          confirmButtonText: "Yes, delete it!",
        }).then(function (t) {
          t.value &&
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
        });
      }),
      t("#sa-params").click(function () {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: !0,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          customClass: {
            confirmButton: "btn btn-success mt-2",
            cancelButton: "btn btn-danger ms-2 mt-2",
          },
          buttonsStyling: !1,
        }).then(function (t) {
          t.value
            ? Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              })
            : t.dismiss === Swal.DismissReason.cancel &&
              Swal.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error",
              });
        });
      }),
      t("#sa-image").click(function () {
        Swal.fire({
          title: "Sweet!",
          text: "Modal with a custom image.",
          imageUrl: "assets/images/logo-dark.png",
          imageHeight: 20,
          confirmButtonColor: "#556ee6",
          animation: !1,
        });
      }),
      t("#sa-close").click(function () {
        var t;
        Swal.fire({
          title: "Auto close alert!",
          html: "I will close in <strong></strong> seconds.",
          timer: 2e3,
          confirmButtonColor: "#556ee6",
          onBeforeOpen: function () {
            Swal.showLoading(),
              (t = setInterval(function () {
                Swal.getContent().querySelector("strong").textContent =
                  Swal.getTimerLeft();
              }, 100));
          },
          onClose: function () {
            clearInterval(t);
          },
        }).then(function (t) {
          t.dismiss === Swal.DismissReason.timer &&
            console.log("I was closed by the timer");
        });
      }),
      t("#custom-html-alert").click(function () {
        Swal.fire({
          title: "<i>HTML</i> <u>example</u>",
          icon: "info",
          html: 'You can use <b>bold text</b>, <a href="//Themesbrand.in/">links</a> and other HTML tags',
          showCloseButton: !0,
          showCancelButton: !0,
          confirmButtonClass: "btn btn-success",
          cancelButtonClass: "btn btn-danger ms-1",
          confirmButtonColor: "#47bd9a",
          cancelButtonColor: "#f46a6a",
          confirmButtonText: '<i className="fas fa-thumbs-up me-1"></i> Great!',
          cancelButtonText: '<i className="fas fa-thumbs-down"></i>',
        });
      }),
      t("#sa-position").click(function () {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: !1,
          timer: 1500,
        });
      }),
      t("#custom-padding-width-alert").click(function () {
        Swal.fire({
          title: "Custom width, padding, background.",
          width: 600,
          padding: 100,
          confirmButtonColor: "#556ee6",
          background:
            "#fff url(//subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/geometry.png)",
        });
      }),
      t("#ajax-alert").click(function () {
        Swal.fire({
          title: "Submit email to run ajax request",
          input: "email",
          showCancelButton: !0,
          confirmButtonText: "Submit",
          showLoaderOnConfirm: !0,
          confirmButtonColor: "#556ee6",
          cancelButtonColor: "#f46a6a",
          preConfirm: function (n) {
            return new Promise(function (t, e) {
              setTimeout(function () {
                "taken@example.com" === n
                  ? e("This email is already taken.")
                  : t();
              }, 2e3);
            });
          },
          allowOutsideClick: !1,
        }).then(function (t) {
          Swal.fire({
            icon: "success",
            title: "Ajax request finished!",
            html: "Submitted email: " + t,
            confirmButtonColor: "#556ee6",
          });
        });
      });
  }),
    (t.SweetAlert = new e()),
    (t.SweetAlert.Constructor = e);
})(window.jQuery),
  (function () {
    "use strict";
    window.jQuery.SweetAlert.init();
  })();
