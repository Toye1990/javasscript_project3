 const daytime = document.querySelector('#day')
 const hourtime = document.querySelector('#hours')
 const minutetime = document.querySelector('#minutes')
 const secondtime = document.querySelector('#seconds')

 //initial time to zero

 function timeInterval(){
    daycheck = 0
    hourcheck = 0
    minutecheck = 0
    secondcheck = 0


    const dateMark = new Date()
    const daymark = dateMark.getDay()
    const hourmark = dateMark.getHours()
    const minutemark = dateMark.getMinutes()
    const secondmark = dateMark.getSeconds()
    const milimark = Math.floor(dateMark.getMilliseconds()/100)

    if (secondmark < 10) {
        secondcheck = `0${secondmark}`
    }else{
        secondcheck = secondmark
    }

    if (minutemark < 10) {
        minutecheck = `0${minutemark}`
    } else {
        minutecheck = minutemark
    }

    if (hourmark < 10) {
        hourcheck = `0${hourmark}`
    } else {
        hourcheck = hourmark
    }

    if (daymark < 10) {
        daycheck = `0${daymark}`
    }else{
        daycheck = daymark
    }

    secondsCurrentTime = `${secondcheck}`
    minutesCurrentTime = `${minutecheck}`
    hoursCurrentTime = `${hourcheck}`
    dayCurrentTime = `${daycheck}`

    secondtime.textContent = secondsCurrentTime
    minutetime.textContent = minutesCurrentTime
    hourtime.textContent = hoursCurrentTime
    daytime.textContent = dayCurrentTime
    
 }

 setInterval(() => {
    timeInterval();
 }, 10);