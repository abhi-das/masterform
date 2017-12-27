import { Component, OnInit, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { D3Service, D3, Selection  } from 'd3-ng2-service';


// ViewEncapsulation allow style manipulation on DOM Element

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PieChartComponent implements OnInit {


	@ViewChild('pie') private pieContainer: ElementRef;
	private d3;
	private margin: any = { top: 20, bottom: 20, left: 20, right: 20};	
	private width: number;
	private height: number;
	private radius: number;

	constructor(_d3Service: D3Service) { 
		this.d3 = _d3Service.getD3();
	}

	ngOnInit() {

		const element = this.pieContainer.nativeElement;	

		this.width = element.offsetWidth - this.margin.left - this.margin.right;		    
		this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
		this.radius = Math.min(this.width, this.height) / 2;

		var color = this.d3.scaleOrdinal(this.d3.schemeCategory10);

		var svgContainer = this.d3.select(element).append("svg")
			.attr("width", element.offsetWidth)
			.attr("height", element.offsetHeight)
			.style("border", "1px solid #ccc");

		var data = [1, 2, 1, 5, 6, 8, 10];

		var arc = this.d3.arc()
		.outerRadius(this.radius)
		.innerRadius(this.radius*.5);

		var group = svgContainer.append("g")
		.attr("transform", "translate(" + this.width/2 + "," + this.height/2 + ")")

		var arcs = this.d3.pie()(data);
		let $d3 = this.d3;
		arcs.forEach(function(d, i) {
			group.append("path").attr("fill", color(i))
			.attr("d", arc(d))
			.transition()
			.duration(1000)
			.attrTween('d', function() {
				var start = {startAngle: 0, endAngle: 0};
				var interpolate = $d3.interpolate(start, d);
			    return function(t) {
			       return arc(interpolate(t));
			    };
			})

		});

	}	

}
