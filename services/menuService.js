const http = require("./baseService")

const getDishes = () => http.get("/dishes");

const getDish = (dishId) => http.get(`/dishes/${dishId}`);

const createDish = (data) => http.post("/dishes", data);

const deleteDish = (id) => http.delete(`/dishes/${id}`)  //PREGUNTAR ESTO

module.exports = {
getDishes,
getDish,
createDish,
deleteDish
}