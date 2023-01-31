const http = require("./baseService")

const getDishes = () => http.get("/dishes");

const getDish = (dishId) => http.get(`/dishes/${dishId}`);

const createDish = (data) => http.post("/dishes", data);

const deleteDish = (dishId) => http.delete(`/dishes/${dishId}`)

module.exports = {
getDishes,
getDish,
createDish,
deleteDish
}