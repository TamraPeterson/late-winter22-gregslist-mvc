import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

const testCar = new Car(
  {
    make: 'GMC',
    model: 'Sierra',
    year: 2018,
    price: 5600,
    description: 'its cool.',
    color: '#FFFFFF',
    imgUrl: 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/media/672264/2018-gmc-sierra-1500-in-depth-model-review-car-and-driver-photo-693479-s-original.jpg?crop=0.670xw:0.827xh;0.258xw,0.0682xh&resize=640:*'
  }
)

const testHouse = new House(
  {
    bedrooms: 3,
    bathrooms: 2,
    year: 2015,
    sqfootage: 1500,
    price: 150000,
    imgUrl: 'https://i1.wp.com/movingtips.wpengine.com/wp-content/uploads/2020/07/starter-home.jpg?fit=1025%2C684&ssl=1'
  }
)

const testJob = new Job(
  {
    jobTitle: 'Software Developer',
    duties: 'Develop Software',
    hours: 'Full Time',
    salary: 100,
    imgUrl: 'https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2020/01/20133422/software-developer-coding.jpg'

  }
)

class AppState extends EventEmitter {
  // NOTE just adds intellisense to our cars array that lets our code know its an array of cars, not other things 
  /** @type {import('./Models/Car').Car[]} */
  cars = [testCar]
  houses = [testHouse]
  jobs = [testJob]
}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
