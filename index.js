const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  
    // tell it to use the public directory as one where static files live
    .use(express.static(path.join(__dirname, '/public')))
  
    // views is directory for all template files
    .set('views', path.join(__dirname, '/views'))
    .set('view engine', 'ejs')

    //.get('/', (req, res) => res.render('pages/index'))
    .get('/', (req, res) => res.render('pages/index'))
    //.get('/form.html', (req, res) => res.render('form.html'))
    .get('/cool', (req, res) => res.send(cool()))
    //.get('/cost', calculateCost)
    //.get('/cool', (req, res) => res.send(cool()))

    // On form submission from form.html call calculateCost function
    //.get('/cost', calculateCost)
    .get('/cost', (req, res) => res.render('pages/result'))

    //.listen(PORT, () => console.log(`Listening on ${ PORT }`));
    .listen(PORT, function() {
  		console.log('Node app is running on port', port);
	});



    // Connects with our form submission
    function calculateCost(request, response) {

    //const weight = Number(request.query.weight);
	//const package = request.query.package;

	//package = package.toLowerCase();

    // Set up a JSON object of the values we want to pass along to the EJS result page
	//const params = {package: package, weight: weight};

	// Render the response, using the EJS page "result.ejs" in the pages directory
	response.render('pages/result');//, params);

    }