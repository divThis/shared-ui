define(['jquery'], function($) {
    'use strict';

    var data = {
        legend: 'Default button',
        description: 'A standard bootstrap button. Use <code>.btn .btn-default</code> classes to get the look and feel.',
        html:'\
            <div id="default-buttons-container">\n\
                <p>\n\
                    <button type="button" id="default-button" class="btn btn-default">Text</button>\n\
                </p>\n\
                <p>\n\
                    <button type="button" id="inactive-default-button" class="btn btn-default" disabled>Inactive</button>\n\
                </p>\n\
            </div>',
        js: function() {
            $("#default-buttons-container .btn").click(function(e) {
                alert(e.target.id + ' was clicked');
            });
        }
    };

    return data;
});