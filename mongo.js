//import the mongodb native drivers.
var mongodb = require('mongodb');

//work with "MongoClient" interface 
var MongoClient = mongodb.MongoClient;



// connection url
var url = 'mongodb://192.168.99.100:27017/EMG'; //docker's mongodb ip address
var db1;
// connect to the server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongodb. Error: ', err);
  } else {
	  
    console.log('Connection established to', url);

	
	db1 = db;
	
	// Get the documents collection
	var time = Date.now().toString();
			console.log("qwe" + time);
    var collection = db.collection("tmp");
	
	db.listCollections({name: "qweqwe"}).next(function(err, collinfo) {
        if (collinfo) {
            console.log("qwesss" + JSON.stringify(collinfo));
        } else {
            console.log("qwesss22" + JSON.stringify(collinfo));
			db.createC
			
		}
    });

    //Create some users
    var s1 = {output: 1, 'input': [500,100,233,444,555,666,7777,8889]};
    var s2 = {name: 'Fred', 'signals': [{'name': 'channal1', 'values': [{"output": 6, "input": [110, 112]}]}]};
    var s3 = {name: 'John', 'signals': [{'name': 'channal1', 'values': [{"output": 7, "input": [120, 122]}]}]};
	
		if (!Date.now) {
			Date.now = function() { return new Date().getTime(); }
		}
		
		
	//	All these query functions take the callback as the last argument. The callback function gives the first argument as error and the second argument as result
    // Insert some users
    collection.insert({output: 1, 'input': [100], 'timeStamp': Date.now()}, function (err, result) {
		if (err) {
			console.log(err);
		} else {
			console.log('The documents inserted with "_id" are:', JSON.stringify(result));
		}
		db.close();
	});
	collection.rename("subjects2");
	//*/
	
	  collection.find().toArray(function(err, docs) {
		  
		console.log(JSON.stringify(docs));

        db.close();
      });
	
	

    //Close connection
  }
});
