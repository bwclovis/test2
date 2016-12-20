(function () {

  var clock = document.getElementById('countdown-clock'),
      messageSpan = clock.querySelector('.endgame span'),
      $expired = 'time-container _expired',
      $expiring = 'time-container _expiring';

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor(t / 1000 % 60);
    var minutes = Math.floor(t / 1000 / 60 % 60);
    var hours = Math.floor(t / (1000 * 60 * 60) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  // CHECK TO SEE IF COMPONENT EXISTS 
  if (clock.dataset.component === 'clock') {
    var initializeClock = function initializeClock(id, endtime) {

      var daysSpan = clock.querySelector('.days'),
          hoursSpan = clock.querySelector('.hours'),
          minutesSpan = clock.querySelector('.minutes'),
          secondsSpan = clock.querySelector('.seconds'),
          screenTime = clock.querySelector('.screenTime'),
          leadSpan = clock.querySelector('.lead-text');

      function updateClock() {
        var t = getTimeRemaining(endtime),
            d_expired = false,
            h_expired = false,
            m_expired = false,
            startText = leadSpan.innerHTML,
            endText = messageSpan.innerHTML;
        daysSpan.innerHTML = t.days; //IF SHOWING ONLY DAYS, ADD +1
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        screenTime.innerHTML = startText + t.days + ' days ' + t.hours + ' hours ' + t.minutes + ' minutes ' + t.seconds + ' seconds ' + endText;

        if (t.total <= 0) {
          var endText = 'Time has run out'; //IF DYNAMIC END SWICHING OF MESSAGE USED CHANGE MESSAGE HERE      
          clearInterval(timeinterval);

          if ($message === true) {
            messageSpan.innerHTML = endText;
            leadSpan.className = '_hidden';
          }
        }

        //SETS STYLES FOR EXPIRING - EXPIRED
        if (daysSpan.innerHTML <= '1' && daysSpan.innerHTML !== '0') {
          daysSpan.parentElement.className = $expiring;
        } else if (daysSpan.innerHTML === '0') {
          daysSpan.parentElement.className = $expired;
          d_expired = true;
        }

        if (d_expired) {
          if (parseInt(hoursSpan.innerHTML) <= 3 && parseInt(hoursSpan.innerHTML) !== 0) {
            hoursSpan.parentElement.className = $expiring;
          } else if (parseInt(hoursSpan.innerHTML) === 0) {
            hoursSpan.parentElement.className = $expired;
            h_expired = true;
          }
        }

        if (h_expired) {
          if (parseInt(minutesSpan.innerHTML) <= 15 && parseInt(minutesSpan.innerHTML) !== 0) {
            minutesSpan.parentElement.className = $expiring;
          } else if (parseInt(minutesSpan.innerHTML) === 0) {
            minutesSpan.parentElement.className = $expired;
            m_expired = true;
          }
        }

        if (m_expired) {
          if (parseInt(secondsSpan.innerHTML) <= 16 && parseInt(secondsSpan.innerHTML) !== 0) {
            secondsSpan.parentElement.className = $expiring;
          } else if (parseInt(secondsSpan.innerHTML) === 0) {
            secondsSpan.parentElement.className = $expired;
          }
        }
      }

      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    };

    //SET TIME FOR CLOCK TO EXPIRE
    var timeExpire = new Date(Date.parse(new Date()) + 1 * 10 * 10 * 10 * 60),
        $message = true;

    initializeClock('countdown-clock', timeExpire);
  }
})();

