
$.getJSON('/data', function(d){
    //alert(JSON.stringify(d));
    $('#h1').text(d.name);
    $('#h2').text(d.college);
    $('#regno').text(d.regno);
})