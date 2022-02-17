import { generateId } from "../Utils/generateId.js"

export class Job {
  constructor({ jobTitle, duties, hours, salary, imgUrl }) {
    this.id = generateId()
    this.jobTitle = jobTitle
    this.duties = duties
    this.hours = hours
    this.salary = salary
    this.imgUrl = imgUrl
  }

  get Template() {
    return `
    <div class="col-md-4">
    <div class="bg-white rounded shadow">
      <img class="img-fluid rounded-top" src="${this.imgUrl}" alt="job image">
      <div class="p-3">
        <p>Job Title: ${this.jobTitle}</p>
        <p>Duties: ${this.duties}</p>
        <p>Hours: ${this.hours}</p>
        <p>Salary: ${this.salary}</p>
      </div>
      <button class="btn btn-outline-danger" onclick="app.jobsController.deleteJob('${this.id}')"> delete </button>
    </div>
  </div>
  `
  }
}