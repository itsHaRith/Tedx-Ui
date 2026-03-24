const elementsToTranslate = {
    pageTitle: { ar: "TEDxBaghdad", en: "TEDxBaghdad" },
    'nav-about': { ar: "من نحن", en: "About us" },
    'nav-map': { ar: "حجز بوث", en: "Book Booth" },
    'nav-contact': { ar: "الرئيسية", en: "Home" },
    'hero-pretitle': { ar: "TEDxBaghdad | المعرض السنوي للعام الخامس عشر على التوالي", en: "TEDxBaghdad | 15th Annual Exhibition" },
    'hero-cta': { ar: "اشتري بوثك الان", en: "Buy Booth Now" },
    'event-date': { ar: "🗓️ السبت، 13 ديسمبر 2025، 11 صباحاً", en: "🗓️ Saturday, December 13, 2025, 11 AM" },
    'event-location': { ar: "📍 قرية دجلة (Dijlah Village)", en: "📍 Dijlah Village" },
    'about-heading': { ar: "ما هو مؤتمر تيدإكس بغداد؟", en: "What is TEDxBaghdad?" },
    'about-p1': { ar: "تيدإكس بغداد هو مؤتمر سنوي مرخص من TED العالمي، انطلق لأول مرة في العراق عام 2011 في بغداد، ويُقام منذ ذلك الحين دون انقطاع.", en: "TEDxBaghdad is an annual conference licensed by TED Global, launched for the first time in Iraq in 2011 in Baghdad, and has been held continuously since then." },
    'about-p2': { ar: "يهدف المؤتمر إلى نشر الأفكار العراقية المبدعة ومشاركتها محلياً وعالمياً. كما يجمع نخبة من الشخصيات المؤثرة وأصحاب القرار، مما يتيح للشركات فرصاً مميزة للتواصل وبناء شراكات استراتيجية.", en: "The conference aims to spread creative Iraqi ideas locally and globally. It also brings together an elite group of influential figures and decision-makers, providing unique opportunities for businesses to network and build strategic partnerships." },
    'media-heading': { ar: "أصداء إعلامية عالمية:", en: "Global Media Coverage:" },
    'media-p1': { ar: "حظي مؤتمر تيدإكس بغداد ومنذ انطلاقته الأولى عام 2011 بأصداء محلية وعالمية كبيرة.", en: "Since its launch in 2011, TEDxBaghdad has received significant local and international media attention." },
    'media-list': { ar: '<li>قناة **الجزيرة:** "TEDx Baghdad: Iraq is infinity".</li><li>قناة **العربية:** "العراقيون يجددون الأمل في مؤتمر تيدإكس بغداد".</li>', en: '<li>**Al Jazeera:** "TEDx Baghdad: Iraq is infinity".</li><li>**Al Arabiya:** "Iraqis renew hopes at TEDxBaghdad".</li>' },
    'numbers-heading': { ar: "تيدإكس بغداد بالأرقام", en: "TEDxBaghdad By Numbers" },
    'stat-p1': { ar: "شخص من الحضور (Attendees)", en: "Attendees" },
    'stat-p2': { ar: "زائر يقومون بالتسجيل (Registered Guests)", en: "Registered Guests" },
    'stat-p3': { ar: "شخص من المسجلين للتطوع (Registered Volunteers)", en: "Registered Volunteers" },
    'stat-p4': { ar: "مشترك في النشرة الشهرية (Monthly Newsletter)", en: "Monthly Newsletter Subscribers" },
    'demo-heading': { ar: "التركيبة السكانية للحضور:", en: "Attendee Demographics:" },
    'demo-p1': { ar: "60% إناث (Female) و 40% ذكور (Male).", en: "60% Female and 40% Male." },
    'packages-heading': { ar: "باقات الرعاية المتوفرة", en: "Available Sponsorship Packages" },
    'packages-subtitle': { ar: "صممنا حزم خاصة لتناسب علامتك التجارية.", en: "We designed special packages to suit your brand." },
    'package1-title': { ar: "بوث جاهز (Standard Booth)", en: "Standard Booth" },
    'package1-features': { ar: "<li>موقع مميز لجناحك في معرض تيدإكس بغداد.</li><li>بوث مجهز بالكامل (جاهز).</li>", en: "<li>Prime location for your pavilion at the TEDxBaghdad exhibition.</li><li>Fully equipped booth (ready-made).</li>" },
    'package2-title': { ar: "باقة الريادة (Leadership Package)", en: "Leadership Package" },
    'package2-desc': { ar: "مثالية للعلامة التجارية التي ترغب في التألق وترك بصمة لا تنسى.", en: "Ideal for brands seeking to shine and leave a memorable mark." },
    'package2-cta': { ar: "عرض المزيد من التفاصيل", en: "View More Details" },
    'package3-title': { ar: "باقة الإعلام (Media Package)", en: "Media Package" },
    'package3-desc': { ar: "عرض علامتك التجارية ضمن الحملة الإعلانية للمؤتمر لمدة شهرين.", en: "Showcase your brand in the conference's advertising campaign for two months." },
    'package3-cta': { ar: "عرض المزيد من التفاصيل", en: "View More Details" },
    'contact-heading': { ar: "تواصل معنا للشراكة", en: "Contact Us for Partnership" },
    'contact-subtitle': { ar: "تواصل مع فريق TEDxBaghdad لإتمام الشراكة:", en: "Contact the TEDxBaghdad team to complete the partnership:" },
    'contact-name': { ar: "<strong>فريق تيدإكس بغداد</strong> - قسم الشراكات", en: "<strong>TEDxBaghdad Team</strong> - Partnerships Department" },
    'map-heading': { ar: "خارطة المعرض ونظام الحجز", en: "Exhibition Map & Booking System" },
    'map-subtitle': { ar: "اضغط على البوث الذي ترغب في حجزه لتقديم طلب حجز أولي.", en: "Click on the booth you wish to reserve to submit an initial booking request." },
    'map-note': { ar: "سيتم التواصل معك من قبل فريقنا لإكمال عملية الدفع والتأكيد.", en: "Our team will contact you to finalize payment and confirmation." },
    'contact-heading-small': { ar: "تواصل معنا مباشرة", en: "Contact Us Directly" },
    'contact-name-small': { ar: "<strong>فريق تيدإكس بغداد</strong>", en: "<strong>TEDxBaghdad Team</strong>" },
    'footer-text': { ar: "© 2025 TEDxBaghdad. كل الحقوق محفوظة.", en: "© 2025 TEDxBaghdad. All rights reserved." },
    'footer-links-global': { ar: "الشبكة العالمية", en: "Global Network" },
    'footer-links-quick': { ar: "روابط سريعة", en: "Quick Links" },
    'footer-links-contact': { ar: "تواصل معنا", en: "Contact Us" },
    'footer-old-site': { ar: "الأرشيف والموقع القديم", en: "Archive & Old Site" },
    'footer-about': { ar: "من نحن", en: "About Us" },
    'footer-packages': { ar: "باقات الشراكة", en: "Partnership Packages" },
    'footer-map-link': { ar: "خارطة البوثات والحجز", en: "Booths Map & Booking" },
    'footer-director-name': { ar: "فريق تيدإكس بغداد", en: "TEDxBaghdad Team" },
    'gallery-heading': { ar: "صور من فعالياتنا السابقة", en: "Photos from Previous Events" },
    'gallery-subtitle': { ar: "شاهدوا لقطات من مؤتمرات ومعارض TEDxBaghdad عبر السنوات.", en: "View snapshots from TEDxBaghdad conferences and exhibitions over the years." },

    'about-page-title': { ar: "من نحن - TEDxBaghdad", en: "About Us - TEDxBaghdad" },
    'about-hero-title': { ar: "من نحن", en: "About Us" },
    'about-hero-subtitle': { ar: "قصة الأفكار التي تستحق الانتشار في قلب بغداد", en: "The Story of Ideas Worth Spreading in the Heart of Baghdad" },
    'about-story-title': { ar: "قصتنا: أكثر من مجرد مؤتمر", en: "Our Story: More Than Just a Conference" },
    'about-story-p1': { ar: "انطلق تيدإكس بغداد في عام 2011 كشعلة أمل في وقت كانت فيه المدينة بأمس الحاجة إلى منصة تحتفي بالإبداع والأفكار الملهمة. نحن لسنا مجرد حدث سنوي، بل حركة مجتمعية تهدف إلى اكتشاف العقول العراقية المبتكرة ومشاركة قصصها مع العالم. على مدار أكثر من عقد من الزمان، استضفنا مئات المتحدثين الذين غيروا المفاهيم وألهموا الآلاف.", en: "TEDxBaghdad launched in 2011 as a beacon of hope at a time when the city desperately needed a platform to celebrate creativity and inspiring ideas. We are not just an annual event, but a community movement aimed at discovering innovative Iraqi minds and sharing their stories with the world. For over a decade, we have hosted hundreds of speakers who have changed perceptions and inspired thousands." },
    'about-story-p2': { ar: "مهمتنا هي بناء جسور بين المبدعين والجمهور، وخلق بيئة تشجع على الحوار البنّاء وتدعم الأفكار التي لديها القدرة على تشكيل مستقبل أفضل للعراق.", en: "Our mission is to build bridges between creators and the audience, creating an environment that encourages constructive dialogue and supports ideas that have the potential to shape a better future for Iraq." },
    'about-image-caption': { ar: "صورة لفريق العمل أو من إحدى الفعاليات", en: "A photo of the team or from one of the events" },
    'youtube-gallery-title': { ar: "شاهد أفكارنا على يوتيوب", en: "Watch Our Ideas on YouTube" },
    'youtube-gallery-subtitle': { ar: "مجموعة من أبرز المحادثات التي قدمت على مسرح TEDxBaghdad.", en: "A collection of the most prominent talks presented on the TEDxBaghdad stage." },
};

