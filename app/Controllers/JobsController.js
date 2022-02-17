
import { ProxyState } from "../AppState.js"
import { getJobForm } from "../Components/JobForm.js"
import { jobsService } from "../Services/JobsService.js"

function _draw() {
  let template = ''
  ProxyState.jobs.forEach(j => template += j.Template)
  document.getElementById('listings').innerHTML = template
}
export class JobsController {
  constructor() {
    ProxyState.on('jobs', _draw)
  }

  viewJobs() {
    _draw();
    document.getElementById('modal-body-slot').innerHTML = getJobForm()
  }

  createJob(event) {
    event.preventDefault()
    let form = event.target
    let newJob = {
      jobTitle: form.jobTitle.value,
      duties: form.duties.value,
      hours: form.hours.value,
      salary: form.salary.value,
      imgUrl: form.imgUrl.value
    }
    jobsService.createJob(newJob)
    let modal = document.getElementById('new-listing')
    form.reset()
    bootstrap.Modal.getOrCreateInstance(modal).hide()
  }

  deleteJob(jobId) {
    jobsService.deleteJob(jobId)
  }
}