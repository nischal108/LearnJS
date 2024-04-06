// Sample data for profiles
let allpictures = [
    { src: "https://source.unsplash.com/random/?person", name: "Ava", info: "Designer" },
    { src: "https://picsum.photos/200/300?random=1", name: "Omar", info: "Developer" },
    { src: "https://images.pexels.com/photos/random/?portrait", name: "Chen", info: "Photographer" },
    { src: "https://source.unsplash.com/random/woman", name: "Beatrice", info: "Artist" },
    { src: "https://picsum.photos/300/200?random=2", name: "Liam", info: "Writer" },
    { src: "https://images.unsplash.com/photos/random/?man", name: "Elena", info: "Engineer" },
    { src: "https://picsum.photos/200/200?random=3", name: "Kai", info: "Musician" },
    { src: "https://images.pexels.com/photos/random/?adult", name: "Sofia", info: "Chef" },
    { src: "https://source.unsplash.com/random/business", name: "David", info: "Entrepreneur" },
    { src: "https://picsum.photos/300/200?random=4", name: "Aisha", info: "Architect" }
];

// Function to load profiles
function loadProfiles(profiles) {
    const profileList = document.getElementById('profile-list');
    profileList.innerHTML = ''; // Clear existing list
    
    profiles.forEach(profile => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <img src="${profile.src}" alt="${profile.name}">
            <div class="profile-details">
                <div class="profile-name">${profile.name}</div>
                <div class="profile-info">${profile.info}</div>
            </div>
        `;
        profileList.appendChild(listItem);
    });
}

// Load all profiles initially
loadProfiles(allpictures);

// Search functionality
const searchInput = document.querySelector('.search-input input');
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredProfiles = allpictures.filter(profile => 
        profile.name.toLowerCase().includes(searchTerm) || 
        profile.info.toLowerCase().includes(searchTerm)
    );
    loadProfiles(filteredProfiles);
});