let currentLang = 'ar';
let currentTheme = 'light';

const modalContent = {
    ar: {
        title: "طلب حجز بوث",
        subtitle: "أنت على وشك حجز البوث رقم",
        cta: "املئ الاستمارة (Google Form)",
        note: "سيتم التواصل معك من فريق المبيعات خلال 24 ساعة لتأكيد الدفع.",
        booked: "محجوز"
    },
    en: {
        title: "Booth Booking Request",
        subtitle: "You are about to book booth number",
        cta: "Fill the form (Google Form)",
        note: "Our sales team will contact you within 24 hours to confirm payment.",
        booked: "Booked"
    }
};

const bookedData = {
    'booth-18': { 
        name: 'Zain Iraq', 
        logo: 'images/zain.jpeg', 
        details: 'شركة زين العراق للاتصالات هي الراعي البلاتيني للحدث.',
        contact_link: 'mailto:zainsales@company.com'
    },
    'booth-10': { 
        name: 'Asiacell', 
        logo: 'images/asiacell.png', 
        details: 'شركة آسياسيل هي الراعي الذهبي وتدعم مبادرات الشباب.',
        contact_link: 'https://www.asiacell.com/contact-us' 
    },
    'booth-3': { 
        name: 'Korek', 
        logo: 'images/korek.png', 
        details: 'شركة كورك تيليكوم هي الراعي الذهبي وتدعم مبادرات [الشباب/الابتكار/الرياضة].',
        contact_link: 'mailto:sponsorship@korek.com'
    }
};

