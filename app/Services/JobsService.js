import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";

class JobsService {
  createJob(newJob) {

    let realJob = new Job(newJob)
    ProxyState.jobs = [realJob, ...ProxyState.jobs]
  }

  deleteJob(jobId) {

    let jobToDelete = ProxyState.jobs.findIndex(j => j.id == jobId)
    ProxyState.jobs.splice(jobToDelete, 1)
    ProxyState.jobs = ProxyState.jobs
  }
}



export const jobsService = new JobsService()