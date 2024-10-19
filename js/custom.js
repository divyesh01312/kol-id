$(document).ready(function () {

    // Menu Start
    $(".navbar-toggler").click(function(){
        $(this).addClass("open");
        $(".sidebar-wrp").addClass("show");
    });

    $(".sidebar-close").click(function() {
        $(this).removeClass("open");
        $(".sidebar-wrp").removeClass("show");
    });
    // Menu End

    $('.bekerjasama-logo').slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.akademi-creator-slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // autoplay: true,
        // autoplaySpeed: 2000,
		// speed: 600,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    $('.btn-group.dropup button').on('click', function() {
        $('body').toggleClass('bg-overlay');
    });

    // Remove background when clicking outside the dropdown
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.btn-group.dropup').length) {
            $('body').removeClass('bg-overlay');
        }
    });


    /* *** Instagram Graph **** */
    var options = {
        series: [
            {
                name: "Inflation",
                data: [15, 15, 21, 13, 26, 15, 15, 21, 13, 27],
            },
        ],
        chart: {
            height: 358,
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: true,
            borderColor: "#E5E6EB",
            strokeDashArray: 5,
            position: "back",
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    position: "top",
                },
            },
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + "%";
            },
            offsetY: -20,
            style: {
                fontSize: "12px",
                colors: ["#86909C"],
            },
        },
        xaxis: {
            categories: ["31 Dec ‘23", "25 Dec ‘23", "22 Dec ‘23", "19 Dec ‘23", "12 Dec ‘23", "09 Dec ‘23", "04 Dec ‘23", "03 Dec ‘23", "28 Nov ‘23", "24 Nov ‘23"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    colors: ["#86909C"],
                    fontSize: "12px",
                    fontWeight: 400,
                },
            },
        },
        yaxis: {
            show: true,
            showAlways: false,
            labels: {
                formatter: (val) => {
                    return val + "%";
                },
                style: {
                    colors: ["#86909C"],
                    fontSize: "12px",
                    fontWeight: 700,
                },
            },
        },
    };
    var chart = new ApexCharts(document.querySelector("#chart1"), options);
    chart.render();
    /* *** End Instagram Graph **** */

    /* *** TikTok Graph **** */
    var options = {
        series: [
            {
                name: "Inflation",
                data: [28, 41.79, 22, 13, 17, 13, 33,18 ,18,18],
            },
        ],
        chart: {
            height: 358,
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: true,
            borderColor: "#E5E6EB",
            strokeDashArray: 5,
            position: "back",
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    position: "top",
                },
            },
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + "%";
            },
            offsetY: -20,
            style: {
                fontSize: "12px",
                colors: ["#86909C"],
            },
        },
        xaxis: {
            categories: ["31 Dec ‘23", "25 Dec ‘23", "22 Dec ‘23", "19 Dec ‘23", "12 Dec ‘23", "09 Dec ‘23", "04 Dec ‘23", "03 Dec ‘23", "28 Nov ‘23", "24 Nov ‘23"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    colors: ["#86909C"],
                    fontSize: "12px",
                    fontWeight: 400,
                },
            },
        },
        yaxis: {
            show: true,
            showAlways: false,
            labels: {
                formatter: (val) => {
                    return val + "%";
                },
                style: {
                    colors: ["#86909C"],
                    fontSize: "12px",
                    fontWeight: 700,
                },
            },
        },
    };
    var chart = new ApexCharts(document.querySelector("#charttik1"), options);
    chart.render();

    // /* ***** ***** */

    var options = {
        series: [
            {
                name: "Inflation",
                data: [28, 41.79, 22, 13, 17, 13, 33,18 ,18,18],
            },
        ],
        chart: {
            height: 358,
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: true,
            borderColor: "#E5E6EB",
            strokeDashArray: 5,
            position: "back",
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    position: "top",
                },
            },
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + "%";
            },
            offsetY: -20,
            style: {
                fontSize: "12px",
                colors: ["#86909C"],
            },
        },
        xaxis: {
            categories: ["31 Dec ‘23", "25 Dec ‘23", "22 Dec ‘23", "19 Dec ‘23", "12 Dec ‘23", "09 Dec ‘23", "04 Dec ‘23", "03 Dec ‘23", "28 Nov ‘23", "24 Nov ‘23"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    colors: ["#86909C"],
                    fontSize: "12px",
                    fontWeight: 400,
                },
            },
        },
        yaxis: {
            show: true,
            showAlways: false,
            labels: {
                formatter: (val) => {
                    return val + "%";
                },
                style: {
                    colors: ["#86909C"],
                    fontSize: "12px",
                    fontWeight: 700,
                },
            },
        },
    };
    var chart = new ApexCharts(document.querySelector("#charttik2"), options);
    chart.render();
    /* *** End TikTok Graph **** */

    /* *** Youtube Graph **** */
    var options = {
        series: [
            {
                name: "Inflation",
                data: [0.80, 0.90, 0.82, 0.25, 0.33, 0.22, 0.37,0.37 ,0.37,0.37],
            },
        ],
        chart: {
            height: 358,
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: true,
            borderColor: "#E5E6EB",
            strokeDashArray: 5,
            position: "back",
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    position: "top",
                },
            },
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + "%";
            },
            offsetY: -20,
            style: {
                fontSize: "12px",
                colors: ["#86909C"],
            },
        },
        xaxis: {
            categories: ["31 Dec ‘23", "25 Dec ‘23", "22 Dec ‘23", "19 Dec ‘23", "12 Dec ‘23", "09 Dec ‘23", "04 Dec ‘23", "03 Dec ‘23", "28 Nov ‘23", "24 Nov ‘23"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    colors: ["#86909C"],
                    fontSize: "12px",
                    fontWeight: 400,
                },
            },
        },
        yaxis: {
            show: true,
            showAlways: false,
            labels: {
                formatter: (val) => {
                    return val + "%";
                },
                style: {
                    colors: ["#86909C"],
                    fontSize: "12px",
                    fontWeight: 700,
                },
            },
        },
    };
    var chart = new ApexCharts(document.querySelector("#chartyou1"), options);
    chart.render();

    // /** ***** ***** */

    var options = {
        series: [
            {
                name: "Inflation",
                data: [0.80, 0.90, 0.82, 0.25, 0.33, 0.22, 0.37,0.37 ,0.37,0.37],
            },
        ],
        chart: {
            height: 358,
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: true,
            borderColor: "#E5E6EB",
            strokeDashArray: 5,
            position: "back",
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    position: "top",
                },
            },
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + "%";
            },
            offsetY: -20,
            style: {
                fontSize: "12px",
                colors: ["#86909C"],
            },
        },
        xaxis: {
            categories: ["31 Dec ‘23", "25 Dec ‘23", "22 Dec ‘23", "19 Dec ‘23", "12 Dec ‘23", "09 Dec ‘23", "04 Dec ‘23", "03 Dec ‘23", "28 Nov ‘23", "24 Nov ‘23"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    colors: ["#86909C"],
                    fontSize: "12px",
                    fontWeight: 400,
                },
            },
        },
        yaxis: {
            show: true,
            showAlways: false,
            labels: {
                formatter: (val) => {
                    return val + "%";
                },
                style: {
                    colors: ["#86909C"],
                    fontSize: "12px",
                    fontWeight: 700,
                },
            },
        },
    };
    var chart = new ApexCharts(document.querySelector("#chartyou2"), options);
    chart.render();
    // /* *** End Youtube Graph **** */
    // /* **** End Chart1 **** */

    // /* **** Chart2 **** */
    var options = {
        series: [
            {
                name: "Inflation",
                data: [15, 15, 21, 13, 26, 15, 15, 21, 13, 27],
            },
        ],
        chart: {
            height: 358,
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: true,
            borderColor: "#E5E6EB",
            strokeDashArray: 5,
            position: "back",
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    position: "top",
                },
            },
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + "%";
            },
            offsetY: -20,
            style: {
                fontSize: "12px",
                colors: ["#86909C"],
            },
        },
        xaxis: {
            categories: ["31 Dec ‘23", "25 Dec ‘23", "22 Dec ‘23", "19 Dec ‘23", "12 Dec ‘23", "09 Dec ‘23", "04 Dec ‘23", "03 Dec ‘23", "28 Nov ‘23", "24 Nov ‘23"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    colors: ["#86909C"],
                    fontSize: "12px",
                    fontWeight: 400,
                },
            },
        },
        yaxis: {
            show: true,
            showAlways: false,
            labels: {
                formatter: (val) => {
                    return val + "%";
                },
                style: {
                    colors: ["#86909C"],
                    fontSize: "12px",
                    fontWeight: 700,
                },
            },
        },
    };
    var chart = new ApexCharts(document.querySelector("#chart2"), options);
    chart.render();
    // /* **** End Chart2 **** */

    // /* **** Chart3 **** */
    var options = {
        series: [
            {
                name: "Inflation",
                data: [15, 15, 21, 13, 26, 15, 15, 21, 13, 27],
            },
        ],
        chart: {
            height: 358,
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: true,
            borderColor: "#E5E6EB",
            strokeDashArray: 5,
            position: "back",
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    position: "top",
                },
            },
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + "%";
            },
            offsetY: -20,
            style: {
                fontSize: "12px",
                colors: ["#86909C"],
            },
        },
        xaxis: {
            categories: ["31 Dec ‘23", "25 Dec ‘23", "22 Dec ‘23", "19 Dec ‘23", "12 Dec ‘23", "09 Dec ‘23", "04 Dec ‘23", "03 Dec ‘23", "28 Nov ‘23", "24 Nov ‘23"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    colors: ["#86909C"],
                    fontSize: "12px",
                    fontWeight: 400,
                },
            },
        },
        yaxis: {
            show: true,
            showAlways: false,
            labels: {
                formatter: (val) => {
                    return val + "%";
                },
                style: {
                    colors: ["#86909C"],
                    fontSize: "12px",
                    fontWeight: 700,
                },
            },
        },
    };
    var chart = new ApexCharts(document.querySelector("#chart3"), options);
    chart.render();
    // /* **** End Chart3 **** */

    // /* **** Chart4 **** */
    var options = {
        series: [
            {
                name: "Inflation",
                data: [0.68, 0.77, 0.66, 0.59],
            },
        ],
        chart: {
            height: 189,
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: true,
            borderColor: "#E5E6EB",
            strokeDashArray: 5,
            position: "back",
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    position: "top",
                },
            },
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + "%";
            },
            offsetY: -20,
            style: {
                fontSize: "12px",
                colors: ["#86909C"],
            },
        },
        xaxis: {
            categories: ["All post types", "Photo post", "Video post", "Carousel post"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            style: {
                colors: ["#86909C"],
                fontSize: "9px",
                fontWeight: 400,
            },
        },
        yaxis: {
            show: true,
            showAlways: false,
            labels: {
                formatter: (val) => {
                    return val + "%";
                },
                style: {
                    colors: ["#86909C"],
                    fontSize: "12px",
                    fontWeight: 700,
                },
            },
        },
    };
    var chart = new ApexCharts(document.querySelector("#chart4"), options);
    chart.render();
    // /* **** End Chart4 **** */

    // /* **** genderdistribution **** */
    // var options = {
    //     series: [44, 55, 67],
    //     chart: {
    //         height: 350,
    //         type: 'radialBar',
    //         toolbar: {
    //             show: false
    //         }
    //     },
    //     plotOptions: {
    //         radialBar: {
    //             dataLabels: {
    //                 name: {
    //                     fontSize: '22px',
    //                 },
    //                 value: {
    //                     fontSize: '16px',
    //                 },
    //                 total: {
    //                     show: true,
    //                     label: 'Total',
    //                     formatter: function (w) {
    //                         return 249
    //                     }
    //                 }
    //             }
    //         }
    //     },
    //     labels: ['Female', 'Male', 'Other'],
    //     stroke: {
    //         lineCap: 'round',
    //     },
    //     colors: ['#1ab7ea', '#0084ff', '#39539E'],
    //     fill: {
    //         colors: ['#1ab7ea', '#0084ff', '#39539E'],
    //         type: 'gradient',
    //         gradient: {
    //             shade: 'dark',
    //             type: 'horizontal',
    //             shadeIntensity: 0.5,
    //             gradientToColors: ['#1ab7ea', '#0084ff', '#39539E'],
    //             inverseColors: false,
    //             opacityFrom: 1,
    //             opacityTo: 1,
    //             stops: [0, 100]
    //         }
    //     },
    //     legend: {
    //         position: 'bottom',
    //         horizontalAlign: 'center'
    //     }
    // };  
    
    var options = {
        series: [44, 55, 0],
        chart: {
            height: 350,
            type: 'radialBar',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w) {
                            return 249;
                        }
                    }
                }
            }
        },
        labels: ['Female', 'Male', 'Other'],
        stroke: {
            lineCap: 'round',
        },
        colors: ['#FFDA00', '#5271FF', '#D9D9D9'],
        fill: {
            colors: ['#FFDA00', '#5271FF', '#D9D9D9'],
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#FFDA00', '#5271FF', '#D9D9D9'],
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
        },
        legend: {
            show: true,
            floating: true,
            fontSize: '16px',
            position: 'right',
            offsetX: 70,
            offsetY: 100,
            labels: {
                useSeriesColors: true,
            },
            markers: {
                size: 0
            },
            formatter: function(seriesName, opts) {
                return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
            },
            itemMargin: {
                vertical: 3
            }
        },

        
        labels: ['Female', 'Male', 'Other'],
        responsive: [{
            breakpoint: undefined,
            options: {},
        }]
    };
    var chart = new ApexCharts(document.querySelector("#genderdistribution"), options);
    chart.render();
    // /* **** End genderdistribution **** */


    // /* **** genderdistributionrate **** */
    
    var options = {
        series: [74.4, 25.6, 0.0],
        chart: {
            height: 350,
            type: 'radialBar',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w) {
                            return 249;
                        }
                    }
                }
            }
        },
        labels: ['Female', 'Male', 'Other'],
        stroke: {
            lineCap: 'round',
        },
        colors: ['#00F7EF', '#000', '#D9D9D9'],
        fill: {
            colors: ['#00F7EF', '#000', '#D9D9D9'],
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#00F7EF', '#000', '#D9D9D9'],
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
        },
        legend: {
            show: true,
            floating: true,
            fontSize: '16px',
            position: 'right',
            offsetX: 70,
            offsetY: 100,
            labels: {
                useSeriesColors: true,
            },
            markers: {
                size: 0
            },
            formatter: function(seriesName, opts) {
                return " <span class='series-index'>" + opts.w.globals.series[opts.seriesIndex] + "%" + "</span> "  + "<br>" + "<span class='series-name'>" + seriesName + "</span>"   ;
            },
            itemMargin: {
                vertical: 3
            }
        },

        
        labels: ['Female', 'Male', 'Other'],
        responsive: [{
            breakpoint: undefined,
            options: {},
        }]
    };
    var chart = new ApexCharts(document.querySelector("#genderdistributionrate"), options);
    chart.render();
    // /* **** End genderdistributionrate **** */

    // /* **** follower-chart **** */
    var options = {
        series: [{
            name: "Desktops",
            data: [96, 103, 107, 114, 120]
        }],
        colors: ["#5271FF"],
        chart: {
            height: 350,
            zoom: {
                enabled: false
            },
            background: 'transparent', // Remove background color
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        grid: {
            show: true,
            borderColor: "#E5E6EB",
            strokeDashArray: 5,
            position: "back",
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        xaxis: {
            categories: ['Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024'],
        },
        yaxis: {
            tickAmount: 4, // Show only 5 ticks
            max: 120, // Set the minimum value to start from
            min: 96, // Set the minimum value to start from
            labels: {
                formatter: function (val) {
                    return (val / 10) + 'M';
                }
            }
        },
    };    

    var chart = new ApexCharts(document.querySelector("#followerchart"), options);
    chart.render();
    /* **** End follower-chart **** */

    /* **** likes-chart **** */
    var options = {
        series: [{
            name: "Desktops",
            data: [17, 16, 15.3, 22.5, 24]
        }],
        colors: ["#5271FF"],
        chart: {
            height: 350,
            zoom: {
                enabled: false
            },
            background: 'transparent', // Remove background color
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        grid: {
            show: true,
            borderColor: "#E5E6EB",
            strokeDashArray: 5,
            position: "back",
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        xaxis: {
            categories: ['Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024'],
        },
        yaxis: {
            tickAmount: 4, // Show only 5 ticks
            max: 25, // Set the minimum value to start from
            min: 15, // Set the minimum value to start from
            labels: {
                formatter: function (val) {
                    // return (val / 10) + 'M';
                    return (Math.round(val * 10) / 100).toFixed(1) + 'M';
                }
            }
        },
    };  

    var chart = new ApexCharts(document.querySelector("#likeschart"), options);
    chart.render();
    /* **** End likes-chart **** */

    // /* **** followerchartrate **** */
    var options = {
        series: [{
            name: "Desktops",
            data: [96, 103, 107, 114, 120]
        }],
        colors: ["#000"],
        chart: {
            height: 350,
            zoom: {
                enabled: false
            },
            background: 'transparent', // Remove background color
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        grid: {
            show: true,
            borderColor: "#E5E6EB",
            strokeDashArray: 5,
            position: "back",
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        xaxis: {
            categories: ['Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024'],
        },
        yaxis: {
            tickAmount: 4, // Show only 5 ticks
            max: 120, // Set the minimum value to start from
            min: 96, // Set the minimum value to start from
            labels: {
                formatter: function (val) {
                    return (val / 10) + 'M';
                }
            }
        },
    };    

    var chart = new ApexCharts(document.querySelector("#followerchartrate"), options);
    chart.render();
    /* **** End followerchartrate **** */

    /* **** likeschartrate **** */
    var options = {
        series: [{
            name: "Desktops",
            data: [17, 16, 15.3, 22.5, 24]
        }],
        colors: ["#000"],
        chart: {
            height: 350,
            zoom: {
                enabled: false
            },
            background: 'transparent', // Remove background color
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        grid: {
            show: true,
            borderColor: "#E5E6EB",
            strokeDashArray: 5,
            position: "back",
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        xaxis: {
            categories: ['Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024'],
        },
        yaxis: {
            tickAmount: 4, // Show only 5 ticks
            max: 25, // Set the minimum value to start from
            min: 15, // Set the minimum value to start from
            labels: {
                formatter: function (val) {
                    // return (val / 10) + 'M';
                    return (Math.round(val * 10) / 100).toFixed(1) + 'M';
                }
            }
        },
    };  

    var chart = new ApexCharts(document.querySelector("#likeschartrate"), options);
    chart.render();
    /* **** End likeschartrate **** */

    /* **** VRAGEN GEMAAKT CHART ***** */
    var options = {
        chart: {
            height: 250,
            type: "area",
        },
        dataLabels: {
            formatter: function (val) {
                return val + "%";
            },
            enabled: false,
        },
        series: [
            {
                name: "Series 1",
                data: [70, 70, 58, 54, 48, 46, 45, 44, 41],
            },
        ],
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100],
            },
        },
        xaxis: {
            categories: ["0","2", "4", "6", "8", "10", "12", "14","16"],
            labels: {
              style: {
                // colors: colors,
                fontSize: '12px',
                fontWeight: 400,
                colors: ["#86909C"],
              }
            }
        },
        yaxis: {
            min:0,
            max:70,
            labels: {
                formatter: (val) => {
                    return val + "%";
                },
                style: {
                    colors: ["#86909C"],
                    fontSize: "12px",
                    fontWeight: 400,
                },
            },   
        },
        grid: {
            strokeDashArray: 5,
        },
    };
    var chart = new ApexCharts(document.querySelector("#chart5"), options);
    chart.render();
    // /* **** VRAGEN GEMAAKT CHART ***** */

    // /* **** Statistieken per vraagtype All Tabs Charts **** */
    var options = {
        series: [
            {
                data: [18,10,8,7,7,6],
            },
        ],
        chart: {
            type: "bar",
            height: 350,
        },
        plotOptions: {
            bar: {
                borderRadius:0,
                horizontal: true,
                barHeight: 30,
            },
        },
        dataLabels: {
            formatter: function (val) {
                return val + "%";
            },
            offsetX: -20,
            enabled: false,
        },
        xaxis: {
            categories: ["Higher Ed", "Sports Team", "Travel", "Financial Services", "Non Profits", "F&B"],
            labels: {
                formatter: (val) => {
                    return val + "%";
                },
              style: {
                // colors: colors,
                fontSize: '12px',
                fontWeight: 400,
                colors: ["#86909C"],
              }
            }
          },
          yaxis: {
            show: true,
            showAlways: false,
            labels: {
                
                style: {
                    colors: ["#86909C"],
                    fontSize: "12px",
                    fontWeight: 400,
                },
            },
        },
        grid: {
            strokeDashArray: 5,
            xaxis: {
                lines: {
                  show: true,
                }
            },
            yaxis: {
                lines: {
                  show: false
                }
            }

        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        height: 300,
                    },
                },
            },
        ],
    };
    var chart = new ApexCharts(document.querySelector("#chart6"), options);
    chart.render();
    // /* **** End Statistieken per vraagtype All Tabs Charts **** */

    // /* **** AGE ***** */
    var options = {
        series: [{
            data: [15, 15, 21, 13, 26, 15],
        }],
        colors: ["#5271FF"],
        chart: {
            height: 358,
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: true,
            borderColor: "#E5E6EB",
            strokeDashArray: 5,
            position: "back",
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    position: "top",
                    formatter: function(val) {
                        return val;
                    },
                    offsetY: -20,
                    style: {
                        fontSize: "12px",
                        colors: ["#5271FF"],
                    },
                },
            },
        },
        xaxis: {
            categories: ["13-17", "18-24", "25-34", "35-44", "45-64", ">65"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    colors: ["#5271FF"],
                    fontSize: "12px",
                    fontWeight: 400,
                },
            },
        },
        yaxis: {
            show: true,
            showAlways: false,
            labels: {
                formatter: function(val) {
                    if ([0, 15, 30, 45, 60].includes(val)) {
                        return val;
                    } else {
                        return "";
                    }
                },
                style: {
                    colors: ["#86909C"],
                    fontSize: "12px",
                    fontWeight: 700,
                },
            },
        },
    };
    
    var chart = new ApexCharts(document.querySelector("#age"), options);
    chart.render();
    /* **** AGE ***** */

    // /* **** rateage ***** */
    var options = {
        series: [{
            data: [8, 21, 15, 2, 0.5, 0],
        }],
        colors: ["#000"],
        chart: {
            height: 358,
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: true,
            borderColor: "#E5E6EB",
            strokeDashArray: 5,
            position: "back",
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    position: "top",
                    formatter: function(val) {
                        return val;
                    },
                    offsetY: -20,
                    style: {
                        fontSize: "12px",
                        colors: ["#5271FF"],
                    },
                },
            },
        },
        xaxis: {
            categories: ["13-17", "18-24", "25-34", "35-44", "45-64", ">65"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    colors: ["#000"],
                    fontSize: "12px",
                    fontWeight: 400,
                },
            },
        },
        yaxis: {
            show: true,
            showAlways: false,
            labels: {
                formatter: function(val) {
                    if ([0, 15, 30, 45, 60].includes(val)) {
                        return val;
                    } else {
                        return "";
                    }
                },
                style: {
                    colors: ["#86909C"],
                    fontSize: "12px",
                    fontWeight: 700,
                },
            },
        },
    };
    
    var chart = new ApexCharts(document.querySelector("#rateage"), options);
    chart.render();
    /* **** rateage ***** */

    /* **** LANGUAGE ***** */
    var options = {
        series: [{
            data: [15, 15, 21, 13, 26, 15],
        }],
        colors: ["#5271FF"],
        chart: {
            height: 358,
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: true,
            borderColor: "#E5E6EB",
            strokeDashArray: 5,
            position: "back",
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    position: "top",
                    formatter: function(val) {
                        return val;
                    },
                    offsetY: -20,
                    style: {
                        fontSize: "12px",
                        colors: ["#5271FF"],
                    },
                },
            },
        },
        xaxis: {
            categories: ["13-17", "18-24", "25-34", "35-44", "45-64", ">65"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    colors: ["#5271FF"],
                    fontSize: "12px",
                    fontWeight: 400,
                },
            },
        },
        yaxis: {
            show: true,
            showAlways: false,
            labels: {
                formatter: function(val) {
                    if ([0, 15, 30, 45, 60].includes(val)) {
                        return val;
                    } else {
                        return "";
                    }
                },
                style: {
                    colors: ["#86909C"],
                    fontSize: "12px",
                    fontWeight: 700,
                },
            },
        },
    };

    var chart = new ApexCharts(document.querySelector("#language-demographics"), options);
    chart.render();
    // /* **** LANGUAGE ***** */

    // /* **** ETHNICITY ***** */
    var options = {
        series: [{
            data: [15, 15, 21, 13, 26, 15],
        }],
        colors: ["#5271FF"],
        chart: {
            height: 358,
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: true,
            borderColor: "#E5E6EB",
            strokeDashArray: 5,
            position: "back",
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    position: "top",
                    formatter: function(val) {
                        return val;
                    },
                    offsetY: -20,
                    style: {
                        fontSize: "12px",
                        colors: ["#5271FF"],
                    },
                },
            },
        },
        xaxis: {
            categories: ["13-17", "18-24", "25-34", "35-44", "45-64", ">65"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    colors: ["#5271FF"],
                    fontSize: "12px",
                    fontWeight: 400,
                },
            },
        },
        yaxis: {
            show: true,
            showAlways: false,
            labels: {
                formatter: function(val) {
                    if ([0, 15, 30, 45, 60].includes(val)) {
                        return val;
                    } else {
                        return "";
                    }
                },
                style: {
                    colors: ["#86909C"],
                    fontSize: "12px",
                    fontWeight: 700,
                },
            },
        },
    };

    var chart = new ApexCharts(document.querySelector("#ethnicity-demographics"), options);
    chart.render();
    /* **** ETHNICITY ***** */
    
    /* **** FOLLOWER-TYPES-PROGRESS ***** */
    const bars = document.querySelectorAll('.progress-bars .bar');
    const percentages = document.querySelectorAll('.follower-progress-block ul li.percentage');
    
    bars.forEach((bar, index) => {
        const percentage = parseFloat(percentages[index].textContent);
        bar.style.width = percentage + '%';
        
        const color = percentages[index].querySelector('i').classList[1].split('-')[1];
        bar.style.backgroundColor = `#${color}`;
    });
    /* **** FOLLOWER-TYPES-PROGRESS ***** */
    

    /* **** Slider New ***** */
    $(".sponsored-slider-new").slick({
        arrows: false,
        loop: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 4500,
        speed: 500,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: " 97px 0 0",
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "80px 0 0",
                },
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "80px 0 0",
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "80px 0 0",
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "80px 0 0",
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    centerPadding: " 35px 0 0",
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    centerPadding: " 35px 0 0",
                },
            },
            {
                breakpoint: 447,
                settings: {
                    slidesToShow: 1,
                    centerPadding: " 35px 0 0",
                },
            },
        ],
    });

    $('.sponsored-block button[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
        $(".sponsored-slider-new").slick("refresh");
    });
    /* ***** End Slider New **** */

    /* **** Slider ***** */
    $(".sponsored-slider").slick({
        arrows: false,
        loop: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 4500,
        speed: 500,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: " 97px 0 0",
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "80px 0 0",
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "80px 0 0",
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "300px 0 0",
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "80px 0 0",
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    centerPadding: " 35px 0 0",
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    centerPadding: " 35px 0 0",
                },
            },
            {
                breakpoint: 447,
                settings: {
                    slidesToShow: 1,
                    centerPadding: " 35px 0 0",
                },
            },
        ],
    });

    $('.sponsored-tab button[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
        $(".sponsored-slider").slick("refresh");
    });

    /* ***** End Slider **** */
   

    $("#inputTag").tagsinput('items');

    // Hide Show Password Start
    $('.pass-img').click(function() {
        var passwordField = $('#password');
        var toggleIcon = $(this);

        if (passwordField.attr('type') === 'password') {
            console.log("if");
            passwordField.attr('type', 'text');
            toggleIcon.attr('src', 'images/show-password.svg');
        } else {
            console.log("else");
            passwordField.attr('type', 'password');
            toggleIcon.attr('src', 'images/hide-password.svg');
        }
    });
    // Hide Show Password End

    function custom_template(obj) {
        var data = $(obj.element).data();
        var text = $(obj.element).text();
        if (data && data['img_src']) {
            img_src = data['img_src'];
            template = $("<div><img src=\"" + img_src + "\" /><p>" + text + "</p></div>");
            return template;
        }
    }
    var options = {
        'templateSelection': custom_template,
        'templateResult': custom_template,
        'allowClear': false,
        minimumResultsForSearch: -1,

        dropdownCssClass: "select2-search-model",

    }
    $('.select-social-icon .select2-selection').select2(options);

    // $('#example').dataTable({
    //     searching: false,
    //     "bLengthChange": false,
    //     // "bPaginate": false,
    //     // dom: 'lifrtp',
        
    // });
    

    // Logo Slider Start
    $(".logo-slider").slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        variableWidth: true,
        autoplay: true,
		autoplaySpeed: 0,
		speed: 4000,
		cssEase: 'linear',
    });
    // Logo Slider End

    $(".img-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $(".collaborated-with-kol-img-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:false,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
    });

    
});

// DataTable
var table = $('#example').DataTable({
    searching: false,
    "bLengthChange": false,
    autoWidth: false,
    // "bPaginate": false,
    // dom: 'lifrtp',
});

// DataTable
var table = $('#example1').DataTable({
    searching: false,
    "bLengthChange": false,
    "bInfo" : false
});

// Count total posts and update the header
var totalPosts = table.rows().count();
$(".track-post-content .performance-title h4").text(totalPosts + " posts");
