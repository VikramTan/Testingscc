// function pageTitle($rootScope, $timeout) {
//   return {
//     link: function (element) {
//       var listener = function (toState) {
//         // Default title - load on Dashboard 1
//         var title = "MASAAGO | Responsive Admin Theme";
//         // Create your own title pattern
//         if (toState.data && toState.data.pageTitle)
//           title = "MASSAGO | " + toState.data.pageTitle;
//         $timeout(function () {
//           element.text(title);
//         });
//       };
//       $rootScope.$on("$stateChangeStart", listener);
//     },
//   };
// }
app.run([
  "$rootScope",
  function ($rootScope) {
    $rootScope.$on("$routeChangeSuccess", function (event, current, previous) {
      $rootScope.title = current.$$route.title;
    });
  },
]);
