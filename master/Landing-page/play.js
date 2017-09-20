

//***ID of '1' Must be changed to the id of the
// active pet of the user who is logged in***


getPetNameByPetId(PetId).then(appendPetName)

$('.hidden-name-change').hide()

function appendPetName(pet){
  $('.pet-name').append(`<h2> ${pet.name} </h2>`)
}

$('#change-name').click(function() {
  console.log('hey');
  $('.hidden-name-change').show()
})

$('#submit-new-name').click(function(){
  let newKojoName = $('#new-name-input').val()

  updatePetNameById(petId,newKojoName)
  $('.pet-name').replaceWith(`<h2> ${newKojoName} </h2>`)
})

$(".selectable").click(function() {
  $(".selectable").removeClass("selected");
  $(this).addClass("selected");
});



$('.center-image').click(function() {
  var selectedAction = $('.selected').data('action')
  //Logic for game after this. selectedAction will be either
  // 'feed' 'clean' or 'pet' based on the currently selected action
  //Food: update lasteinteraction

  if (selectedAction === 'feed') {
    if (foodScore >= 24){
      alert('Good Lord! Your Kojomon will explode if you feed it anymore!')
    }
    else {
    foodScore +=1
    evoScore +=1

    updateEvoScoreById(pedId,evoScore)
  }
}


})
