function firebaseShop(){

  var firebaseRef = firebase.database().ref();
  var whoOrderedRef = firebaseRef.child("who_ordered");
  whoOrderedRef.update({
    order_made: true
  });

}
