// ==========================================
// Phase 3: JavaScript Initialization & Data
// ==========================================

// Helper function to convert Hex to RGBA for subtle background tints
function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// 3.0 Location Detail Content
const locationData = {
  cennettepe: {
    title: "CENNETTEPE",
    subtitle: "ERYTHRAI ANTİK KENTİ",
    text: `İsmini konumunun büyüleyici güzelliğinden alan Cennettepe İ.Ö. 3. yüzyıldan itibaren iskan gören, duvarları freskolar (duvar resimleri), tabanları ise mozaiklerle süslü Hellenistik ve Roma Dönemi’ne ait villaların bulunduğu, kentin en güzel deniz manzarasına sahip yeridir. Zengin Erythrai vatandaşları, fakir ve orta sınıf halktan çok farklı bir şekilde bu lüks konutlarında refah içinde yaşamışlardır.<br><br>Söz konusu villalar, Ephesos’un kent merkezinde, Bülbüldağ’ın dik kuzey yamacında üç terasa yayılan, Tiberius (25-50) döneminden 3. yüzyıla kadar yaklaşık 200-250 yıl boyunca kullanılan, ünlü ve zengin Ephesos vatandaşlarının oturdukları, Yamaç Ev 2 olarak adlandırılan lüks konutlara benzemektedir.`,
    period: "İ.Ö. 3. yy - 3. yy",
    highlight: "Lüks villalar, mozaikler",
    location: "Kentin Zirvesi",
    image: "cennet_tepe.jpg",
    route: "1. Durak",
    mapLink: "map.jpg",
    mapCoords: { x: 26, y: 76 },
    gmapsLink: "https://maps.google.com/"
  },
  heroon: {
    title: "HEROON ANIT MEZARI",
    subtitle: "ERYTHRAI ANTİK KENTİ",
    text: `Antik Çağ’da mezarlık alanlarına Eski Yunanca “ölüler kenti” anlamına gelen “nekropolis” adı verilmekteydi. Nekropolisler İ.Ö. 7. yüzyıldan itibaren iskan alanlarının dışına çıkarılmıştır.<br><br>Erythrai antik kentinde iki farklı alanda nekropolis tespit edilmesine karşın, 1977 yılında agoranın kuzeyindeki bir sokak üzerinde tapınak şeklinde bir Heroon (kahramanlar ya da kentin önde gelenleri için yapılan anıt mezar) keşfedilmiştir. Kimin için inşa edildiği bilinmemekle birlikte, 1. yüzyılda inşa edilen Heroon’un efsanevi bir kahramanın ya da kentte önemli hizmetlerde bulunmuş önemli bir kişinin mezarı olduğu düşünülmektedir.`,
    period: "1. yy",
    highlight: "Kahraman anıt mezarı",
    location: "Agora'nın Kuzeyi",
    image: "heroon.jpg",
    route: "2. Durak",
    mapLink: "map.jpg",
    mapCoords: { x: 61, y: 13 },
    gmapsLink: "https://maps.google.com/"
  },
  tiyatro: {
    title: "ANTİK TİYATRO",
    subtitle: "ERYTHRAI ANTİK KENTİ",
    text: `Erythrai’ın en görkemli ve en çok turist çeken yapısı, Akropolis’in kuzey yamacındaki 7-10 bin kişi kapasiteli tiyatrodur. 1963’te kazılmaya başlanan, 1978’de ise restore edilen Erythrai Tiyatrosu doğal eğimin oyulması ve sıra yerlerinin kayaya oyulmasıyla inşa edilmiştir. Batı Anadolu’nun en erken tarihli tiyatrolarından biri olarak Hellenistik Dönem’e (İ.Ö. 4. yy.) tarihlenen tiyatro Roma Dönemi’nde bazı tadilat ve eklemelerle hizmet vermeyi sürdürmüştür. Tiyatronun en alttaki koltukları arenaya yer açmak için kaldırılmış; Hadrianus’un ziyareti (124) sırasında veya daha sonrasında orkestra arenaya dönüştürülmüştür.<br><br>Çoğunlukla bereket, bolluk, şarap ve asma tanrısı olarak bilinen Dionysos aynı zamanda bir tiyatro tanrısıdır. Tüm Yunan tiyatroları Dionysos onuruna inşa edilmiş ve bu yapılara Yunanca “tou Dionusou” yani “Dionysos’un (yeri)” denmiştir. Dionysos onuruna çeşitli oyun türleri de yarışma şeklinde sunulmuştur.<br><br>Erythrai Tiyatrosu’nun orkestra bölümünde Dionysos’la ilişkili etrafı girlandlar ve boğa başlarıyla süslenen, yazıtlı, yuvarlak profilli mermer bir sunak yer almaktadır. Yunanca “thymele” olarak adlandırılan bu sunak, tiyatro gösterilerinden önce festivalin bir parçası olan kurbanlar ve libasyonlar için kullanılmıştır.`,
    period: "İ.Ö. 4. yy",
    highlight: "Dionysos Sunağı, 10.000 Kişi",
    location: "Akropolis Kuzey Yamacı",
    image: "theater_past.jpg",
    route: "3. Durak",
    mapLink: "map.jpg",
    mapCoords: { x: 79, y: 24 },
    gmapsLink: "https://maps.google.com/"
  },
  hagiamatrone: {
    title: "HAGİA MATRONE",
    subtitle: "ERYTHRAI ANTİK KENTİ",
    text: `Ildır’a 1821 yılından itibaren çiftliklerde çalışmak için ilk olarak Sakız ve Girit’ten, daha sonra ise Çeşme ve Alaçatı’dan Rumlar gelmişlerdir. Hristiyan dinine mensup olan Rumlar 1821’den 1923’teki Yunanistan ve Türkiye arasında imzalanan zorunlu Nüfus Mübadelesi’nin öncesine kadar Ildır’da yaklaşık olarak 100 yıl boyunca refah içinde bir yaşam sürmüşlerdir. 19. yy.’daki adı “Lithri” olan yerleşimde ticaretle uğraşan varlıklı insanların yanı başlarında İzmir, karşılarında Sakız gibi büyük şehirler olduğu halde, en basit ihtiyaçlarını Avrupa’dan temin ettikleri, devrin modasını günü gününe takip edecek kadar zengin oldukları Ildırlı yaşlılar tarafından aktarılmıştır.<br><br>Lithri yoğun deniz trafiğine sahip limanı, inşaat malzemelerinin üretildiği atölyeleri, su, zeytinyağı ve yel değirmenleri, köy içine dağılmış dükkanları ve iki okulun yanı sıra, birçok kilise ve şapelin bulunduğu bir yerdi.<br><br>Lythrili Ortodoks Rumlar 19. yüzyılda (Geç Osmanlı Dönemi’nde) Erythrai tiyatrosu ile çevredeki Bizans malzemelerini kullanarak Meryem Ana’ya ithaf ettikleri Hagia Matrone Kilisesi’ni inşa etmişlerdir. Günümüzde önemli ölçüde tahrip olan, Rumların Hiopolitis adını verdikleri bu kilisede 20 Ekim tarihinde bölge için büyük önem taşıyan bir bayram yapılmaktaydı. Nüfus Mübadelesi ile Lythri’den göç etmek zorunda kalan Rumlar yanlarına Azize Matrone Kilisesi’ne ait birkaç eşyayı da alarak Yunanistan’daki “Yeni Eritrea” adlı yere yerleşmişler; 1991 yılında inşa ettikleri kilise ile bir yola Azize Matrone’nin ismini vermişlerdir.`,
    period: "19. yy (Geç Osmanlı)",
    highlight: "Meryem Ana İthafı",
    location: "Lithri Yerleşimi",
    image: "meryem_ana.jpg",
    route: "4. Durak",
    mapLink: "map.jpg",
    mapCoords: { x: 89, y: 57 },
    gmapsLink: "https://maps.google.com/"
  },
  athena: {
    title: "ATHENA TAPINAĞI",
    subtitle: "ERYTHRAI ANTİK KENTİ",
    text: `Erythrai, başta Athena ve Herakles olmak üzere, çok sayıda tanrının tapım gördüğü, birçok tapınağa sahip önemli bir kentti.<br><br>İonların savaşçı özelliğiyle tanınan tanrıçası Athena, Erythrai’da ‘polis’ (şehir) kelimesinden türetilmiş olan ‘Polias’ (şehir devletinin koruyucusu) epitheti (sıfat) ile kentin ana tanrısı olarak kabul edilmişti.<br><br>Erythrai’da geriye neredeyse hiçbir izi kalmayan Athena Polias Tapınağı bir zamanlar poligonal (çok kenarlı) taşlarla örülmüş duvarların oluşturduğu bir teras üzerinde yükselmekteydi. İ.Ö. 7. yüzyıla ait olan bu tapınak, İzmir/Bayraklı’daki Athena Tapınağı ile birlikte, Yunanistan dahil olmak üzere bütün Yunan dünyasının Athena’ya sunulmuş tapınakların en eskisi olma özelliğine sahiptir. 2. yüzyılda yaşamış olan antik yazar ve gezgin Pausanias, Athena Polias Tapınağı ile içinde tanrıçanın ağaçtan yapılmış devasa, tahtta oturmuş, bir elinde iğ, başında ise sema ile tasvir edilen kült heykelinden bahsetmiştir.`,
    period: "İ.Ö. 7. yy",
    highlight: "En Eski Athena Tapınaklarından",
    location: "Poligonal Duvarlı Teras",
    image: "athena.png",
    route: "5. Durak",
    mapLink: "map.jpg",
    mapCoords: { x: 89, y: 73 },
    gmapsLink: "https://maps.google.com/"
  },
  kahine: {
    title: "KAHİNE HEROPHİLE",
    subtitle: "ERYTHRAI ANTİK KENTİ",
    text: `Antik Çağ’da bilicilik yetisine sahip kadınlara “kahine” anlamına gelen “Sibyl”, “Sibylla” ya da “Sbylle” adı verilmekteydi. Romalı bir bilgin on kahine tespit etmiştir. Bununla birlikte, Sibyllalarının en ünlüsü Erythrailı Herophile’ydi. Erythrailılar bu kahinenin Erythrai toprakları içerisinde bulunan Korykos Dağı’ndaki bir mağarada doğduğunu, bütün dünyayı gezdiğini ve 900 yıl yaşadığını iddia etmişlerdir.<br><br>Erythrailı kahine, sikkeler üzerindeki tasvirlerinden de bildiğimiz üzere, mağarasında bir kaya üzerinde oturarak kehanette bulunmaktaydı. 1891 yılında Akropolis’in doğusunda yarım daire planlı bir mağara, mağara civarında ise Roma Dönemi’ne ait dört yazıt bulunmasına karşın, günümüzde bu mağaranın yeri bilinmemektedir.`,
    period: "Antik Çağ",
    highlight: "900 Yıllık Kehanet Efsanesi",
    location: "Korykos Dağı (Mağara)",
    image: "kahin.png",
    route: "6. Durak",
    mapLink: "map.jpg",
    mapCoords: { x: 90, y: 80 },
    gmapsLink: "https://maps.google.com/"
  }
};

