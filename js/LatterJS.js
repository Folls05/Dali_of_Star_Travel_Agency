

$(function () {
    $('.peopleText').on('click', function () {
        if ($('.peopleDownBox').css('display') == 'block') {
            $('.peopleDownBox').css('display', 'none');
        }
        else {
            $('.peopleDownBox').css('display', 'block')
        }

    })
})
$(function () {
    $('.planeHotelPeopleText').on('click', function () {
        if ($('.planeHotelPeopleDownBox').css('display') == 'block') {
            $('.planeHotelPeopleDownBox').css('display', 'none');
        }
        else {
            $('.planeHotelPeopleDownBox').css('display', 'block')
        }

    })


})
$(function () {
    $('.inputText').on('click', function () {
        $('.areaContent').hide();
        $('#hot').show();
        $('.areaName').removeClass('active');
        $('.areaTitle>#firsthot').addClass('active');
        if ($('#areaDownBox').css('display') == 'block') {
            $('#areaDownBox').css('display', 'none');
        }
        else {
            $('#areaDownBox').css('display', 'block')
        }

    })


})

$(function () {
    $('.inputTextForeign').on('click', function () {
        $('.areaContent').hide();
        $('#hotForeign').show();
        $('.areaName').removeClass('active');
        $('.areaTitle>#firsthotForeign').addClass('active');
        if ($('#areaDownBoxForeign').css('display') == 'block') {
            $('#areaDownBoxForeign').css('display', 'none');
        }
        else {
            $('#areaDownBoxForeign').css('display', 'block')
        }

    })
})
$(function () {
    $('.inputTextFlightFrom').on('click', function () {
        $('.areaContent').hide();
        $('#taiwanAirport').show();
        $('.areaName').removeClass('active');
        $('.areaTitle>#firstTaiwanAirport').addClass('active');
        if ($('#areaDownBoxFlightFrom').css('display') == 'block') {
            $('#areaDownBoxFlightFrom').css('display', 'none');
        }
        else {
            $('#areaDownBoxFlightFrom').css('display', 'block')
        }

    })


})

$(function () {
    $('.inputTextFlightTo').on('click', function () {
        $('.areaContent').hide();
        $('#taiwanAirport2').show();
        $('.areaName').removeClass('active');
        $('.areaTitle>#firstTaiwanAirport2').addClass('active');
        if ($('#areaDownBoxFlightTo').css('display') == 'block') {
            $('#areaDownBoxFlightTo').css('display', 'none');
        }
        else {
            $('#areaDownBoxFlightTo').css('display', 'block')
        }

    })
})

$(function () {
    $('.flightDirectTo').on('click', function () {
        $('.areaContent').hide();
        $('#taiwanAirportDirect2').show();
        $('.areaName').removeClass('active');
        $('.areaTitle>#firstTaiwanAirportDirect2').addClass('active');
        if ($('#areaDownBoxDirectTo').css('display') == 'block') {
            $('#areaDownBoxDirectTo').css('display', 'none');
        }
        else {
            $('#areaDownBoxDirectTo').css('display', 'block')
        }

    })


})
$(function () {
    $('.flightDirectFrom').on('click', function () {
        $('.areaContent').hide();
        $('#taiwanAirportDirect').show();
        $('.areaName').removeClass('active');
        $('.areaTitle>#firstTaiwanAirportDirect').addClass('active');
        if ($('#areaDownBoxDirectFrom').css('display') == 'block') {
            $('#areaDownBoxDirectFrom').css('display', 'none');
        }
        else {
            $('#areaDownBoxDirectFrom').css('display', 'block')
        }

    })


})
$(function () {
    $('.travelTaiwanFrom').on('click', function () {
        $('.areaContent').hide();
        $('#hotTravel').show();
        $('.areaName').removeClass('active');
        $('.areaTitle>#firstHotTravel').addClass('active');
        if ($('#areaDownBoxTravelTaiwanFrom').css('display') == 'block') {
            $('#areaDownBoxTravelTaiwanFrom').css('display', 'none');
        }
        else {
            $('#areaDownBoxTravelTaiwanFrom').css('display', 'block')
        }

    })


})

