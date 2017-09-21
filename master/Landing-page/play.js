//***ID of '1' Must be changed to the id of the
// active pet of the user who is logged in***
$(()=>{
  var user = JSON.parse(localStorage.getItem('user') || '{}');
  console.log('Hello ' + user);
  if (user.email){
    alert('Hello ' + user.email)
  }
})

getPetNameByPetId(petId).then(appendPetName)


$('.hidden-name-change').hide()

function appendPetName(pet) {


  $('.pet-name').append(`<h2> ${pet.name} </h2>`)

}

$('#change-name').click(function() {
    console.log('hey');
    $('.hidden-name-change').show()
})

$('#submit-new-name').click(function() {
    let newKojoName = $('#new-name-input').val()

    updatePetNameById(petId, newKojoName)
    $('.pet-name').replaceWith(`<h2 class="pet-name"> ${newKojoName} </h2>`)

})

$(".selectable").click(function() {
    $(".selectable").removeClass("selected");
    $(this).addClass("selected");
});

window.setTimeout(
    function(){
var foodPercent = foodScore * 4.166
console.log(foodScore);
$('.health-bar-foreground').css("width", foodPercent + '%')
},300)

$('.center-image').click(function() {
    var selectedAction = $('.selected').data('action')


    if (selectedAction === 'feed') {
        if (foodScore >= 24) {
            alert('Good Lord! Your Kojomon will explode if you feed it anymore!')
        } else {
            foodScore += 1
            console.log(foodScore);
            evoScore += 1
            console.log(evoScore);
            console.log(petId);
            foodPercent = foodScore * 4.166
            $('.health-bar-foreground').css("width", foodPercent + '%')

            updateEvoScoreById(petId, evoScore)

        }
    }



})
