/* Relebogile Chiloane portfolio - behaviour */
(function () {
  'use strict';

  // Contact form: opens the visitor's email app with the message ready to send.
  var form = document.getElementById('rc-contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var g = function (id) { return document.getElementById(id).value; };
      var subject = g('rc-subject') + ' - message from ' + g('rc-name');
      var body = 'Name: ' + g('rc-name') + '\nEmail: ' + g('rc-email') + '\n\n' + g('rc-message');
      window.location.href = 'mailto:chil.relebogile@gmail.com?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }

  // CV page: "Print / Save as PDF" button.
  var printBtn = document.querySelector('[data-print]');
  if (printBtn) {
    printBtn.addEventListener('click', function () { window.print(); });
  }
})();
