var express = require("express");
var app = express();
var moment = require("moment");

app.get("/:id", function(req, res) {
	var unixdate = moment.unix(Number(req.params.id));
	var date = moment(req.params.id).isValid();

	console.log(moment(unixdate).isValid());

	if (moment(unixdate).isValid()) {
		res.send({Unix:req.params.id, Date: unixdate});
	}
	else if (date){
		res.send({Unix: Date.parse(req.params.id), Date: req.params.id});
	}
	else {
		res.send({Unix: null, Date: null})
	}
	

});

app.listen(process.env.PORT || 3000, function(req,res) {
	console.log('1...2...3.. Action');
});