function getBookingModalContentHTML(lang) {
    return `
        <div class="modal-header">
            <i class="fas fa-ticket-alt modal-icon"></i>
            <h3 id="modal-title">${modalContent[lang].title}</h3>
            <span class="close-btn" id="modal-close-btn">&times;</span>
        </div>
        <p id="modal-subtitle">${modalContent[lang].subtitle} <strong id="modal-booth-number"></strong></p>
        <div class="modal-price">السعر: <span id="modal-price-value"></span></div>
        <a href="https://forms.gle/YOUR-BOOKING-FORM-LINK" target="_blank" class="btn-modal" id="modal-cta">${modalContent[lang].cta}</a>
        <p class="modal-note" id="modal-note">${modalContent[lang].note}</p>
    `;
}


function translate(lang) {
    for (const id in elementsToTranslate) {
        const element = document.getElementById(id);
        if (element) {
            if (id.includes('list') || id.includes('features') || id.includes('contact-name')) {
                element.innerHTML = elementsToTranslate[id][lang];
            } else {
                element.textContent = elementsToTranslate[id][lang];
            }
        }
    }

    const html = document.documentElement;
    const body = document.body;
    
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    body.classList.remove('rtl-mode', 'ltr-mode');
    body.classList.add(lang === 'ar' ? 'rtl-mode' : 'ltr-mode');

    const langLabel = document.getElementById('current-lang');
    if(langLabel) langLabel.textContent = lang === 'ar' ? 'EN' : 'عربي';
    
    currentLang = lang;
    localStorage.setItem('lang', lang);

    if (document.getElementById('map')) {
        setupBookingSystem();
    }
    if (document.getElementById('gallery')) {
        initializeGallery();
    }
}

