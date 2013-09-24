define(['jquery'], function($) {
    'use strict';

    var data = {
        legend: 'Text Input',
        html: '\
            <div id="simple-text-input-container">\n\
                <div class="form-group">\n\
                    <label for="simple-input">Label</label>\n\
                    <input type="text" id="simple-input" class="form-control" />\n\
                </div>\n\
                <div class="form-group">\n\
                    <label for="disabled-input">Label</label>\n\
                    <input type="text" id="disabled-input" class="form-control" value="Disabled" disabled />\n\
                </div>\n\
            </div>'
    };

    return data;
});
