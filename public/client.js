
var songData = [];

function getSongs(){
  $.ajax({
    method: 'GET',
    url: '/song',
    success: function(response) {
      console.log(response);
      songData = response;
    }
  });



}
console.log('test');

$(document).ready(docReady);

function docReady() {
  console.log('doc ready');

  //event listener
  $('#add-song').on('click', addSong);
}

// add Song function
function addSong() {
  console.log('in addSong');
  var songName = $('#song-name').val();
  $('.container').append(songName);

  // $('.container').append(songName);
  console.log('songName ->', songName);

  var problem = false;

      for (var i = 0; i < songData.length; i++) {
        if (songData[i]===songName){
        alert ('Song Already Exists');
        problem = true;
        }

        else if (songData[i]===null) {
        alert ('No Input');
        problem = true;
        }
    }

    if( !problem ){
      var objectToSend = {
        name: songName

      };



      $.ajax({
        method: 'POST',
        url: '/song',
        data: objectToSend,
        success: function(response) {
          console.log(response);
          getSongs();
        }
      });
    }
$('.container').append(songData);
}
