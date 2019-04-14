angular.module('app')
    .service('ClassSVC', function ($http) {
        var svc = this

        // svc.getAdmin = function () {
        //     return $http.get('/api/classes')
        // }

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

    })