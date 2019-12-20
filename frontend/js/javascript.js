
$.getJSON('/data', function(d){
    //alert(JSON.stringify(d));
    $('#h1').text(d.name);
    $('#college').text(d.college);
    $('#regno').text(d.regno);
})