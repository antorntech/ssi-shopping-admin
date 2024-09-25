var url = "assets/json/",
  userListData = "",
  editList = !1,
  getJSON = function (e, t) {
    var a = new XMLHttpRequest();
    a.open("GET", url + e, !0),
      (a.responseType = "json"),
      (a.onload = function () {
        var e = a.status;
        t(200 === e ? null : e, a.response);
      }),
      a.send();
  };
function loadUserList(e) {
  $("#userList-table").DataTable({
    data: e,
    bLengthChange: !1,
    order: [[0, "desc"]],
    language: {
      oPaginate: {
        sNext: '<i className="mdi mdi-chevron-right"></i>',
        sPrevious: '<i className="mdi mdi-chevron-left"></i>',
      },
    },
    columns: [
      {
        data: null,
        render: function (e, t, a) {
          var i = a.memberImg
            ? '<img src="' +
              a.memberImg +
              '" alt="" className="member-img img-fluid d-block rounded-circle" />'
            : '<div className="avatar-title rounded-circle text-uppercase">' +
              a.nickname +
              "</div>";
          return (
            '<div className="d-none">' +
            a.id +
            '</div><div className="avatar-xs img-fluid rounded-circle">' +
            i +
            "</div"
          );
        },
      },
      {
        data: null,
        render: function (e, t, a) {
          return (
            '<div>                    <h5 className="text-truncate font-size-14 mb-1"><a href="#" className="text-dark">' +
            a.userName +
            '</a></h5>                    <p className="text-muted mb-0">' +
            a.designation +
            "</p>                    </div>"
          );
        },
      },
      { data: "email" },
      {
        data: "tags",
        render: function (e, t, a) {
          var i,
            n = a.tags,
            s = "";
          return (
            Array.from(n.slice(0, 2)).forEach(function (e, t) {
              s +=
                '<a href="#" className="badge badge-soft-primary font-size-11 m-1">' +
                e +
                "</a>";
            }),
            2 < n.length &&
              ((i = n.length - 2),
              (s +=
                '<a href="#" className="badge badge-soft-primary font-size-11 m-1">' +
                i +
                " more</a>")),
            s
          );
        },
      },
      { data: "projects" },
      {
        data: null,
        bSortable: !1,
        render: function (e, t, a) {
          return (
            '<ul className="list-inline font-size-20 contact-links mb-0">                    <li className="list-inline-item">                        <a href="#" className="px-2"><i className="bx bx-message-square-dots"></i></a>                    </li>                    <li className="list-inline-item">                        <a href="#" className="px-2"><i className="bx bx-user-circle"></i></a>                    </li>                    <li className="list-inline-item">                    <div className="dropdown">                        <a href="#" className="dropdown-toggle card-drop px-2" data-bs-toggle="dropdown" aria-expanded="false">                            <i className="mdi mdi-dots-horizontal font-size-18"></i>                        </a>                        <ul className="dropdown-menu dropdown-menu-end">                            <li><a href="#newContactModal" data-bs-toggle="modal" className="dropdown-item edit-list" data-edit-id="' +
            a.id +
            '"><i className="mdi mdi-pencil font-size-16 text-success me-1"></i> Edit</a></li>                            <li><a href="#removeItemModal" data-bs-toggle="modal" className="dropdown-item remove-list" data-remove-id="' +
            a.id +
            '"><i className="mdi mdi-trash-can font-size-16 text-danger me-1"></i> Delete</a></li>                        </ul>                    </div>                    </li>                </ul>'
          );
        },
      },
    ],
    drawCallback: function (e) {
      editContactList(), removeItem();
    },
  }),
    $("#searchTableList").keyup(function () {
      $("#userList-table").DataTable().search($(this).val()).draw();
    }),
    $(".dataTables_length select").addClass("form-select form-select-sm"),
    $(".dataTables_paginate").addClass("pagination-rounded"),
    $(".dataTables_filter").hide();
}
getJSON("contact-user-list.json", function (e, t) {
  null !== e
    ? console.log("Something went wrong: " + e)
    : loadUserList((userListData = t));
}),
  $("#tag-input").select2();
