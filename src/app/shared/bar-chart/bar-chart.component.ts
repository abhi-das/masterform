import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { D3Service, D3 } from 'd3-ng2-service';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BarChartComponent implements OnInit {

	@ViewChild('barChart') private barChartContainer: ElementRef;

	private d3;
	private margin: any = { top: 20, bottom: 20, left: 20, right: 20};	
	private width: number;
	private height: number;
	private data: Array<any>;

	constructor(private _d3Srv: D3Service) { 
		this.d3 = _d3Srv.getD3();
	}

	ngOnInit() {

		this.data = [50, 65,75,95,125];
		var dataX = ['2000', '2001', '2002','2003','2004'];

		let d3 = this.d3;
		let color = d3.scaleOrdinal(d3.schemeCategory10);
		const container = this.barChartContainer.nativeElement;
		
		this.width = container.offsetWidth - this.margin.left - this.margin.right;
		this.height = container.offsetHeight - this.margin.top - this.margin.bottom;

		let svgContainer = d3.select(container).append('svg')
			.attr("width", container.offsetWidth)
			.attr("height", container.offsetHeight)
			.style("border", "1px solid #ccc");

		var height = this.height;

		var y = d3.scaleLinear()
						.domain([0, d3.max(this.data)])
						.range([height, 0]);

		var parseTime = d3.timeParse('%Y');

		var x = d3.scaleTime()
					.domain(d3.extent(dataX, function(d){ return parseTime(d); }))
					.range([0, this.width]);

		// console.log(x(parseTime('2004')));

		var yAxis = d3.axisLeft(y);
		var xAxis = d3.axisBottom(x);

		var bars = svgContainer.append('g')
				.attr('class','bars')
				.attr("transform", "translate(" + this.margin.left*2 + "," + this.margin.top + ")");

		bars.selectAll('rect')
			.data(this.data)
			.enter()
			.append('rect')
			.attr('class', 'bar')
			.attr('height', '0')
			.attr('width', '50')
			.attr('x', function(d, i){  return x(parseTime(dataX[i])) })
			.attr('y', height)
			.transition()		      
			.delay((d, i) => i * 800)
			.attr('y', function(d,i){ return y(d)-1; })
			.attr('height', function(d,i){ return height - y(d); });
		// .attr('fill', function(d, i){ return color(i)})

		svgContainer.append('g')
				.attr('class','axis')
				.attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")")
				.attr('class', 'yaxis')
				.call(yAxis);

		svgContainer.append('g')
					.attr('class', 'axis')
					.attr("transform", "translate(" + this.margin.left + "," + (container.offsetHeight - this.margin.top) + ")")
					.attr('class', 'xaxis')
					.call(xAxis);


	}

}
