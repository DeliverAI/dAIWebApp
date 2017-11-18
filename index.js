


$(document).ready(function(){
  var pictureTaken = false;
  $('#show_stream').hide();
});

  function firebaseSaveData(){
    var name = document.getElementById("name");
    var address = document.getElementById("address");
    var phone = document.getElementById("phone");
    var name_value = name.value;
    var address_value = address.value;
    var phone_value = phone.value;
    var firebaseRef = firebase.database().ref();
    var usersRef = firebaseRef.child("users");

    usersRef.push().set({
      name: name_value,
      address: address_value,
      phone_number: phone_value
    });
  }

  function whichButton(state){
    if (state == "snap"){
      $('#take_snapshots').hide();
      $('.webcamBtn').hide();
      $('#show_stream').show();
      $('.repeatBtn').show();
    }else if (state == "stream"){
      $('#take_snapshots').show();
      $('.webcamBtn').show();
      $('#show_stream').hide();
      $('.repeatBtn').hide();
    }
  }
