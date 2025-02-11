// Memory Timeline Data
const memories = [
    {
        date: "First Meeting",
        title: "College Mein Mulaqat",
        description: "",
        icon: "",
        image: "assets/images/college.jpg"
    },
    {
        date: "Special Friday",
        title: "First Message",
        description: "Aapka 'Hi' message Friday ko aaya aur main itna khush hua ki bas bata nahi sakta! ",
        icon: "",
        image: "assets/images/message.jpg"
    },
    {
        date: "Station Adventures",
        title: "Yaadgaar Safar",
        description: "Phir hum dono saath mein station jaane lage, aur woh moments hamesha yaad rahenge! ",
        icon: "",
        image: "assets/images/station.jpg"
    },
    {
        date: "Online Class",
        title: "Virtual Meeting",
        description: "Online class mein aapko dekhkar din ban jata tha! Kitne maze kiye hai classes mein! ",
        icon: "",
        image: "assets/images/online-class.jpg"
    }
];

// Our Interests and Activities
const interests = [
    {
        number: 1,
        title: "Windsurfing Dreams",
        description: "Agar kabhi windsurfing karne ka mauka mile, toh chalo saath mein adventure karein! "
    },
    {
        number: 2,
        title: "Movie Nights",
        description: "Kya aapko bhi romantic movies pasand hain? Chalo ek movie night plan karte hain! "
    },
    {
        number: 3,
        title: "Coffee Dates",
        description: "Aapke saath coffee peene ka har moment special hota hai "
    },
    {
        number: 4,
        title: "Station Walks",
        description: "Station tak ke safar mein kitni baatein hoti hain! "
    },
    {
        number: 5,
        title: "Study Sessions",
        description: "Saath mein padhna kitna fun hota hai! "
    },
    {
        number: 6,
        title: "Weekend Plans",
        description: "Weekend pe new adventures ki planning "
    }
];

// Create Memory Timeline
function createTimeline() {
    const timeline = document.querySelector('.timeline');
    
    memories.forEach((memory, index) => {
        const memoryItem = document.createElement('div');
        memoryItem.classList.add('memory-item');
        
        memoryItem.innerHTML = `
            <div class="memory-content">
                <div class="memory-icon">${memory.icon}</div>
                <div class="memory-date">${memory.date}</div>
                <h3>${memory.title}</h3>
                <p class="hindi-text">${memory.description}</p>
                ${memory.image ? `<div class="memory-image" style="background-image: url('${memory.image}')"></div>` : ''}
            </div>
        `;
        
        timeline.appendChild(memoryItem);
    });
}

