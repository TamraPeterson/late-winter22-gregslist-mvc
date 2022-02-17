export function getHouseForm() {
  return `
  <form class="row  p-2" onsubmit="app.housesController.createHouse(event)">
                  <h3 class="col-12">Create a House</h3>
                  <div class="mb-3 col-5">
                    <label for="" class="form-label">bedrooms</label>
                    <input required type="text" class="form-control" name="bedrooms" id="bedrooms" aria-describedby="helpId"
                      placeholder="">
                  </div>
                  <div class="mb-3 col-5">
                    <label for="" class="form-label">bathrooms</label>
                    <input required type="text" class="form-control" name="bathrooms" id="bathrooms" aria-describedby="helpId"
                      placeholder="">
                  </div>
                  <div class="mb-3 col-2">
                    <label for="" class="form-label">Year</label>
                    <input required type="number" class="form-control" name="year" id="year" aria-describedby="helpId"
                      placeholder="" value="2000" min="1990" max="3000">
                  </div>
                  <div class="mb-3 col-12">
                    <label for="" class="form-label">sq footage</label>
                    <input maxlength="50" required type="text" class="form-control" name="sqfootage" id="sqfootage"
                      aria-describedby="helpId" placeholder="">
                  </div>
                  <div class="mb-3 col-6">
                    <label for="" class="form-label">Price</label>
                    <input required type="number" class="form-control" name="price" id="price" aria-describedby="helpId"
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