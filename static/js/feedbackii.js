var eejs = require('ep_etherpad-lite/node/eejs');
var settings = require('ep_etherpad-lite/node/utils/Settings');

exports.eejsBlock_scripts = function (hook_name, args, cb) {
  try {
    if (settings.ep_feedback_ii.domain) {
      var domain = settings.ep_feedback_ii.domain;
      args.content = `${args.content}<script type='text/javascript' language='JavaScript' src='http://idea.informer.com/tab6.js?domain=${domain}'></script>`;
    }
  } catch (e) {
    args.content += "<script>alert('Your Idea Informer subdomain is not set in settings.json -- See the instructions in the README.md or https://npmjs.org/package/ep_feedback_ii');</script>";
    var domain = '';
  }
  return cb();
};
exports.eejsBlock_editbarMenuRight = function (hook_name, args, cb) {
  args.content = `<li><a class='feedbackiiButton' href='javascript:MyOtziv.mo_show_box();'>Feedback</a></li><li class='separator'></li>${args.content}`;
  return cb();
};
exports.eejsBlock_styles = function (hook_name, args, cb) {
  args.content += '<link href="../static/plugins/ep_feedback_ii/static/css/feedbackii.css" rel="stylesheet">';
  return cb();
};
