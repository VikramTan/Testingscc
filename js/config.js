app.config(function ($routeProvider) {
  $routeProvider
    .when("index", {
      templateUrl: "views/add.html",
      controller: "AddStudentController",
      title: "Home",
    })
    .when("/DisplayStudent", {
      templateUrl: "views/student.html",
      controller: "ViewStudentController",
    });
  // .otherwise({
  //   redirectTo: "/DisplayStudent",
  // });
});
