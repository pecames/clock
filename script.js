//FUNCAO DAYORNIGHT ALTERA A COR DE FUNDO DO SITE
function dayOrNight(){
    var now = new Date()
    if(now.getHours() > 6 && now.getHours() < 19){
        document.body.className += 'day'
    }else{
        document.body.className += 'night'
    }
}

//MOSTRA UM RELOGIO NA TELA
function whatsOclock(){
    var dateTime = new Date()
    var hours = dateTime.getHours()
    var minutes = dateTime.getMinutes()
    var seconds = dateTime.getSeconds()
    var ampm = document.getElementById('am-pm')

    if(hours > 0 && hours < 12){
        ampm.innerHTML = 'AM'
    }else{
        ampm.innerHTML = 'PM'
    }
    
    if(hours > 12){
        hours -= 12
    }

    document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0')
    document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0')
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0')
}

setInterval(whatsOclock, 1000)

//IMPRIME UM DIA SEMANA NA TELA
function whichDay(){
    var day = new Date()
    var days = day.getDay()

    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    document.getElementById('dayOfWeek').innerHTML = daysOfWeek[days] + ', '
}

setInterval(whichDay, 1000)

//IMPRIME O MES
function whichMonth(){
    var gMonth = new Date()
    var month = gMonth.getMonth()

    var arrayMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    
    document.getElementById('month').innerHTML = arrayMonths[month]
}

setInterval(whichMonth, 1000)

//IMPRIME UM DIA DO MES EM NUMERO
function whichDayNumber(){
    var day = new Date()
    var dayNumber = day.getDate()

    document.getElementById('dayNumber').innerHTML = ' ' + dayNumber
}

setInterval(whichDayNumber, 1000)



