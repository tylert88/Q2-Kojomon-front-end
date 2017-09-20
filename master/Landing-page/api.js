
//variable has to be changed to the backend once on  HEROKU

const herokuAPI = "https://gentle-peak-99253.herokuapp.com/api/v1/"

function getPetNameByPetId(id){
  return fetch(herokuAPI + 'pet/' + id)
  .then(res => res.json())
  .then(res => res[0])
  .catch(error => console.log(error))
}

function getPlantTypeById(id) {
  return fetch(herokuAPI + 'plant_type/'  + id)
  .then(res => res.json())
  .then(res => res[0])
  .catch(error => console.log(error))
}

function updatePetNameById(id, name){

var settings = {
  "async": true,
  "crossDomain": true,
  "url": herokuAPI + "pet/name/" + id,
  "method": "PUT",
  "headers": {
    "content-type": "application/json",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify({
    name: name
  })
}

$.ajax(settings).done(function (response) {
  console.log(response);
});


}