// Create Interest Cards
function createGallery() {
    const container = document.querySelector('.cards-container');
    
    interests.forEach((interest) => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <div class="card-number">${interest.number}</div>
                    <h3>${interest.title}</h3>
                    <div class="card-icon"></div>
                </div>
                <div class="card-back">
                    <p class="hindi-text">${interest.description}</p>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Secret Message
function unlockVault() {
    const password = document.getElementById('vaultPassword').value.toLowerCase().trim();
    const vaultContent = document.querySelector('.vault-content');
    const vaultMusic = document.getElementById('vaultMusic');
    
    if (password === 'atlas') {
        try {
            // Play the background music
            if (vaultMusic) {
                vaultMusic.volume = 0.5; // Set volume to 50%
                vaultMusic.play().catch(error => {
                    console.log('Music autoplay failed:', error);
                });
            }
            
            // Show the content
            if (vaultContent) {
                vaultContent.classList.remove('hidden');
                vaultContent.innerHTML = `
          <div style="background: linear-gradient(to bottom, #fff5f5, #fff); padding: 60px 80px; border-radius: 25px; box-shadow: 0 15px 40px rgba(0,0,0,0.1); border: 3px solid #ffb6c1; max-width: 1000px; margin: 0 auto; font-family: 'Dancing Script', cursive;">
                        <h3 style="text-align: center; font-size: 2.5em; color: #FF1493; margin-bottom: 30px; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);"></h3>
                        <div style="line-height: 2; font-size: 1.4em; color: #444; text-align: justify; padding: 30px;">
                            <div style="margin-bottom: 25px;"> 
                                <p style="font-size: 1.4em; color: #FF1493; margin-bottom: 20px;">Dear Madam Ji ❤️✨</p>
                                
                                <p style="margin-bottom: 30px; text-indent: 50px;">Aaj mai apne dil ki baat likhne baitha hoon, aur shayad yeh shabdon mein jitna samajh aa raha hai, utna mere dil ke jazbaat nahi samjha paayenge.</p>
                                
                                <p class="memory-para">Mere liye zindagi ka sabse khaas din woh tha jab maine pehli baar 👀 dekha tha—online class mein. Sach bataun, uss din pura focus sirf aap par tha. 😍</p>
                                
                                <p class="dua-para">Maine ussi waqt apne dil se ek chhoti si dua maangi thi: "Bhagwan, bas ek baar inse baat karne ka mauka de do." 🙏❤️</p>
                            </div>
                            
                            <div style="margin: 40px 0; padding: 30px 0; border-top: 2px solid #ffb6c1; border-bottom: 2px solid #ffb6c1;">
                                <p>Fir jab college mein mulaqat hui, toh laga jaise koi sapna sach ho gaya. 😇 Unn dino mai shayad door door 🏃‍♂️ reh raha tha, lekin sach yeh hai ki mai andar hi andar itna khush tha ki samajh nahi paa raha tha ki kaise react karun. 🤭</p>
                                
                                <p>Aap se baat karna aur aapke saath waqt bitaana, meri zindagi ke sabse haseen lamhon mein se hai. 💖✨</p>
                            </div>


<span style="color: #FF69B4;">🌸 "Kuch sochta hoon toh tera khayal aa jata hai,<br>🌸 Kuch bolta hoon toh tera naam aa jata hai.<br>🌸 Kab tak chhupa ke rakhun dil ki baat ko?<br>🌸 Teri har ada par mujhe pyar aa jata hai." 💘</span>


Mujhe woh din bhi yaad hai jab aapne pehli baar "Hi" 👋 bola tha aur apne handshake 🤝 kiya tha. Vaise aapko pata hai? 😄 Mujhe pehli baar kisi ladki ne handshake kiya tha—vo bhi khudse! 🥹💓 Mai bahut khush hua tha ji. 🥰 Mera dil ekdum dhak-dhak 💓 ho raha tha. Aur mujhe woh raat bhi yaad hai jab aapka pehla "Hii" message 📩 aaya tha. Uss raat thodi si baat hui thi, par hum bahut khush the ji. 🤗 Us raat meri khushi ka koi thikana nahi tha. 🥺💞 Fir dheere dheere baatein badhti gayi...
                            <div style="margin: 40px 0; background: linear-gradient(to right, #fff5f5, #fff); padding: 35px; border-radius: 20px;">
                                <p class="moment">💫 Aapke saath station jaana 🚉, aapko call karna 📞, bina "GM" bole din ki shuruaat na hona 🌅, bina "GN" bole sona 🌙💤, chhoti-chhoti baatein karna—sab kuch meri zindagi ke anmol pal hain. 😇❤️</p>
                                
                                <p class="special-memory">Hyy, aapko pata hai? 🤭 5th September ko aap traditional dress 👗 mai pehli baar aayi thi, woh yellow kurta 😍 Pehna tha ji. Mujhe sab kuch yaad hai! 🤩</p>
                                
                                <p class="feelings">Us din se mujhe aapse pyaar hone laga. 💛✨ Mai bahut khush tha ji, itna khush ki bas aap hi dikh rahi thi. 💘</p>
                            </div>
                            <div style="margin: 40px 0; text-align: center; padding: 35px; background: linear-gradient(to right, #fff0f5, #fff); border-radius: 20px;">
                                <span style="color: #FF69B4;">
                                <p class="poetry-line">💞 "Tenu itna main pyaar karaan, ek pal vich sau baar karaan."</p>
                                <p class="poetry-line">💞 "Tu jaave je mainu chhad ke, maut da intezaar karaan."</p>
                                <p class="poetry-line">💞 "Ke tere liye duniya chhod di hai, tujhpe hi saans aake ruke."</p>
                                <p class="poetry-line">💞 "Main tujhko kitna chahta hoon, ye tu kabhi soch na sake." ❤️</p>
                                </span>
                            </div>


Fir bahut kuch hua ji... 🥹 Pehle bhai-behen se friends bane, phir best friends 💕 aur uss raat aapne apne dil ki baat 💓 mujhe batayi thi. Vaise abhi toh aap meri Madam Ji hai! 🫶💖

<div style="margin: 40px 0; text-align: center; padding: 35px; background: linear-gradient(to right, #fff0f5, #fff); border-radius: 20px;">
                                <span style="color: #FF69B4;">
                                <p class="poetry-line">"💝 "Tumse milna, tumse baatein karna aur tumhari hi baatein karna… mujhe accha lagta hai.""</p>
                                <p class="poetry-line"💝 "Tumhara meri fikr karna… mera khud ka khayal na rakhne par mujhse jhagadna… mujhe accha lagta hai."</p>
                                <p class="poetry-line">💖 "Mere liye meri duniya ho tum,</p>
                                <p class="poetry-line">💖 Jo maanga tha duaon mein woh ho tum.</p>
                                <p class="poetry-line">💖 Meri nazar ki talaash ho tum,</p>
                                <p class="poetry-line">💖 Meri zindagi ka qaraar ho tum.</p>
                                </span>
                            </div>
Mai hamesha yaad rakhunga ki mere liye aap sirf ek dost ya behen nahi hain; aap meri sab kuch ho ji. 🤗💞 Aapse milkar maine jaana ki pyaar sirf romantic nahi hota—ek rishta jo respect aur care pe based ho, woh bhi pyaar hota hai. 🫂💝
Madam Ji, chahe hum kitni bhi door ho jaayein, mere dil ❤️ mein aapki jagah hamesha rahegi. 💫

<span style="color: #FF69B4;">💖 "Uski baaton mein jaane kaisa jaadu hai,<br>💖 Ek hi pal mein sadiyan bhula deta hai." ✨</span>

<p style="text-align: center; margin: 30px 0; font-size: 1.3em;">Take care of yourself and keep smiling always! 😊💖✨</p>

                            <div style="text-align: left; margin-top: 30px; font-size: 1.4em; color: #FF1493; padding-left: 20px;">
                                Hamesha aapka,<br>
                                Mr Ji... 💘💫
                            </div>
                    </div>

                            </p>
                      
                        
                        <!-- Add music controls -->
                        <div class="music-controls">
                            <button onclick="toggleVaultMusic()" class="music-toggle">
                                <i class="fas fa-music"></i> Toggle Music
                            </button>
                            <input type="range" min="0" max="1" step="0.1" value="0.5" 
                                   onchange="adjustVaultVolume(this.value)" class="volume-slider">
                        </div>
                    </div>
                `;
                
                // Enhanced confetti celebration
                const duration = 3000;
                const animationEnd = Date.now() + duration;
                const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

                function randomInRange(min, max) {
                    return Math.random() * (max - min) + min;
                }

                const interval = setInterval(function() {
                    const timeLeft = animationEnd - Date.now();

                    if (timeLeft <= 0) {
                        return clearInterval(interval);
                    }

                    const particleCount = 50 * (timeLeft / duration);
                    
                    confetti({
                        ...defaults,
                        particleCount,
                        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                        colors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7'],
                    });
                    confetti({
                        ...defaults,
                        particleCount,
                        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                        colors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7'],
                    });
                }, 250);
            }
        } catch (error) {
            console.error('Error in unlockVault:', error);
        }
    } else {
        alert('Oops! Wrong word! Hint: Where did we first meet? 🤔');
    }
}

// Toggle vault background music
function toggleVaultMusic() {
    const vaultMusic = document.getElementById('vaultMusic');
    if (vaultMusic.paused) {
        vaultMusic.play();
    } else {
        vaultMusic.pause();
    }
}

// Adjust vault music volume
function adjustVaultVolume(value) {
    const vaultMusic = document.getElementById('vaultMusic');
    vaultMusic.volume = value;
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createTimeline();
    createGallery();
});
