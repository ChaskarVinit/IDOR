// Simulate login and redirect to profile
function login(userId) {
    window.location.href = `profile.html?id=${userId}`;
}

// Fetch user data from the vulnerable endpoint
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("id");

    if (userId) {
        fetch(`/user/${userId}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    document.getElementById("user-data").innerHTML = `<p>User not found</p>`;
                } else {
                    document.getElementById("user-data").innerHTML = `
                        <h2>${data.username}</h2>
                        <p><strong>Email:</strong> ${data.email}</p>
                        <p><strong>Phone:</strong> ${data.phone}</p>
                        <p><strong>Address:</strong> ${data.address}</p>
                        <p><strong>Date of Birth:</strong> ${data.dob}</p>
                        <p><strong>Occupation:</strong> ${data.occupation}</p>
                        <p><strong>SSN:</strong> <span style="color: red;">${data.ssn}</span> 🔥</p>
                    `;
                }
            })
            .catch(error => console.error("Error fetching user data:", error));
    }
};