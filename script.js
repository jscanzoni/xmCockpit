function switchPilot(persona){
    const pilots = {
        SRE: {
            name: 'Bryce',
            role: 'Site Reliability Engineer',
            image: './images/1.png'
        },
        MIM: {
            name: 'Heather',
            role: 'Major Incident Manager',
            image: './images/2.png'
        },
        ENG: {
            name: 'Carl',
            role: 'Engineer',
            image: './images/3.png'
        },
        DEV: {
            name: 'Lana',
            role: 'Developer',
            image: './images/4.png'
        },
        EXC: {
            name: 'Sanjay',
            role: 'Executive',
            image: './images/5.png'
        },
        USR: {
            name: 'Shawn',
            role: 'User',
            image: './images/6.png'
        },

    }
    
    document.getElementById('pilotImage').style.backgroundImage = "url("+pilots[persona].image+")";
    document.getElementById('pilotName').innerText = pilots[persona].name;
    document.getElementById('pilotRole').innerText = pilots[persona].role;
}