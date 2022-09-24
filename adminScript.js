let data = localStorage.getItem('vaccineSlots')

data = JSON.parse(data)

const table = document.getElementById("myTable")

data.forEach(element => {
    const row = table.insertRow()
    const cell1 = row.insertCell(0)
    const cell2 = row.insertCell(1)
    const cell3 = row.insertCell(2)
    const cell4 = row.insertCell(3)
    const cell5 = row.insertCell(4)
    const cell6 = row.insertCell(5)
    const cell7 = row.insertCell(6)
    cell1.innerHTML = element.name
    cell2.innerHTML = element.email
    cell3.innerHTML = element.age
    cell4.innerHTML = element.phone
    cell5.innerHTML = element.aadhar
    cell6.innerHTML = element.date
    cell7.innerHTML = element.address
});