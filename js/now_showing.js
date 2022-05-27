var movie_info = { 'movies':[
                            {
                                'Name': 'The Batman',
                                'Date': ['10 Abril 2022', '11 Abril 2022', '12 Abril 2022'],
                                'Time': ['10:00 - 12:15','19:00 - 21:15', '21:30 - 23:45'],
                            },
                            
                            {
                                'Name': 'Uncharted',
                                'Date': ['10 Abril 2022', '11 Abril 2022', '12 Abril 2022'],
                                'Time':['12:00 - 13:45', '16:30 - 18:15', '23:00 - 00:45'],
                            },
                            
                            {
                                'Name':'Morbius',
                                'Date': ['10 Abril 2022', '11 Abril 2022', '12 Abril 2022'],
                                'Time':['14:00 - 16:15', '18:00 - 20:15', '21:30 - 23:45'],
                            },
                            
]
}

var audi_list = { 'audis':[
						{
							'Rows':'6',
							'Columns':'6'
						},
]}

var form = document.getElementsByTagName('form');

var date,time;

{
	var movie_name = form[0].getElementsByClassName('form_movie_name')[0];
	var dates = form[0].getElementsByTagName('select')[0];
	var times = form[0].getElementsByTagName('select')[1];

	movie_name.innerHTML = movie_info.movies[0].Name;

	for(date=0; date<3; date++){
		var opt = document.createElement('option');
		opt.value = date;
		opt.innerHTML = movie_info.movies[0].Date[date];
		dates.appendChild(opt);
	}

	for(time=0; time<3; time++){
		var opt = document.createElement('option');
		opt.value = time;
		opt.innerHTML = movie_info.movies[0].Time[time];
		times.appendChild(opt);
	}
	
}
    
{
    var movie_name = form[1].getElementsByClassName('form_movie_name')[0];
	var dates = form[1].getElementsByTagName('select')[0];
	var times = form[1].getElementsByTagName('select')[1];

	movie_name.innerHTML = movie_info.movies[1].Name;

	for(date=0; date<3; date++){
		var opt = document.createElement('option');
		opt.value = date;
		opt.innerHTML = movie_info.movies[1].Date[date];
		dates.appendChild(opt);
	}

	for(time=0; time<3; time++){
		var opt = document.createElement('option');
		opt.value = time;
		opt.innerHTML = movie_info.movies[1].Time[time];
		times.appendChild(opt);
	}

}

{
    var movie_name = form[2].getElementsByClassName('form_movie_name')[0];
	var dates = form[2].getElementsByTagName('select')[0];
	var times = form[2].getElementsByTagName('select')[1];

	movie_name.innerHTML = movie_info.movies[2].Name;

	for(date=0; date<3; date++){
		var opt = document.createElement('option');
		opt.value = date;
		opt.innerHTML = movie_info.movies[2].Date[date];
		dates.appendChild(opt);
	}

	for(time=0; time<3; time++){
		var opt = document.createElement('option');
		opt.value = time;
		opt.innerHTML = movie_info.movies[2].Time[time];
		times.appendChild(opt);
	}
	
}

    