// 3.1. Mock Section Data (Optimized with premium custom inline SVGs and clean titles)
const sectionsData = [
    {
        id: 1,
        dataKey: 'cennettepe',
        title: "Cennettepe",
        icon: `<svg class="mystic-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>`,
        subtitle: "Erythrai'nin eşsiz manzarası",
        content: "Cennet Tepe, Ildırı Körfezi'nin engin maviliğine hakim, rüzgar tanrılarının fısıltılarını taşıyan eşsiz bir yükseltidir. Antik Erythrai kentinin bu ilk signpost noktasında, Ege denizinin tuzlu kokusu ile çam ağaçlarının kokusu birbirine karışır. Arkeolojik bulgular, bu tepenin tarih boyunca stratejik bir gözetleme noktası ve ritüel alanı olarak kullanıldığını göstermektedir. Adımlarınızı bu kutsal toprağa basarken, binlerce yıl öncesinin denizcilerinin kente dönüş heyecanını hissedebilirsiniz.",
        themeColor: "#4F6D7A", // Ethereal Slate Blue
        imageUrl: "cennet_tepe.jpg"
    },
    {
        id: 2,
        dataKey: 'heroon',
        title: "Heroon Anıt Mezarı",
        icon: `<svg class="mystic-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16"/><path d="M10 14h4"/><path d="M12 2 3 9h18L12 2z"/><path d="M7 22v-8"/><path d="M17 22v-8"/></svg>`,
        subtitle: "Kahramanların sonsuz istirahatgahı",
        content: "Kentin kalbinde yükselen Heroon Anıt Mezarı, adı tarihin sisli sayfalarında kaybolmuş ulu bir kahramanın anısını yaşatır. Helenistik döneme tarihlenen bu görkemli anıt mezar, ince taş işçiliği ve anıtsal sütun mimarisiyle dikkat çeker. Erythrai halkının saygıyla andığı bu asil figürün mezarı, sadece bir kabir değil; kentin koruyucu ruhuna adanmış kutsal bir anıt niteliğindedir. Sessizce yaklaşıp taşların üzerindeki izleri incelediğinizde antik bir yasın ve minnettarlığın izlerini görebilirsiniz.",
        themeColor: "#9B822A", // Ancient Bronze Gold
        imageUrl: "heroon.jpg"
    },
    {
        id: 3,
        dataKey: 'tiyatro',
        title: "Antik Tiyatro",
        icon: `<svg class="mystic-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 0-10 10v4h2v-4a8 8 0 0 1 16 0v4h2v-4a10 10 0 0 0-10-10z"/><path d="M12 6a6 6 0 0 0-6 6v4h12v-4a6 6 0 0 0-6-6z"/><path d="M12 10a2 2 0 0 0-2 2v4h4v-4a2 2 0 0 0-2-2z"/></svg>`,
        subtitle: "Antik çağın yankıları",
        content: "Erythrai Antik Tiyatrosu, doğal bir yamaç oyularak inşa edilmiş mimari bir deha ürünüdür. Bu sahnenin seyircileri sadece tragedyaları izlemekle kalmaz, aynı zamanda Ildırı Körfezi'nin batan güneşinin oluşturduğu eşsiz doğa tablosuna da şahitlik ederdi. Akustiği mükemmel olan bu taş basamaklarda oturduğunuzda, rüzgarın taşıdığı sessizlikte Euripides'in dizelerinin veya antik izleyicilerin coşkulu alkışlarının yankısını hala duyabilirsiniz.",
        themeColor: "#768A75", // Silver-Olive Green
        imageUrl: "theater_past.jpg"
    },
    {
        id: 4,
        dataKey: 'hagiamatrone',
        title: "Meryem Ana Kilisesi",
        icon: `<svg class="mystic-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"/><path d="M2 20h20"/><path d="M14 12v.01"/></svg>`,
        subtitle: "Tarihin ruhani tanığı",
        content: "Hagia Matrone (Meryem Ana) Kilisesi, antik kentin Hristiyanlık dönemine ait en önemli yapılarından biridir. Bizans dönemi mimari özelliklerini taşıyan bu kilise, hem dini bir merkez hem de toplumsal bir buluşma noktası olarak hizmet vermiştir. Duvarlarındaki soluk freskler ve taş işçiliği, dönemin ruhani havasını günümüze taşır.",
        themeColor: "#5b7b6a", // Muted Green
        imageUrl: "meryem_ana.jpg"
    },
    {
        id: 5,
        dataKey: 'athena',
        title: "Athena Tapınağı",
        icon: `<svg class="mystic-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 22v-4"/><path d="M21 22v-4"/><path d="M6 18V9"/><path d="M18 18V9"/><path d="M9 18V9"/><path d="M15 18V9"/><path d="M2 9l10-7 10 7H2z"/></svg>`,
        subtitle: "Kentin koruyucu tanrıçası",
        content: "Akropolün zirvesinde yer alan Athena Polias Tapınağı, kentin koruyucu tanrıçasına adanmıştır. M.Ö. 8. yüzyıla kadar uzanan tarihiyle İyonya'nın en eski tapınaklarından biridir. Buradan tüm Ildırı Körfezi'ni ve Sakız Adası'nı izleyebilir, antik dönemde bu ihtişamlı yapının denizciler için nasıl bir umut ışığı olduğunu hissedebilirsiniz.",
        themeColor: "#b36b41", // Terracotta Orange
        imageUrl: "athena.png"
    },
    {
        id: 6,
        dataKey: 'kahine',
        title: "Kahine (Sibyl) Herophile",
        icon: `<svg class="mystic-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/></svg>`,
        subtitle: "Geleceğin fısıltıları",
        content: "Mitolojiye göre bilge Sibyl, geleceğin sırlarını rüzgarda uçuşan yapraklara yazarak insanlara rehberlik ederdi. Antik dünyanın en ünlü on kahininden biri olan Erythraean Sibyl'in kehanet merkezi, sizi geçmişin gizemli kehanetleriyle yüzleşmeye davet ediyor.",
        themeColor: "#6A5B7B", // Mystic Purple/Indigo
        imageUrl: "kahin.png"
    }
];

