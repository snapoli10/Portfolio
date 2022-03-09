$(document).ready(function () {
    // MODAL
    var modalText = {
        painter: {
            src: 'https://snapoli10.github.io/sass-painter/'
        },
        eduprime: {
            src: 'https://snapoli10.github.io/proj-html-vuejs/'
        },
        whatsapp: {
            src: 'https://snapoli10.github.io/js-html-css-boolzap/'
        },
        wordpress: {
            src: 'https://snapoli10.github.io/htmlcss-wp/'
        },
        spotify: {
            src: 'https://snapoli10.github.io/html-css-spotifyweb/'
        },
        hubspot: {
            src: 'https://snapoli10.github.io/htmlcss-hubspot/'
        },
        fluentify: {
            src: 'https://snapoli10.github.io/htmlcss-fluentify/'
        },
        digitalocean: {
            src: 'https://snapoli10.github.io/html-css-digitalocean/'
        },
        netflix: {
            src: 'https://snapoli10.github.io/vue-boolflix/'
        }
    };

    $('#gallery .button').on('click', function () {
        fillModal(this.id);
        $('.modal-wrap').addClass('visible');
    });

    $('.close').on('click', function () {
        $('.modal-wrap, #modal .button').removeClass('visible');
    });

    $('.mask').on('click', function () {
        $('.modal-wrap, #modal .button').removeClass('visible');
    });

    function fillModal(id) {
        document.getElementById('modal').children[0].src = modalText[id].src;
    }
});
