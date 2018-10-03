var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

var games = {};

games.nochmal = {
    "title" : "Noch Mal!",
    dice : [
        {
            faces : ['nochmal_d1.svg','nochmal_d2.svg','nochmal_d3.svg','nochmal_d4.svg','nochmal_d5.svg','nochmal_dq.svg'],
            sides : 6
        },
        {
            faces : ['nochmal_d1.svg','nochmal_d2.svg','nochmal_d3.svg','nochmal_d4.svg','nochmal_d5.svg','nochmal_dq.svg'],
            sides : 6
        },
        {
            faces : ['nochmal_d1.svg','nochmal_d2.svg','nochmal_d3.svg','nochmal_d4.svg','nochmal_d5.svg','nochmal_dq.svg'],
            sides : 6
        },
        {
            faces : ['nochmal_dk.svg','nochmal_dg.svg','nochmal_db.svg','nochmal_dp.svg','nochmal_dy.svg','nochmal_do.svg'],
            sides : 6
        },
        {
            faces : ['nochmal_dk.svg','nochmal_dg.svg','nochmal_db.svg','nochmal_dp.svg','nochmal_dy.svg','nochmal_do.svg'],
            sides : 6
        },
        {
            faces : ['nochmal_dk.svg','nochmal_dg.svg','nochmal_db.svg','nochmal_dp.svg','nochmal_dy.svg','nochmal_do.svg'],
            sides : 6
        },
    ]
};

games.nochmalsolo = {
    "title" : "NochMal 1P",
    dice : [
        {
            faces : ['nochmal_d1.svg','nochmal_d2.svg','nochmal_d3.svg','nochmal_d4.svg','nochmal_d5.svg','nochmal_dq.svg'],
            sides : 6
        },
        {
            faces : ['nochmal_d1.svg','nochmal_d2.svg','nochmal_d3.svg','nochmal_d4.svg','nochmal_d5.svg','nochmal_dq.svg'],
            sides : 6
        },
        {
            faces : ['nochmal_dk.svg','nochmal_dg.svg','nochmal_db.svg','nochmal_dp.svg','nochmal_dy.svg','nochmal_do.svg'],
            sides : 6
        },
        {
            faces : ['nochmal_dk.svg','nochmal_dg.svg','nochmal_db.svg','nochmal_dp.svg','nochmal_dy.svg','nochmal_do.svg'],
            sides : 6
        },
    ]
};

games.qwixx = {
    "title" : "Qwixx",
    dice : [
        {
            faces : ['qwixx_w1.svg','qwixx_w2.svg','qwixx_w3.svg','qwixx_w4.svg','qwixx_w5.svg','qwixx_w6.svg'],
            sides : 6
        },
        {
            faces : ['qwixx_w1.svg','qwixx_w2.svg','qwixx_w3.svg','qwixx_w4.svg','qwixx_w5.svg','qwixx_w6.svg'],
            sides : 6
        },
        {
            faces : ['qwixx_r1.svg','qwixx_r2.svg','qwixx_r3.svg','qwixx_r4.svg','qwixx_r5.svg','qwixx_r6.svg'],
            sides : 6
        },
        {
            faces : ['qwixx_g1.svg','qwixx_g2.svg','qwixx_g3.svg','qwixx_g4.svg','qwixx_g5.svg','qwixx_g6.svg'],
            sides : 6
        },
        {
            faces : ['qwixx_b1.svg','qwixx_b2.svg','qwixx_b3.svg','qwixx_b4.svg','qwixx_b5.svg','qwixx_b6.svg'],
            sides : 6
        },
        {
            faces : ['qwixx_y1.svg','qwixx_y2.svg','qwixx_y3.svg','qwixx_y4.svg','qwixx_y5.svg','qwixx_y6.svg'],
            sides : 6
        }
    ]
};

games.machi = {
    "title" : "Machi-Koro",
    dice : [
        {
            faces : ['qwixx_g1.svg','qwixx_g2.svg','qwixx_g3.svg','qwixx_g4.svg','qwixx_g5.svg','qwixx_g6.svg'],
            sides : 6
        },
        {
            faces : ['qwixx_b1.svg','qwixx_b2.svg','qwixx_b3.svg','qwixx_b4.svg','qwixx_b5.svg','qwixx_b6.svg'],
            sides : 6
        }
    ]
};

games.papertown = {
    "title" : "Paper Town",
    stacks : [
        {
            cardtypes : ['papertown_grey.svg','papertown_yellow.svg','papertown_red.svg','papertown_lightgreen.svg','papertown_darkgreen.svg'],
            order : [0,0,1,1,2,2,3,3,4,4],
            index : 10
        }
    ]
}