// 3.2. Mock Prophecy Data (Refactored to Turkish)
const prophecies = [
    "Rüzgarın taşıdığı yapraklar, aradığın cevabın çok yakın olduğunu söylüyor.",
    "Kaderin yolları karmaşıktır, ama kalbin seni Erythrai'nin zirvesine ulaştıracak.",
    "Antik taşların fısıltısını dinle; sabır, en büyük hazinenin anahtarıdır.",
    "Kızıl toprak sana güç veriyor; içindeki o özgür sesi serbest bırakmanın vakti geldi.",
    "Diktiğin zeytin ağacı gibi, köklerin derinleşecek ve sabrının meyvelerini eninde sonunda toplayacaksın.",
    "Geçmişin kalıntıları arasında dolaşırken, aslında kendi geleceğinin temellerini atıyorsun.",
    "Denizden esen imbat, yıllardır beklediğin huzuru fırtınaların ardından getirecek.",
    "Athena'nın bilgeliği yolunu aydınlatıyor; karanlıkta bile gerçeği göreceksin.",
    "Erythrai'nin antik sütunları gibi sağlam durursan, yıkılmaz sandığın engeller kendiliğinden aşılır.",
    "Yolculuğun daha yeni başlıyor; her bitiş, muhteşem bir başlangıcın habercisidir.",
    "Gün batımının kızıllığında saklı olan sır, yarınki güneşin sana umut vereceğidir.",
    "Sibyl'in nefesi kulaklarında çınlıyor: Cesaret, kadere meydan okuyanların en güçlü silahıdır.",
    "Körfezin sakin suları, içindeki fırtınaları dindirecek ve sana asıl yönünü gösterecek.",
    "Bilinmezliğe atılan her adım, Ionia'nın gizemlerini ruhunda hissetmen için bir fırsattır.",
    "İçindeki antik gücü uyandır; zamanın ötesinde yankılanacak bir efsanenin başrolündesin."
];

