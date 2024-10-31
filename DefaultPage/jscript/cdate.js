  function getCurrentDateAndDay() {
    var today = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var day = days[today.getDay()];
    var date = today.getDate();
    var month = today.getMonth() + 1; // JavaScript months are 0-indexed
    var year = today.getFullYear();

    // Formatting the date
    if (date < 10) {
      date = '0' + date; // Add leading zero if date is single digit
    }
    if (month < 10) {
      month = '0' + month; // Add leading zero if month is single digit
    }

    var formattedDate = day + ', ' + date + '/' + month + '/' + year;
    return formattedDate;
  }

  // Function to update the HTML content with the current date and day
  function updateDate() {
    document.getElementById('date').innerHTML = getCurrentDateAndDay();
  }

  // Update the date when the page loads
  window.onload = function() {
    updateDate();
  };