var f7 = new Framework7({
    animateNavBackIcon:true
});

var $$ = Dom7;
var view2 = f7.addView('#view-1', {
	dynamicNavbar : true
});
var view3 = f7.addView('#view-2', {
	dynamicNavbar : true
});

var storage = window.localStorage;

function verifyValid()
{
	for ( var i = 0, len = localStorage.length; i < len; ++i )
	{
		var key = storage.key(i);

		if ( storage.getItem(key).length < 1 )
			return false;
	}

	return true;
}

function isAllergic(data)
{
	var s = storage;

	if ( s.getItem('milk') && (typeof data.allergen_contains_milk !== null)  )
		return true;

	if ( s.getItem('eggs') && (typeof data.allergen_contains_eggs !== null)  )
		return true;

	if ( s.getItem('fish') && (typeof data.allergen_contains_fish !== null)  )
		return true;

	if ( s.getItem('shellfish') && (typeof data.allergen_contains_shellfish !== null)  )
		return true;
	
	if ( s.getItem('treenuts') && (typeof data.allergen_contains_tree_nuts !== null)  )
		return true;
	
	if ( s.getItem('peanuts') && (typeof data.allergen_contains_peanuts !== null)  )
		return true;
	
	if ( s.getItem('wheat') && (typeof data.allergen_contains_wheat !== null)  )
		return true;

	if ( s.getItem('soy') && (typeof data.allergen_contains_soybeans !== null)  )
		return true;	

	if ( s.getItem('gluten') && (typeof data.allergen_contains_gluten !== null)  )
		return true;

	return false;
}

function calculateProtein()
{
	var a = parseInt(storage.getItem('age'));
	var g = storage.getItem('gender');

	switch ( g )
	{
		case 'f':
			if ( a >= 0 && a <= 3 )
				return 13;

			if ( a >= 4 && a <= 8 )
				return 19;

			if ( a >= 9 && a <= 13 )
				return 34;

			if ( a >= 14 && a <= 18 )
				return 46;

			if ( a >= 19 && a <= 30 )
				return 46;

			if ( a >= 31 && a <= 50 )
				return 46;

			if ( a >= 51 )
				return 46;
		break;
		case 'm':
			if ( a >= 0 && a <= 3 )
				return 13;

			if ( a >= 4 && a <= 8 )
				return 19;

			if ( a >= 9 && a <= 13 )
				return 34;

			if ( a >= 14 && a <= 18 )
				return 52;

			if ( a >= 19 && a <= 30 )
				return 56;

			if ( a >= 31 && a <= 50 )
				return 56;

			if ( a >= 51 )
				return 56;
		break;
	}
}

function calculateCarbs()
{
	return 130;
}

function calculateFiber()
{
	var a = parseInt(storage.getItem('age'));
	var g = storage.getItem('gender');

	switch ( g )
	{
		case 'f':
			if ( a >= 0 && a <= 3 )
				return 14;

			if ( a >= 4 && a <= 8 )
				return 17;

			if ( a >= 9 && a <= 13 )
				return 22;

			if ( a >= 14 && a <= 18 )
				return 25;

			if ( a >= 19 && a <= 30 )
				return 28;

			if ( a >= 31 && a <= 50 )
				return 45;

			if ( a >= 51 )
				return 22;
		break;
		case 'm':
			if ( a >= 0 && a <= 3 )
				return 14;

			if ( a >= 4 && a <= 8 )
				return 20;

			if ( a >= 9 && a <= 13 )
				return 25;

			if ( a >= 14 && a <= 18 )
				return 31;

			if ( a >= 19 && a <= 30 )
				return 34;

			if ( a >= 31 && a <= 50 )
				return 31;

			if ( a >= 51 )
				return 28;
		break;
	}
}

function calculateVitaminA()
{
	var a = parseInt(storage.getItem('age'));
	var g = storage.getItem('gender');

	switch ( g )
	{
		case 'f':
			if ( a >= 0 && a <= 3 )
				return 300;

			if ( a >= 4 && a <= 8 )
				return 400;

			if ( a >= 9 && a <= 13 )
				return 600;

			if ( a >= 14 && a <= 18 )
				return 700;

			if ( a >= 19 && a <= 30 )
				return 700;

			if ( a >= 31 && a <= 50 )
				return 700;

			if ( a >= 51 )
				return 700;
		break;
		case 'm':
			if ( a >= 0 && a <= 3 )
				return 300;

			if ( a >= 4 && a <= 8 )
				return 400;

			if ( a >= 9 && a <= 13 )
				return 600;

			if ( a >= 14 && a <= 18 )
				return 900;

			if ( a >= 19 && a <= 30 )
				return 900;

			if ( a >= 31 && a <= 50 )
				return 900;

			if ( a >= 51 )
				return 900;
		break;
	}
}