/**
 * 3.3. Parses the current URL to extract the value of 'step' query parameter
 * @param {string} param - The parameter to seek
 * @returns {string|null} The value of the parameter or null if not found
 */
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

/**
 * 3.4. Handles local storage and parses state to determine active step
 * @returns {number} The current validated active step
 */
function determineActiveStep() {
    return 6; // Force all 6 sections unlocked
}

// Determine active step on page load
const currentActiveStep = determineActiveStep();
console.log("Erythrai State Initialized. Active Step: " + currentActiveStep);


// ==========================================
// Phase 4: Dynamic DOM Rendering
// ==========================================

/**
 * 4.2. Renders all section cards dynamically based on activeStep
 * @param {number} activeStep - The currently unlocked step
 */
function renderSections(activeStep) {
    // 4.1. Select sections container DOM element
    const container = document.getElementById('sections-container');
    if (!container) return;

    // Clear any static placeholders
    container.innerHTML = '';

    // 4.2. Iterate over sectionsData array
    sectionsData.forEach(section => {
        // 4.3. Generate section card element
        const card = document.createElement('section');
        card.id = `section-${section.id}`;
        card.classList.add('section-card');

        // Apply background directly
        card.innerHTML = `<div class="section-card-bg" style="background-image: url('${section.imageUrl}');"></div>`;

        // 4.4. Apply conditional rendering logic
        if (section.id <= activeStep) {
            // Unlocked State
            card.classList.add('unlocked');

            let innerHTML = card.innerHTML;

            // Gradient Overlay
            innerHTML += `<div class="card-gradient-overlay"></div>`;

            // Card Info Group
            innerHTML += `
                <div class="card-info-group">
                    <h2>${section.title}</h2>
                    <p>${section.subtitle}</p>
                </div>
            `;

            // Card Action Button
            innerHTML += `<button class="card-action-btn">&gt;</button>`;

            // If section 6 is unlocked, we append the video and prophecy logic to a hidden modal/container 
            // since the main card UI is now fully image-based. We will trigger it dynamically via the action btn.
            if (section.id === 6) {
                // In future versions, clicking this card will open a detail modal with the video.
                innerHTML += `
                    <div id="hidden-prophecy-container" style="display: none;">
                        <video id="sibylVideo" src="sibyl_prophecy.mp4" controls></video>
                        <button id="prophecy-btn" class="mystic-btn" type="button">Kehanetini Al</button>
                    </div>
                `;
            }

            card.innerHTML = innerHTML;

            // Add click event for interaction to open the Location Modal
            card.addEventListener('click', () => {
                openLocationModal(section);
            });

        } else {
            // Locked State
            card.classList.add('locked');
            card.innerHTML += `<div class="card-gradient-overlay" style="background: rgba(0,0,0,0.6);"></div>`;
            card.innerHTML += `
                <div class="card-info-group">
                    <h2>${section.title}</h2>
                </div>
            `;
        }

        // 4.6. Append the card to the container
        container.appendChild(card);
    });
}


