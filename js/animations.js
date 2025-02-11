// Floating hearts animation
console.log('Animations.js loaded'); // Debug log

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    
    // Random size class
    const sizeRandom = Math.random();
    if (sizeRandom > 0.7) {
        heart.classList.add('large');
    } else if (sizeRandom > 0.4) {
        heart.classList.add('medium');
    }
    
    // Random starting position along the bottom
    const startX = Math.random() * (window.innerWidth - 100); // Subtract heart width to keep within bounds
    heart.style.setProperty('--start-x', `${startX}px`);
    
    // Random duration and delay
    const duration = 8 + Math.random() * 4; // 8-12 seconds
    const delay = Math.random() * -2; // Start some hearts mid-animation
    heart.style.setProperty('--float-duration', `${duration}s`);
    heart.style.setProperty('--float-delay', `${delay}s`);
    
    // Ensure hearts are on top
    heart.style.zIndex = '9999';
    
    // Add floating class immediately
    heart.classList.add('floating');
    
    return heart;
}

function initHearts() {
    console.log('Initializing hearts'); // Debug log
    
    // Get or create hearts container
    let container = document.querySelector('.floating-hearts-container');
    if (!container) {
        console.log('Creating hearts container'); // Debug log
        container = document.createElement('div');
        container.className = 'floating-hearts-container';
        // Ensure container is inserted at the end of body to be on top
        document.body.appendChild(container);
    }

    // Set container style to ensure it's on top
    container.style.zIndex = '9999';
    
    // Create initial batch of hearts
    console.log('Creating initial hearts'); // Debug log
    for (let i = 0; i < 20; i++) {
        const heart = createHeart();
        container.appendChild(heart);
        
        // Remove heart after animation ends
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    // Continuously add new hearts
    let lastHeartTime = Date.now();
    const addHeart = () => {
        const now = Date.now();
        if (now - lastHeartTime >= 300) { // Add new heart every 300ms (reduced frequency)
            const heart = createHeart();
            container.appendChild(heart);
            
            heart.addEventListener('animationend', () => {
                heart.remove();
            });
            
            lastHeartTime = now;
        }
        requestAnimationFrame(addHeart);
    };
    
    requestAnimationFrame(addHeart);
}

// Initialize hearts when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Starting heart animation'); // Debug log
    initHearts();
});

// Also try window.onload as a fallback
window.onload = () => {
    console.log('Window Loaded - Ensuring heart animation is running'); // Debug log
    if (!document.querySelector('.heart')) {
        initHearts();
    }
};

// Gift Box Animation with enhanced effects
function initGiftBox() {
    const giftBox = document.getElementById('giftBox');
    const claimBtn = document.getElementById('claimGiftBtn');
    const photoGrid = document.getElementById('photoGrid');
    const photoCards = document.querySelectorAll('.photo-card');
    
    if (!giftBox || !claimBtn || !photoGrid) return;

    // Open gift box with enhanced animation
    claimBtn.addEventListener('click', () => {
        giftBox.classList.add('open');
        
        // Hide claim button with fade
        claimBtn.style.transition = 'all 0.5s ease';
        claimBtn.style.opacity = '0';
        claimBtn.style.transform = 'translateX(-50%) translateY(20px)';
        claimBtn.style.pointerEvents = 'none';
        
        // Show photo grid after box opens
        setTimeout(() => {
            photoGrid.classList.remove('hidden');
            photoGrid.classList.add('visible');
            
            // Create a burst of celebration hearts
            for (let i = 0; i < 60; i++) {
                setTimeout(() => {
                    const heart = createHeart();
                    const boxRect = giftBox.getBoundingClientRect();
                    heart.style.setProperty('--start-x', `${boxRect.left + boxRect.width/2}px`);
                    document.querySelector('.floating-hearts-container').appendChild(heart);
                }, i * 50);
            }
            
            // Explode photos out with enhanced effect
            photoCards.forEach((card, index) => {
                setTimeout(() => {
                    const rotation = (Math.random() * 60 - 30) + 'deg';
                    const scale = 0.8 + Math.random() * 0.4;
                    card.style.setProperty('--rotation', rotation);
                    card.style.setProperty('--scale', scale);
                    
                    card.classList.add('explode');
                    card.classList.add('visible');
                }, index * 200);
            });
        }, 1000);
    });
}

