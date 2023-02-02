const http = require("./baseService")

const getDishes = () => http.get("/dishes");

const getDish = (id) => http.get(`/dishes/${id}`);

const createDish = (data) => http.post("/dishes", data);

const deleteDish = (id) => http.delete(`/dishes/${id}`);

const editDish = (id, data) => http.patch(`/dishes/${id}`, data)

module.exports = {
getDishes,
getDish,
createDish,
deleteDish,
editDish
}