games.default = {
    "title" : "Online dice",
    dice : [
        {
            faces : ['qwixx_w1.svg','qwixx_w2.svg','qwixx_w3.svg','qwixx_w4.svg','qwixx_w5.svg','qwixx_w6.svg'],
            sides : 6
        }
    ]
};

function getCurrentGame(){
    var gameId = getUrlParameter('game');
    if(gameId){
        if(games.hasOwnProperty(gameId)){
            return gameId;
        }
    }
    return 'default';
}

function rollDice(){
    var dice = games[getCurrentGame()].dice;
    var N = dice.length;
    for(var i=0; i<N; i++){
        var die = dice[i];
        var r = Math.floor((Math.random() * die.sides));
        var el = ""
        if(N>1){
            el = '<div class="col-6"><h3><img class="dice" src="img/' + die.faces[r] + '"></h3></div>';
        }
        else{
            el = '<div class="col-12"><h3><img class="dice" src="img/' + die.faces[r] + '"></h3></div>';
        }
        
        $("#dice-view").append(el);
    }
}

function drawCard(){
    var stacks = games[getCurrentGame()].stacks;
    var N = stacks.length;
    for(var i=0; i<N; i++){
        let stack = stacks[i];
        if(stack.index >= stack.order.length){
            shuffleArray(stack.order);
            stack.index = 0;
        }
        if(N>1){
            el = '<div class="col-6"><h3><img class="dice" src="img/' + stack.cardtypes[stack.order[stack.index]]  + '"></h3></div>';
        }
        else{
            el = '<div class="col-12"><h3><img class="dice" src="img/' + stack.cardtypes[stack.order[stack.index]] + '"></h3></div>';
        }
        
        $("#dice-view").append(el);
        stacks[i].index++;
    }
}

function generateNext(){
    $("#dice-view").empty();
    if(games[getCurrentGame()].hasOwnProperty('dice')){
        rollDice();
    }
    else{
        drawCard();
    }
    
    
    
    $('.dice').animate({height:120, width:120},200);
    // Add event listers to all dice
    $('.dice').click(function(event){
        $(event.target).hide();
     });
}

var images = new Array()
function preloadImages(){
    var imgCount = 0;
    for (var g in games) {
        if (games.hasOwnProperty(g)) {
            if(games[g].hasOwnProperty('dice')){
                for(var i=0; i<games[g].dice.length; i++){
                    for(var j=0; j< games[g].dice[i].faces.length; j++){
                        images[imgCount] = new Image()
                        images[i].src = 'img/' + games[g].dice[i].faces[j];
                        imgCount++;
                    }
                }
            }
            else{
                for(var i=0; i<games[g].stacks.length; i++){
                    for(var j=0; j< games[g].stacks[i].cardtypes.length; j++){
                        images[imgCount] = new Image()
                        images[i].src = 'img/' + games[g].stacks[i].cardtypes[j];
                        imgCount++;
                    }
                }
            }
        }
    }
}


if (typeof window.DeviceMotionEvent != 'undefined') {
    // Shake sensitivity (a lower number is more)
    var sensitivity = 18;

    // Position variables
    var x1 = 0, y1 = 0, z1 = 0, x2 = 0, y2 = 0, z2 = 0;

    // Listen to motion events and update the position
    window.addEventListener('devicemotion', function (e) {
        x1 = e.accelerationIncludingGravity.x;
        y1 = e.accelerationIncludingGravity.y;
        z1 = e.accelerationIncludingGravity.z;
        
    }, false);

    var timeout = 0;

    // Periodically check the position and fire
    // if the change is greater than the sensitivity
    setInterval(function () {
        var change = Math.abs(x1-x2+y1-y2+z1-z2);
        // Update new position
        x2 = x1;
        y2 = y1;
        z2 = z1;
        if (change > sensitivity) {
            timeout--;
            if(timeout <= 0){
                timeout = 4;
                generateNext();
            }  
        }  
    }, 150);
}

$(document).ready(function(){
    // Set Game title
    var currentTitle = games[getCurrentGame()].title;
    $('#game-title').text(currentTitle);
    $("meta[name=apple-mobile-web-app-title]").attr('content', currentTitle);
    document.title = currentTitle;

    $(".nav-link").click(function(event){
        event.preventDefault();
        var view = $(event.target).attr('data-view');
        $('.application-view').hide();
        $('.nav-link').removeClass('active');
        $(event.target).addClass('active');
        $('#' + view).show();
     });

     $("#roll-dice-button").click(function(event){
        event.preventDefault();
        generateNext();
     });

    preloadImages();
});
