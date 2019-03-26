angular.module("app",["ngRoute"]),angular.module("app").controller("ApplicationCtrl",["$scope","UserSvc",function(o,t){o.$on("login",function(t,e){o.currentUser=e}),o.logout=function(){t.logout(),delete o.currentUser}}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc","$location",function(o,n,r){o.login=function(t,e){n.login(t,e).then(function(t){o.$emit("login",t.data),r.path("/user-account")})}}]),angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(e,t){e.addPost=function(){e.postBody&&(console.log(e.postBody),t.create({body:e.postBody}).success(function(t){e.posts.unshift(t),e.postBody=null}))},t.fetch().success(function(t){e.posts=t})}]),angular.module("app").service("PostsSvc",["$http",function(e){this.fetch=function(){return e.get("/api/posts")},this.create=function(t){return e.post("/api/posts",t)}}]),angular.module("app").controller("RegisterCtrl",["$scope","UserSvc","$location",function(o,n,r){o.register=function(t,e){n.register(t,e).then(function(t){o.$emit("login",t.data),r.path("/user-account")})}}]),angular.module("app").config(["$routeProvider",function(t){t.when("/",{templateUrl:"index.html"}).when("/classes",{templateUrl:"classes.html"}).when("/about",{templateUrl:"about.html"}).when("/faq",{templateUrl:"faq.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"login-form.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"registration-form.html"}).when("/posts",{controller:"PostsCtrl",templateUrl:"posts.html"}).when("/user-account",{controller:"PostsCtrl",templateUrl:"user-account.html"}).when("/user-classes",{templateUrl:"user-classes.html"}).when("/user-photos",{templateUrl:"user-photos.html"}).when("/user-payments",{templateUrl:"user-payments.html"}).when("/user-forms",{templateUrl:"user-forms.html"})}]),angular.module("app").service("UserSvc",["$http",function(o){var n=this;n.getUser=function(){return o.get("/api/users")},n.register=function(t,e){return o.post("/api/users",{username:t,password:e}).then(function(){return n.login(t,e)})},n.login=function(t,e){return o.post("/api/sessions",{username:t,password:e}).then(function(t){return n.token=t.data,o.defaults.headers.common["X-Auth"]=t.data,n.getUser()})},n.logout=function(){delete o.defaults.headers.common["X-Auth"]}}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcGxpY2F0aW9uLmN0cmwuanMiLCJsb2dpbi5jdHJsLmpzIiwicG9zdHMuY3RybC5qcyIsInBvc3RzLnN2Yy5qcyIsInJlZ2lzdGVyLmN0cmwuanMiLCJyb3V0ZXMuanMiLCJ1c2VyLnN2Yy5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29udHJvbGxlciIsIiRzY29wZSIsIlVzZXJTdmMiLCIkb24iLCJfIiwidXNlciIsImN1cnJlbnRVc2VyIiwibG9nb3V0IiwiJGxvY2F0aW9uIiwibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidGhlbiIsInJlc3BvbnNlIiwiJGVtaXQiLCJkYXRhIiwicGF0aCIsIlBvc3RzU3ZjIiwiYWRkUG9zdCIsInBvc3RCb2R5IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZSIsImJvZHkiLCJzdWNjZXNzIiwicG9zdCIsInBvc3RzIiwidW5zaGlmdCIsImZldGNoIiwic2VydmljZSIsIiRodHRwIiwidGhpcyIsImdldCIsInJlZ2lzdGVyIiwiY29uZmlnIiwiJHJvdXRlUHJvdmlkZXIiLCJ3aGVuIiwidGVtcGxhdGVVcmwiLCJzdmMiLCJnZXRVc2VyIiwidmFsIiwidG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFBQyxPQUFBLE1BQUEsQ0FDQSxZQ0RBRCxRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsa0JBQUEsQ0FBQSxTQUFBLFVBQUEsU0FBQUMsRUFBQUMsR0FDQUQsRUFBQUUsSUFBQSxRQUFBLFNBQUFDLEVBQUFDLEdBQ0FKLEVBQUFLLFlBQUFELElBR0FKLEVBQUFNLE9BQUEsV0FDQUwsRUFBQUssZ0JBQ0FOLEVBQUFLLGdCQ1JBUixRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsWUFBQSxDQUFBLFNBQUEsVUFBQSxZQUFBLFNBQUFDLEVBQUFDLEVBQUFNLEdBQ0FQLEVBQUFRLE1BQUEsU0FBQUMsRUFBQUMsR0FDQVQsRUFBQU8sTUFBQUMsRUFBQUMsR0FDQUMsS0FBQSxTQUFBQyxHQUNBWixFQUFBYSxNQUFBLFFBQUFELEVBQUFFLE1BQ0FQLEVBQUFRLEtBQUEsdUJDTkFsQixRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsWUFBQSxDQUFBLFNBQUEsV0FBQSxTQUFBQyxFQUFBZ0IsR0FFQWhCLEVBQUFpQixRQUFBLFdBQ0FqQixFQUFBa0IsV0FDQUMsUUFBQUMsSUFBQXBCLEVBQUFrQixVQUNBRixFQUFBSyxPQUFBLENBQ0FDLEtBQUF0QixFQUFBa0IsV0FDQUssUUFBQSxTQUFBQyxHQUNBeEIsRUFBQXlCLE1BQUFDLFFBQUFGLEdBQ0F4QixFQUFBa0IsU0FBQSxTQUtBRixFQUFBVyxRQUFBSixRQUFBLFNBQUFFLEdBQ0F6QixFQUFBeUIsTUFBQUEsT0NoQkE1QixRQUFBQyxPQUFBLE9BQ0E4QixRQUFBLFdBQUEsQ0FBQSxRQUFBLFNBQUFDLEdBQ0FDLEtBQUFILE1BQUEsV0FDQSxPQUFBRSxFQUFBRSxJQUFBLGVBRUFELEtBQUFULE9BQUEsU0FBQUcsR0FDQSxPQUFBSyxFQUFBTCxLQUFBLGFBQUFBLE9DTkEzQixRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsZUFBQSxDQUFBLFNBQUEsVUFBQSxZQUFBLFNBQUFDLEVBQUFDLEVBQUFNLEdBQ0FQLEVBQUFnQyxTQUFBLFNBQUF2QixFQUFBQyxHQUNBVCxFQUFBK0IsU0FBQXZCLEVBQUFDLEdBQ0FDLEtBQUEsU0FBQUMsR0FDQVosRUFBQWEsTUFBQSxRQUFBRCxFQUFBRSxNQUNBUCxFQUFBUSxLQUFBLHVCQ05BbEIsUUFBQUMsT0FBQSxPQUNBbUMsT0FBQSxDQUFBLGlCQUFBLFNBQUFDLEdBQ0FBLEVBQ0FDLEtBQUEsSUFBQSxDQUFBQyxZQUFBLGVBQ0FELEtBQUEsV0FBQSxDQUFBQyxZQUFBLGlCQUNBRCxLQUFBLFNBQUEsQ0FBQUMsWUFBQSxlQUNBRCxLQUFBLE9BQUEsQ0FBQUMsWUFBQSxhQUNBRCxLQUFBLFNBQUEsQ0FBQXBDLFdBQUEsWUFBQXFDLFlBQUEsb0JBQ0FELEtBQUEsWUFBQSxDQUFBcEMsV0FBQSxlQUFBcUMsWUFBQSwyQkFDQUQsS0FBQSxTQUFBLENBQUFwQyxXQUFBLFlBQUFxQyxZQUFBLGVBRUFELEtBQUEsZ0JBQUEsQ0FBQXBDLFdBQUEsWUFBQXFDLFlBQUEsc0JBQ0FELEtBQUEsZ0JBQUEsQ0FBQUMsWUFBQSxzQkFDQUQsS0FBQSxlQUFBLENBQUFDLFlBQUEscUJBQ0FELEtBQUEsaUJBQUEsQ0FBQUMsWUFBQSx1QkFDQUQsS0FBQSxjQUFBLENBQUFDLFlBQUEsdUJDZkF2QyxRQUFBQyxPQUFBLE9BQ0E4QixRQUFBLFVBQUEsQ0FBQSxRQUFBLFNBQUFDLEdBQ0EsSUFBQVEsRUFBQVAsS0FDQU8sRUFBQUMsUUFBQSxXQUNBLE9BQUFULEVBQUFFLElBQUEsZUFHQU0sRUFBQUwsU0FBQSxTQUFBdkIsRUFBQUMsR0FDQSxPQUFBbUIsRUFBQUwsS0FBQSxhQUFBLENBQ0FmLFNBQUFBLEVBQUFDLFNBQUFBLElBQ0FDLEtBQUEsV0FDQSxPQUFBMEIsRUFBQTdCLE1BQUFDLEVBQUFDLE1BSUEyQixFQUFBN0IsTUFBQSxTQUFBQyxFQUFBQyxHQUNBLE9BQUFtQixFQUFBTCxLQUFBLGdCQUFBLENBQ0FmLFNBQUFBLEVBQUFDLFNBQUFBLElBQ0FDLEtBQUEsU0FBQTRCLEdBR0EsT0FGQUYsRUFBQUcsTUFBQUQsRUFBQXpCLEtBQ0FlLEVBQUFZLFNBQUFDLFFBQUFDLE9BQUEsVUFBQUosRUFBQXpCLEtBQ0F1QixFQUFBQyxhQUlBRCxFQUFBL0IsT0FBQSxrQkFDQXVCLEVBQUFZLFNBQUFDLFFBQUFDLE9BQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtcblx0J25nUm91dGUnXG5dKSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ0FwcGxpY2F0aW9uQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFVzZXJTdmMpIHtcblx0JHNjb3BlLiRvbignbG9naW4nLCBmdW5jdGlvbihfLCB1c2VyKSB7XG5cdFx0JHNjb3BlLmN1cnJlbnRVc2VyID0gdXNlclxuXHR9KVxuXG5cdCRzY29wZS5sb2dvdXQgPSBmdW5jdGlvbigpIHtcblx0XHRVc2VyU3ZjLmxvZ291dCgpXG5cdFx0ZGVsZXRlICRzY29wZS5jdXJyZW50VXNlclxuXHR9XG5cbn0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignTG9naW5DdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBVc2VyU3ZjLCAkbG9jYXRpb24pIHtcblx0JHNjb3BlLmxvZ2luID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuXHRcdFVzZXJTdmMubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKVxuXHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0JHNjb3BlLiRlbWl0KCdsb2dpbicsIHJlc3BvbnNlLmRhdGEpXG5cdFx0XHQkbG9jYXRpb24ucGF0aCgnL3VzZXItYWNjb3VudCcpXG5cdFx0fSlcblx0fVxufSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdQb3N0c0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBQb3N0c1N2Yykge1xuXG5cdCRzY29wZS5hZGRQb3N0ID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmKCRzY29wZS5wb3N0Qm9keSkge1xuXHRcdFx0Y29uc29sZS5sb2coJHNjb3BlLnBvc3RCb2R5KVxuXHRcdFx0UG9zdHNTdmMuY3JlYXRlKHtcblx0XHRcdFx0Ym9keTogJHNjb3BlLnBvc3RCb2R5XG5cdFx0XHR9KS5zdWNjZXNzKGZ1bmN0aW9uIChwb3N0KSB7XG5cdFx0XHRcdCRzY29wZS5wb3N0cy51bnNoaWZ0KHBvc3QpXG5cdFx0XHRcdCRzY29wZS5wb3N0Qm9keSA9IG51bGxcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cdFxuXHRQb3N0c1N2Yy5mZXRjaCgpLnN1Y2Nlc3MoZnVuY3Rpb24gKHBvc3RzKSB7XG5cdFx0JHNjb3BlLnBvc3RzID0gcG9zdHNcblx0fSlcbn0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uc2VydmljZSgnUG9zdHNTdmMnLCBmdW5jdGlvbiAoJGh0dHApIHtcblx0dGhpcy5mZXRjaCA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzJylcblx0fVxuXHR0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uIChwb3N0KSB7XG5cdFx0cmV0dXJuICRodHRwLnBvc3QoJy9hcGkvcG9zdHMnLCBwb3N0KVxuXHR9XG59KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ1JlZ2lzdGVyQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgVXNlclN2YywgJGxvY2F0aW9uKSB7XG5cdCRzY29wZS5yZWdpc3RlciA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcblx0XHRVc2VyU3ZjLnJlZ2lzdGVyKHVzZXJuYW1lLCBwYXNzd29yZClcblx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdCRzY29wZS4kZW1pdCgnbG9naW4nLCByZXNwb25zZS5kYXRhKVxuXHRcdFx0JGxvY2F0aW9uLnBhdGgoJy91c2VyLWFjY291bnQnKVxuXHRcdH0pXG5cdH1cbn0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29uZmlnKGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xuXHQkcm91dGVQcm92aWRlclxuXHQud2hlbignLycsIHsgdGVtcGxhdGVVcmw6ICdpbmRleC5odG1sJyB9KVxuXHQud2hlbignL2NsYXNzZXMnLCB7IHRlbXBsYXRlVXJsOiAnY2xhc3Nlcy5odG1sJyB9KVxuXHQud2hlbignL2Fib3V0JywgeyB0ZW1wbGF0ZVVybDogJ2Fib3V0Lmh0bWwnIH0pXG5cdC53aGVuKCcvZmFxJywgeyB0ZW1wbGF0ZVVybDogJ2ZhcS5odG1sJyB9KVxuXHQud2hlbignL2xvZ2luJywgeyBjb250cm9sbGVyOiAnTG9naW5DdHJsJywgdGVtcGxhdGVVcmw6ICdsb2dpbi1mb3JtLmh0bWwnIH0pXG5cdC53aGVuKCcvcmVnaXN0ZXInLCB7IGNvbnRyb2xsZXI6ICdSZWdpc3RlckN0cmwnLCB0ZW1wbGF0ZVVybDogJ3JlZ2lzdHJhdGlvbi1mb3JtLmh0bWwnIH0pXG5cdC53aGVuKCcvcG9zdHMnLCB7IGNvbnRyb2xsZXI6ICdQb3N0c0N0cmwnLCB0ZW1wbGF0ZVVybDogJ3Bvc3RzLmh0bWwnIH0pXG5cblx0LndoZW4oJy91c2VyLWFjY291bnQnLCB7IGNvbnRyb2xsZXI6ICdQb3N0c0N0cmwnLCB0ZW1wbGF0ZVVybDogJ3VzZXItYWNjb3VudC5odG1sJyB9KVxuXHQud2hlbignL3VzZXItY2xhc3NlcycsIHsgdGVtcGxhdGVVcmw6ICd1c2VyLWNsYXNzZXMuaHRtbCcgfSlcblx0LndoZW4oJy91c2VyLXBob3RvcycsIHsgdGVtcGxhdGVVcmw6ICd1c2VyLXBob3Rvcy5odG1sJyB9KVxuXHQud2hlbignL3VzZXItcGF5bWVudHMnLCB7IHRlbXBsYXRlVXJsOiAndXNlci1wYXltZW50cy5odG1sJyB9KVxuXHQud2hlbignL3VzZXItZm9ybXMnLCB7IHRlbXBsYXRlVXJsOiAndXNlci1mb3Jtcy5odG1sJyB9KVxufSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5zZXJ2aWNlKCdVc2VyU3ZjJywgZnVuY3Rpb24gKCRodHRwKSB7XG5cdHZhciBzdmMgPSB0aGlzXG5cdHN2Yy5nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAkaHR0cC5nZXQoJy9hcGkvdXNlcnMnKVxuXHR9XG5cblx0c3ZjLnJlZ2lzdGVyID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuXHRcdHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3VzZXJzJywge1xuXHRcdFx0dXNlcm5hbWU6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmRcblx0XHR9KS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBzdmMubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKVxuXHRcdH0pXG5cdH1cblxuXHRzdmMubG9naW4gPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG5cdFx0cmV0dXJuICRodHRwLnBvc3QoJy9hcGkvc2Vzc2lvbnMnLCB7XG5cdFx0XHR1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZFxuXHRcdH0pLnRoZW4oZnVuY3Rpb24gKHZhbCkge1xuXHRcdFx0c3ZjLnRva2VuID0gdmFsLmRhdGFcblx0XHRcdCRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLUF1dGgnXSA9IHZhbC5kYXRhXG5cdFx0XHRyZXR1cm4gc3ZjLmdldFVzZXIoKVxuXHRcdH0pXG5cdH1cblxuXHRzdmMubG9nb3V0ID0gZnVuY3Rpb24oKSB7XG5cdFx0ZGVsZXRlICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLUF1dGgnXVxuXHR9XG59KSJdfQ==
