$(document).ready(function() {
    $(".fullscreen").css({ minHeight: window.innerHeight - 91 - 29.6 });
});

document.getElementById('dropdown').onclick = function () {

    var className = ' ' + dropdown.className + ' ';

    this.className = ~className.indexOf(' active ') ?
        className.replace(' active ', ' ') :
        this.className + ' active';
};