$(function () {
    $('.travelTaiwanTo').on('click', function () {
        $('.areaContent').hide();
        $('#hotTravelTo').show();
        $('.areaName').removeClass('active');
        $('.areaTitle>#firstHotTravelTo').addClass('active');
        if ($('#areaDownBoxTravelTaiwanTo').css('display') == 'block') {
            $('#areaDownBoxTravelTaiwanTo').css('display', 'none');
        }
        else {
            $('#areaDownBoxTravelTaiwanTo').css('display', 'block')
        }

    })

})
$(function () {
    $('.travelInterFrom').on('click', function () {
        $('.areaContent').hide();
        $('#taiwanAirport3').show();
        $('.areaName').removeClass('active');
        $('.areaTitle>#firstTaiwanAirport3').addClass('active');
        if ($('#areaDownBoxTravelInterFrom').css('display') == 'block') {
            $('#areaDownBoxTravelInterFrom').css('display', 'none');
        }
        else {
            $('#areaDownBoxTravelInterFrom').css('display', 'block')
        }

    })


})

$(function () {
    $('.travelInterTo').on('click', function () {
        $('.areaContent').hide();
        $('#hotForeign2').show();
        $('.areaName').removeClass('active');
        $('.areaTitle>#firstHotForeign2').addClass('active');
        if ($('#areaDownBoxTravelInterTo').css('display') == 'block') {
            $('#areaDownBoxTravelInterTo').css('display', 'none');
        }
        else {
            $('#areaDownBoxTravelInterTo').css('display', 'block')
        }

    })

})
$(function () {
    $('.ticketInterText').on('click', function () {
        $('.areaContent').hide();
        $('#hotTopic').show();
        $('.areaName').removeClass('active');
        $('.areaTitle>#firstHotTopic').addClass('active');
        if ($('#areaDownBoxTicketInterText').css('display') == 'block') {
            $('#areaDownBoxTicketInterText').css('display', 'none');
        }
        else {
            $('#areaDownBoxTicketInterText').css('display', 'block')
        }

    })

})

$(function () {
    $('.planeHotelTo').on('click', function () {
        $('.areaContent').hide();
        $('#chinaHotel').show();
        $('.areaName').removeClass('active');
        $('.areaTitle>#firstChinaHotel').addClass('active');
        if ($('#areaDownBoxPlaneHotelTo').css('display') == 'block') {
            $('#areaDownBoxPlaneHotelTo').css('display', 'none');
        }
        else {
            $('#areaDownBoxPlaneHotelTo').css('display', 'block')
        }

    })
})


$(function () {
    var roomNumber = 1;
    var peopleNumber = 1;
    var hotelNumber = 1;
    $('.hotelMinusButton').on('click', function () {
        hotelNumber -= 1
        if (hotelNumber < 1) {
            alert('房間數量不可低於1')
        }
        else {
            $('.hotelNum').text(`${hotelNumber}`)
            $('.hotelNumTop').text(`${hotelNumber}`)
        }

    })
    $('.hotelPlusButton').on('click', function () {
        hotelNumber += 1
        $('.hotelNum').text(`${hotelNumber}`)
        $('.hotelNumTop').text(`${hotelNumber}`)
    })
    $('.roomMinusButton').on('click', function () {
        roomNumber -= 1
        if (roomNumber < 1) {
            alert('房間數量不可低於1')
        }
        else {
            $('.roomNum').text(`${roomNumber}`)
            $('.roomNumTop').text(`${roomNumber}`)
        }

    })
    $('.roomPlusButton').on('click', function () {
        roomNumber += 1
        $('.roomNum').text(`${roomNumber}`)
        $('.roomNumTop').text(`${roomNumber}`)
    })
    $('.peopleMinusButton').on('click', function () {
        peopleNumber -= 1
        if (peopleNumber < 1) {
            alert('人數不可低於1')
        }
        else {
            $('.peopleNum').text(`${peopleNumber}`)
            $('.peopleNumTop').text(`${peopleNumber}`)
        }

    })
    $('.peoplePlusButton').on('click', function () {
        peopleNumber += 1
        $('.peopleNum').text(`${peopleNumber}`)
        $('.peopleNumTop').text(`${peopleNumber}`)
    })

})


