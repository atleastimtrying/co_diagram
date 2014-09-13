//make arrows responsive
//make fore and background colours toglleable;
//make nested elements show/hide nicely;

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
var colour_1 = '#3F4CFF';
var colour_2 = '#56CC1E';
var canvas = document.getElementById("c");
var context = canvas.getContext("2d");
context.lineWidth = 1;
context.textAlign = 'center';
context.textBaseline = 'middle';

// 1 
draw_arrow(context, 240, 46, 760, 46, colour_1);

context.beginPath();
context.moveTo(490, 46);
context.lineTo(490, 190);
context.strokeStyle = colour_1;
context.stroke();
context.closePath();

context.fillStyle = colour_1;
context.fillText('Principal', 500, 36);

// 2
draw_arrow(context, 760, 66, 240, 66, colour_2);
draw_arrow(context, 510, 66, 510, 190, colour_2);

context.fillStyle = colour_2;
context.fillText('Debt Capital', 630, 76);

draw_arrow(context, 240, 250, 380, 250, colour_1); // 3
context.fillStyle = colour_1;
context.fillText('Investment', 310, 240);

draw_arrow(context, 380, 270, 240, 270, colour_2); // 4
context.fillStyle = colour_2;
context.fillText('Net Return', 310, 280);

draw_arrow(context, 610, 250, 760, 250, colour_1); // 5
context.fillStyle = colour_1;
context.fillText('Investment', 680, 240);

draw_arrow(context, 760, 270, 610, 270, colour_2); // 6
context.fillStyle = colour_2;
context.fillText('Gross Return', 680, 280);

draw_arrow(context, 490, 320, 490, 390, colour_1); // 7
context.fillStyle = colour_1;
context.fillText('Fees', 470, 355);

draw_arrow(context, 510, 390, 510, 320, colour_2); // 8
context.fillStyle = colour_2;
context.fillText('Advice & Services', 560, 355);

draw_arrow(context, 870, 100, 870, 190, colour_1); // 9
context.fillStyle = colour_1;
context.fillText('Principal', 840, 145);

draw_arrow(context, 890, 190, 890, 100, colour_2); // 10
context.fillStyle = colour_2;
context.fillText('Dept Capital', 930, 145);

draw_arrow(context, 710, 410, 800, 320, colour_1); // 11
context.fillStyle = colour_1;
context.fillText('Technical', 710, 360);
context.fillText('Assistance', 710, 374);

draw_arrow(context, 820, 320, 710, 430, colour_2); // 12
context.fillStyle = colour_2;
context.fillText('Fees', 775, 390);

context.beginPath();
context.moveTo(120, 520);
context.lineTo(120, 590);
context.lineTo(870, 590);
context.strokeStyle = colour_1;
context.stroke();
context.closePath();
draw_arrow(context, 870, 590, 870, 320, colour_1); // 13
context.fillStyle = colour_1;
context.fillText('Direct Investment', 200, 580);

context.beginPath();
context.moveTo(890, 320);
context.lineTo(890, 610);
context.lineTo(100, 610);
context.strokeStyle = colour_2;
context.stroke();
context.closePath();
draw_arrow(context, 100, 610, 100, 520, colour_2); // 14
context.fillStyle = colour_2;
context.fillText('Investment Returns', 800, 620);

context.beginPath();
context.moveTo(490, 590);
context.lineTo(490, 580);
context.moveTo(490, 570);
context.lineTo(490, 560);
context.strokeStyle = colour_1;
context.stroke();
context.closePath();
draw_arrow(context, 490, 550, 490, 530, colour_1); // 15
context.fillStyle = colour_1;
context.fillText('Fees', 470, 560);

context.beginPath();
context.moveTo(510, 530);
context.lineTo(510, 540);
context.moveTo(510, 550);
context.lineTo(510, 560);
context.moveTo(510, 570);
context.lineTo(510, 580);
context.strokeStyle = colour_2;
context.stroke();
context.closePath();
draw_arrow(context, 510, 590, 510, 610, colour_2); // 16
context.fillStyle = colour_2;
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