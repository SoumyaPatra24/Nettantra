const saveData = () => {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const age = parseInt(document.getElementById('age').value)
    const phone = document.getElementById('phone').value
    const aadhar = document.getElementById('aadhar').value
    const date = document.getElementById('date').value
    const address = document.getElementById('address').value

    // Data Validations
    if (name.length < 4) {
        alert('Invalid name! Name should be atleast 4 characters.')
        return
    }

    if (age < 10) {
        alert('Invalid Age! Persons less that 10 years old cannot apply.')
        return
    }

    if (phone.length < 10) {
        alert('Invalid Phone Number! Phone number must contain atleast 10 digits.')
        return
    }

    if (aadhar.length < 4) {
        alert('Invalid Aadhar Number! Aadhar number must contain atleast 16 digits.')
        return
    }

    if (address.length < 4) {
        alert('Invalid Address! Must be atleast 4 characters long.')
        return
    }

    const data = {
        name,
        email,
        age,
        phone,
        aadhar,
        date,
        address
    }

    const confirmed = confirm('Are you sure you want to submit this form?')

    if (confirmed) {
        const exsistingData = JSON.parse(localStorage.getItem('vaccineSlots')) || []
        exsistingData.push(data)
        localStorage.setItem('vaccineSlots', JSON.stringify(exsistingData))
        alert('Form Submitted Successfully!!')
    } else {
        return
    }
}