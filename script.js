function bookRoom() {
    let name = document.getElementById('name').value;
    let room = document.getElementById('room').value;
    let date = document.getElementById('date').value;
    
    if (name && room && date) {
        // Save data to sessionStorage to use on the next page
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("room", room);
        sessionStorage.setItem("date", date);

        // Redirect to confirmation page
        window.location.href = "confirmation.html";
    } else {
        alert('Please fill in all details!');
    }
}
