import { ProxyState } from "../AppState.js"
import { getHouseForm } from "../Components/HouseForm.js"
import { housesService } from "../Services/HousesService.js"

function _draw() {
  let template = ''
  ProxyState.houses.forEach(h => template += h.Template)
  document.getElementById('listings').innerHTML = template
}

export class HousesController {
  constructor() {
    console.log('houses controller loaded')
    ProxyState.on('houses', _draw)
  }


  viewHouses() {
    _draw();
    document.getElementById('modal-body-slot').innerHTML = getHouseForm()
  }

  createHouse(event) {
    event.preventDefault()
    let form = event.target
    console.log('creat house triggered', form);
    let newHouse = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      year: form.year.value,
      sqfootage: form.sqfootage.value,
      price: form.price.value,
      imgUrl: form.imgUrl.value
    }
    console.log('new house', newHouse)
    housesService.createHouse(newHouse)
    let modal = document.getElementById('new-listing')
    form.reset()
    bootstrap.Modal.getOrCreateInstance(modal).hide()
  }

  deleteHouse(houseId) {
    housesService.deleteHouse(houseId)
  }
}