function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        if(icon) icon.className = 'fas fa-sun';
        currentTheme = 'dark';
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        if(icon) icon.className = 'fas fa-moon';
        currentTheme = 'light';
    }
    localStorage.setItem('theme', currentTheme);
}


function createModal() {
    let modal = document.getElementById('booth-modal');
    if (modal) return modal;

    modal = document.createElement('div');
    modal.id = 'booth-modal';
    modal.className = 'modal';
    
    const contentHTML = getBookingModalContentHTML(currentLang);
    modal.innerHTML = `<div class="modal-content">${contentHTML}</div>`;

    document.body.appendChild(modal);
    
    const closeBtn = modal.querySelector('.close-btn');
    if(closeBtn) {
        closeBtn.onclick = () => { modal.style.display = 'none'; };
    }
    
    window.onclick = (event) => {
        if (event.target === modal) { modal.style.display = 'none'; }
    };
    return modal;
}
function showCompanyDetailsModal(data) {
    let modal = document.getElementById('booth-modal');
    if (!modal) modal = createModal();

    const content = modal.querySelector('.modal-content');
    if (content) {
        content.innerHTML = `
            <span class="close-btn" onclick="document.getElementById('booth-modal').style.display = 'none'">&times;</span>
            <div class="company-details-view" style="text-align: center; padding: 20px;">
                <h3 style="color: var(--color-ted-red); margin-bottom: 10px;">${data.name}</h3>
                <p style="color: var(--color-text-dark); margin-bottom: 20px;">
                    ${data.details}
                </p>
                
                <a href="${data.contact_link}" target="_blank" class="btn-primary" style="font-size: 1em; padding: 10px 20px;">تواصل مع الشركة</a>
            </div>
        `;
    }
    
    modal.style.display = 'flex';
}

