function switchPilot(persona){
    const pilots = {
        SRE: {
            name: 'Bryce',
            role: 'Site Reliability Engineer',
            image: 'Character_PNGs/Brice/Brice-1.png'
        },
        MIM: {
            name: 'Heather',
            role: 'Major Incident Manager',
            image: 'Character_PNGs/Heather-UX-Ui/Heather-UX-Ui_1.png'
        },
        ENG: {
            name: 'Carl',
            role: 'Engineer',
            image: 'Character_PNGs/Carl/Carl-2.png'
        },
        DEV: {
            name: 'Lana',
            role: 'Developer',
            image: 'Character_PNGs/End-User-Woman/Woman-end-user_7.png'
        },
        EXC: {
            name: 'Sanjay',
            role: 'Executive',
            image: 'Character_PNGs/Sanjay/Sanjay-2.png'
        },
        USR: {
            name: 'Shawn',
            role: 'User',
            image: 'Character_PNGs/End-User-Man/Man-end-user_3.png'
        },

    }
    
    document.getElementById('pilotImage').style.backgroundImage = "url("+pilots[persona].image+")";
    document.getElementById('pilotName').innerText = pilots[persona].name;
    document.getElementById('pilotRole').innerText = pilots[persona].role;
}