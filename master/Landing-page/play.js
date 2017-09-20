

//***ID of '1' Must be changed to the id of the
// active pet of the user who is logged in***

getPetNameByPetId(1).then(appendPetName)

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

  updatePetNameById(1,newKojoName)
  $('.pet-name').replaceWith(`<h2> ${newKojoName} </h2>`)
})

//put request for updating name
