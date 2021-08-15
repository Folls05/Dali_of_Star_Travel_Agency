function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" colorChange", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " colorChange";
}


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}



function changeImage() {

    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" colorChange", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " colorChange";
    setTimeout(changeImage, 5000);
}

function changeArea(evt, area) {
    
    $('.areaContent').hide()
    // console.log(area);
    $(`#${area}`).show();
    // $('#northAsia').show();
    
    areaName = document.getElementsByClassName("areaName");
    for (i = 0; i < areaName.length; i++) {
        areaName[i].className = areaName[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
}
function changeTitle(evt, titleName) {
    $('.searchEachBox').hide()
    $(`#${titleName}`).show();

    searchTitleName = document.getElementsByClassName("searchTitle");
    for (i = 0; i < searchTitleName.length; i++) {
        searchTitleName[i].className = searchTitleName[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
}


function switchCountry(which) {
    if(which=='inputAreaTaiwan'){
        $('#inputAreaTaiwan').show();
        $('#inputAreaForeign').hide();
        $('#switchAreaTaiwan').css({
            backgroundColor: '#0D202B',
            color: '#FFD981',
        });
        $('#switchAreaForeign').css({
            backgroundColor: 'white',
            color: '#0D202B',
        })
        
    }
    else {
        $('#inputAreaForeign').show();
        $('#inputAreaTaiwan').hide();
        $('#switchAreaForeign').css({
            backgroundColor: '#0D202B',
            color: '#FFD981',
            borderRadius: '100px',
            position: 'relative',
            right: '-8px',
            top:'0.5px'
        });
        $('#switchAreaTaiwan').css({
            backgroundColor: 'white',
            color: '#0D202B',
        })
    }
}
function switchWay(which) {
    if(which=='flightReturn'){
        $('#flightReturn').show();
        $('#flightDirect').hide();
        $('#switchReturn').css({
            backgroundColor: '#0D202B',
            color: '#FFD981',
        });
        $('#switchDirect').css({
            backgroundColor: 'white',
            color: '#0D202B',
        })
        
    }
    else {
        $('#flightDirect').show();
        $('#flightReturn').hide();
        $('#switchDirect').css({
            backgroundColor: '#0D202B',
            color: '#FFD981',
            borderRadius: '100px',
            position: 'relative',
            bottom: '-0.5px',
            left: '8px',
        });
        $('#switchReturn').css({
            backgroundColor: 'white',
            color: '#0D202B',
        })
    }
}
function switchTravel(which) {
    if(which=='travelTaiwan'){
        $('#travelTaiwan').show();
        $('#travelInter').hide();
        $('#switchTaiwan').css({
            backgroundColor: '#0D202B',
            color: '#FFD981',
        });
        $('#switchInter').css({
            backgroundColor: 'white',
            color: '#0D202B',
        })
        
    }
    else {
        $('#travelInter').show();
        $('#travelTaiwan').hide();
        $('#switchInter').css({
            backgroundColor: '#0D202B',
            color: '#FFD981',
            borderRadius: '100px',
            position: 'relative',
            bottom: '-0.5px',
            left: '8px',
        });
        $('#switchTaiwan').css({
            backgroundColor: 'white',
            color: '#0D202B',
        })
    }
}
function switchTicket(which) {
    if(which=='ticketTaiwan'){
        $('#ticketTaiwan').show();
        $('#ticketInter').hide();
        $('#switchTaiwanTicket').css({
            backgroundColor: '#0D202B',
            color: '#FFD981',
        });
        $('#switchInterTicket').css({
            backgroundColor: 'white',
            color: '#0D202B',
        })
        
    }
    else {
        $('#ticketInter').show();
        $('#ticketTaiwan').hide();
        $('#switchInterTicket').css({
            backgroundColor: '#0D202B',
            color: '#FFD981',
            borderRadius: '100px',
            position: 'relative',
            bottom: '-0.5px',
            left: '8px',
        });
        $('#switchTaiwanTicket').css({
            backgroundColor: 'white',
            color: '#0D202B',
        })
    }
}
