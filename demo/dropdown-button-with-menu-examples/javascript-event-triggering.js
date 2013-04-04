define(['jquery', 'bootstrap'], function($) {
	'use strict';

	var data = {
		legend: 'Javascript events',
		description: 'Dropdown menu items trigger javascript events',
		html: '\
		    <div id="javascriptEventsContainer" class="demo-container">\n\
		    	<table><tr><td>\n\
		                <div class="btn-group">\n\
		                    <a href="javascript:void(0)" class="btn dropdown-toggle" data-toggle="dropdown">Select<span class="caret" /></a>\n\
		                    <ul class="dropdown-menu">\n\
		                        <li><a id="action1">Action 1</a></li>\n\
		                        <li><a id="action2">Action 2</a></li>\n\
		                        <li><a id="action3">Action 3</a></li>\n\
		                        <li><a id="action4">Action 4</a></li>\n\
		                        <li><a id="action5">Action 5</a></li>\n\
		                    </ul>\n\
		                </div>\n\
			        </td><td>\n\
			            Log:<br>\n\
			            <div id="javascript-events-console" class="console" />\n\
			        </td></tr>\n\
		    	</table>\n\
		    </div>',
		setupString: 'function() {\n\
			$("#javascriptEventsContainer .btn-group ul li a").click(function(e) {\n\
				$("#javascript-events-console").html($("#javascript-events-console").html() + $(e.target).attr("id") + " clicked.<br>");\n\
				$("#javascript-events-console").scrollTop($("#javascript-events-console")[0].scrollHeight);\n\
			});\n\
        }'
	};

	data.setup = new Function('return ' + data.setupString).call(this);

	return data;
});