function createChartComboDualAxes(divId, chartType, chartTitle, chartSubTitle, chartData, categories){
	var options = {
	    chart: {
	        renderTo: divId,
	        zoomType: 'xy'
	    },
	    title: {
	        text: chartTitle
	    },
	    subtitle: {
	        text: chartSubTitle
	    },
	    xAxis: [{
	        categories: categories
	    }],
	    yAxis: [{ // Primary
					// yAxis
	        labels: {
	            formatter: function() {
	                return this.value +'h';
	            },
	            style: {
	                color: '#89A54E'
	            }
	        },
	        title: {
	            text: 'Flight Hour',
	            style: {
	                color: '#89A54E'
	            }
	        }
	    }, { // Secondary
				// yAxis
	        title: {
	            text: 'Availability',
	            style: {
	                color: '#4572A7'
	            }
	        },
	        labels: {
	            formatter: function() {
	                return this.value +' %';
	            },
	            style: {
	                color: '#4572A7'
	            }
	        },
	        opposite: true
	    }],
	    tooltip: {
	        formatter: function() {
	            return ''+
	                this.x +': '+ this.y +
	                (this.series.name == 'Availability' ? ' %' : 'h');
	        }
	    },
	    legend: {
	        layout: 'vertical',
	        align: 'left',
	        x: 120,
	        verticalAlign: 'top',
	        y: 100,
	        floating: true,
	        backgroundColor: '#FFFFFF'
	    },
	    series: []
	};
	
	return options; 
}

function createChartColumnStacked(divId, chartType, chartTitle, categories){
    chart = new Highcharts.Chart({
        chart: {
            renderTo: divId,
            type: 'column'
        },
        title: {
            text: 'Stacked column chart'
        },
        xAxis: {
            categories: ['0500', '0314', '0145', '0190', '0175','0500', '0314', '0145', '0190', '0175','0500', '0314', '0145', '0190', '0175','0500', '0314', '0145', '0190', '0175']
	        ,
	        labels: { rotation: -90,
                align: 'right',
                style: {
                    fontSize: '8px'
                }
	        }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total fruit consumption'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -100,
            verticalAlign: 'top',
            y: 20,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            formatter: function() {
                return '<b>'+ this.x +'</b><br/>'+
                    this.series.name +': '+ this.y +'<br/>'+
                    'Total: '+ this.point.stackTotal;
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        series: [{
            name: 'Available',
            data: [3, 4, 4, 2, 5,3, 4, 4, 2, 5,3, 4, 4, 2, 5,3, 4, 4, 2]
        }, {
            name: 'Parts Fault',
            data: [3, 4, 4, 2, 5,3, 4, 4, 2, 5,3, 4, 4, 2, 5,3, 4, 4, 2]
        }, {
            name: 'Defects',
            data: [3, 4, 4, 2, 5,3, 4, 4, 2, 5,3, 4, 4, 2, 5,3, 4, 4, 2]
        }]
    });
}

function createChartCombo(){
	chart = new Highcharts.Chart({
        chart: {
            renderTo: 'containerCombo'
        },
        title: {
            text: 'Combination MTBUR and MTBF'
        },
        xAxis: {
            categories: ['FAB', 'FAC', 'FAE', 'FACH', 'FAD']
        },
        tooltip: {
            formatter: function() {
                var s;
                if (this.point.name) { // the pie chart
                    s = ''+
                        this.point.name +': '+ this.y +' Flight Cycles';
                } else {
                    s = ''+
                        this.x  +': '+ this.y;
                }
                return s;
            }
        },
        labels: {
            items: [{
                html: 'Total Flight Cycles',
                style: {
                    left: '40px',
                    top: '8px',
                    color: 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: 'Available',
            data: [3, 2, 1, 3, 4]
        }, {
            type: 'column',
            name: 'Unavailable Scheduled',
            data: [2, 3, 5, 7, 6]
        }, {
            type: 'column',
            name: 'Unavailable Unscheduled',
            data: [2, 3, 5, 7, 6]
        }, {
            type: 'column',
            name: 'Unavailable Parts Fault',
            data: [2, 3, 5, 7, 6]
        }, {
            type: 'column',
            name: 'Unavailable Others',
            data: [4, 3, 3, 9, 0]
        }, {
            type: 'spline',
            name: 'Average',
            data: [3, 2.67, 3, 6.33, 3.33]
        }, {
            type: 'pie',
            name: 'Total Flight Cycles',
            data: [{
                name: 'Others',
                y: 13,
                color: '#4572A7' // Jane's color
            }, {
                name: 'Not Fault Found',
                y: 23,
                color: '#AA4643' // John's color
            }, {
                name: 'Fault Found',
                y: 23,
                color: '#AA4643' // John's color
            }, {
                name: 'Unscheduled',
                y: 19,
                color: '#89A54E' // Joe's color
            }],
            center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    });
}

function createChartPieLegend(){
	chart = new Highcharts.Chart({
        chart: {
            renderTo: 'containerPieLegend',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Part Number Removed, 2012'
        },
        tooltip: {
            formatter: function() {
                return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: 'Part Number Removed',
            data: [
                ['APU',   45.0],
                ['Engine',       26.8],
                {
                    name: 'Fuel Pump',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Flat',    8.5],
                ['Cable',     6.2],
                ['DVD',   0.7]
            ]
        }]
    });
}

function createChartDynamicUpdate(){
	Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'containerDynamicUpdate',
            type: 'spline',
            marginRight: 10,
            events: {
                load: function() {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function() {
                        var x = (new Date()).getTime(), // current time
                            y = Math.random();
                        series.addPoint([x, y], true, true);
                    }, 1000);
                }
            }
        },
        title: {
            text: 'Flight Hours in Time Real'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: 'Value'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function() {
                    return '<b>'+ this.series.name +'</b><br/>'+
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Random data',
            data: (function() {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i++) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random()
                    });
                }
                return data;
            })()
        }]
    });
}