var createContactForms = document.querySelectorAll(".createContact-form");
function fetchIdFromObj(e) {
  return parseInt(e.id);
}
function findNextId() {
  if (0 === userListData.length) return 0;
  var e = fetchIdFromObj(userListData[userListData.length - 1]),
    t = fetchIdFromObj(userListData[0]);
  return e <= t ? t + 1 : e + 1;
}
function editContactList() {
  var a;
  Array.from(document.querySelectorAll(".edit-list")).forEach(function (t) {
    t.addEventListener("click", function (e) {
      (a = t.getAttribute("data-edit-id")),
        (editList = !0),
        document
          .getElementById("createContact-form")
          .classList.remove("was-validated"),
        (userListData = userListData.map(function (e) {
          return (
            e.id == a &&
              ((document.getElementById("newContactModalLabel").innerHTML =
                "Edit Profile"),
              (document.getElementById("addContact-btn").innerHTML = "Update"),
              (document.getElementById("userid-input").value = e.id),
              "" == e.memberImg
                ? (document.getElementById("member-img").src =
                    "assets/images/users/user-dummy-img.jpg")
                : (document.getElementById("member-img").src = e.memberImg),
              (document.getElementById("username-input").value = e.userName),
              (document.getElementById("designation-input").value =
                e.designation),
              (document.getElementById("email-input").value = e.email),
              $("#tag-input").select2({ multiple: !0 }),
              $("#tag-input").val(e.tags).trigger("change")),
            e
          );
        }));
    });
  });
}
function removeItem() {
  var a;
  Array.from(document.querySelectorAll(".remove-list")).forEach(function (t) {
    t.addEventListener("click", function (e) {
      (a = t.getAttribute("data-remove-id")),
        document
          .getElementById("remove-item")
          .addEventListener("click", function () {
            var t,
              e =
                ((t = a),
                userListData.filter(function (e) {
                  return e.id != t;
                }));
            (userListData = e),
              $.fn.DataTable.isDataTable("#userList-table") &&
                $("#userList-table").DataTable().destroy(),
              loadUserList(userListData),
              $("#removeItemModal").modal("hide");
          });
    });
  });
}
Array.prototype.slice.call(createContactForms).forEach(function (m) {
  m.addEventListener(
    "submit",
    function (e) {
      var t, a, i, n, s, r, d, l, o;
      m.checkValidity()
        ? (e.preventDefault(),
          (t = document.getElementById("member-img").src),
          (a =
            "assets/images/users/user-dummy-img.jpg" ==
            t.substring(t.indexOf("/as") + 1)
              ? ""
              : t),
          (i = document.getElementById("username-input").value),
          (n = i
            .match(/\b(\w)/g)
            .join("")
            .substring(0, 2)),
          (s = document.getElementById("designation-input").value),
          (r = document.getElementById("email-input").value),
          (d = $("#tag-input").val()),
          "" === i || "" === s || "" === r || editList
            ? "" !== i &&
              "" !== s &&
              "" !== r &&
              editList &&
              ((l = 0),
              (l = document.getElementById("userid-input").value),
              (userListData = userListData.map(function (e) {
                return e.id != l
                  ? e
                  : {
                      id: l,
                      memberImg: a,
                      nickname: n,
                      userName: i,
                      designation: s,
                      email: r,
                      tags: d,
                      projects: e.projects,
                    };
              })),
              (editList = !1))
            : ((o = {
                id: findNextId(),
                memberImg: a,
                nickname: n,
                userName: i,
                designation: s,
                email: r,
                tags: d,
                projects: "--",
              }),
              userListData.push(o)),
          $.fn.DataTable.isDataTable("#userList-table") &&
            $("#userList-table").DataTable().destroy(),
          loadUserList(userListData),
          $("#newContactModal").modal("hide"))
        : (e.preventDefault(), e.stopPropagation()),
        m.classList.add("was-validated");
    },
    !1
  );
}),
  document
    .querySelector("#member-image-input")
    .addEventListener("change", function () {
      var e = document.querySelector("#member-img"),
        t = document.querySelector("#member-image-input").files[0],
        a = new FileReader();
      a.addEventListener(
        "load",
        function () {
          e.src = a.result;
        },
        !1
      ),
        t && a.readAsDataURL(t);
    }),
  Array.from(document.querySelectorAll(".addContact-modal")).forEach(function (
    e
  ) {
    e.addEventListener("click", function (e) {
      (editList = !1),
        document
          .getElementById("createContact-form")
          .classList.remove("was-validated"),
        (document.getElementById("newContactModalLabel").innerHTML =
          "Add Contact"),
        (document.getElementById("addContact-btn").innerHTML = "add"),
        (document.getElementById("userid-input").value = ""),
        (document.getElementById("username-input").value = ""),
        (document.getElementById("email-input").value = ""),
        (document.getElementById("designation-input").value = ""),
        (document.getElementById("member-img").src =
          "assets/images/users/user-dummy-img.jpg"),
        $("#tag-input").select2({ multiple: !0 }),
        $("#tag-input").val("").trigger("change");
    });
  });
