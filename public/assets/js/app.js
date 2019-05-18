const addBurger = _ => {
    fetch('./burgers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            burger_name: document.querySelector('#burgerType').value,
            isDevoured: false
        })
    })
    .then (r => r.json)
    .then (r => {
        // reload the page
        location.reload()
    })
    .catch(e => console.log(e))
}

const devourBurger = id => {
    fetch(`/burgers/${target.dataset.uid}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then (_ => {
        // reload the page
        location.reload()
    })
    .catch(e => console.log(e))
}

document.addEventListener('click', ({target}) => {
    switch(target.id) {
        case 'submit':
            console.log('hello')
            addBurger()
        break
        case 'devourBtn':
            console.log('id')
            devourBurger(target.dataset.uid)
        break
    }
})