 const lat = 23.8103; // Latitude for Dhaka

        const lng = 90.4125; // Longitude for Dhaka

        const apiUrl = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`;

        function convertToBengaliDigits(num) {

            return num.toString().replace(/[0-9]/g, (digit) => '০১২৩৪৫৬৭৮৯'[digit]);

        }

        function formatTime(date) {

            const options = { hour: 'numeric', minute: 'numeric', hour12: true };

            return date.toLocaleTimeString([], options);

        }

        fetch(apiUrl)

            .then(response => response.json())

            .then(data => {

                if (data.status === "OK") {

                    const sunrise = new Date(data.results.sunrise);

                    const sunset = new Date(data.results.sunset);

                    const sunriseTime = formatTime(sunrise);

                    const sunsetTime = formatTime(sunset);

                    document.getElementById('suntime').innerHTML = `

                        সূর্যোদয়: ${convertToBengaliDigits(sunriseTime)} | সূর্যাস্ত: ${convertToBengaliDigits(sunsetTime)}

                    `;

                } else {

                    document.getElementById('suntime').innerText = "অবস্থান পাওয়া যায়নি।";

                }

            })

            .catch(error => {

                document.getElementById('suntime').innerText = "নেট কানেকশন চেক করুন।";

                console.error(error);

            });