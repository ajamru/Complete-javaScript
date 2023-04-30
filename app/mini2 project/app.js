const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeModal = document.querySelector('.close-modal')

// for selecting a group of things
const buttonShowModal = document.querySelectorAll('.btn')

for(let i = 0; i < buttonShowModal.length; i++) {
    //console.log(buttonShowModal[i].textContent)
    buttonShowModal[i].addEventListener('click', function() {
        //console.log('buttonClicked')

        //after claicking we want to remove hidden property so that it will visible 
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
}

const closeModalUpdated = function() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

closeModal.addEventListener('click', closeModalUpdated

    //after claicking we want to add hidden property so that it will remove from page as hidden is none     
)

overlay.addEventListener('click', closeModalUpdated)



// Respond to key press event -- this will happen for global event

document.addEventListener('keydown', function(event) {
    //console.log(event.key) -- getting the key which is pressed

    if(event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModalUpdated()       
    }
})