// ==========================================
// Phase 5: Interactive Elements & Prophecy Logic
// ==========================================

/**
 * 5.1. Attaches event listeners to dynamically created elements
 */
function initInteractiveElements() {
    // Select elements
    const prophecyBtn = document.getElementById('prophecy-btn');
    const sibylVideo = document.getElementById('sibylVideo');

    if (prophecyBtn) {
        // Wire up the Trigger
        prophecyBtn.addEventListener('click', () => {
            // Select a random prophecy from the Turkish prophecies array
            const randomIndex = Math.floor(Math.random() * prophecies.length);
            const selectedProphecy = prophecies[randomIndex];

            // Clean up any existing mini prophecy card to prevent duplication
            const existingCard = document.getElementById('mini-prophecy-card');
            if (existingCard) {
                existingCard.remove();
            }

            // Create a small, elegant mini prophecy card
            const miniCard = document.createElement('div');
            miniCard.id = 'mini-prophecy-card';
            miniCard.className = 'mini-prophecy-card';
            miniCard.innerHTML = `
                <span class="mini-card-title">✨ SİBYL'İN KEHANETİ</span>
                <p class="mini-card-text">${selectedProphecy}</p>
            `;

            // Insert it visually inside the card, right above the button
            prophecyBtn.parentNode.insertBefore(miniCard, prophecyBtn);

            // Simultaneously trigger the inline card video playback with sound
            if (sibylVideo) {
                sibylVideo.muted = false; // Ensure sound is enabled
                sibylVideo.currentTime = 0; // Reset video to the beginning
                sibylVideo.play()
                    .catch(err => console.log("Video playback failed or requires user interaction:", err));
            }
        });
    }


}

