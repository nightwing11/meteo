angular.module('starter.controllers', [])

// gestion d'uplaod de fichier 
.controller('Ctrlupload', function($scope) {

   $scope.filepathChooser = function() {
    window.plugins.mfilechooser.open([], function (uri) {
       //Here uri provides the selected file path.
    console.log('file path', uri);
     alert(uri);

     // $cordovaFile.copyFile(cordova.file.dataDirectory, "file.txt", cordova.file.tempDirectory, "new_file.txt")
     //  .then(function (success) {
     //    // success
     //  }, function (error) {
     //    // error
     //  });

   
  }, function (error) {
      console.log('Error', error);
   alert(error);
  });
 };
})

//Date du jour 
.controller('MyCtrl', function($scope, $cordovaDatePicker) {

  var options = {
    date: new Date(),
    mode: 'date', // or 'time'
    minDate: new Date() - 10000,
    allowOldDates: true,
    allowFutureDates: false,
    doneButtonLabel: 'DONE',
    doneButtonColor: '#F2F3F4',
    cancelButtonLabel: 'CANCEL',
    cancelButtonColor: '#000000'
  };

  document.addEventListener("deviceready", function () {

    $cordovaDatePicker.show(options).then(function(date){
        alert(date);
    });

  }, false);
});