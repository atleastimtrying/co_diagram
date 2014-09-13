function draw_arrow(ctx, from_x, from_y, to_x, to_y, color) {
  var head_size = 8;
  ctx.beginPath();
  ctx.moveTo(from_x, from_y);
  ctx.lineTo(to_x, to_y);

  if (from_y == to_y) {
    // Horizontal Arrow
    if (from_x < to_x) {
      // Right arrow
      ctx.moveTo(to_x - head_size, to_y + head_size);
      ctx.lineTo(to_x, to_y);

      ctx.moveTo(to_x - head_size, to_y - head_size);
      ctx.lineTo(to_x, to_y);
    } else {
      // Left arrow
      ctx.moveTo(to_x + head_size, to_y + head_size);
      ctx.lineTo(to_x, to_y);

      ctx.moveTo(to_x + head_size, to_y - head_size);
      ctx.lineTo(to_x, to_y);
    }
  } else if (from_x == to_x) {
    // Vertical Arrow
    if (from_y < to_y) {
      // Down arrow
      ctx.moveTo(to_x + head_size, to_y - head_size);
      ctx.lineTo(to_x, to_y);

      ctx.moveTo(to_x - head_size, to_y - head_size);
      ctx.lineTo(to_x, to_y);
    } else {
      // Up arrow
      ctx.moveTo(to_x + head_size, to_y + head_size);
      ctx.lineTo(to_x, to_y);

      ctx.moveTo(to_x - head_size, to_y + head_size);
      ctx.lineTo(to_x, to_y);
    }
  } else {
    // Diagonal Arrow
    var diagonal_head_size = Math.sqrt(head_size * head_size * 2);
    if (from_y < to_y) {
      // Down arrow
      ctx.moveTo(to_x, to_y - diagonal_head_size);
      ctx.lineTo(to_x, to_y);
    } else {
      // Up arrow
      ctx.moveTo(to_x, to_y + diagonal_head_size);
      ctx.lineTo(to_x, to_y);
    }

    if (from_x < to_x) {
      // Right arrow
      ctx.moveTo(to_x - diagonal_head_size, to_y);
      ctx.lineTo(to_x, to_y);
    } else {
      // Left arrow
      ctx.moveTo(to_x + diagonal_head_size, to_y);
      ctx.lineTo(to_x, to_y);
    }
  }

  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.closePath();
}

var canvas = document.getElementById("c");
var context = canvas.getContext("2d");
context.lineWidth = 2;
context.textAlign = 'center';
context.textBaseline = 'middle';

// 1 
draw_arrow(context, 240, 46, 760, 46, '#3F4CFF');

context.beginPath();
context.moveTo(490, 46);
context.lineTo(490, 190);
context.strokeStyle = '#3F4CFF';
context.stroke();
context.closePath();

context.fillStyle = '#3F4CFF';
context.fillText('Principal', 500, 36);

// 2
draw_arrow(context, 760, 66, 240, 66, '#56CC1E');
draw_arrow(context, 510, 66, 510, 190, '#56CC1E');

context.fillStyle = '#56CC1E';
context.fillText('Debt Capital', 630, 76);

draw_arrow(context, 240, 250, 380, 250, '#3F4CFF'); // 3
context.fillStyle = '#3F4CFF';
context.fillText('Investment', 310, 240);

draw_arrow(context, 380, 270, 240, 270, '#56CC1E'); // 4
context.fillStyle = '#56CC1E';
context.fillText('Net Return', 310, 280);

draw_arrow(context, 610, 250, 760, 250, '#3F4CFF'); // 5
context.fillStyle = '#3F4CFF';
context.fillText('Investment', 680, 240);

draw_arrow(context, 760, 270, 610, 270, '#56CC1E'); // 6
context.fillStyle = '#56CC1E';
context.fillText('Gross Return', 680, 280);

draw_arrow(context, 490, 320, 490, 390, '#3F4CFF'); // 7
context.fillStyle = '#3F4CFF';
context.fillText('Fees', 470, 355);

draw_arrow(context, 510, 390, 510, 320, '#56CC1E'); // 8
context.fillStyle = '#56CC1E';
context.fillText('Advice & Services', 560, 355);

draw_arrow(context, 870, 100, 870, 190, '#3F4CFF'); // 9
context.fillStyle = '#3F4CFF';
context.fillText('Principal', 840, 145);

draw_arrow(context, 890, 190, 890, 100, '#56CC1E'); // 10
context.fillStyle = '#56CC1E';
context.fillText('Dept Capital', 930, 145);

draw_arrow(context, 710, 410, 800, 320, '#3F4CFF'); // 11
context.fillStyle = '#3F4CFF';
context.fillText('Technical', 710, 360);
context.fillText('Assistance', 710, 374);

