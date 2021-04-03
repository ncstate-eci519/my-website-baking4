alert("Hi");
$(document).ready(function(){
	$("#toggler").click(function(){
        $(".card").toggle();
    });
});

Result Skip Results Iframe
EDIT ON
  var bbq = {};
  bbq['tomato'] = 0;
  bbq['vinegar'] = 0;
$(document).ready(function(){
  
  drawChart();
  
  $("#submit").click(function(){
      if($("#bbqtype").val()=="tomato"){
        bbq['tomato']++;
      }
      if($("#bbqtype").val()=="vinegar"){
          bbq['vinegar']++;
       }
    drawChart();
  });
  
  function drawChart(){
    var ctx = $('#myChart');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Vinegar', 'Tomato'],
            datasets: [{
                label: '# of Votes',
                data: [bbq['vinegar'], bbq['tomato']],
              backgroundColor:[
                'tan',
                'red'
              ]
            }]
            }
        });
  }
  });