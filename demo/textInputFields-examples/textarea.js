define(['jquery'], function($) {
    'use strict';

    var data = {
        legend: 'Textarea',
        html: '\
            <div id="textarea-container">\n\
                <div class="form-group">\n\
                    <label for="textarea1">Label</label>\n\
                    <textarea id="textarea1" class="form-control" rows="3"></textarea>\n\
                </div>\n\
            </div>'
    };

    return data;
});