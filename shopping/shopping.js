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