function calculateVitaminD()
{
	return 15;
}

function calculateVitaminC()
{
	var a = parseInt(storage.getItem('age'));
	var g = storage.getItem('gender');

	switch ( g )
	{
		case 'f':
			if ( a >= 0 && a <= 3 )
				return 15;

			if ( a >= 4 && a <= 8 )
				return 25;

			if ( a >= 9 && a <= 13 )
				return 45;

			if ( a >= 14 && a <= 18 )
				return 65;

			if ( a >= 19 && a <= 30 )
				return 75;

			if ( a >= 31 && a <= 50 )
				return 75;

			if ( a >= 51 )
				return 75;
		break;
		case 'm':
			if ( a >= 0 && a <= 3 )
				return 15;

			if ( a >= 4 && a <= 8 )
				return 25;

			if ( a >= 9 && a <= 13 )
				return 45;

			if ( a >= 14 && a <= 18 )
				return 75;

			if ( a >= 19 && a <= 30 )
				return 90;

			if ( a >= 31 && a <= 50 )
				return 90;

			if ( a >= 51 )
				return 90;
		break;
	}
}

function alertDismissed()
{

}


var key = '852f15194efa0e2b19305f86c505052a';
var appid = '00ce5593';
//var key = 'be2d59cefddceac6730d7ce5caed83c8';
//ar appid = 'c4622313';
var apiEnd = 'https://api.nutritionix.com/v1_1/';
var query = 'item?upc=';
var suffix = '&appId=' + appid + '&appKey=' + key;

$(".setting").each(function()
{
	var t = $(this);
	var n = t.attr('id');

	if ( t.attr('type') == "checkbox" )
		storage.setItem(n, t.prop('checked'));
	else if ( t.attr('type') == "select" )
		storage.setItem(n, t.children('option :selected').val());
	else
		storage.setItem(n, t.val());	
});

$(".setting").change(function()
{
	var t = $(this);
	var n = t.attr('id');

	if ( t.attr('type') == "checkbox" )
		storage.setItem(n, t.prop('checked'));
	else if ( t.attr('type') == "select" )
		storage.setItem(n, t.children('option :selected').val());
	else
		storage.setItem(n, t.val());
});

$(document).on('click', '.seeIng', function()
{
	var mainView = view2;

	var newPageContent = '\
	 <div class="navbar">\
            <div class="navbar-inner">\
            	<div class="left"><a href="#" class="back link"> <i class="icon icon-back"></i><span>Back</span></a></div>\
                <div class="center">Ingredients</div>\
                <div class="right"><img style="height: 5.5vh" src="img/NSCircle.png"></div>\
            </div>\
        </div>\
        <div class="pages">\
            <div data-page="index-1" class="page">\
                <div class="page-content" style="margin-top: 5vh">\
                	<div class="content-block-title">INGREDIENTS</div>\
					<div class="content-block">\
						' + $(this).attr('data-ing')  + '\
					</div>\
                </div>\
            </div>\
        </div>';

        var newPageContent2 = newPageContent;

		mainView.router.loadContent(newPageContent2);
		 
		mainView.router.load({
		  content: newPageContent2,
		  animatePages: false
		});	
});

$(document).on('click', '.seeIng2', function()
{
	var mainView = view3;

	var newPageContent = '\
	 <div class="navbar">\
            <div class="navbar-inner">\
            	<div class="left"><a href="#" class="back link"> <i class="icon icon-back"></i><span>Back</span></a></div>\
                <div class="center">Ingredients</div>\
                <div class="right"><img style="height: 5.5vh" src="img/NSCircle.png"></div>\
            </div>\
        </div>\
        <div class="pages">\
            <div data-page="index-1" class="page">\
                <div class="page-content" style="margin-top: 5vh">\
                	<div class="content-block-title">INGREDIENTS</div>\
					<div class="content-block">\
						' + $(this).attr('data-ing')  + '\
					</div>\
                </div>\
            </div>\
        </div>';

        var newPageContent2 = newPageContent;

		mainView.router.loadContent(newPageContent2);
		 
		mainView.router.load({
		  content: newPageContent2,
		  animatePages: false
		});	
});

