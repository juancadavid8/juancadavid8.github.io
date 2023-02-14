window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	theme: "dark2", // "light1", "light2", "dark1", "dark2"
	animationEnabled: true,
	exportEnabled: true,
	title:{
		text: "Ventas"   
	},
	axisX: {
		interval: 1,
		intervalType: "month",
		valueFormatString: "DDD"
	},
	axisY:{
		title: "Ventas Semanales",
		valueFormatString: "#0"
	},
	data: [{        
		type: "line",
		markerSize: 12,
		xValueFormatString: "DDD, YYYY",
		yValueFormatString: "###.#",
		dataPoints: [        
			{ x: new Date(2016, 00, 1), y: 61, indexLabel: "", markerType: "triangle",  markerColor: "#6B8E23" },
			{ x: new Date(2016, 01, 1), y: 71, indexLabel: "", markerType: "triangle",  markerColor: "#6B8E23" },
			{ x: new Date(2016, 02, 1) , y: 55, indexLabel: "", markerType: "cross", markerColor: "tomato" },
			{ x: new Date(2016, 03, 1) , y: 50, indexLabel: "", markerType: "cross", markerColor: "tomato" },
			{ x: new Date(2016, 04, 1) , y: 65, indexLabel: "", markerType: "triangle", markerColor: "#6B8E23" },
			{ x: new Date(2016, 05, 1) , y: 85, indexLabel: "", markerType: "triangle", markerColor: "#6B8E23" },
			{ x: new Date(2016, 06, 1) , y: 68, indexLabel: "", markerType: "cross", markerColor: "tomato" },
			
		]
	}]
});
chart.render();

}