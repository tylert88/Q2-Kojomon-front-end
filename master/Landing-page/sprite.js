getPetNameByPetId(2)
  .then(plant => {
    return getPlantTypeById(plant.plant_type_id)
    .then(plant_type => ({plant_type, plant}))
  })
  .then(appendPlantSprite)

function appendPlantSprite(results){
 const plant = results.plant;
 const plantType = results.plant_type;
  if(plant.evo_score >= 120) {
    $('.center-image').append(`<img src=${plantType.evo_3}/>`)
  } else if (plant.evo_score >= 48) {
    $('.center-image').append(`<img src=${plantType.evo_2}/>`)
  } else {
    $('.center-image').append(`<img src=${plantType.evo_1}/>`)
  }
};
