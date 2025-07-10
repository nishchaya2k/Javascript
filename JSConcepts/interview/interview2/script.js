const pic = document.getElementById("pic")
const username = document.getElementById("username")
const bio = document.getElementById("bio")
const locations = document.getElementById("location")

async function fetchUserData() {
    const url = "https://api.github.com/users/nishchaya2k";
    try {
        const response = await fetch(url);

        if (!response.ok) return
        const data = await response.json();
        console.log(data)
        updateProfileData(data)

    } catch (err) {
        console.log(err)
    }
}

function updateProfileData(data) {
    pic.src = data.avatar_url;
    username.textContent = data.name;
    bio.textContent = data.bio;
    locations.textContent = data.location;
}


document.addEventListener("DOMContentLoaded", () => {
    fetchUserData();
})