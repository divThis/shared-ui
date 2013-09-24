define([jquery], function($) {
    'use strict';

    var data = {
        legend: 'Error Text Input',
        description: 'Adding the "error" class to the form-group wrapper displays the error styles, icon, and error/help message.',
        html: '\
            <div id="error-text-input-container">\n\
                <div class="form-group has-error">\n\
                    <label for="error-text-input">Label</label>\n\
                    <input type="text" id="error-text-input" class="form-control" value="invalid text" />\n\
                    <i class="icon-error"></i>\n\
                    <span class="help-block">Error help text</span>\n\
                </div>\n\
                <div class="form-group error">\n\
                    <label for="error-textarea">Label</label>\n\
                    <textarea id="error-textarea" class="form-control" value="invalid text" />\n\
                    <i class="icon-error"></i>\n\
                    <span class="help-block">Error help text</span>\n\
                </div>\n\
                <p>\n\
                    <a href="javascript:;" id="error-toggle">Remove error CSS class</a>\n\
                </p>\n\
            </div>',
        jsExecute: function(currentElement){
            $("#error-toggle").click(function(e){
                var controlGroups = $("#error-text-input-container .form-group");
                if (controlGroups.hasClass("error")){
                    controlGroups.removeClass("error");
                    $(this).html("Add error CSS class");
                } else {
                    controlGroups.addClass("error");
                    $(this).html("Remove error CSS class");
                }

                return false;
            });
        }
    };

    return data;
});
