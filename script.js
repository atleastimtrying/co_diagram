//make arrows responsive

//nested responsivity.. scrollTo??

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
var width = 1000;
var height = 1000;
var colour_1 = '#CC9C1E';
var colour_2 = '#56CC1E';
var canvas = document.getElementById("c");
var context = canvas.getContext("2d");
context.lineWidth = 1;
context.textAlign = 'center';
context.textBaseline = 'middle';
var draw = function(){
  context.fillStyle = "white";
  context.fillRect(0,0,width, height);
  // 1 
  draw_arrow(context, 240, 46, 760, 46, colour_1);

  context.beginPath();
  context.moveTo(490, 46);
  context.lineTo(490, 170);
  context.strokeStyle = colour_1;
  context.stroke();
  context.closePath();

  context.fillStyle = colour_1;
  context.fillText('Principal', 500, 36);

  // 2
  draw_arrow(context, 760, 66, 240, 66, colour_2);
  draw_arrow(context, 510, 66, 510, 170, colour_2);

  context.fillStyle = colour_2;
  context.fillText('Debt Capital', 630, 76);

  draw_arrow(context, 240, 230, 380, 230, colour_1); // 3
  context.fillStyle = colour_1;
  context.fillText('Investment', 310, 220);

  draw_arrow(context, 380, 250, 240, 250, colour_2); // 4
  context.fillStyle = colour_2;
  context.fillText('Net Return', 310, 260);

  draw_arrow(context, 610, 230, 760, 230, colour_1); // 5
  context.fillStyle = colour_1;
  context.fillText('Investment', 680, 220);

  draw_arrow(context, 760, 250, 610, 250, colour_2); // 6
  context.fillStyle = colour_2;
  context.fillText('Gross Return', 680, 260);

  draw_arrow(context, 490, 300, 490, 370, colour_1); // 7
  context.fillStyle = colour_1;
  context.fillText('Fees', 470, 335);

  draw_arrow(context, 510, 370, 510, 300, colour_2); // 8
  context.fillStyle = colour_2;
  context.fillText('Advice & Services', 560, 335);

  draw_arrow(context, 870, 80, 870, 180, colour_1); // 9
  context.fillStyle = colour_1;
  context.fillText('Principal', 840, 135);

  draw_arrow(context, 890, 180, 890, 80, colour_2); // 10
  context.fillStyle = colour_2;
  context.fillText('Dept Capital', 930, 135);

  draw_arrow(context, 710, 380, 800, 290, colour_1); // 11
  context.fillStyle = colour_1;
  context.fillText('Technical', 710, 330);
  context.fillText('Assistance', 710, 344);

  draw_arrow(context, 820, 300, 710, 410, colour_2); // 12
  context.fillStyle = colour_2;
  context.fillText('Fees', 775, 370);

  context.beginPath();
  context.moveTo(120, 500);
  context.lineTo(120, 570);
  context.lineTo(870, 570);
  context.strokeStyle = colour_1;
  context.stroke();
  context.closePath();
  draw_arrow(context, 870, 570, 870, 300, colour_1); // 13
  context.fillStyle = colour_1;
  context.fillText('Direct Investment', 200, 560);

  context.beginPath();
  context.moveTo(890, 300);
  context.lineTo(890, 590);
  context.lineTo(100, 590);
  context.strokeStyle = colour_2;
  context.stroke();
  context.closePath();
  draw_arrow(context, 100, 590, 100, 500, colour_2); // 14
  context.fillStyle = colour_2;
  context.fillText('Investment Returns', 800, 600);

  context.beginPath();
  context.moveTo(490, 570);
  context.lineTo(490, 560);
  context.moveTo(490, 550);
  context.lineTo(490, 540);
  context.strokeStyle = colour_1;
  context.stroke();
  context.closePath();
  draw_arrow(context, 490, 530, 490, 510, colour_1); // 15
  context.fillStyle = colour_1;
  context.fillText('Fees', 470, 540);

  context.beginPath();
  context.moveTo(510, 510);
  context.lineTo(510, 520);
  context.moveTo(510, 530);
  context.lineTo(510, 540);
  context.moveTo(510, 550);
  context.lineTo(510, 560);
  context.strokeStyle = colour_2;
  context.stroke();
  context.closePath();
  draw_arrow(context, 510, 570, 510, 590, colour_2); // 16
  context.fillStyle = colour_2;
  context.fillText('Advice & Services', 560, 540);
};
draw();
$(function(){
  $('#tooltip, #tooltip-bg').hide();
  var boxes = {
    "auditors": [
      {
        name: "KMPG",
        url: "http://www.kpmg.com/uk/en/services/audit/pages/default.aspx"
      }, {
        name: "PWC",
        url: "http://www.pwc.co.uk/"
      }, {
        name: "BDO",
        url: "http://www.bdo.co.uk/"
      }, {
        name: "Deloitte",
        url: "http://www.deloitte.com/view/en_GB/uk/index.htm"
      }, {
        name: "Baker Tilly",
        url: "http://www.bakertilly.co.uk"
      }
    ],
    "business": [
      {
        name: "UnLtd",
        url: "http://unltd.org.uk/"
      }, {
        name: "Shaftesbury Partnership",
        url: "http://www.shaftesburypartnership.org/"
      }, {
        name: "School for Social Entrepreneurs",
        url: "http://www.the-sse.org/"
      }, {
        name: "the Young Foundation",
        url: "http://youngfoundation.org/"
      }, {
        name: "Social Enterprise UK",
        url: "http://www.socialenterprise.org.uk/"
      }, {
        name: "VitalSix",
        url: "http://vitalsix.co.uk/"
      }
    ],
    "depository": [
      {
        name: "Charity Bank",
        url: "http://www.charitybank.org"
      }, {
        name: "Unity Trust Bank",
        url: "http://www.unity.co.uk/"
      }, {
        name: "Triodos Bank",
        url: "http://www.triodos.co.uk/en/personal/?gclid=CLqW8NPP48ACFSEcwwoddDkA8w"
      }, {
        name: "Ecology Building Society",
        url: "http://www.ecology.co.uk/"
      }
    ],
    "endowments": [
      {
        name: "Esmee Fairbairn Foundation",
        url: "http://esmeefairbairn.org.uk/"
      }, 
      {
        name: "Lankelly Chase Foundation", 
        url: "http://www.lankellychase.org.uk/"
      },
      {
        name: "Panaphur",
        url: "http://www.panahpur.org/"
      },
      {
        name: "Barrow Cadbury",
        url: "http://www.barrowcadbury.org.uk/"
      },
      {
        name: "Omidyar Network",
        url: "http://www.omidyar.com/"
      },
      {
        name: "City Bridge Trust",
        url: "http://www.citybridgetrust.org.uk/cbt/"
      }
    ],
    "f-advisors": [
      {
        name: "Allia",
        url: "https://allia.org.uk/"
      }, {
        name: "Investing for Good",
        url: "http://www.investingforgood.co.uk/"
      }, {
        name: "FSE Group",
        url: "http://www.thefsegroup.com/"
      }, {
        name: "Social Finance",
        url: "http://www.socialfinance.org.uk/"
      }, {
        name: "Social Investment Business",
        url: "http://www.sibgroup.org.uk/"
      }, {
        name: "CAN Invest",
        url: "http://can-invest.org.uk/"
      }
    ],
    "financial": [
      {
        name: "Threadneedle Investments",
        url: "http://www.threadneedle.co.uk/"
      }, {
        name: "Deutsche Bank",
        url: "https://www.db.com/unitedkingdom/"
      }, {
        name: "J.P. Morgan",
        url: "https://www.jpmorgan.com/"
      }, {
        name: "3i",
        url: "http://www.3i.com/"
      }, {
        name: "Legal and General",
        url: "http://www.legalandgeneral.com"
      }
    ],
    "government": [
      {
        name: "Office for Civil Society",
        url: "https://www.gov.uk/government/organisations/cabinet-office"
      }, {
        name: "Department for Work and Pensions",
        url: "https://www.gov.uk/government/organisations/department-for-work-pensions"
      }, {
        name: "Department of Health",
        url: "https://www.gov.uk/government/organisations/department-of-health"
      }
    ],
    "i-advisors": [
      {
        name: "Intentionality",
        url: "http://www.intentionality.co.uk/"
      }, {
        name: "The Good Analyst",
        url: "http://www.goodanalyst.com/"
      }, {
        name: "New Philanthropy Capital",
        url: "http://www.thinknpc.org/"
      }, {
        name: "New Economics Foundation",
        url: "http://www.neweconomics.org/"
      }, {
        name: "University of Northampton",
        url: "http://www.northampton.ac.uk/"
      }, {
        name: "Impact Value",
        url: "http://www.impact-value.com/"
      }
    ],
    "ifunds": [
      {
        name: "IV-UK",
        url: "http://www.impactventuresuk.com/"
      }, {
        name: "Community Generation Fund",
        url: "http://www.thefsegroup.com/social-impact-funding/community-generation-fund"
      }, {
        name: "Bridges Social Impact Bond Fund",
        url: "http://bridgesventures.com/social-sector-funds/social-impact-bond-fund/"
      }, {
        name: "Nesta Impact Investment",
        url: "http://www.nesta.org.uk/project/nesta-impact-investments"
      }, {
        name: "Ignite Social Enterprise",
        url: "http://ignitesocialenterprise.com/"
      }, {
        name: "Community Investment Fund",
        url: "http://socialandsustainable.com/community-investment-fund/"
      }, {
        name: "Threadneedle UK Social Bond Fund",
        url: "http://www.threadneedle.co.uk/en/Intermediary/Funds/Funds-and-Prices/Prices-Data/OEICs/Retail-(Net)/Fixed-Income/UK-Social-Bond-Fund/"
      }, {
        name: "Key Fund Resilience",
        url: "https://www.thekeyfund.co.uk/special-deals"
      }, {
        name: "Bridges Social Entrepreneurs Fund",
        url: "http://bridgesventures.com/social-sector-funds/social-entrepreneurs-fund/"
      }, {
        name: "Wayra UnLtd",
        url: "http://wayra.org/unltd/"
      }
    ],
    "institutional": [
      {
        name: "London Borough of Waltham Forest Pension Fund",
        url: "http://www.walthamforest.gov.uk/Pages/index.aspx"
      }, {
        name: "European Regional Development Fund",
        url: "#"
      }, {
        name: "West Midlands Pension Fund",
        url: "#"
      }, {
        name: "Merseyside Pension Fund",
        url: "#"
      }, {
        name: "Nesta",
        url: "http://www.nesta.org.uk/"
      }
    ],
    "l-advisors": [
      {
        name: "Linklaters",
        url: "http://www.linklaters.com/pages/index.aspx"
      }, {
        name: "Hogan Lovells",
        url: "http://www.hoganlovells.com/"
      }, {
        name: "DLA Piper",
        url: "http://www.dlapiper.com/en/uk/"
      }, {
        name: "Bates Wells Braithwaite",
        url: "http://www.bwbllp.com/"
      }, {
        name: "Osborne Clarke",
        url: "http://www.osborneclarke.com/"
      }, {
        name: "Ashurst",
        url: "http://www.ashurst.com/home.aspx?id_Content=2"
      }
    ],
    "managers": [
      {
        name: "LGT Venture Philanthropy",
        url: "http://www.lgtvp.com/"
      }, {
        name: "Social and Sustainable Capital",
        url: "http://socialandsustainable.com/"
      }, {
        name: "FSE Fund Managers",
        url: "http://www.thefsegroup.com/tag/fse-fund-managers"
      }, {
        name: "Nesta Investment Management",
        url: "http://www.nestainvestments.org.uk/"
      }, {
        name: "Social Investment Business",
        url: "http://www.sibgroup.org.uk/"
      }, {
        name: "Bridges Ventures",
        url: "http://bridgesventures.com/"
      }, {
        name: "Big Issue Invest",
        url: "http://bigissueinvest.com/"
      }, {
        name: "Key Fund",
        url: "https://www.thekeyfund.co.uk"
      }, {
        name: "Threadneedle Investments",
        url: "http://www.threadneedle.co.uk/"
      }
    ],
    "marketplace": [
      {
        name: "EngagedX",
        url: "http://www.engagedinvestment.com/"
      }, {
        name: "UnLtd",
        url: "http://unltd.org.uk/"
      }, {
        name: "ClearlySo",
        url: "http://www.clearlyso.com/"
      }, {
        name: "London Stock Exchange",
        url: "http://www.londonstockexchange.com/home/homepage.htm"
      }, {
        name: "Social Stock Exchange",
        url: "http://socialstockexchange.com/splash/"
      }, {
        name: "Ethex",
        url: "https://www.ethex.org.uk/"
      }, {
        name: "Social Enterprise UK",
        url: "http://www.socialenterprise.org.uk/"
      }, {
        name: "Ashoka Financial Services",
        url: "http://sfs.ashoka.org/"
      }
    ],
    "non-financial": [
      {
        name: "Centrica",
        url: "http://www.centrica.com/"
      }, {
        name: "Telefonica",
        url: "http://www.telefonica.com/en/home/jsp/home.jsp"
      }, {
        name: "Places for People",
        url: "http://www.placesforpeople.co.uk/"
      }, {
        name: "Salesforce",
        url: "http://www.salesforcefoundation.org/"
      }
    ]
  };

  var show_tooltip = function(html){
    $('#tooltip-bg').show();
    $('#tooltip').html(html).show(); 
  };

  var hide_tooltip = function(){
    $('#tooltip-bg').hide();
    $('#tooltip').hide(); 
  };

  $('#investment_toggle').click(function(){
    if($(this).hasClass('showing')){
      colour_1 = "white";
      draw();
      $(this).removeClass('showing');
    }else{
      colour_1 = "#CC9C1E";
      draw();
      $(this).addClass('showing');
    }
  });

  $('#return_toggle').click(function(){
    if($(this).hasClass('showing')){
      colour_2 = "white";
      draw();
      $(this).removeClass('showing');
    }else{
      colour_2 = "#56CC1E";
      draw();
      $(this).addClass('showing');
    }
  });

  $.each(boxes, function(boxId, names) {
    var title = $('#' + boxId).html();
    var name_string = "<h2>" + title + "</h2>";
    name_string += '<p>For example</p>'
    $(names).each(function(index, element){ 
      name_string +=  '<li><a href="' + element.url + '" target="_blank">'+ element.name + "</a></li>"; 
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