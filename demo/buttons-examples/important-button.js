define(['jquery'], function($) {

    var data = {
        legend: 'Important button',
        description: 'A standard bootstrap button. Use <code>.btn</code> <code>.btn-success</code> class to get the look and feel.',
        html:'\
<p>\n\
  <button type="button" id="default-state-button" class="btn btn-success">Text</button>\n\
</p>\n'+
'<p>\n\
  <button type="button" id="inactive-state-button" class="btn btn-success disabled">Inactive</button>\n\
</p>'
};

    data.setup = new Function('return ' + data.setupString).call(this);

    return data;
});