$(function () {
    var calendar = new Date();
    var date = calendar.getDate();
    var dateString = date.toString();
    if (dateString.length == 1) {
        dateString = `0${dateString}`;
    }
    var month = "0" + (calendar.getMonth() + 1);
    var year = calendar.getFullYear();
    var y = `${year}-${month}-${dateString}`;
    for (var i = 0; i < 6; i++) {
        document.getElementsByClassName('frontDate')[i].value = y;
    }
    console.log(y);
    var calendar2 = new Date();
    Date.prototype.addDays = function (days) {
        this.setDate(this.getDate() + days);
        return this;
    }
    calendar2.addDays(5);
    var month2 = "0" + (calendar2.getMonth() + 1);
    var date2 = calendar2.getDate();
    if (date2.toString().length != 2) {
        var date2 = "0" + (calendar2.getDate());
    }
    console.log(date2);
    var z = `${year}-${month2}-${date2}`
    console.log(z);
    for (var i = 0; i < 7; i++) {
        document.getElementsByClassName('latterDate')[i].value = z;
    }
});

$(function () {
    $('.eachArea').on('click', function () {
        var content = $(this).text();
        var parent = $(this).parent().parent().parent().prev();
        console.log(content);
        $($(this).parent().parent().parent().prev()).val(`${content}`);
        var hide = $(this).parent().parent().parent();
        $(hide).hide();
    })
})
$(function () {
    $('.itineraryBox').on('mouseover', function () {
        var resize = $(this).children().first().prop('id');
        var ticketButton = $(this).children().last().children().last().prop('id');
        var star = $(this).children().last().children().first().next().prop('id');
        var hotelName = $(this).children().last().children().first().prop('id');
        console.log(ticketButton);

        $(`#${resize}`).css({
            'width': "100%",
            'transition': "1s",
            'marginLeft': "0"
        });
        $(`#${ticketButton}`).css({
            'color': 'white',
            'transition': '1s'
        });
        $(`#${hotelName}`).css({
            'fontSize': '50px',
            'fontWeight': 'bold',
            'transition': '1s'
        });
        $(`#${star}`).css({
            'color': 'yellow',
            'transition': '1.5s'
        });


    })
})
$(function () {
    $('.itineraryBox').on('mouseleave', function () {
        var resize = $(this).children().first().prop('id');
        var ticketButton = $(this).children().last().children().last().prop('id');
        var star = $(this).children().last().children().first().next().prop('id');
        var hotelName = $(this).children().last().children().first().prop('id');
        $(`#${resize}`).css({
            'width': "80%",
            'transition': "1s",
            'marginLeft': "10%"
        });

        $(`#${ticketButton}`).css({
            'color': 'gray',
            'transition': '1s'
        });
        $(`#${hotelName}`).css({
            'fontSize': '40px',
            'fontWeight': 'normal',
            'transition': '1s'
        });
        $(`#${star}`).css({
            'color': 'white',
            'transition': '1.5s'
        });
    })
})
$(function () {
    $('.pickme').on('click', function () {
        $('#belowInsideBox').hide();
        $('#loading').show();
        setTimeout(function () { $("#loading").fadeOut(); }, 6000);
        setTimeout(function () { $("#belowInsideBox2").show(); }, 6000);
        setTimeout(function () { $("#downMore").show(); }, 6000);
    })
})
$(function () {
    $('#downMore').on('click', function () {
        $('#belowInsideBox3').show('slow');
        $('#downMore').hide();
        $('#downMore2').show('slow');
    })
})