$(document).on('click', '#scanbar', function()
{
	if ( verifyValid() )
	{
		cordova.plugins.barcodeScanner.scan(
			function (result)
			{
				if ( result.cancelled )
				{
					navigator.notification.alert(
						'You have cancelled the scan',
						null,
						'Could not complete the scan', 
						'Done'
					);
				}
				else
				{
					$.ajax({
						url : apiEnd + query + result.text + suffix,
						method : 'GET',
						type : 'GET',
						dataType : 'json'
					})
					.done(function(data)
					{
						if ( typeof data.item_name == "undefined" )
						{
							navigator.notification.alert(
								'Invalid or unregistered UPC',
								null,
								'Could not complete the scan', 
								'Done'
							);	
						}
						else
						{
							var mainView = view2;

							var newPageContent = '\
							 <div class="navbar">\
					                <div class="navbar-inner">\
					                	<div class="left"><a href="#" class="back link"> <i class="icon icon-back"></i><span>Back</span></a></div>\
					                    <div class="center">Item</div>\
					                    <div class="right"><img style="height: 5.5vh" src="img/NSCircle.png"></div>\
					                </div>\
					            </div>\
					            <div class="pages">\
					                <div data-page="index-1" class="page">\
					                    <div class="page-content" style="margin-top: 5vh">\
					                    	<div class="content-block-title">' + data.item_name + ' (Per serving)</div>\
											<div class="list-block" style="margin-top: 4vh">\
											  <ul>\
												<li>\
													<div class="item-content">\
												        <div class="item-inner">\
												            <div class="item-title">\
												                Calories\
												            </div>\
												            <div class="item-after">\
												                ' + data.nf_calories + '\
												            </div>\
												        </div>\
												    </div>\
												 </li>\
												<li>\
													<div class="item-content">\
												        <div class="item-inner">\
												            <div class="item-title">\
												                Cholesterol\
												            </div>\
												            <div class="item-after">\
												                ' + data.nf_cholesterol + '\
												            </div>\
												        </div>\
												    </div>\
												 </li>\
												<li>\
													<div class="item-content">\
												        <div class="item-inner">\
												            <div class="item-title">\
												                Sodium\
												            </div>\
												            <div class="item-after">\
												                ' + data.nf_sodium + '\
												            </div>\
												        </div>\
												    </div>\
												 </li>\
												<li>\
													<div class="item-content">\
												        <div class="item-inner">\
												            <div class="item-title">\
												                Total fat\
												            </div>\
												            <div class="item-after">\
												                ' + data.nf_total_fat + '\
												            </div>\
												        </div>\
												    </div>\
												 </li>\
											  </ul>\
											</div>\
<div class="content-block-title">VITAMIN/MINERAL PROFILE (Per serving)</div>\
											<div class="list-block" style="margin-top: 4vh">\
											  <ul>\
												<li>\
													<div class="item-content">\
												        <div class="item-inner">\
												            <div class="item-title">\
												                Vitamin A\
												            </div>\
												            <div class="item-after">\
												                ' + data.nf_vitamin_a_dv + '\
												            </div>\
												        </div>\
												    </div>\
												 </li>\
												<li>\
													<div class="item-content">\
												        <div class="item-inner">\
												            <div class="item-title">\
												                Vitamin C\
												            </div>\
												            <div class="item-after">\
												                ' + data.nf_vitamin_c_dv + '\
												            </div>\
												        </div>\
												    </div>\
												 </li>\
												<li>\
													<div class="item-content">\
												        <div class="item-inner">\
												            <div class="item-title">\
												                Iron\
												            </div>\
												            <div class="item-after">\
												                ' + data.nf_iron_dv + '\
												            </div>\
												        </div>\
												    </div>\
												 </li>\
												<li>\
													<div class="item-content">\
												        <div class="item-inner">\
												            <div class="item-title">\
												                Calcium\
												            </div>\
												            <div class="item-after">\
												                ' + data.nf_calcium_dv + '\
												            </div>\
												        </div>\
												    </div>\
												 </li>';

												 var allerg = '';

												 if ( isAllergic(data) )
												 {
													 	allerg = '<li>\
														<div class="item-content">\
													        <div class="item-inner">\
													            <div class="item-title">\
													                Allergic?\
													            </div>\
													            <div class="item-after">\
													                Yes\
													            </div>\
													        </div>\
													    </div>\
													 </li>';
												}
												else
												{
													 	allerg = '<li>\
														<div class="item-content">\
													        <div class="item-inner">\
													            <div class="item-title">\
													                Allergic?\
													            </div>\
													            <div class="item-after">\
													                No\
													            </div>\
													        </div>\
													    </div>\
													 </li>';													
												}

												/*TEE for men  = 

												864 − 9.72 × age + PA × (14.2 × weight + 503 × height)
TEE for women  = 
												387 − 7.31 × age + PA × (10.9 × weight + 660.7 × height)*/
											  
												if ( storage.getItem('gender') == "m" )
													var tee = 10 * storage.getItem('weight') + 6.25 * storage.getItem('height') - 5 * storage.getItem('age') + 5;
												else
													var tee = 10 * storage.getItem('weight') + 6.25 * storage.getItem('height') - 5 * storage.getItem('age') - 161;

												if ( data.nf_calories == null )
													data.nf_calories = 0;

												if ( data.nf_dietary_fiber == null )
													data.nf_dietary_fiber = 0;

												if ( data.nf_protein == null )
													data.nf_protein = 0;

												if ( data.nf_vitamin_a_dv == null )
													data.nf_vitamin_a_dv = 0;

												if ( data.nf_vitamin_c_dv == null )
													data.nf_vitamin_c_dv = 0;

												if ( data.nf_total_carbohydrate == null )
													data.nf_total_carbohydrate = 0;

											  var next = '</ul>\
											</div>\
											<div class="content-block-title">DAILY VALUE EVALUATION</div>\
											<div class="list-block" style="margin-top: 4vh">\
											  <ul>\
												<li>\
													<div class="item-content">\
												        <div class="item-inner">\
												            <div class="item-title">\
												                Calories\
												            </div>\
												            <div class="item-after">\
												                ' + Math.round((parseInt(data.nf_calories) / tee) * 100) + '%\
												            </div>\
												        </div>\
												    </div>\
												 </li>\
												<li>\
													<div class="item-content">\
												        <div class="item-inner">\
												            <div class="item-title">\
												                Fiber\
												            </div>\
												            <div class="item-after">\
												                ' + Math.round((parseInt(data.nf_dietary_fiber) / calculateFiber()) * 100) + '%\
												            </div>\
												        </div>\
												    </div>\
												 </li>\
												<li>\
													<div class="item-content">\
												        <div class="item-inner">\
												            <div class="item-title">\
												                Protein\
												            </div>\
												            <div class="item-after">\
												                ' + Math.round((parseInt(data.nf_protein) / calculateProtein()) * 100) + '%\
												            </div>\
												        </div>\
												    </div>\
												 </li>\
												<li>\
													<div class="item-content">\
												        <div class="item-inner">\
												            <div class="item-title">\
												                Vitamin A\
												            </div>\
												            <div class="item-after">\
												                ' + Math.round((parseInt(data.nf_vitamin_a_dv) / calculateVitaminA()) * 100) + '%\
												            </div>\
												        </div>\
												    </div>\
												 </li>\
												<li>\
													<div class="item-content">\
												        <div class="item-inner">\
												            <div class="item-title">\
												                Vitamin C\
												            </div>\
												            <div class="item-after">\
												                ' + Math.round((parseInt(data.nf_vitamin_c_dv) / calculateVitaminC()) * 100) + '%\
												            </div>\
												        </div>\
												    </div>\
												 </li>\
												<li>\
													<div class="item-content">\
												        <div class="item-inner">\
												            <div class="item-title">\
												                Carbs\
												            </div>\
												            <div class="item-after">\
												                ' + Math.round((parseInt(data.nf_total_carbohydrate) / calculateCarbs()) * 100) + '%\
												            </div>\
												        </div>\
												    </div>\
												 </li>\
											  </ul>\
											</div>\
											<div class="content-block">\
												<a href="#" class="seeIng button" style="width: 100%;" data-ing="' + data.nf_ingredient_statement + '">Ingredients</a>\
											</div>\
					                    </div>\
					                </div>\
					            </div>';

					            var newPageContent2 = newPageContent + allerg + next;

								mainView.router.loadContent(newPageContent2);
								 
								mainView.router.load({
								  content: newPageContent2,
								  animatePages: false
								});	
						}
					})
					.fail(function(data)
					{
						navigator.notification.alert(
							'There was an error while contacting our API',
							alertDismissed,
							'Could not complete the scan', 
							'Try Again'
						);
					});
				}
			},
			function (error)
			{
				navigator.notification.alert(
					'error',
					alertDismissed,
					'Could not complete the scan', 
					'Try Again'
				);
			},
			{
				"preferFrontCamera" : false,
				"showFlipCameraButton" : true,
				"formats" : "UPC_E,UPC_A", // default: all but PDF_417 and RSS_EXPANDED
			}
		);
	}
	else
	{
		navigator.notification.alert(
			'Please fill out all your biological information',
			alertDismissed,
			'Could not complete the scan', 
			'Try Again'
		);
	}
});

