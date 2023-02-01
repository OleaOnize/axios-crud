window.addEventListener('load', () => {
    const deleteButtons = document.querySelectorAll(".delete-btn")
  
    const deleteDish = (url, dishCointainer) => {
      axios.delete(url)
        .then(res => {
            dishCointainer.remove()
  
          axios.get('http://localhost:8000/dishes')
            .then(res => {
              console.log(res.data)
            })
        })
        .catch(err => {
          console.log(err)
        })
    }
  
    deleteButtons.forEach(button => {
      const { id } = button.dataset;  //PREGUNTAR ESTO--------------------------------------------------------------------------
      const url = `http://localhost:8000/dishes/${id}`
      const dishCointainer = button.parentElement.parentElement.parentElement
  
      button.addEventListener('click', () => deleteDish(url, dishCointainer))
    })
  })

// const httpClient = axios.create({
//     baseURL: 'http://localhost:8000/dishes'
//   })
  
//   const deleteDish = (dishId) => http.delete(`/dishes/${dishId}`)
//     .then(() => {
//       document.getElementById(`dish-${id}`).remove()
//     })
//     .catch(err => console.error(err))
  
//   document.querySelectorAll('.delete-btn').forEach(btn => {
//     btn.onclick = (event) => {
//       btn.classList.add('disabled')
//       deleteDish(event.target.value)
//     }
//   })


  