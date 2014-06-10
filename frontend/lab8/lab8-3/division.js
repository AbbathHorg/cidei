var logic = require('./logic');

exports.get = function(req, res){
	res.writeHead(200, {
		'Content-Type' : 'text/html'
	});

	res.end(
		logic.page('Division', logic.navbar(),
			[
				(!isNaN(req.a) && !isNaN(req.b) ? ('<p> {a} Division / {b} = {sq} </p>').replace('{a}', req.a).replace('{b}', req.b).replace('{sq}', (req.a / req.b)) : ''),
				'<p>Ingrese los numeros a calcular</p>',
				'<form name="division" action="/division" method="get">',
				'De: <input type="text" name="a">',
				'<input type="text" name="b">',
				'<input type="submit" value="Calcular">',
				"</form>"
			].join('\n'))
	);
}