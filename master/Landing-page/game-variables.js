var dataForDummies = [
{
"id": 1,
"name": "Miles",
"creation_date": "2017-09-19T23:54:26.253Z",
"active": true,
"evo_score": 35,
"player_id": 1,
"plant_type_id": null,
"email": "jose@email.com",
"last_login": "2017-07-16T15:31:33.324Z"
}
]

var petName = dataForDummies[0]['name']
var evoScore = dataForDummies[0]['evo_score']
var petId = dataForDummies[0]['id']
var creationTime = dataForDummies[0]['creation_date']
var loginTime = dataForDummies[0]['last_login']
var foodInteractionTime = null;


getFoodInteractionTimeById(petId).then(foodToHours)

function foodToHours(time) {
  foodInteractionTime = time['last_interaction']
  let now = Date.now()
  let foodInteractionTimeMil = Date.parse(foodInteractionTime)
}

  console.log(foodInteractionTime);
