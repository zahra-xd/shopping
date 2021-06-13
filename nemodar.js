var myCenter = new google.maps.LatLng(37.422230, -122.084058);

function initialize() {
    var mapProp = {
        center: myCenter,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapProp);

    var marker = new google.maps.Marker({
        position: myCenter,
    });

    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
//
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['لباس', 'کفش', 'ساعت', 'لباس مجلسی', 'لوازم خانگی'],
        datasets: [{
            data: [27.92, 17.53, 14.94, 26.62, 12.99],
            backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5', '#ffd600'],
            borderWidth: 0.5,
            borderColor: '#ddd'
        }]
    },
    options: {
        title: {
            display: true,
            position: 'top',
            fontSize: 16,
            fontColor: '#111',
            padding: 20
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
        tooltips: {
            enabled: false
        },
        plugins: {
            responsive: true,
            datalabels: {
                color: '#111',
                textAlign: 'center',
                font: {
                    lineHeight: 1.6
                },
                formatter: function(value, ctx) {
                    return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';

                }
            }
        }
    }
});
//
var ctxx = document.getElementById('myChartt').getContext('2d');
var myChartt = new Chart(ctxx, {
    type: 'bar',
    data: {
        labels: ['لباس', 'لباس مجلسی', 'کفش', 'لوازم خانگی', 'زیورالات', 'تجهیزات کوهنوردی'],
        datasets: [{
            data: [84.308, 54.188, 34.118, 93.706, 63.5, 43.468],
            label: 'مجموع',

            backgroundColor: [
                'rgba(216, 27, 96, 0.6)',
                'rgba(3, 169, 244, 0.6)',
                'rgba(255, 152, 0, 0.6)',
                'rgba(29, 233, 182, 0.6)',
                'rgba(156, 39, 176, 0.6)',
                'rgba(84, 110, 122, 0.6)'
            ],
            borderColor: [
                'rgba(216, 27, 96, 1)',
                'rgba(3, 169, 244, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(29, 233, 182, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(84, 110, 122, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 25
                }
            }]
        }
    }
});
// 
var ctxx2 = document.getElementById('myChart2').getContext('2d');
var myChartt = new Chart(ctxx2, {
    type: 'line',
    data: {
        labels: ['لباس', 'لباس مجلسی', 'کفش', 'لوازم خانگی', 'زیورالات', 'تجهیزات کوهنوردی'],
        datasets: [{
            data: [84.308, 54.188, 34.118, 93.706, 63.5, 43.468],
            label: 'مجموع',

            backgroundColor: [
                // 'rgba(216, 27, 96, 0.6)',
                // 'rgba(3, 169, 244, 0.6)',
                // 'rgba(255, 152, 0, 0.6)',
                // 'rgba(29, 233, 182, 0.6)',
                // 'rgba(156, 39, 176, 0.6)',
                'rgba(151, 103, 253, 0.85)'
            ],
            borderColor: [
                'rgba(216, 27, 96, 1)',
                'rgba(3, 169, 244, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(29, 233, 182, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(84, 110, 122, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 25
                }
            }]
        }
    }
});
///
let xs = document.getElementsByClassName('sidebar_icon ')
    // var df = document.getElementsByClassName('sidbarr-panel')
var df = document.getElementById('sli-pan')

function funtogule() {
    df.style.display = "block";
    df.style.left = 0;
}

function closeslide() {
    df.style.display = "none";
    df.style.left = -270;
}