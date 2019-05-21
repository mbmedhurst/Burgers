// event listener for submit and devour buttons
document.addEventListener('click', ({target}) => {
    if (target.className === 'submit') {
        fetch('/burgers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                burger_name: document.querySelector('#burgerType').value,
            })
        })
        .then (r => r.json)
        .then (r => {
            // reload the page
            location.reload()
        })
        .catch(e => console.log(e))
    } else if (target.className === 'devourBtn') {
        console.log(target.dataset.uid)
        fetch(`/burgers/${target.dataset.uid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                isDevoured: true,
            }),
        })
        .then (r => r.json)
        .then (r => {
            // reload the page
            location.reload()
        })
        .catch(e => console.log(e))
    }
})