

Router.route('/', function () {
	this.layout('Layout');
	this.render('intro')
},
 {
 	name: 'Home'
 })

Router.route('/Experience', function () {
	this.layout('Layout');
	this.render('Experience')
},
 {
 	name: 'Experience'
 })

Router.route('/Skills', function () {
	this.layout('Layout');
	this.render('Skills')
}, {
 	name: 'Skills'
 })

Router.route('/Contact', function () {
	this.layout('Layout');
	this.render('Contact')
},
{
 	name: 'contact'
 })