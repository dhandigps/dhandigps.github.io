 const options = { 

    year: 'numeric', 

    month: 'long', 

    day: 'numeric', 

    weekday: 'long', 

    locale: 'bn-BD' 

};

const today = new Date();

const banglaDate = new Intl.DateTimeFormat('bn-BD', options).format(today);

document.getElementById('date').innerText = banglaDate + ' খ্রিস্টাব্দ ।';