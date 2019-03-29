angular.module("app",["ngRoute"]),angular.module("app").controller("ApplicationCtrl",["$scope","UserSvc",function(o,t){o.$on("login",function(t,e){o.currentUser=e}),o.logout=function(){t.logout(),delete o.currentUser}}]),angular.module("app").controller("ChildCtrl",["$scope","UserSvc","$location",function(t,l,s){t.addChild=function(t,e,o,n,r){l.addChild(t,e,o,n,r).then(function(t){s.path("/user-account")})}}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc","$location",function(o,n,r){o.login=function(t,e){n.login(t,e).then(function(t){o.$emit("login",t.data),r.path("/user-account")})}}]),angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(e,t){e.addPost=function(){e.postBody&&(console.log(e.postBody),t.create({body:e.postBody}).success(function(t){e.posts.unshift(t),e.postBody=null}))},t.fetch().success(function(t){e.posts=t})}]),angular.module("app").service("PostsSvc",["$http",function(e){this.fetch=function(){return e.get("/api/posts")},this.create=function(t){return e.post("/api/posts",t)}}]),angular.module("app").controller("RegisterCtrl",["$scope","UserSvc","$location",function(c,i,p){c.register=function(t,e,o,n,r,l,s,a,u){i.register(t,e,o,n,r,l,s,a,u).then(function(t){c.$emit("login",t.data),p.path("/user-account")})}}]),angular.module("app").config(["$routeProvider",function(t){t.when("/",{templateUrl:"index.html"}).when("/classes",{templateUrl:"classes.html"}).when("/about",{templateUrl:"about.html"}).when("/faq",{templateUrl:"faq.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"login-form.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"registration-form.html"}).when("/posts",{controller:"PostsCtrl",templateUrl:"posts.html"}).when("/user-account",{templateUrl:"user-account.html"}).when("/user-classes",{templateUrl:"user-classes.html"}).when("/user-photos",{templateUrl:"user-photos.html"}).when("/user-payments",{templateUrl:"user-payments.html"}).when("/user-forms",{templateUrl:"user-forms.html"}).when("/update-user-account",{controller:"UpdateCtrl",templateUrl:"update-user-account.html"}).when("/add-child",{controller:"ChildCtrl",templateUrl:"add-child.html"})}]),angular.module("app").controller("UpdateCtrl",["$scope","UserSvc","$location",function(t,c,i){t.update=function(t,e,o,n,r,l,s,a,u){c.update(t,e,o,n,r,l,s,a,u).then(function(t){i.path("/user-account")})}}]),angular.module("app").service("UserSvc",["$http",function(c){var i=this;i.getUser=function(){return c.get("/api/users")},i.register=function(t,e,o,n,r,l,s,a,u){return c.post("/api/users",{email:t,password:e,firstName:o,lastName:n,streetAddress:r,city:l,state:s,zip:a,phone:u}).then(function(){return i.login(t,e)})},i.login=function(t,e){return c.post("/api/sessions",{email:t,password:e}).then(function(t){return i.token=t.data,c.defaults.headers.common["X-Auth"]=t.data,i.getUser()})},i.logout=function(){delete c.defaults.headers.common["X-Auth"]},i.update=function(t,e,o,n,r,l,s,a,u){return c.put("/api/users/update",{id:t,email:e,firstName:o,lastName:n,streetAddress:r,city:l,state:s,zip:a,phone:u})},i.addChild=function(t,e,o,n,r){return console.log(t),c.post("/api/users/addChild",{adultId:t,firstName:e,lastName:o,dob:n,notes:r})}}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcGxpY2F0aW9uLmN0cmwuanMiLCJjaGlsZC5jdHJsLmpzIiwibG9naW4uY3RybC5qcyIsInBvc3RzLmN0cmwuanMiLCJwb3N0cy5zdmMuanMiLCJyZWdpc3Rlci5jdHJsLmpzIiwicm91dGVzLmpzIiwidXBkYXRlLmN0cmwuanMiLCJ1c2VyLnN2Yy5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29udHJvbGxlciIsIiRzY29wZSIsIlVzZXJTdmMiLCIkb24iLCJfIiwidXNlciIsImN1cnJlbnRVc2VyIiwibG9nb3V0IiwiJGxvY2F0aW9uIiwiYWRkQ2hpbGQiLCJhZHVsdElkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJkb2IiLCJub3RlcyIsInRoZW4iLCJyZXNwb25zZSIsInBhdGgiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCIkZW1pdCIsImRhdGEiLCJQb3N0c1N2YyIsImFkZFBvc3QiLCJwb3N0Qm9keSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGUiLCJib2R5Iiwic3VjY2VzcyIsInBvc3QiLCJwb3N0cyIsInVuc2hpZnQiLCJmZXRjaCIsInNlcnZpY2UiLCIkaHR0cCIsInRoaXMiLCJnZXQiLCJyZWdpc3RlciIsInN0cmVldEFkZHJlc3MiLCJjaXR5Iiwic3RhdGUiLCJ6aXAiLCJwaG9uZSIsImNvbmZpZyIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIiwidXBkYXRlIiwiaWQiLCJzdmMiLCJnZXRVc2VyIiwidmFsIiwidG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJwdXQiXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFBQyxPQUFBLE1BQUEsQ0FDQSxZQ0RBRCxRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsa0JBQUEsQ0FBQSxTQUFBLFVBQUEsU0FBQUMsRUFBQUMsR0FDQUQsRUFBQUUsSUFBQSxRQUFBLFNBQUFDLEVBQUFDLEdBQ0FKLEVBQUFLLFlBQUFELElBR0FK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QUExQyxTQUFBLFNBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEdBR0EsT0FGQVksUUFBQUMsSUFBQWpCLEdBRUEwQixFQUFBTCxLQUFBLHNCQUFBLENBQ0FyQixRQUFBQSxFQUNBQyxVQUFBQSxFQUNBQyxTQUFBQSxFQUNBQyxJQUFBQSxFQUNBQyxNQUFBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwJywgW1xuXHQnbmdSb3V0ZSdcbl0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignQXBwbGljYXRpb25DdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgVXNlclN2Yykge1xuXHQkc2NvcGUuJG9uKCdsb2dpbicsIGZ1bmN0aW9uKF8sIHVzZXIpIHtcblx0XHQkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyXG5cdH0pXG5cblx0JHNjb3BlLmxvZ291dCA9IGZ1bmN0aW9uKCkge1xuXHRcdFVzZXJTdmMubG9nb3V0KClcblx0XHRkZWxldGUgJHNjb3BlLmN1cnJlbnRVc2VyXG5cdH1cblxufSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdDaGlsZEN0cmwnLCBmdW5jdGlvbigkc2NvcGUsIFVzZXJTdmMsICRsb2NhdGlvbikge1xuXG5cdCRzY29wZS5hZGRDaGlsZCA9IGZ1bmN0aW9uIChhZHVsdElkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBkb2IsIG5vdGVzKSB7XG5cdFx0VXNlclN2Yy5hZGRDaGlsZChhZHVsdElkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBkb2IsIG5vdGVzKVxuXHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0JGxvY2F0aW9uLnBhdGgoJy91c2VyLWFjY291bnQnKVxuXHRcdH0pXG5cdH1cdFxufSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdMb2dpbkN0cmwnLCBmdW5jdGlvbigkc2NvcGUsIFVzZXJTdmMsICRsb2NhdGlvbikge1xuXHQkc2NvcGUubG9naW4gPSBmdW5jdGlvbiAoZW1haWwsIHBhc3N3b3JkKSB7XG5cdFx0VXNlclN2Yy5sb2dpbihlbWFpbCwgcGFzc3dvcmQpXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHQkc2NvcGUuJGVtaXQoJ2xvZ2luJywgcmVzcG9uc2UuZGF0YSlcblx0XHRcdCRsb2NhdGlvbi5wYXRoKCcvdXNlci1hY2NvdW50Jylcblx0XHR9KVxuXHR9XG59KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ1Bvc3RzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFBvc3RzU3ZjKSB7XG5cblx0JHNjb3BlLmFkZFBvc3QgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYoJHNjb3BlLnBvc3RCb2R5KSB7XG5cdFx0XHRjb25zb2xlLmxvZygkc2NvcGUucG9zdEJvZHkpXG5cdFx0XHRQb3N0c1N2Yy5jcmVhdGUoe1xuXHRcdFx0XHRib2R5OiAkc2NvcGUucG9zdEJvZHlcblx0XHRcdH0pLnN1Y2Nlc3MoZnVuY3Rpb24gKHBvc3QpIHtcblx0XHRcdFx0JHNjb3BlLnBvc3RzLnVuc2hpZnQocG9zdClcblx0XHRcdFx0JHNjb3BlLnBvc3RCb2R5ID0gbnVsbFxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblx0XG5cdFBvc3RzU3ZjLmZldGNoKCkuc3VjY2VzcyhmdW5jdGlvbiAocG9zdHMpIHtcblx0XHQkc2NvcGUucG9zdHMgPSBwb3N0c1xuXHR9KVxufSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5zZXJ2aWNlKCdQb3N0c1N2YycsIGZ1bmN0aW9uICgkaHR0cCkge1xuXHR0aGlzLmZldGNoID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMnKVxuXHR9XG5cdHRoaXMuY3JlYXRlID0gZnVuY3Rpb24gKHBvc3QpIHtcblx0XHRyZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9wb3N0cycsIHBvc3QpXG5cdH1cbn0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignUmVnaXN0ZXJDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBVc2VyU3ZjLCAkbG9jYXRpb24pIHtcblx0JHNjb3BlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGVtYWlsLCBwYXNzd29yZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgc3RyZWV0QWRkcmVzcywgY2l0eSwgc3RhdGUsIHppcCwgcGhvbmUpIHtcblx0XHRVc2VyU3ZjLnJlZ2lzdGVyKGVtYWlsLCBwYXNzd29yZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgc3RyZWV0QWRkcmVzcywgY2l0eSwgc3RhdGUsIHppcCwgcGhvbmUpXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHQkc2NvcGUuJGVtaXQoJ2xvZ2luJywgcmVzcG9uc2UuZGF0YSlcblx0XHRcdCRsb2NhdGlvbi5wYXRoKCcvdXNlci1hY2NvdW50Jylcblx0XHR9KVxuXHR9XG59KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbmZpZyhmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIpIHtcblx0JHJvdXRlUHJvdmlkZXJcblx0LndoZW4oJy8nLCB7IHRlbXBsYXRlVXJsOiAnaW5kZXguaHRtbCcgfSlcblx0LndoZW4oJy9jbGFzc2VzJywgeyB0ZW1wbGF0ZVVybDogJ2NsYXNzZXMuaHRtbCcgfSlcblx0LndoZW4oJy9hYm91dCcsIHsgdGVtcGxhdGVVcmw6ICdhYm91dC5odG1sJyB9KVxuXHQud2hlbignL2ZhcScsIHsgdGVtcGxhdGVVcmw6ICdmYXEuaHRtbCcgfSlcblx0LndoZW4oJy9sb2dpbicsIHsgY29udHJvbGxlcjogJ0xvZ2luQ3RybCcsIHRlbXBsYXRlVXJsOiAnbG9naW4tZm9ybS5odG1sJyB9KVxuXHQud2hlbignL3JlZ2lzdGVyJywgeyBjb250cm9sbGVyOiAnUmVnaXN0ZXJDdHJsJywgdGVtcGxhdGVVcmw6ICdyZWdpc3RyYXRpb24tZm9ybS5odG1sJyB9KVxuXHQud2hlbignL3Bvc3RzJywgeyBjb250cm9sbGVyOiAnUG9zdHNDdHJsJywgdGVtcGxhdGVVcmw6ICdwb3N0cy5odG1sJyB9KVxuXG5cdC53aGVuKCcvdXNlci1hY2NvdW50JywgeyB0ZW1wbGF0ZVVybDogJ3VzZXItYWNjb3VudC5odG1sJyB9KVxuXHQud2hlbignL3VzZXItY2xhc3NlcycsIHsgdGVtcGxhdGVVcmw6ICd1c2VyLWNsYXNzZXMuaHRtbCcgfSlcblx0LndoZW4oJy91c2VyLXBob3RvcycsIHsgdGVtcGxhdGVVcmw6ICd1c2VyLXBob3Rvcy5odG1sJyB9KVxuXHQud2hlbignL3VzZXItcGF5bWVudHMnLCB7IHRlbXBsYXRlVXJsOiAndXNlci1wYXltZW50cy5odG1sJyB9KVxuXHQud2hlbignL3VzZXItZm9ybXMnLCB7IHRlbXBsYXRlVXJsOiAndXNlci1mb3Jtcy5odG1sJyB9KVxuXG5cdC53aGVuKCcvdXBkYXRlLXVzZXItYWNjb3VudCcsIHsgY29udHJvbGxlcjogJ1VwZGF0ZUN0cmwnLCB0ZW1wbGF0ZVVybDogJ3VwZGF0ZS11c2VyLWFjY291bnQuaHRtbCcgfSlcblx0LndoZW4oJy9hZGQtY2hpbGQnLCB7IGNvbnRyb2xsZXI6ICdDaGlsZEN0cmwnLCB0ZW1wbGF0ZVVybDogJ2FkZC1jaGlsZC5odG1sJyB9KVxufSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdVcGRhdGVDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBVc2VyU3ZjLCAkbG9jYXRpb24pIHtcblx0JHNjb3BlLnVwZGF0ZSA9IGZ1bmN0aW9uIChpZCwgZW1haWwsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIHN0cmVldEFkZHJlc3MsIGNpdHksIHN0YXRlLCB6aXAsIHBob25lKSB7XG5cdFx0VXNlclN2Yy51cGRhdGUoaWQsIGVtYWlsLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBzdHJlZXRBZGRyZXNzLCBjaXR5LCBzdGF0ZSwgemlwLCBwaG9uZSlcblx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdCRsb2NhdGlvbi5wYXRoKCcvdXNlci1hY2NvdW50Jylcblx0XHR9KVxuXHR9XG59KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLnNlcnZpY2UoJ1VzZXJTdmMnLCBmdW5jdGlvbiAoJGh0dHApIHtcblx0dmFyIHN2YyA9IHRoaXNcblx0c3ZjLmdldFVzZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICRodHRwLmdldCgnL2FwaS91c2VycycpXG5cdH1cblxuXHRzdmMucmVnaXN0ZXIgPSBmdW5jdGlvbiAoZW1haWwsIHBhc3N3b3JkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBzdHJlZXRBZGRyZXNzLCBjaXR5LCBzdGF0ZSwgemlwLCBwaG9uZSkge1xuXHRcdHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3VzZXJzJywge1xuXHRcdFx0ZW1haWw6IGVtYWlsLFxuXHRcdFx0cGFzc3dvcmQ6IHBhc3N3b3JkLFxuXHRcdFx0Zmlyc3ROYW1lOiBmaXJzdE5hbWUsXG5cdFx0XHRsYXN0TmFtZTogbGFzdE5hbWUsXG5cdFx0XHRzdHJlZXRBZGRyZXNzOiBzdHJlZXRBZGRyZXNzLFxuXHRcdFx0Y2l0eTogY2l0eSxcblx0XHRcdHN0YXRlOiBzdGF0ZSxcblx0XHRcdHppcDogemlwLFxuXHRcdFx0cGhvbmU6IHBob25lXG5cdFx0fSkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gc3ZjLmxvZ2luKGVtYWlsLCBwYXNzd29yZClcblx0XHR9KVxuXHR9XG5cblx0c3ZjLmxvZ2luID0gZnVuY3Rpb24gKGVtYWlsLCBwYXNzd29yZCkge1xuXHRcdHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Nlc3Npb25zJywge1xuXHRcdFx0ZW1haWw6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmRcblx0XHR9KS50aGVuKGZ1bmN0aW9uICh2YWwpIHtcblx0XHRcdHN2Yy50b2tlbiA9IHZhbC5kYXRhXG5cdFx0XHQkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1BdXRoJ10gPSB2YWwuZGF0YVxuXHRcdFx0cmV0dXJuIHN2Yy5nZXRVc2VyKClcblx0XHR9KVxuXHR9XG5cblx0c3ZjLmxvZ291dCA9IGZ1bmN0aW9uKCkge1xuXHRcdGRlbGV0ZSAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1BdXRoJ11cblx0fVxuXG5cdHN2Yy51cGRhdGUgPSBmdW5jdGlvbiAoaWQsIGVtYWlsLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBzdHJlZXRBZGRyZXNzLCBjaXR5LCBzdGF0ZSwgemlwLCBwaG9uZSkge1xuXHRcdHJldHVybiAkaHR0cC5wdXQoJy9hcGkvdXNlcnMvdXBkYXRlJywge1xuXHRcdFx0aWQ6IGlkLFxuXHRcdFx0ZW1haWw6IGVtYWlsLFxuXHRcdFx0Zmlyc3ROYW1lOiBmaXJzdE5hbWUsXG5cdFx0XHRsYXN0TmFtZTogbGFzdE5hbWUsXG5cdFx0XHRzdHJlZXRBZGRyZXNzOiBzdHJlZXRBZGRyZXNzLFxuXHRcdFx0Y2l0eTogY2l0eSxcblx0XHRcdHN0YXRlOiBzdGF0ZSxcblx0XHRcdHppcDogemlwLFxuXHRcdFx0cGhvbmU6IHBob25lXG5cdFx0fSlcblx0fVxuXG5cdHN2Yy5hZGRDaGlsZCA9IGZ1bmN0aW9uIChhZHVsdElkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBkb2IsIG5vdGVzKSB7XG5cdFx0Y29uc29sZS5sb2coYWR1bHRJZClcblxuXHRcdHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3VzZXJzL2FkZENoaWxkJywge1xuXHRcdFx0YWR1bHRJZDogYWR1bHRJZCxcblx0XHRcdGZpcnN0TmFtZTogZmlyc3ROYW1lLFxuXHRcdFx0bGFzdE5hbWU6IGxhc3ROYW1lLFxuXHRcdFx0ZG9iOiBkb2IsXG5cdFx0XHRub3Rlczogbm90ZXNcblx0XHR9KVxuXHR9XG5cbn0pIl19
