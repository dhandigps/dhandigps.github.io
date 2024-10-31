    var fixd;
    function isGregLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }

    function gregToFixed(year, month, day) {
        var a = Math.floor((year - 1) / 4);
        var b = Math.floor((year - 1) / 100);
        var c = Math.floor((year - 1) / 400);
        var d = Math.floor((367 * month - 362) / 12);
        var e;
        if (month <= 2) e = 0;
        else if (month > 2 && isGregLeapYear(year)) e = 0;
        else e = -2;
        return 1 - 1 + 365 * (year - 1) + a - b + c + d + e + day;
    }

    function Hijri(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.toFixed = hijriToFixed;
        this.toString = hijriToString;
    }

    function hijriToFixed() {
        return this.day + Math.ceil(29.5 * (this.month - 1)) + (this.year - 1) * 354 +
            Math.floor((3 + 11 * this.year) / 30) + 227015 - 1;
    }

    function hijriToString() {
        var months = ["মুহাররম", "সফর", "রবিউল-আউয়াল", "রবিউস-সানি", "জুমাদাল উলা", "জুমাদাস সানি", "রজব", "শাবান", "রমজান", "শাওয়াল", "জিলক্বদ", "জিলহজ্জ্ব"];
        return convertToBanglaDigits(this.day) + " " + months[this.month - 1] + " " + convertToBanglaDigits(this.year);
    }

    function fixedToHijri(f) {
        var i = new Hijri(1100, 1, 1);
        i.year = Math.floor((30 * (f - 227015) + 10646) / 10631);
        var i2 = new Hijri(i.year, 1, 1);
        var m = Math.ceil((f - 29 - i2.toFixed()) / 29.5) + 1;
        i.month = Math.min(m, 12);
        i2.year = i.year;
        i2.month = i.month;
        i2.day = 1;
        i.day = f - i2.toFixed() + 1;
        return i;
    }

    var tod = new Date();
    var weekday = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"];
    var monthname = ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"];

    var y = tod.getFullYear();
    var m = tod.getMonth();
    var d = tod.getDate();
    var dow = tod.getDay();
    var cgdate = weekday[dow] // + " " + d + " " + monthname[m] + " " + y;//

    document.getElementById('gresults').innerHTML = cgdate;

    m++;
    fixd = gregToFixed(y, m, d);
    var h = new Hijri(1421, 11, 28);
    h = fixedToHijri(fixd);
    document.getElementById('hresults').innerHTML = h.toString() + " হিজরি,";

    function convertToBanglaDigits(num) {
        var banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        return num.toString().split('').map(function (digit) {
            return banglaDigits[digit];
        }).join('');
    }