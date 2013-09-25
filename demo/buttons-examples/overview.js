define(['jquery'], function($) {
    'use strict';

    var data = {
        legend: 'Overview',
        description: 'Standard bootstrap buttons.',
        html:'\
            <div id="overview-buttons-container" class="demo-container">\n\
                <table><tr><td>\n\
                    <div class="demo-group">\n\
                        <button id="overviewLinkButton" type="button" class="btn btn-link">Default</button>\n\
                    </div>\n\
                    <div class="demo-group">\n\
                        <button id="overviewDefaultButton" type="button" class="btn btn-default">Default</button>\n\
                        <button id="overviewInactiveDefaultButton" type="button" class="btn btn-default disabled" disabled>Disabled</button>\n\
                    </div>\n\
                    <div class="demo-group">\n\
                        <button id="overviewPrimaryButton" type="button" class="btn btn-primary">Primary</button>\n\
                        <button id="overviewInactivePrimaryButton" type="button" class="btn btn-primary disabled" disabled>Disabled</button>\n\
                    </div>\n\
                    <div class="demo-group">\n\
                        <button id="overviewSuccessButton" type="button" class="btn btn-success">Success</button>\n\
                        <button id="overviewInactiveSuccessButton" type="button" class="btn btn-success disabled" disabled>Disabled</button>\n\
                    </div>\n\
                    <div class="demo-group">\n\
                        <button id="overviewInfoButton" type="button" class="btn btn-info">Info</button>\n\
                        <button id="overviewInactiveInfoButton" type="button" class="btn btn-info disabled" disabled>Disabled</button>\n\
                    </div>\n\
                    <div class="demo-group">\n\
                        <button id="overviewWarningButton" type="button" class="btn btn-warning">Warning</button>\n\
                        <button id="overviewInactiveWarningButton" type="button" class="btn btn-warning disabled" disabled>Disabled</button>\n\
                    </div>\n\
                    <div class="demo-group">\n\
                        <button id="overviewDangerButton" type="button" class="btn btn-danger">Danger</button>\n\
                        <button id="overviewInactiveDangerButton" type="button" class="btn btn-danger disabled" disabled>Disabled</button>\n\
                    </div>\n\
                    </td><td>\n\
                        Log:<br>\n\
                        <div id="overview-buttons-console" class="console" />\n\
                    </td></tr>\n\
                </table>\n\
            </div>',
        js: function() {
            $("#overview-buttons-container .btn").click(function(e) {
                $("#overview-buttons-console").html($("#overview-buttons-console").html() + e.target.id + " clicked.<br>");
                $("#overview-buttons-console").scrollTop($("#overview-buttons-console")[0].scrollHeight);
            });
        }
    };

    return data;
});