function createChartColumnDrillDown(){
	var colors = Highcharts.getOptions().colors,
    categories = ['FAB', 'FAC', 'FAE', 'FAP', 'FAU'],
    name = 'Air Force',
    data = [{
            y: 55.11,
            color: colors[0],
            drilldown: {
                name: 'Air Bases FAB',
                categories: ['BANT', 'BACO', 'PAMALS', 'GTE'],
                data: [10.85, 7.35, 33.06, 2.81],
                color: colors[0]
            }
        }, {
            y: 21.63,
            color: colors[1],
            drilldown: {
                name: 'Air Bases FAC',
                categories: ['SAU', 'ICE', 'TRE', 'COS', 'TES'],
                data: [0.20, 0.83, 1.58, 13.12, 5.43],
                color: colors[1]
            }
        }, {
            y: 11.94,
            color: colors[2],
            drilldown: {
                name: 'Air Bases FAE',
                categories: ['Chrome 5.0', 'Chrome 6.0', 'Chrome 7.0', 'Chrome 8.0', 'Chrome 9.0',
                    'Chrome 10.0', 'Chrome 11.0', 'Chrome 12.0'],
                data: [0.12, 0.19, 0.12, 0.36, 0.32, 9.91, 0.50, 0.22],
                color: colors[2]
            }
        }, {
            y: 7.15,
            color: colors[3],
            drilldown: {
                name: 'Air Bases FAP',
                categories: ['Safari 5.0', 'Safari 4.0', 'Safari Win 5.0', 'Safari 4.1', 'Safari/Maxthon',
                    'Safari 3.1', 'Safari 4.1'],
                data: [4.55, 1.42, 0.23, 0.21, 0.20, 0.19, 0.14],
                color: colors[3]
            }
        }, {
            y: 2.14,
            color: colors[4],
            drilldown: {
                name: 'Air Bases FAB',
                categories: ['Opera 9.x', 'Opera 10.x', 'Opera 11.x'],
                data: [ 0.12, 0.37, 1.65],
                color: colors[4]
            }
        }];

	function setChart(name, categories, data, color) {
	    chart.xAxis[0].setCategories(categories);
	    chart.series[0].remove();
	    chart.addSeries({
	        name: name,
	        data: data,
	        color: color || 'white'
	    });
	}
	
	chart = new Highcharts.Chart({
	    chart: {
	        renderTo: 'containerColumnDrillDown',
	        type: 'column'
	    },
	    title: {
	        text: 'Avaliability, April, 2011'
	    },
	    subtitle: {
	        text: 'Click the columns to view Air Bases. Click again to view Air Forces.'
	    },
	    xAxis: {
	        categories: categories
	    },
	    yAxis: {
	        title: {
	            text: 'Total percent market share'
	        }
	    },
	    plotOptions: {
	        column: {
	            cursor: 'pointer',
	            point: {
	                events: {
	                    click: function() {
	                        var drilldown = this.drilldown;
	                        if (drilldown) { // drill down
	                            setChart(drilldown.name, drilldown.categories, drilldown.data, drilldown.color);
	                        } else { // restore
	                            setChart(name, categories, data);
	                        }
	                    }
	                }
	            },
	            dataLabels: {
	                enabled: true,
	                color: colors[0],
	                style: {
	                    fontWeight: 'bold'
	                },
	                formatter: function() {
	                    return this.y +'%';
	                }
	            }
	        }
	    },
	    tooltip: {
	        formatter: function() {
	            var point = this.point,
	                s = this.x +':<b>'+ this.y +'% Avaliability</b><br/>';
	            if (point.drilldown) {
	                s += 'Click to view '+ point.category +' Air Bases';
	            } else {
	                s += 'Click to return to Air Forces';
	            }
	            return s;
	        }
	    },
	    series: [{
	        name: name,
	        data: data,
	        color: 'white'
	    }],
	    exporting: {
	        enabled: false
	    }
	});
}