draw_arrow(context, 820, 320, 710, 430, '#56CC1E'); // 12
context.fillStyle = '#56CC1E';
context.fillText('Fees', 775, 390);

context.beginPath();
context.moveTo(120, 520);
context.lineTo(120, 590);
context.lineTo(870, 590);
context.strokeStyle = '#3F4CFF';
context.stroke();
context.closePath();
draw_arrow(context, 870, 590, 870, 320, '#3F4CFF'); // 13
context.fillStyle = '#3F4CFF';
context.fillText('Direct Investment', 200, 580);

context.beginPath();
context.moveTo(890, 320);
context.lineTo(890, 610);
context.lineTo(100, 610);
context.strokeStyle = '#56CC1E';
context.stroke();
context.closePath();
draw_arrow(context, 100, 610, 100, 520, '#56CC1E'); // 14
context.fillStyle = '#56CC1E';
context.fillText('Investment Returns', 800, 620);

context.beginPath();
context.moveTo(490, 590);
context.lineTo(490, 580);
context.moveTo(490, 570);
context.lineTo(490, 560);
context.strokeStyle = '#3F4CFF';
context.stroke();
context.closePath();
draw_arrow(context, 490, 550, 490, 530, '#3F4CFF'); // 15
context.fillStyle = '#3F4CFF';
context.fillText('Fees', 470, 560);

context.beginPath();
context.moveTo(510, 530);
context.lineTo(510, 540);
context.moveTo(510, 550);
context.lineTo(510, 560);
context.moveTo(510, 570);
context.lineTo(510, 580);
context.strokeStyle = '#56CC1E';
context.stroke();
context.closePath();
draw_arrow(context, 510, 590, 510, 610, '#56CC1E'); // 16
context.fillStyle = '#56CC1E';
context.fillText('Advice & Services', 560, 560);

$(function(){
  $('#tooltip, #tooltip-bg').hide();
  var boxes = {
    "auditors": ["KPMG", "PWC", "BDO LLP", "Deloitte LLP"],
    "business": ["UnLtd", "Shaftesbury Partnership", "School for Social Entrepreneurs", "the Young Foundation", "Social Enterprise UK", "VitalSix"],
    "depository": ["Charity Bank", "Unity Trust Bank", "Triodos Bank", "Ecology Building Society"],
    "endowments": ["Esmee Fairbairn Foundation", "Lankelly Chase Foundation", "Panaphur", "Barrow Cadbury", "Omidyar Network", "City Bridge Trust"],
    "f-advisors": ["Allia", "Investing for Good", "Finance South East", "Social Finance", "Social Investment Business", "CAN Invest"],
    "financial": ["Threadneedle Investments", "Berenberg", "Deutsche Bank", "J.P. Morgan", "3i", "Legal and General"],
    "government": ["Cabinet Office Social Incubator Fund", "Office for Civil Society"],
    "i-advisors": ["Intentionality", "The Good Analyst", "New Philanthropy Capital", "New Economics Foundation", "University of Northampton", "Impact Value"],
    "ifunds": ["IV-UK", "Community Generation Fund", "Bridges Social Impact Bond Fund", "Nesta Impact Investment", "Ignite Social Enterprise", "Community Investment Fund", "Threadneedle UK Social Bond Fund", "Key Fund Resilience", "Bridges Social Entrepreneurs Fund", "Wayra UnLtd"],
    "institutional": ["London Borough of Waltham Forest Pension Fund", "European Regional Development Fund", "West Midlands Pension Fund", "Merseyside Pension Fund", "Nesta"],
    "l-advisors": ["Linklaters", "Hogan Lovells", "DLA Piper", "Bates Wells Braithwaite", "Osborne Clarke", "Ashurst"],
    "managers": ["LGT Venture Philanthropy", "Social and Sustainable Capital", "FSE Fund Managers", "Nesta Investment Management", "Social Investment Business", "Bridges Ventures", "Big Issue Invest", "Key Fund", "Threadneedle Investments"],
    "marketplace": ["EngagedX", "UnLtd", "ClearlySo", "London Stock Exchange", "Social Stock Exchange", "Ethex", "Social Enterprise UK"],
    "non-financial": ["Centrica", "Telefonica", "Places for People", "Salesforce"]
  };

  var show_tooltip = function(html){
    $('#tooltip-bg').show();
    $('#tooltip').html(html).show(); 
  };

  var hide_tooltip = function(){
    $('#tooltip-bg').hide();
    $('#tooltip').hide(); 
  };

  $.each(boxes, function(boxId, names) {
    var name_string = "";
    $(names).each(function(index, element){ 
      name_string +=  '<li>' + element + "</li>"; 
    });
    $('#' + boxId).addClass('clickable');
    $('#' + boxId).on('click', function(){
      show_tooltip(name_string);
    });
  });
  $('#tooltip, #tooltip-bg').on('click', function(){
    hide_tooltip();
  });
});