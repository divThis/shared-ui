define(['jquery'], function($) {
    'use strict';

    var data = {
        legend: 'Success button',
        description: 'A standard bootstrap button. Use <code>.btn</code> <code>.btn-success</code> class to get the look and feel.',
        html:'\
            <div id="success-buttons-container">\n\
                <p>\n\
                    <button type="button" id="success-button" class="btn btn-success">Text</button>\n\
                </p>\n\
                <p>\n\
                    <button type="button" id="inactive-success-button" class="btn btn-success" disabled>Inactive</button>\n\
                </p>\n\
            </div>',
		js: function() {
            $("#success-buttons-container .btn").click(function(e) {
                alert(e.target.id + ' was clicked');
            });
        }
    };

    return data;
});