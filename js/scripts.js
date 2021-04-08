alert("This Page is Under Construction");

$(document).ready(function(){
	$("#toggler").click(function(){
        $(".card").toggle();
    });
});

var os = {};
os['windows'] = 0;
os['mac'] = 0;
$(document).ready(function(){

  $("#dog-button").click(function(){
    var dog = $.get("https://dog.ceo/api/breeds/image/random");
    
    dog.done(function(response){
      $("#dog").show();
      $("#dog-img").attr("src", response.message);
    });
  });

drawChart();

$("#submit").click(function(){
    if($("#os").val()=="windows"){
      os['windows']++;
    }
    if($("#os").val()=="mac"){
        os['mac']++;
     }
  drawChart();
});

function drawChart(){
  var ctx = $('#myChart');
  var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: ['Windows', 'Mac'],
          datasets: [{
              label: '# of Votes',
              data: [os['windows'], os['mac']],
            backgroundColor:[
              'blue',
              'red'
            ]
          }]
          }
      });
}
});
