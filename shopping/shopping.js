function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

async function firebaseShop(){

  var firebaseRef = firebase.database().ref();
  var whoOrderedRef = firebaseRef.child("who_ordered");
  whoOrderedRef.update({
    order_made: true
  });
  await sleep(1200);
  document.location.href = "confirmation/confirmation.html";
}
