import { generateId } from "../Utils/generateId.js";

export class House {
  constructor({ bedrooms, bathrooms, year, sqfootage, price, imgUrl }) {
    this.id = generateId()
    this.bedrooms = bedrooms,
      this.bathrooms = bathrooms,
      this.year = year,
      this.sqfootage = sqfootage,
      this.price = price,
      this.imgUrl = imgUrl
  }

  get Template() {
    return `
    <div class="col-md-4">
    <div class="bg-white rounded shadow">
      <img class="img-fluid rounded-top" src="${this.imgUrl}" alt="house image">
      <div class="p-3">
        <p>Bedrooms: ${this.bedrooms}</p>
        <p>Bathrooms: ${this.bathrooms}</p>
        <p>Year Built: ${this.year}</p>
        <p>Sq Footage: ${this.sqfootage}</p>
        <p>Price: $${this.price}</p>
      </div>
      <button class="btn btn-outline-danger" onclick="app.housesController.deleteHouse('${this.id}')"> delete </button>
    </div>
  </div>
    `
  }
}

