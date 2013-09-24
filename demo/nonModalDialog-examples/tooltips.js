define(['jquery', 'bootstrap', 'widget!tm/widgets/tooltip'], function($) {
    'use strict';

    var data = {
        legend: 'Tooltips',
        description: 'This example demonstrates the positioning of tooltips. The tooltip should always be fully visible within the boundaries of the browser window, changing orientation automatically if needed.',
        html:'\
            <div id="tooltips-non-modal-container" class="demo-container row">\n\
                <p class="col-md-1"><a title="It\'s so simple to create a tooltip for my website!" data-placement="top">Top</a></p>\n\
                <p class="col-md-1"><a title="It\'s so simple to create a tooltip for my website!">Bottom</a></p>\n\
                <p class="col-md-1"><a title="It\'s so simple to create a tooltip for my website!" data-placement="left">Left</a></p>\n\
                <p class="col-md-1"><a title="It\'s so simple to create a tooltip for my website!" data-placement="right">Right</a></p>\n\
            </div>',
        js: function() {
            $("#tooltips-non-modal-container a").tmTooltip();
        }
    };

    return data;
});