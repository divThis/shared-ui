define(['jquery', 'bootstrap', 'widget!tm/widgets/dropdownMenu', 'widget!tm/widgets/dropdown'], function($) {
    'use strict';

    var data = {
        legend: 'Overview',
        description: 'A common simple dropdown list.',
        html: '\
            <div id="dropdown-overview-container" class="demo-container">\n\
                <div class="demo-group">\n\
                    <div class="btn-group" style="display: inline-block;">\n\
                        <a id="overview-dropdown-link1" class="btn btn-default dropdown-toggle" href="javascript:void(0);">Select action<span class="caret" /></a>\n\
                        <ul class="dropdown-menu">\n\
                            <li><a data-value="Action1">Action 1</a></li>\n\
                            <li><a data-value="Action2">Action 2</a></li>\n\
                        </ul>\n\
                    </div>\n\
                    <div class="btn-group" style="display: inline-block;">\n\
                        <a id="overview-dropdown-link2" class="btn btn-default dropdown-toggle disabled" href="javascript:void(0);"><span class="caret" /></a>\n\
                        <ul class="dropdown-menu">\n\
                            <li><a data-value="Action1">Action 1</a></li>\n\
                            <li><a data-value="Action2">Action 2</a></li>\n\
                        </ul>\n\
                    </div>\n\
                </div>\n\
            </div>',
        js: function() {
            $("#overview-dropdown-link1").tmDropdown({buttonText: "Custom text"}); // to override markup text
            $("#overview-dropdown-link2").tmDropdown();
        }
    };

    return data;
});