function setupBookingSystem() {
    const mapContainer = document.querySelector('.exhibition-map');
    if (!mapContainer) return;

    const booths = document.querySelectorAll('.booth');
    booths.forEach(booth => {
        booth.classList.remove('booked');
        const parts = booth.id.split('-');
        const boothNumber = parts[1];
        
        booth.innerHTML = boothNumber;

        if (bookedData[booth.id]) {
            const data = bookedData[booth.id];
            booth.classList.add('booked');
            
            booth.innerHTML = `
                <div class="logo-container">
                    <img src="${data.logo}" alt="${data.name}" class="company-logo">
                </div>
                <span class="booth-number-text">${boothNumber}</span>
            `;
        }
    });

    let styleTag = document.getElementById('booked-style');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'booked-style';
        document.head.appendChild(styleTag);
    }
    styleTag.innerHTML = `
        .rtl-mode .booked::after { content: "${modalContent.ar.booked}"; }
        .ltr-mode .booked::after { content: "${modalContent.en.booked}"; }
    `;

    mapContainer.onclick = null; 

    mapContainer.onclick = function(event) {
        let booth = event.target.closest('.booth');
        if (!booth) return;

        if (booth.classList.contains('booked')) {
            const data = bookedData[booth.id];
            showCompanyDetailsModal(data);
        } 
        else {
            let modal = document.getElementById('booth-modal');
            if (!modal) modal = createModal();

            modal.querySelector('.modal-content').innerHTML = getBookingModalContentHTML(currentLang);

            const boothNumber = booth.id.split('-')[1];
            const boothPrice = booth.dataset.price;
            
            const numEl = document.getElementById('modal-booth-number');
            if (numEl) numEl.textContent = boothNumber;
            
            const priceEl = document.getElementById('modal-price-value');
            if (priceEl) priceEl.textContent = `$${boothPrice}`;

            modal.style.display = 'flex';
        }
    };
}


const imagePaths = [
    'images/gallery1.jpg',
    'images/gallery2.jpg',
    'images/gallery3.jpg',
    'images/gallery4.jpg',
    'images/gallery5.jpg'
];

let currentIndex = 0; 
const totalImages = imagePaths.length;

function updateCarousel(newIndex) {
    const carouselInner = document.getElementById('carousel-inner');
    const items = carouselInner ? carouselInner.querySelectorAll('.carousel-item') : [];
    
    if (!items.length) return; 

    let itemWidthPercentage = 60; 
    if (window.innerWidth <= 768) {
        itemWidthPercentage = 85; 
    }
    
    currentIndex = (newIndex + totalImages) % totalImages;
    
    const centerOffset = (100 - itemWidthPercentage) / 2;
    const transformValue = -(currentIndex * itemWidthPercentage) + centerOffset;

    carouselInner.style.transform = `translateX(${transformValue}%)`;
    
    items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === currentIndex) {
            item.classList.add('active');
        }
    });
}

function handleCarouselNavigation(direction) {
    let newIndex = currentIndex;
    if (direction === 'next') {
        newIndex = currentIndex + 1;
    } else if (direction === 'prev') {
        newIndex = currentIndex - 1;
    }
    updateCarousel(newIndex);
}

function initializeGallery() {
    const carouselInner = document.getElementById('carousel-inner');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (!carouselInner) return;

    carouselInner.innerHTML = '';
    imagePaths.forEach((path, index) => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `<img src="${path}" alt="صورة رقم ${index + 1}">`;
        item.onclick = () => updateCarousel(index); 
        carouselInner.appendChild(item);
    });

    if (prevBtn) prevBtn.onclick = () => handleCarouselNavigation('prev');
    if (nextBtn) nextBtn.onclick = () => handleCarouselNavigation('next');
    
    updateCarousel(0); 
}


document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'ar';
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (savedTheme === 'dark') {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        const themeIcon = document.getElementById('theme-icon');
        if(themeIcon) themeIcon.className = 'fas fa-sun';
        currentTheme = 'dark';
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        const themeIcon = document.getElementById('theme-icon');
        if(themeIcon) themeIcon.className = 'fas fa-moon';
        currentTheme = 'light';
    }

    translate(savedLang);

    const langBtn = document.getElementById('lang-toggle');
    if(langBtn) {
        langBtn.addEventListener('click', () => {
            translate(currentLang === 'ar' ? 'en' : 'ar');
        });
    }

    const themeBtn = document.getElementById('theme-toggle');
    if(themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }
});
