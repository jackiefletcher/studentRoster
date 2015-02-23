studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope) {
  $scope.students = [
    { name: "Gabe Finch" },
    { name: "Jackie Fletcher" }
  ];
  $scope.addStudent = function() {
    $scope.students.push({name: $scope.studentName})
    $scope.studentName = null;
  };
  $scope.deleteStudent = function(student) {
    var index = $scope.students.indexOf(student);
    $scope.students.splice(index, 1);
  };
});
