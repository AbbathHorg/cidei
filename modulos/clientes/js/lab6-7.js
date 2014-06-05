$(document).ready(function(){


	$('#tabla').append('<table id="t2"></table>');
	var table = $('#tabla').children();   
	var a = ['a', 'b', 't'];
	var b = ['c', 'd', 't'];
	var c = ['e', 'f', 't'];
	var d = ['a', 'b', 't'];
	var e = ['c', 'd', 't'];
	var f = ['e', 'f', 't'];
	var g = ['a', 'b', 't'];
	var h = ['c', 'd', 't'];
	var i = ['e', 'f', 't'];
	var j = ['a', 'b', 't'];
	var k = ['c', 'd', 't'];
	var l = ['e', 'f', 't'];
	var m = ['a', 'b', 't'];
	var n = ['c', 'd', 't'];
	var o = ['e', 'f', 't'];
	var p = ['a', 'b', 't'];
	var q = ['c', 'd', 't'];
	var r = ['e', 'f', 't'];

	var comp = [a,b,c,d,e,f,g,h,i,f,k,l,m,n,o,p,q,r];

	// Tabla dinamica
	for(var i = 0; i < comp.length; i++){
		var st = "<tr>";
		for(var j = 0; j < comp[i].length; j++){
			st = st + "<td>" + comp[i][j] + "</td>"
		}
		st = st + "</tr>";
		table.append(st);
	}

	// Paginación
	var items = $("table#t2 tbody tr");

    var numItems = items.length;
    var perPage = 4;

    items.slice(perPage).hide();


	$('#pagination').pagination({
        items: numItems,
        itemsOnPage: perPage,
        cssStyle: 'light-theme',
        onPageClick: function(pageNumber) { 
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;

            items.hide() 
                 .slice(showFrom, showTo).show();
        }
    });
});