/**
 * 5.9. Renders the 5-step Journey Line timeline dynamically
 * @param {number} activeStep - The currently unlocked step
 */
function renderTimeline(activeStep) {
    const timeline = document.getElementById('journey-timeline');
    if (!timeline) return;

    timeline.innerHTML = '';

    // Step labels for the timeline nodes
    const stepNames = ["Cennettepe", "Heroon", "Tiyatro", "H. Matrone", "Athena", "Sibyl"];

    stepNames.forEach((name, index) => {
        const stepId = index + 1;
        const node = document.createElement('div');
        node.classList.add('timeline-node');

        if (stepId < activeStep) {
            node.classList.add('completed');
        } else if (stepId === activeStep) {
            node.classList.add('completed', 'current');
        } else {
            node.classList.add('locked');
        }

        // Use unlocked padlock SVG for all icons as requested
        let iconContent = `<svg viewBox="0 0 24 24" fill="none" stroke="#2e7559" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>`;

        // Add dot containing SVG and label content
        node.innerHTML = `
            <div class="lock-icon-box">${iconContent}</div>
            <div class="icon-label">${name}</div>
        `;

        // Ensure every tab is fully functional and clickable immediately
        node.style.cursor = 'pointer';
        node.addEventListener('click', () => {
            const card = document.getElementById(`section-${stepId}`);
            if (card) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });

        timeline.appendChild(node);
    });
}

// Render dynamic sections, timeline and bind interactive elements on DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Strictly and permanently default to Light Mode
    document.body.classList.add('light-mode');

    renderSections(currentActiveStep);
    renderTimeline(currentActiveStep);
    initInteractiveElements();
});

// ==========================================
// Phase 10: Location Modal Logic
// ==========================================

