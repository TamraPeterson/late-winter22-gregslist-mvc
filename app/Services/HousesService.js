import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";

class HousesService {
  createHouse(newHouse) {
    let realHouse = new House(newHouse)
    ProxyState.houses = [realHouse, ...ProxyState.houses]
  }

  deleteHouse(houseId) {

    let houseToDelete = ProxyState.houses.findIndex(h => h.id == houseId)

    ProxyState.houses.splice(houseToDelete, 1)
    ProxyState.houses = ProxyState.houses
  }
}


export const housesService = new HousesService()