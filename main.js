const categories = [
  { id: 3, name: 'Cruiser', },
  { id: 2, name: 'Dual-Sport', },
  { id: 1, name: 'Naked', },
  { id: 4, name: 'Sport', },
]

const manufacturers = [
  { id: 5, name: 'BMW' },
  { id: 2, name: 'Honda' },
  { id: 1, name: 'Indian' } ,
  { id: 3, name: 'Triumph' },
  { id: 4, name: 'Victory' }
]

function bindNavBarClickHandlers(event) { 
  let categoriesLink = document.getElementById("lnk-categories")
  categoriesLink.addEventListener("click", displayCategories)
  let manufacturersLink = document.getElementById("lnk-manufacturers")
  manufacturersLink.addEventListener("click", displayManufacturers)
}

function displayCategories(event) { 
  event.preventDefault() 
  let categoriesHeader = document.createElement('h2')
  categoriesHeader.appendChild( document.createTextNode('Categories') )

  let categoriesList = document.createElement('ul')

  categories.forEach( (category) => { 
    let categoryName = category.name
    let listItem = document.createElement('li')
    listItem.appendChild( document.createTextNode(categoryName) )
    categoriesList.appendChild(listItem)
  })


  let main = document.querySelector("main")

  while (main.hasChildNodes()) { 
    main.removeChild(main.lastChild)
  }
  
  main.appendChild( categoriesHeader )
  main.appendChild( categoriesList )

  
}

function displayManufacturers(event) { 
  event.preventDefault() 
  let manufacturersHeader = document.createElement('h2')
  manufacturersHeader.appendChild( document.createTextNode('Manufacturers') )
  
  let manufacturersList = document.createElement('ul')
  
  manufacturers.forEach( (manufacturer) => { 
    let manufacturerName = manufacturer.name
    let listItem = document.createElement('li')
    listItem.appendChild( document.createTextNode(manufacturerName) )
    manufacturersList.appendChild(listItem)
  })

  let main = document.querySelector("main")

  while (main.hasChildNodes()) { 
    main.removeChild(main.lastChild)
  }

  main.appendChild( manufacturersHeader )
  main.appendChild( manufacturersList )
}

document.addEventListener("DOMContentLoaded", bindNavBarClickHandlers)