function openLocationModal(section) {
    const modal = document.getElementById('location-modal');
    const heroBg = document.getElementById('modal-hero-bg');
    const titleIcon = document.getElementById('modal-title-icon');
    const title = document.getElementById('modal-title');
    const subtitle = document.getElementById('modal-subtitle');
    const desc = document.getElementById('modal-desc');

    if (!modal) return;

    // Use detailed locationData if available
    const detail = (section.dataKey && typeof locationData !== 'undefined' && locationData[section.dataKey]) 
                   ? locationData[section.dataKey] 
                   : null;

    // Populate data
    heroBg.style.backgroundImage = detail && detail.image ? `url('${detail.image}')` : `url('${section.imageUrl}')`;
    if (titleIcon) titleIcon.innerHTML = section.icon;
    
    title.textContent = detail ? detail.title : section.title.toUpperCase();
    subtitle.textContent = detail ? detail.subtitle : "Erythrai Antik Kenti";
    desc.innerHTML = detail ? detail.text : section.content;

    // Update stats box
    const statEra = document.getElementById('modal-stat-era');
    const statHighlight = document.getElementById('modal-stat-highlight');
    const statLocation = document.getElementById('modal-stat-location');
    const statRoute = document.getElementById('modal-stat-route');
    
    if (statEra && detail && detail.period) statEra.textContent = detail.period;
    if (statHighlight && detail && detail.highlight) statHighlight.textContent = detail.highlight;
    if (statLocation && detail && detail.location) statLocation.textContent = detail.location;
    if (statRoute && detail && detail.route) statRoute.textContent = detail.route;

    // Phase 11: Map Modal Setup
    const ctaBtn = document.getElementById('modal-cta-btn');
    if (ctaBtn) {
        ctaBtn.onclick = () => {
            const mapModal = document.getElementById('map-modal');
            const mapLocationTitle = document.getElementById('map-current-title');
            const mapTitleIcon = document.getElementById('map-title-icon');
            const blinkingPin = document.getElementById('blinking-pin');
            
            if (mapModal && detail && detail.mapCoords) {
                // Update Map Header Title
                if (mapLocationTitle) {
                    mapLocationTitle.textContent = detail.title;
                }
                
                if (mapTitleIcon) {
                    mapTitleIcon.innerHTML = section.icon || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;
                    const svg = mapTitleIcon.querySelector('svg');
                    if (svg) {
                        svg.style.width = '24px';
                        svg.style.height = '24px';
                        svg.style.stroke = '#a4432a';
                    }
                }

                // Set Blinking Pin coordinates
                if (blinkingPin) {
                    blinkingPin.style.left = detail.mapCoords.x + '%';
                    blinkingPin.style.top = detail.mapCoords.y + '%';
                }
                
                // Congratulatory message logic
                const congratsMsg = document.getElementById('congrats-message');
                if (congratsMsg) {
                    if (section.dataKey === 'kahine') {
                        congratsMsg.style.display = 'block';
                    } else {
                        congratsMsg.style.display = 'none';
                    }
                }

                // Switch Modals
                modal.classList.remove('active');
                mapModal.classList.remove('hidden');
            }
        };
    }

    // Show modal by adding active class
    modal.classList.add('active');
    
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';

    // Phase 14: Prophecy Trigger Logic
    const prophecyTriggerBtn = document.getElementById('prophecy-trigger-btn');
    if (prophecyTriggerBtn) {
        if (section.id === 6 || section.dataKey === 'kahine') {
            prophecyTriggerBtn.classList.remove('hidden');
        } else {
            prophecyTriggerBtn.classList.add('hidden');
        }
    }
}

function closeLocationModal() {
    const modal = document.getElementById('location-modal');
    if (modal) {
        modal.classList.remove('active');
        // Restore background scrolling
        document.body.style.overflow = '';
    }
}