// Initialize animations when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    initGiftBox();
    
    // Add scroll reveal for photo cards
    const photoCards = document.querySelectorAll('.photo-card');
    photoCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Intersection Observer for memory items
const observerOptions = {
    root: null,
    threshold: 0.3,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all memory items
document.querySelectorAll('.memory-item').forEach(item => {
    observer.observe(item);
});

// Music toggle functionality
const musicToggle = document.querySelector('.music-toggle');
const bgMusic = document.getElementById('bgMusic');
let isMusicPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicToggle.style.opacity = '0.5';
    } else {
        bgMusic.play();
        musicToggle.style.opacity = '1';
    }
    isMusicPlaying = !isMusicPlaying;
});

// Confetti animation for collecting all cards
document.getElementById('collectAll').addEventListener('click', () => {
    // Trigger confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
    
    // Animate all cards
    document.querySelectorAll('.card').forEach((card, index) => {
        setTimeout(() => {
            card.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
        }, index * 200);
    });
});

// Gift claim animation
document.getElementById('claimGift').addEventListener('click', function() {
    const surpriseAnimation = document.querySelector('.surprise-animation');
    const giftReveal = document.querySelector('.gift-reveal');
    this.style.display = 'none';
    
    surpriseAnimation.classList.remove('hidden');
    surpriseAnimation.innerHTML = `
        <div class="gift-animation">
            <div class="gift-box">🎁</div>
            <div class="gift-ribbon"></div>
        </div>
    `;
    
    // Animate gift box
    setTimeout(() => {
        const giftBox = document.querySelector('.gift-box');
        giftBox.style.animation = 'unwrap 3s forwards';
        
        // Show gift message after animation
        setTimeout(() => {
            giftReveal.classList.remove('hidden');
            giftReveal.innerHTML = `
                <div class="gift-message">
                    <h3>My Love,</h3>
                    <p>Your real gift awaits where we shared our first kiss... 💝</p>
                    <p class="hint">(Check the [specific location] at [specific time])</p>
                </div>
            `;
            
            // Final confetti celebration
            confetti({
                particleCount: 150,
                spread: 180,
                origin: { y: 0.7 }
            });
        }, 3000);
    }, 1000);
});

// 3D Rotating Gallery Controls
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let rotationDegree = 0;

    function rotateGallery(direction) {
        rotationDegree += direction * 45; // 45 degrees per image
        gallery.style.transform = `rotateY(${rotationDegree}deg)`;
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            rotateGallery(1);
        });

        nextBtn.addEventListener('click', () => {
            rotateGallery(-1);
        });
    }

    // Add touch support for mobile devices
    let touchStartX = 0;
    let touchEndX = 0;

    gallery.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    gallery.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX) {
            rotateGallery(-1); // Swipe left
        } else if (touchEndX > touchStartX) {
            rotateGallery(1); // Swipe right
        }
    });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(100vh) rotate(0deg); }
        100% { transform: translateY(-20vh) rotate(360deg); }
    }
    
    @keyframes unwrap {
        0% { transform: scale(1) rotate(0deg); }
        50% { transform: scale(1.2) rotate(180deg); }
        100% { transform: scale(1) rotate(360deg); }
    }
    
    .heart {
        position: absolute;
        animation: float linear forwards;
    }
    
    .gift-animation {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
    }
    
    .gift-box {
        font-size: 5rem;
        transition: all 0.3s ease;
    }
    
    .gift-message {
        text-align: center;
        animation: fadeIn 1s ease;
    }
    
    .gift-message h3 {
        font-family: 'Dancing Script', cursive;
        font-size: 2rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;

document.head.appendChild(style);
