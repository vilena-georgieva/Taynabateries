
var pm_related_num2 = 4; //max e 30


//var catid ="[{PRODUCT_PROPERTY_STORE_CATEGORY}]";

var pm_rel_arg2 = "http://stores.ebay.co.uk/Tayna-Batteries/_i.html?rt=nc&_dmd=2&_sid=80803862&_trksid=p4634.c0.m14&_vc=1" ;

//var pm_rel_arg = "http://stores.ebay.co.uk/HappyBedsShop/_i.html?_fsub=[{PRODUCT_PROPERTY_STORE_CATEGORY}]&_lns=2";


//var pm_rel_arg = "http://stores.ebay.co.uk/HappyBedsShop" ;





var rel_temp = new Array();

function assign_rel2()
{
	var count; var name = 0;
	try{
	for(count = 1; count < 60; count++)
	{
		rel_temp[name] = $(".gallery").eq(count).html();
		if ( rel_temp[name] == undefined ) rel_temp[name] = '';
		name++; count++;
	};
	}catch(e){;};
	
	var h_prep = '';
	
	for(var i = 0; i < pm_related_num2; i++)
	{
		h_prep = h_prep + "<div class=\"hbrel_limit\"><table class=\"hbrel_item\">" + rel_temp[i] + "</table> </div>"

	};

	
	$(".hbrel_mel").html(h_prep);
     $('.hbrel_item').each(function(){
  $(this).append('<a class=\"buy-btn \"href="'+$(this).find('.image a').attr('href')+'"></a>');
})
}

function rel_ne()
{
	$('.pm_block_space').last().css("display","none");
	$('#pm_related').css("display","none");
}

function w_load_cat(url)
{
    var XMLHttpRequestObject = false;
    if (window.XMLHttpRequest) {
        XMLHttpRequestObject = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        XMLHttpRequestObject = new ActiveXObject("MSXML2.XMLHTTP.3.0");
    }
    if(XMLHttpRequestObject)
    {
        XMLHttpRequestObject.open("POST", 'http://mobile.pentagonhosting.co.uk/get_store_items.php');
        XMLHttpRequestObject.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        
        XMLHttpRequestObject.onreadystatechange = function()
        {
            if (XMLHttpRequestObject.readyState == 4)
            {
                if (XMLHttpRequestObject.status == 200)
                {
                    var msg = XMLHttpRequestObject.responseText;
                   $('.hbrel_mel').html(msg);
					assign_rel2();
					$('.hbrel_loading').css("display","none");	
					$('.hbrel_mel').css("display","block");
                }
                else
                {
                    rel_ne();
                }
            }
        }
        var data_params = 'url='+encodeURIComponent(url);
        XMLHttpRequestObject.send(data_params);
    }
}

w_load_cat(pm_rel_arg2);


