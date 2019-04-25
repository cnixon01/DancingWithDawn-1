angular.module('app')
    .service('ClassSVC', function ($http) {
        var svc = this


        svc.addClass = function (title, description, time, days, album) {
            return $http.post('/api/classes/addClass', {
                title: title,
                description: description,
                time: time,
                days: days,
                album: album
            })
        }

        svc.updateClass = function (class_) {
            return $http.put('/api/classes/updateClass', class_)
        }

        svc.deleteClass = function (class_) {
            return $http.put('/api/classes/deleteClass', class_)
        }

        svc.getAllClasses = function () {
            return $http.get('/api/classes/getAllClasses')
        }

        svc.getAllChildren = function () {
            return $http.get('/api/classes/getAllChildren')
        }

        svc.getAllStudents = function () {
            return $http.get('/api/classes/getAllStudents')
        }

        svc.getStudentsNames = function (students) {
            return $http.put('/api/classes/getNames', students)
        }

        svc.addToClass = function (class_) {
            return $http.put('/api/classes/addToClass', class_)
        }

        svc.removeFromClass = function (class_) {
            return $http.put('/api/classes/removeFromClass', class_)
        }

        svc.removeAll = function (class_) {
            return $http.put('/api/classes/removeAll', class_)
        }
    })