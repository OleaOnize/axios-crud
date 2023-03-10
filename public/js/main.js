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
      const { id } = button.dataset; 
      const url = `http://localhost:8000/dishes/${id}`
      const dishCointainer = button.parentElement.parentElement.parentElement
  
      button.addEventListener('click', () => deleteDish(url, dishCointainer))
    })
  })

