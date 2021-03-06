define(['jquery', 'widget!tm/widgets/tooltip', 'widget!tm/widgets/popup'], function($) {
    'use strict';

    var data = {
        legend: 'Popups templating',
        description: 'This example demonstrates how to use the popups with templates.',
        html:'\
            <div id="advanced-popups-container" class="demo-container">\n\
                <button id="advanced-popups-target" type="button" class="btn btn-default target" \n\
                    title="Templated popup"\n\
                    data-custom-template-id="advanced-popup-template">Click me</button>\n\
                Hello <span id="yourName" />!\n\
                <div id="advanced-popup-template" style="height: 100px;">\n\
                    <label>Enter name<input type="text"></input></label>\n\
                    <div style="width: 100%; padding-top: 20px">\n\
                        <button id="advanced-popup-template-close" type="button" class="btn btn-primary" style="float: right; clear: both;">Close</button>\n\
                    </div>\n\
                </div>\n\
            </div>',
        js: function() {
            $(".btn.target").tmPopup({
                height: '175px'
            });
            $("#advanced-popup-template-close").click(function() {
                $('#yourName').text($("#advanced-popup-template input").val());
                $(".btn.target").tmPopup('hide');
            });
        }
    };

    return data;
});