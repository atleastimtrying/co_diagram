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
        url: "http://esmeefairbairn.org.uk/what-we-fund/finance-fund"
      }, 
      {
        name: "Lankelly Chase Foundation", 
        url: "http://www.lankellychase.org.uk/our_work/social_investment"
      },
      {
        name: "Panaphur",
        url: "http://www.panahpur.org/"
      },
      {
        name: "Barrow Cadbury",
        url: "http://www.barrowcadbury.org.uk/social-investment/"
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
        url: "http://www.threadneedle.co.uk/en/Intermediary/Funds/Funds-and-Prices/Prices-Data/OEICs/Retail-(Net)/Fixed-Income/UK-Social-Bond-Fund/"
      }, {
        name: "Deutsche Bank",
        url: "https://www.db.com/unitedkingdom/content/en/social_investments.html"
      }, {
        name: "J.P. Morgan",
        url: "http://www.jpmorganchase.com/corporate/Corporate-Responsibility/social-finance"
      }, {
        name: "3i",
        url: "http://www.3i.com/"
      }, {
        name: "Legal and General",
        url: "http://www.legalandgeneral.com/about-us/social-purpose/recent-news/articles/social-investment-opportunities-growing-in-the-UK.html"
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
        url: "http://www.nesta.org.uk/get-funding/impact-investments"
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
        url: "http://ignitesocialenterprise.com/"
      }, {
        name: "Telefonica",
        url: "http://wayra.org/unltd/"
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
      $('#investment_image').hide();
      $(this).removeClass('showing');
    }else{
      $('#investment_image').show();
      $(this).addClass('showing');
    }
  });

  $('#return_toggle').click(function(){
    if($(this).hasClass('showing')){
      $('#return_image').hide();
      $(this).removeClass('showing');
    }else{
      $('#return_image').show();
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

    var show_tip = function(){
      show_tooltip(name_string);
    };
    $('#' + boxId).addClass('clickable');
    $('#' + boxId).on('click', show_tip);
    if ('ontouchstart' in window) {
      //no need its touch
    }else{
      $('#' + boxId).on('mouseover', function(){
        var pos = $(this).offset();
        $('#prompt').css({top: (pos.top), left: (pos.left - $('#prompt').width() - 32) }).show();
      });
      $('#' + boxId).on('mouseout', function(){
        $('#prompt').hide();
      });
    }
  });
  $('#prompt').hide();
  $('#tooltip, #tooltip-bg').on('click', function(){
    hide_tooltip();
  });
});