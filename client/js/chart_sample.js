function displayPieChart() {
    
    var data = {
        labels: ["攻撃力", "知力", "すばやさ"],
        datasets: [
            {
                label: "Qiita Scouter",
                fillColor: "rgba(200,0,0,0.2)",
                strokeColor: "red",
                pointColor: "red",
                pointStrokeColor: "red",
                pointHighlightFill: "red",
                pointHighlightStroke: "red",
                data: [10780, 87010, 3927]
            }
        ]
    };
    
    var ctx = document.getElementById("radarChart").getContext("2d");
    var options = { };
    var radarChart = new Chart(ctx).Radar(data, options);
}