// Bind close button event
document.addEventListener('DOMContentLoaded', () => {
    const backBtn = document.getElementById('modal-back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', closeLocationModal);
    }
    
    // Map modal close button
    const mapBackBtn = document.getElementById('map-large-back-btn');
    if (mapBackBtn) {
        mapBackBtn.addEventListener('click', () => {
            const mapModal = document.getElementById('map-modal');
            const locationModal = document.getElementById('location-modal');
            
            // Hide both modals to return to the main feed directly in one click
            if (mapModal) mapModal.classList.add('hidden');
            if (locationModal) locationModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Phase 12: Manual Map Pan & Zoom with Strict Bounds
    const mapWrapper = document.querySelector('.map-relative-wrapper');
    if (mapWrapper) {
        let scale = 1;
        let panning = false;
        let pointX = 0;
        let pointY = 0;
        let startX = 0;
        let startY = 0;

        const clamp = () => {
            const containerWidth = mapWrapper.parentElement.clientWidth;
            const containerHeight = mapWrapper.parentElement.clientHeight;
            
            // Maximum allowed pan is half the scaled width/height difference
            const maxPanX = (scale - 1) * containerWidth / 2;
            const maxPanY = (scale - 1) * containerHeight / 2;
            
            if (scale === 1) {
                pointX = 0;
                pointY = 0;
            } else {
                pointX = Math.max(-maxPanX, Math.min(maxPanX, pointX));
                pointY = Math.max(-maxPanY, Math.min(maxPanY, pointY));
            }
            mapWrapper.style.transform = `scale(${scale}) translate(${pointX / scale}px, ${pointY / scale}px)`;
        };

        // Pointer Events (Mouse + Single Touch Drag)
        mapWrapper.onpointerdown = function (e) {
            e.preventDefault();
            panning = true;
            startX = e.clientX - pointX;
            startY = e.clientY - pointY;
            mapWrapper.setPointerCapture(e.pointerId);
        };

        mapWrapper.onpointermove = function (e) {
            e.preventDefault();
            if (!panning) return;
            pointX = (e.clientX - startX);
            pointY = (e.clientY - startY);
            clamp();
        };

        mapWrapper.onpointerup = function (e) {
            panning = false;
            mapWrapper.releasePointerCapture(e.pointerId);
        };

        // Touch Events for Pinch-to-Zoom
        let initialDistance = null;
        let initialScale = scale;

        mapWrapper.addEventListener('touchstart', (e) => {
            if (e.touches.length === 2) {
                initialDistance = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
                initialScale = scale;
            }
        });

        mapWrapper.addEventListener('touchmove', (e) => {
            if (e.touches.length === 2 && initialDistance) {
                e.preventDefault();
                const currentDistance = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
                const newScale = initialScale * (currentDistance / initialDistance);
                scale = Math.min(Math.max(1, newScale), 4);
                clamp();
            }
        });

        let lastTap = 0;
        mapWrapper.addEventListener('touchend', (e) => {
            if (e.touches.length < 2) {
                initialDistance = null;
            }
            
            // Double tap to zoom
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTap;
            if (tapLength < 300 && tapLength > 0 && e.touches.length === 0) {
                if (scale > 1) {
                    scale = 1;
                } else {
                    scale = 2.5; // Zoom in
                }
                clamp();
                e.preventDefault();
            }
            lastTap = currentTime;
        });

        // Desktop wheel to zoom
        mapWrapper.addEventListener('wheel', (e) => {
            e.preventDefault();
            const zoomSensitivity = 0.1;
            const delta = e.deltaY > 0 ? -1 : 1;
            const newScale = scale + (delta * zoomSensitivity * scale);
            scale = Math.min(Math.max(1, newScale), 4);
            clamp();
        }, { passive: false });
    }
});

// Phase 13: Bottom Navigation Logic
document.addEventListener('DOMContentLoaded', () => {
    const navExplore = document.getElementById('nav-explore');
    const navMap = document.getElementById('nav-map');
    const standaloneMapPage = document.getElementById('standalone-map-page');

    if (navExplore && navMap && standaloneMapPage) {
        navExplore.addEventListener('click', (e) => {
            e.preventDefault();
            navExplore.classList.add('active');
            navMap.classList.remove('active');
            standaloneMapPage.classList.add('hidden');
        });

        navMap.addEventListener('click', (e) => {
            e.preventDefault();
            navMap.classList.add('active');
            navExplore.classList.remove('active');
            standaloneMapPage.classList.remove('hidden');
            
            // Clear any existing modal states
            const locationModal = document.getElementById('location-modal');
            const mapModal = document.getElementById('map-modal');
            if (locationModal) locationModal.classList.remove('active');
            if (mapModal) mapModal.classList.add('hidden');
            document.body.style.overflow = '';
        });

        const standaloneBackBtn = document.getElementById('standalone-back-btn');
        if (standaloneBackBtn) {
            standaloneBackBtn.addEventListener('click', () => {
                standaloneMapPage.classList.add('hidden');
                navMap.classList.remove('active');
                navExplore.classList.add('active');
            });
        }
    }
});

// Phase 14: Prophecy Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const prophecyTriggerBtn = document.getElementById('prophecy-trigger-btn');
    const prophecyBackBtn = document.getElementById('prophecy-back-btn');
    const prophecyScreen = document.getElementById('prophecy-screen');
    const prophecyTextDisplay = document.getElementById('prophecy-text-display');
    const locationModal = document.getElementById('location-modal');

    if (prophecyTriggerBtn) {
        prophecyTriggerBtn.addEventListener('click', () => {
            // Pick a random prophecy
            const randomIndex = Math.floor(Math.random() * prophecies.length);
            const selectedProphecy = prophecies[randomIndex];
            
            if (prophecyTextDisplay) {
                prophecyTextDisplay.textContent = `"${selectedProphecy}"`;
            }

            // Hide Location Modal and Show Prophecy Screen
            if (locationModal) locationModal.classList.remove('active');
            if (prophecyScreen) {
                prophecyScreen.classList.remove('hidden');
                // Ensure scroll position is at top
                prophecyScreen.scrollTop = 0;
            }
        });
    }

    if (prophecyBackBtn) {
        prophecyBackBtn.addEventListener('click', () => {
            // Hide Prophecy Screen and show Location Modal again
            if (prophecyScreen) prophecyScreen.classList.add('hidden');
            if (locationModal) locationModal.classList.add('active');
        });
    }
});

// ==========================================
// Phase 15: Welcome Overlay Logic
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const enterAppBtn = document.getElementById('enter-app-btn');
    const welcomeOverlay = document.getElementById('welcome-overlay');
    if (enterAppBtn && welcomeOverlay) {
        enterAppBtn.addEventListener('click', (e) => {
            e.preventDefault();
            welcomeOverlay.classList.add('hidden');
        });
    }
});