// Memory Heap JVM
function createOption(divId, chartType, chartTitle, chartSubTitle, categories){
    var options = {
        colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
        chart: {
            backgroundColor: {
                linearGradient: [0, 0, 500, 500],
                stops: [
                    [0, 'rgb(255, 255, 255)'],
                    [1, 'rgb(240, 240, 255)']
                ]
            },
            borderWidth: 2,
            plotBackgroundColor: 'rgba(255, 255, 255, .9)',
            plotShadow: true,
            plotBorderWidth: 1,
            renderTo: divId,
            type: chartType
        },
        title: {
            text: chartTitle,
            style: {
                color: '#000',
                font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
            }
        },
        subtitle: {
            text: chartSubTitle,
            style: {
                color: '#666666',
                font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
            }
        },
        xAxis: {
            ridLineWidth: 1,
            lineColor: '#000',
            tickColor: '#000',
            categories: $.parseJSON(categories),
            labels: {
                style: {
                    color: '#000',
                    font: '11px Trebuchet MS, Verdana, sans-serif'
                },
                formatter: function() {
                    return this.value;
                }
            },
            title: {
                style: {
                    color: '#333',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    fontFamily: 'Trebuchet MS, Verdana, sans-serif'

                }
            }
        },
        yAxis: {
            minorTickInterval: 'auto',
            lineColor: '#000',
            lineWidth: 1,
            tickWidth: 1,
            tickColor: '#000',
            title: {
                style: {
                    color: '#333',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    fontFamily: 'Trebuchet MS, Verdana, sans-serif'
                },
                text: 'Heap Memory Usage'
            },
            labels: {
                formatter: function() {
                    return this.value +'MB';
                },
                style: {
                    color: '#000',
                    font: '11px Trebuchet MS, Verdana, sans-serif'
                }
            }
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        tooltip: {
            formatter: function() {
                return ''+ this.x +': '+ Highcharts.numberFormat(this.y, 0, ',') +' MB';
            }
        },
        legend: {
            itemStyle: {
                font: '9pt Trebuchet MS, Verdana, sans-serif',
                color: 'black'

            },
            itemHoverStyle: {
                color: '#039'
            },
            itemHiddenStyle: {
                color: 'gray'
            }
        },
        labels: {
            style: {
                color: '#99b'
            }
        },
        series: []
    };
    
    return options; 
}