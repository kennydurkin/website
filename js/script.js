function getGreeting(date){
    var time = date.getHours();
    if (time >= 12 && time < 18)
        return "Hope your day is going well!";
    else if (time >= 18)
        return "Hope you're enjoying your evening!";
    else if (time >= 0 && time < 6)
    	return "I'm a night owl too! What brings you to my site at " + date.toLocaleTimeString() + "?";
    else
        return "Hope you have a great day today!";
}

window.onload=function(){
    var date = new Date();
    document.getElementById('greeting').innerHTML = getGreeting(date);
}; 