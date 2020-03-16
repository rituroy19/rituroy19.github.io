var data1 = [{"Year": 1970, "Total Passengers": 310441392},
         {"Year": 1971, "Total Passengers": 331604904},
         {"Year": 1972, "Total Passengers": 350114567},
         {"Year": 1973, "Total Passengers": 401571800},
         {"Year": 1974, "Total Passengers": 421145200},
         {"Year": 1975, "Total Passengers": 432276500},
         {"Year": 1976, "Total Passengers": 471773396},
         {"Year": 1977, "Total Passengers": 513269292},
         {"Year": 1978, "Total Passengers": 576090004},
         {"Year": 1979, "Total Passengers": 648400600},
         {"Year": 1980, "Total Passengers": 641572888},
         {"Year": 1981, "Total Passengers": 640619400},
         {"Year": 1982, "Total Passengers": 654482108},
         {"Year": 1983, "Total Passengers": 685101596},
         {"Year": 1984, "Total Passengers": 732410288},
         {"Year": 1985, "Total Passengers": 783198104},
         {"Year": 1986, "Total Passengers": 842594296},
         {"Year": 1987, "Total Passengers": 904838104},
         {"Year": 1988, "Total Passengers": 953896012},
         {"Year": 1989, "Total Passengers": 983208800},
         {"Year": 1990, "Total Passengers": 1025078089},
         {"Year": 1991, "Total Passengers": 1133567400},
         {"Year": 1992, "Total Passengers": 1145347659},
         {"Year": 1993, "Total Passengers": 1142678545},
         {"Year": 1994, "Total Passengers": 1233123465},
         {"Year": 1995, "Total Passengers": 1303567456},
         {"Year": 1996, "Total Passengers": 1391234346},
         {"Year": 1997, "Total Passengers": 1455768942},
         {"Year": 1998, "Total Passengers": 1467207211},
         {"Year": 1999, "Total Passengers": 1562453234},
         {"Year": 2000, "Total Passengers": 1674654321},
         {"Year": 2001, "Total Passengers": 1655437165},
         {"Year": 2002, "Total Passengers": 1627654821},
         {"Year": 2003, "Total Passengers": 1665342556},
         {"Year": 2004, "Total Passengers": 1889615234},
         {"Year": 2005, "Total Passengers": 1970343221},
         {"Year": 2006, "Total Passengers": 2072113245},
         {"Year": 2007, "Total Passengers": 2209334689},
         {"Year": 2008, "Total Passengers": 2208354215},
         {"Year": 2009, "Total Passengers": 2250453321},
         {"Year": 2010, "Total Passengers": 2628323554},
         {"Year": 2011, "Total Passengers": 2787654345},
         {"Year": 2012, "Total Passengers": 2894223465},
         {"Year": 2013, "Total Passengers": 3048123786},
         {"Year": 2014, "Total Passengers": 3227963456},
         {"Year": 2015, "Total Passengers": 3466223549},
         {"Year": 2016, "Total Passengers": 3705426543},
         {"Year": 2017, "Total Passengers": 3974335356},
         {"Year": 2018, "Total Passengers": 4233159834}
         ];

		const brush = vl.selectInterval().encodings('x');
		const x = vl.x().fieldN('Year').axis({title:'Year', labelFontSize: 8, labelPadding: 5, titleFontSize: 20, titlePadding: 10});
  
		const base = vl.markCircle()
    		.encode(
      			x, 
      			vl.y().fieldQ('Total Passengers').axis({titleFontSize: 20, labelFontSize: 15, labelPadding: 5, titlePadding: 10}),
      			vl.tooltip().fieldQ('Total Passengers').type('quantitative'))
    		.width(500);
  
  		const graph1 = vl.data(data1)
    		.vconcat(
      			base.encode(x.scale({domain: brush})),
      			base.select(brush).height(100)
    		).title({text:"Airport Passengers over the Years", color:'black', fontSize: 20, anchor: 'middle', offset: 20})
    
    	vegaEmbed("#visual1", graph1.toJSON())
      	// result.view provides access to the Vega View API
      	.then(result => console.log(result))
      	.catch(console.warn); //Embed Risks graph in visual1 div