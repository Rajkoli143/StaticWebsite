// Date Planner Options
const dateOptions = {
    dinner: [
        { name: "Romantic Home-Cooked Meal", description: "I'll cook your favorite dish" },
        { name: "Fancy Restaurant", description: "That special place we love" },
        { name: "Picnic Under the Stars", description: "With all your favorite snacks" }
    ],
    movie: [
        { name: "Romance Classic", description: "Your favorite love story" },
        { name: "Comedy Night", description: "Let's laugh together" },
        { name: "Our First Date Movie", description: "A trip down memory lane" }
    ],
    activity: [
        { name: "Couples Massage", description: "Pure relaxation together" },
        { name: "Dance Class", description: "Let's move together" },
        { name: "Sunset Walk", description: "Along our favorite path" }
    ]
};

// Initialize Date Planner
function initializeDatePlanner() {
    Object.keys(dateOptions).forEach(category => {
        const container = document.querySelector(`.category.${category} .options`);
        
        dateOptions[category].forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('date-option');
            
            optionElement.innerHTML = `
                <h4>${option.name}</h4>
                <p>${option.description}</p>
                <button onclick="selectOption('${category}', '${option.name}')">Choose This</button>
            `;
            
            container.appendChild(optionElement);
        });
    });
}

// Handle option selection
function selectOption(category, optionName) {
    const options = document.querySelectorAll(`.category.${category} .date-option`);
    options.forEach(option => {
        option.classList.remove('selected');
        if (option.querySelector('h4').textContent === optionName) {
            option.classList.add('selected');
        }
    });
}

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Future Plans Functionality
const planBuilder = {
    activities: {
        weekend: {
            title: "Weekend Getaway",
            description: "Chalo kisi new jagah explore karte hain! 🌄"
        },
        coffee: {
            title: "Coffee Date",
            description: "Best coffee shop mein baatein karenge ☕"
        },
        adventure: {
            title: "Fun Adventure",
            description: "Kuch naya try karte hain! 🎉"
        }
    }
};

// Handle activity selection
document.getElementById('activity').addEventListener('change', function() {
    const selectedActivity = this.value;
    const confirmation = document.getElementById('dateConfirmation');
    
    if (selectedActivity) {
        const activity = planBuilder.activities[selectedActivity];
        confirmation.classList.remove('hidden');
        confirmation.innerHTML = `
            <div class="confirmation-message">
                <h3>${activity.title}</h3>
                <p class="hindi-text">${activity.description}</p>
                <p class="excitement">Kitna maza aayega! 😊</p>
            </div>
        `;
    }
});

// Lock in plan button functionality
document.getElementById('lockDate').addEventListener('click', () => {
    const selectedActivity = document.getElementById('activity').value;
    
    if (selectedActivity) {
        // Animate the confirmation
        const confirmation = document.getElementById('dateConfirmation');
        confirmation.style.animation = 'pulse 0.5s ease';
        
        // Trigger confetti celebration
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        
        alert('Plan set! Get ready for our next adventure! 🎉');
    } else {
        alert('Pehle koi activity select karo! 😊');
    }
});

// Event listener for Begin Journey button
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Initializing...');
    
    // Music elements
    const musicToggle = document.querySelector('.music-toggle');
    const musicIcon = musicToggle.querySelector('i');
    const bgMusic = document.getElementById('bgMusic');
    let isPlaying = false;

    // Simple function to play music
    async function playMusic() {
        try {
            bgMusic.volume = 0;
            await bgMusic.play();
            
            // Fade in volume
            const fadeIn = setInterval(() => {
                if (bgMusic.volume < 0.95) {
                    bgMusic.volume += 0.05;
                } else {
                    bgMusic.volume = 1;
                    clearInterval(fadeIn);
                }
            }, 100);

            musicIcon.classList.remove('fa-music');
            musicIcon.classList.add('fa-pause');
            musicToggle.classList.add('playing');
            isPlaying = true;
        } catch (error) {
            console.error('Music play failed:', error);
        }
    }

    // Function to pause music
    function pauseMusic() {
        const fadeOut = setInterval(() => {
            if (bgMusic.volume > 0.05) {
                bgMusic.volume -= 0.05;
            } else {
                bgMusic.volume = 0;
                bgMusic.pause();
                clearInterval(fadeOut);
            }
        }, 100);

        musicIcon.classList.remove('fa-pause');
        musicIcon.classList.add('fa-music');
        musicToggle.classList.remove('playing');
        isPlaying = false;
    }

    // Gift elements
    const giftBox = document.getElementById('giftBox');
    const claimBtn = document.getElementById('claimGiftBtn');
    const photoGrid = document.getElementById('photoGrid');
    const photoCards = document.querySelectorAll('.photo-card');

    // Gift box click handler
    if (claimBtn) {
        claimBtn.addEventListener('click', () => {
            // Play music immediately
            if (!isPlaying) {
                playMusic();
            }
            
            // Open gift box
            giftBox.classList.add('open');
            
            // Hide claim button
            claimBtn.style.opacity = '0';
            claimBtn.style.transform = 'translateX(-50%) translateY(20px)';
            claimBtn.style.pointerEvents = 'none';
            
            // Show photo grid after box opens
            setTimeout(() => {
                photoGrid.classList.remove('hidden');
                photoGrid.classList.add('visible');
                
                // Create hearts
                for (let i = 0; i < 60; i++) {
                    setTimeout(() => {
                        const heart = document.createElement('div');
                        heart.className = 'heart floating';
                        const boxRect = giftBox.getBoundingClientRect();
                        heart.style.setProperty('--start-x', `${boxRect.left + boxRect.width/2}px`);
                        document.querySelector('.floating-hearts-container')?.appendChild(heart);
                        heart.addEventListener('animationend', () => heart.remove());
                    }, i * 50);
                }
                
                // Animate photos
                photoCards.forEach((card, index) => {
                    setTimeout(() => {
                        const rotation = (Math.random() * 60 - 30) + 'deg';
                        const scale = 0.8 + Math.random() * 0.4;
                        card.style.setProperty('--rotation', rotation);
                        card.style.setProperty('--scale', scale);
                        card.classList.add('explode', 'visible');
                    }, index * 200);
                });
            }, 1000);
        });
    }

    // Music toggle click handler
    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });

    // Music toggle hover effects
    musicToggle.addEventListener('mouseenter', () => {
        musicToggle.classList.add('hover');
    });

    musicToggle.addEventListener('mouseleave', () => {
        musicToggle.classList.remove('hover');
    });

    // Handle page visibility
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && isPlaying) {
            pauseMusic();
        }
    });

    // Preload audio
    bgMusic.load();
});