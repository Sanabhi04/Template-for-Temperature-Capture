prompt("Please enter your name", "Harry Potter");
async function fetchTemperature() {
    try {
        const response = await fetch('/fetch_temperature');
        const data = await response.json();

        if (data.error) {
            alert(data.error);
            return;
        }

        document.getElementById('temperature').innerText = `Temperature: ${data.temperature} °C`;
        document.getElementById('humidity').innerText = `Humidity: ${data.humidity} %`;
    } catch (error) {
        alert('Failed to fetch data. Please try again later.');
    }
}