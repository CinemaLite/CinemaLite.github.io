//API

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function booking(id){
	this.id = id;
	this.fetchBookingInformation = function() { 
		if(localStorage.getItem(id)==null){
		    //return id;
			if(getCookie(id)==null){
			    console.log("Inicializo");
			    setCookie(id,"000000000000000000000000000000000000",30);
			    return getCookie(id);				
			}
			else
			    return getCookie(id);
		}
		else
		return localStorage.getItem(id);
	
	}
	this.updateBookingInformation = function(tmpBooking) {
		if(tmpBooking==null){
			//document.cookie=id;
			setCookie(id,tmpBooking,30)
		}
		else{
			localStorage.setItem(id, tmpBooking);
		}
	}
}

// Extract GET name-value pair.
var parts = window.location.search.substr(1).split("&");

var dateID = parts[0].slice(-1);
var timeID = parts[1].slice(-1);
var titleID = parts[2].slice(-1);
//var ID = "" + titleID + "8" + timeID;
var ID = "" + titleID + dateID + timeID;
//console.log(ID);

document.getElementById('movie_title').innerHTML = movie_info.movies[titleID].Name;
document.getElementById('movie_in').innerHTML = movie_info.movies[titleID].Time[timeID] + " - " + movie_info.movies[titleID].Date[dateID];

var rows = parseInt(audi_list.audis[0].Rows, 10);
var columns = parseInt(audi_list.audis[0].Columns, 10);
console.log(rows + " " + columns);

var currentBooking = new booking(ID);
var tmpBooking = currentBooking.fetchBookingInformation();

console.log(tmpBooking + 'yolo');
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

var table = document.getElementById('table');
var capchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function makeSeatingPlan(){
	for(var j=0; j<rows; j++){
		var row = document.createElement('div');
		row.className = 'row';

		for(var i=0; i<columns+1; i++){
			var cell = document.createElement('div');

			if(i==0){
				cell.className = 'marker_cell';
				cell.innerHTML = capchar[j]; 
				row.appendChild(cell);
			}
			else{
				if(tmpBooking[(columns*j)+i-1]==0){
					cell.className = 'cell';
				} else {
					cell.className = 'cell-selected'
				}
				cell.innerHTML = i;
				cell.id = (columns*j)+i-1;
				row.appendChild(cell);
			}
		}
		table.appendChild(row);	
	}
}

makeSeatingPlan();

var selectSeat = function selectSeat(seat){
	seat_id = parseInt(seat.id);
	console.log(seat.id + " " + seat_id);
	if(tmpBooking[seat_id] == 1){
		tmpBooking = tmpBooking.replaceAt(seat_id,"0");
		seat.className = 'cell';
	} else {
		tmpBooking = tmpBooking.replaceAt(seat_id,"1");
		seat.className = 'cell-tmpSelected';
	}
}

var availableSeats = document.getElementsByClassName('cell');
for(var i=0; i<availableSeats.length; i++){
	var seat = availableSeats[i];
	seat.onclick = function(i){
		return function(){
			selectSeat(this);
		}
	}(i);
}

var convertToSeatNumber = function(seatNo){
	var str = "";
	console.log(columns*(Math.floor(seatNo/columns)));
	str = capchar[parseInt(seatNo/columns)] + parseInt(seatNo-(columns*(Math.floor(seatNo/columns)))+1);
	return str;
}


var submitForm = function submitForm(){
	var selectedElements = document.getElementsByClassName('cell-tmpSelected');
	var elements = "";
	for(var i=0; i<selectedElements.length; i++){
		elements = elements + convertToSeatNumber(selectedElements[i].id) + " ";
	}

	var str =  movie_info.movies[titleID].Name + " - " + movie_info.movies[titleID].Time[timeID] + " - " + movie_info.movies[titleID].Date[dateID];
	str = str + "\nSe reservaron los siguientes asientos: " + elements;
	var r = window.confirm(str);

	if(r == true){
		currentBooking.updateBookingInformation(tmpBooking);
		return true;
	} else {
		location.reload();
		return false;
	}
	
	document.getElementById('screen_container').innerHTML;
}
