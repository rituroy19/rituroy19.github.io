var data2 = [{"airport": "1. LHR", "airport name": "Heathrow", "location": "London, UK", "year": 2010, "connectivity": 379, "passenger": 65884143},
         {"airport": "1. LHR", "airport name": "Heathrow", "location": "London, UK", "year": 2011, "connectivity": 379, "passenger": 69433565},
         {"airport": "1. LHR", "airport name": "Heathrow", "location": "London, UK", "year": 2012, "connectivity": 379, "passenger": 70038804},
         {"airport": "1. LHR", "airport name": "Heathrow", "location": "London, UK", "year": 2013, "connectivity": 379, "passenger": 72368061},
         {"airport": "1. LHR", "airport name": "Heathrow", "location": "London, UK", "year": 2014, "connectivity": 379, "passenger": 73408489},
         {"airport": "1. LHR", "airport name": "Heathrow", "location": "London, UK", "year": 2015, "connectivity": 379, "passenger": 74989795},
         {"airport": "1. LHR", "airport name": "Heathrow", "location": "London, UK", "year": 2016, "connectivity": 379, "passenger": 75715474},
         {"airport": "1. LHR", "airport name": "Heathrow", "location": "London, UK", "year": 2017, "connectivity": 379, "passenger": 78014598},
         {"airport": "2. FRA", "airport name": "Frankfurt", "location": "Germany", "year": 2010, "connectivity": 307, "passenger": 53009221},
         {"airport": "2. FRA", "airport name": "Frankfurt", "location": "Germany", "year": 2011, "connectivity": 307, "passenger": 56436255},
         {"airport": "2. FRA", "airport name": "Frankfurt", "location": "Germany", "year": 2012, "connectivity": 307, "passenger": 57520001},
         {"airport": "2. FRA", "airport name": "Frankfurt", "location": "Germany", "year": 2013, "connectivity": 307, "passenger": 58636948},
         {"airport": "2. FRA", "airport name": "Frankfurt", "location": "Germany", "year": 2014, "connectivity": 307, "passenger": 59566132},
         {"airport": "2. FRA", "airport name": "Frankfurt", "location": "Germany", "year": 2015, "connectivity": 307, "passenger": 61032022},
         {"airport": "2. FRA", "airport name": "Frankfurt", "location": "Germany", "year": 2016, "connectivity": 307, "passenger": 60786937},
         {"airport": "2. FRA", "airport name": "Frankfurt", "location": "Germany", "year": 2017, "connectivity": 307, "passenger": 64500386},
         {"airport": "3. AMS", "airport name": "Amsterdam Schipol", "location": "Netherlands", "year": 2010, "connectivity": 299, "passenger": 45211749},
         {"airport": "3. AMS", "airport name": "Amsterdam Schipol", "location": "Netherlands", "year": 2011, "connectivity": 299, "passenger": 49755252},
         {"airport": "3. AMS", "airport name": "Amsterdam Schipol", "location": "Netherlands", "year": 2012, "connectivity": 299, "passenger": 51035590},
         {"airport": "3. AMS", "airport name": "Amsterdam Schipol", "location": "Netherlands", "year": 2013, "connectivity": 299, "passenger": 52569200},
         {"airport": "3. AMS", "airport name": "Amsterdam Schipol", "location": "Netherlands", "year": 2014, "connectivity": 299, "passenger": 54978023},
         {"airport": "3. AMS", "airport name": "Amsterdam Schipol", "location": "Netherlands", "year": 2015, "connectivity": 299, "passenger": 58284864},
         {"airport": "3. AMS", "airport name": "Amsterdam Schipol", "location": "Netherlands", "year": 2016, "connectivity": 299, "passenger": 63625534},
         {"airport": "3. AMS", "airport name": "Amsterdam Schipol", "location": "Netherlands", "year": 2017, "connectivity": 299, "passenger": 68515425},
         {"airport": "4. ORD", "airport name": "O'Hare", "location": "Chicago, US", "year": 2010, "connectivity": 295, "passenger": 66774738},
         {"airport": "4. ORD", "airport name": "O'Hare", "location": "Chicago, US", "year": 2011, "connectivity": 295, "passenger": 66701241},
         {"airport": "4. ORD", "airport name": "O'Hare", "location": "Chicago, US", "year": 2012, "connectivity": 295, "passenger": 66629600},
         {"airport": "4. ORD", "airport name": "O'Hare", "location": "Chicago, US", "year": 2013, "connectivity": 295, "passenger": 66777161},
         {"airport": "4. ORD", "airport name": "O'Hare", "location": "Chicago, US", "year": 2014, "connectivity": 295, "passenger": 69999010},
         {"airport": "4. ORD", "airport name": "O'Hare", "location": "Chicago, US", "year": 2015, "connectivity": 295, "passenger": 76949504},
         {"airport": "4. ORD", "airport name": "O'Hare", "location": "Chicago, US", "year": 2016, "connectivity": 295, "passenger": 77960588},
         {"airport": "4. ORD", "airport name": "O'Hare", "location": "Chicago, US", "year": 2017, "connectivity": 295, "passenger": 79828183},
         {"airport": "5. ATL", "airport name": "Hartsfield–Jackson", "location": "Atlanta, US", "year": 2010, "connectivity": 256, "passenger": 92331622},
         {"airport": "5. ATL", "airport name": "Hartsfield–Jackson", "location": "Atlanta, US", "year": 2011, "connectivity": 256, "passenger": 92389023},
         {"airport": "5. ATL", "airport name": "Hartsfield–Jackson", "location": "Atlanta, US", "year": 2012, "connectivity": 256, "passenger": 95513828},
         {"airport": "5. ATL", "airport name": "Hartsfield–Jackson", "location": "Atlanta, US", "year": 2013, "connectivity": 256, "passenger": 96431224},
         {"airport": "5. ATL", "airport name": "Hartsfield–Jackson", "location": "Atlanta, US", "year": 2014, "connectivity": 256, "passenger": 97178899},
         {"airport": "5. ATL", "airport name": "Hartsfield–Jackson", "location": "Atlanta, US", "year": 2015, "connectivity": 256, "passenger": 101491106},
         {"airport": "5. ATL", "airport name": "Hartsfield–Jackson", "location": "Atlanta, US", "year": 2016, "connectivity": 256, "passenger": 104171935},
         {"airport": "5. ATL", "airport name": "Hartsfield–Jackson", "location": "Atlanta, US", "year": 2017, "connectivity": 256, "passenger": 105902992}
		];

		const Selection = vl.selectSingle()
    		.encodings('y');
  
  		const Visual2 = vl.markBar()
  			.data(data2)
  			.select(Selection)
  			.encode(
    			 vl.y().fieldN('airport').axis({labelColor: 'black', title: 'Airports', titleColor: 'black', labelPadding: 5, titlePadding: 10, titleFontSize: 20, labelFontSize: 15}),
    			vl.x().average('connectivity').axis({grid: false, labelColor: 'black', labelFontSize: 15, titleFontSize: 15, labelPadding: 5, titlePadding: 10}).title('Connectivity Index'),
    			vl.tooltip().average('connectivity').type('quantitative'),
    			vl.color().fieldN('airport').scale({range: ['#CF9802', '#AA4949', '#B64B03', '#000000', '#000000', '#000000','#000000','#000000','#000000']}).legend(null),
    			vl.opacity().if(Selection, vl.value(0.8)).value(0.3)
  			)
  			.height(400)    
  
  		const Visual1 = vl.markLine({point: true})
  			.data(data2)
  			.encode(
    			vl.x().fieldN('year').axis({title: 'Year', labelColor: 'black', labelFontSize: 10, titleFontSize: 15, labelPadding: 5, titlePadding: 10}),
    			vl.y().fieldQ('passenger').axis({grid: false, title: 'Number of Passengers', labelPadding: 5, titlePadding: 10, titleFontSize: 20, labelFontSize: 15}),
    			vl.tooltip().fieldQ('passenger').type('quantitative'),
    			vl.color().fieldN('airport').legend(null),
    			vl.opacity().if(Selection, vl.value(0.8)).value(0.2)
  			)
  			.width(400)
  			.height(400)
  
  		const graph2 = vl.hconcat(Visual2, Visual1)
  			.spacing(30)
  			.title({text:"Comparision of Airport Connectivity Index and Passenger Loads", color:'black', fontSize: 20, offset: 20, anchor: 'middle'})

  		vegaEmbed("#visual3", graph2.toJSON())
      	// result.view provides access to the Vega View API
      	.then(result => console.log(result))
      	.catch(console.warn); //Embed Risks graph in visual1 div