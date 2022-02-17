export function getJobForm() {
  return `
  <form class="row  p-2" onsubmit="app.jobsController.createJob(event)">
                  <h3 class="col-12">Create a Job</h3>
                  <div class="mb-3 col-5">
                    <label for="" class="form-label">jobTitle</label>
                    <input required type="text" class="form-control" name="jobTitle" id="jobTitle" aria-describedby="helpId"
                      placeholder="">
                  </div>
                  <div class="mb-3 col-2">
                    <label for="" class="form-label">Salary</label>
                    <input required type="number" class="form-control" name="salary" id="salary" aria-describedby="helpId"
                      placeholder="" value="2000" min="1990" max="3000">
                  </div>

                  <div class="mb-3 col-2">
                  <label class="form-label">Hours</label>
                  <select class="form-select" id="hours" aria-label="Default select example">
                      <option selected>Hours</option>
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="temp">Temp</option>
                    </select>
                    </div>

                  <div class="mb-3 col-12">
                    <label for="" class="form-label">duties</label>
                    <input required type="text" class="form-control" name="duties" id="duties" aria-describedby="helpId"
                      placeholder="">
                  </div>

                  <div class="mb-3 col-6">
                    <label for="" class="form-label">ImgUrl</label>
                    <input required type="text" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="helpId"
                      placeholder="">
                  </div>
                  <button class="col-4 offset-8 btn btn-success"> Create</button>
                </form>
  `
}