$(document).on('click', '#scanbartwice', function()
{
	if ( verifyValid() )
	{
		cordova.plugins.barcodeScanner.scan(
			function (result)
			{
				if ( result.cancelled )
				{
					navigator.notification.alert(
						'You have cancelled the scan',
						null,
						'Could not complete the scan', 
						'Done'
					);
				}
				else
				{
					$.ajax({
						url : apiEnd + query + result.text + suffix,
						method : 'GET',
						type : 'GET',
						dataType : 'json'
					})
					.done(function(data)
					{
						if ( typeof data.item_name == "undefined" )
						{
							navigator.notification.alert(
								'Invalid or unregistered UPC',
								null,
								'Could not complete the scan', 
								'Done'
							);	
						}
						else
						{
							var newPageContentNav = '\
							 <div class="navbar">\
					                <div class="navbar-inner">\
					                	<div class="left"><a href="#" class="back link"> <i class="icon icon-back"></i><span>Back</span></a></div>\
					                    <div class="center">Item</div>\
					                    <div class="right"><img style="height: 5.5vh" src="img/NSCircle.png"></div>\
					                </div>\
					            </div>\
					            <div class="pages">\
					                <div data-page="index-1" class="page">\
					                    <div class="page-content" style="margin-top: 5vh">';

					                    var firstCont = '\
					                    	<div class="content-block-title">' + data.item_name + ' (Per serving)</div>\
											<div class="list-block" style="margin-top: 4vh">\
											  <ul>\
												<li>\
													<div class="item-content">\
												        <div class="item-inner">\
												            <div class="item-title">\
												                Calories\
												            </div>\
												            <div class="item-after">\
												                ' + data.nf_calories + '\
												            </div>\
												        </div>\
												    </div>\
												 </li>\
												<li>\
													<div class="item-content">\
												        <div class="item-inner">\
												            <div class="item-title">\
												                Cholesterol\
												            </div>\
												            <div class="item-after">\
												                ' + data.nf_cholesterol + '\
												            </div>\
												        </div>\
												    </div>\
												 </li>\
												<li>\
													<div class="item-content">\
												        <div class="item-inner">\
												            <div class="item-title">\
												                Sodium\
												            </div>\
												            <div class="item-after">\
												                ' + data.nf_sodium + '\
												            </div>\
												        </div>\
												    </div>\
												 </li>\
												<li>\
													<div class="item-content">\
												        <div class="item-inner">\
												            <div class="item-title">\
												                Total fat\
												            </div>\
												            <div class="item-after">\
												                ' + data.nf_total_fat + '\
												            </div>\
												        </div>\
												    </div>\
												 </li>\
											  </ul>\
											</div>\
<div class="content-block-title">VITAMIN/MINERAL PROFILE (Per serving)</div>\
											<div class="list-block" style="margin-top: 4vh">\
											  <ul>\
												<li>\
													<div class="item-content">\
												        <div class="item-inner">\
												            <div class="item-title">\
												                Vitamin A\
												            </div>\
												            <div class="item-after">\
												                ' + data.nf_vitamin_a_dv + '\
												            </div>\
												        </div>\
												    </div>\
												 </li>\
												<li>\
													<div class="item-content">\
												        <div class="item-inner">\
												            <div class="item-title">\
												                Vitamin C\
												            </div>\
												            <div class="item-after">\
												                ' + data.nf_vitamin_c_dv + '\
												            </div>\
												        </div>\
												    </div>\
												 </li>\
												<li>\
													<div class="item-content">\
												        <div class="item-inner">\
												            <div class="item-title">\
												                Iron\
												            </div>\
												            <div class="item-after">\
												                ' + data.nf_iron_dv + '\
												            </div>\
												        </div>\
												    </div>\
												 </li>\
												<li>\
													<div class="item-content">\
												        <div class="item-inner">\
												            <div class="item-title">\
												                Calcium\
												            </div>\
												            <div class="item-after">\
												                ' + data.nf_calcium_dv + '\
												            </div>\
												        </div>\
												    </div>\
												 </li>';

												 												 var allerg = '';

												 if ( isAllergic(data) )
												 {
													 	allerg = '<li>\
														<div class="item-content">\
													        <div class="item-inner">\
													            <div class="item-title">\
													                Allergic?\
													            </div>\
													            <div class="item-after">\
													                Yes\
													            </div>\
													        </div>\
													    </div>\
													 </li>';
												}
												else
												{
													 	allerg = '<li>\
														<div class="item-content">\
													        <div class="item-inner">\
													            <div class="item-title">\
													                Allergic?\
													            </div>\
													            <div class="item-after">\
													                No\
													            </div>\
													        </div>\
													    </div>\
													 </li>';													
												}

												var suffixcont2 = '</ul>\
											</div>\
											<div class="content-block">\
												<a href="#" class="seeIng2 button" style="width: 100%;" data-ing="' + data.nf_ingredient_statement + '">Ingredients</a>\
											</div>';

										var firstCont = firstCont + suffixcont2;

					                    var suffixcont = '</div>\
					                </div>\
					            </div>';

								if ( verifyValid() )
								{
									cordova.plugins.barcodeScanner.scan(
										function (result)
										{
											if ( result.cancelled )
											{
												navigator.notification.alert(
													'You have cancelled the scan',
													null,
													'Could not complete the scan', 
													'Done'
												);
											}
											else
											{
												$.ajax({
													url : apiEnd + query + result.text + suffix,
													method : 'GET',
													type : 'GET',
													dataType : 'json'
												})
												.done(function(data2)
												{
													if ( typeof data2.item_name == "undefined" )
													{
														navigator.notification.alert(
															'Invalid or unregistered UPC',
															null,
															'Could not complete the scan', 
															'Done'
														);	
													}
													else
													{
														var mainView = view3;

														var secondCont = '<div class="content-block-title">' + data2.item_name + ' (Per serving)</div>\
																		<div class="list-block" style="margin-top: 4vh">\
																		  <ul>\
																			<li>\
																				<div class="item-content">\
																			        <div class="item-inner">\
																			            <div class="item-title">\
																			                Calories\
																			            </div>\
																			            <div class="item-after">\
																			                ' + data2.nf_calories + '\
																			            </div>\
																			        </div>\
																			    </div>\
																			 </li>\
																			<li>\
																				<div class="item-content">\
																			        <div class="item-inner">\
																			            <div class="item-title">\
																			                Cholesterol\
																			            </div>\
																			            <div class="item-after">\
																			                ' + data2.nf_cholesterol + '\
																			            </div>\
																			        </div>\
																			    </div>\
																			 </li>\
																			<li>\
																				<div class="item-content">\
																			        <div class="item-inner">\
																			            <div class="item-title">\
																			                Sodium\
																			            </div>\
																			            <div class="item-after">\
																			                ' + data2.nf_sodium + '\
																			            </div>\
																			        </div>\
																			    </div>\
																			 </li>\
																			<li>\
																				<div class="item-content">\
																			        <div class="item-inner">\
																			            <div class="item-title">\
																			                Total fat\
																			            </div>\
																			            <div class="item-after">\
																			                ' + data2.nf_total_fat + '\
																			            </div>\
																			        </div>\
																			    </div>\
																			 </li>\
																		  </ul>\
																		</div>\
							<div class="content-block-title">VITAMIN/MINERAL PROFILE (Per serving)</div>\
																		<div class="list-block" style="margin-top: 4vh">\
																		  <ul>\
																			<li>\
																				<div class="item-content">\
																			        <div class="item-inner">\
																			            <div class="item-title">\
																			                Vitamin A\
																			            </div>\
																			            <div class="item-after">\
																			                ' + data2.nf_vitamin_a_dv + '\
																			            </div>\
																			        </div>\
																			    </div>\
																			 </li>\
																			<li>\
																				<div class="item-content">\
																			        <div class="item-inner">\
																			            <div class="item-title">\
																			                Vitamin C\
																			            </div>\
																			            <div class="item-after">\
																			                ' + data2.nf_vitamin_c_dv + '\
																			            </div>\
																			        </div>\
																			    </div>\
																			 </li>\
																			<li>\
																				<div class="item-content">\
																			        <div class="item-inner">\
																			            <div class="item-title">\
																			                Iron\
																			            </div>\
																			            <div class="item-after">\
																			                ' + data2.nf_iron_dv + '\
																			            </div>\
																			        </div>\
																			    </div>\
																			 </li>\
																			<li>\
																				<div class="item-content">\
																			        <div class="item-inner">\
																			            <div class="item-title">\
																			                Calcium\
																			            </div>\
																			            <div class="item-after">\
																			                ' + data2.nf_calcium_dv + '\
																			            </div>\
																			        </div>\
																			    </div>\
																			 </li>';

												 												 var allerg2 = '';

												 if ( isAllergic(data) )
												 {
													 	allerg2 = '<li>\
														<div class="item-content">\
													        <div class="item-inner">\
													            <div class="item-title">\
													                Allergic?\
													            </div>\
													            <div class="item-after">\
													                Yes\
													            </div>\
													        </div>\
													    </div>\
													 </li>';
												}
												else
												{
													 	allerg2 = '<li>\
														<div class="item-content">\
													        <div class="item-inner">\
													            <div class="item-title">\
													                Allergic?\
													            </div>\
													            <div class="item-after">\
													                No\
													            </div>\
													        </div>\
													    </div>\
													 </li>';													
												}

												var suffixcont3 = '</ul>\
											</div>\
											<div class="content-block">\
												<a href="#" class="seeIng2 button" style="width: 100%;" data-ing="' + data2.nf_ingredient_statement + '">Ingredients</a>\
											</div>';

											var secondCont = secondCont + allerg + suffixcont3;


															var newPageContent = newPageContentNav + firstCont + secondCont + suffixcont;

															mainView.router.loadContent(newPageContent);
															 
															mainView.router.load({
															  content: newPageContent,
															  animatePages: false
															});	
													}
												})
												.fail(function(data)
												{
													navigator.notification.alert(
														'There was an error while contacting our API',
														alertDismissed,
														'Could not complete the scan', 
														'Try Again'
													);
												});
											}
										},
										function (error)
										{
											navigator.notification.alert(
												'error',
												alertDismissed,
												'Could not complete the scan', 
												'Try Again'
											);
										},
										{
											"preferFrontCamera" : false,
											"showFlipCameraButton" : true,
											"formats" : "UPC_E,UPC_A", // default: all but PDF_417 and RSS_EXPANDED
										}
									);
								}
								else
								{
									navigator.notification.alert(
										'Please fill out all your biological information',
										alertDismissed,
										'Could not complete the scan', 
										'Try Again'
									);
								}
						}
					})
					.fail(function(data)
					{
						navigator.notification.alert(
							'There was an error while contacting our API',
							alertDismissed,
							'Could not complete the scan', 
							'Try Again'
						);
					});
				}
			},
			function (error)
			{
				navigator.notification.alert(
					'error',
					alertDismissed,
					'Could not complete the scan', 
					'Try Again'
				);
			},
			{
				"preferFrontCamera" : false,
				"showFlipCameraButton" : true,
				"formats" : "UPC_E,UPC_A", // default: all but PDF_417 and RSS_EXPANDED
			}
		);
	}
	else
	{
		navigator.notification.alert(
			'Please fill out all your biological information',
			alertDismissed,
			'Could not complete the scan', 
			'Try Again'
		);
	}
});