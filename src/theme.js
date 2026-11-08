// Dark mode setting: "auto" follows the OS or browser, "on" and "off" force
// it.  Loaded in <head> so that the colors are set before the page is drawn.
(function () {
    var KEY = 'viai-doc-dark-mode';
    var media = window.matchMedia('(prefers-color-scheme: dark)');

    function load() {
        try {
            var value = localStorage.getItem(KEY);
            if (value === 'on' || value === 'off') {
                return value;
            }
        } catch (e) {
        }
        return 'auto';
    }

    function save(value) {
        try {
            if (value === 'auto') {
                localStorage.removeItem(KEY);
            } else {
                localStorage.setItem(KEY, value);
            }
        } catch (e) {
        }
    }

    function apply(value) {
        var dark = value === 'on' || (value === 'auto' && media.matches);
        document.documentElement.setAttribute('data-theme',
                dark ? 'dark' : 'light');
    }

    var mode = load();
    apply(mode);
    media.addEventListener('change', function () {
        apply(mode);
    });

    document.addEventListener('DOMContentLoaded', function () {
        var select = document.getElementById('DarkMode');
        if (!select) {
            return;
        }
        select.value = mode;
        select.addEventListener('change', function () {
            mode = select.value;
            save(mode);
            apply(mode);
        });
    });
})();
// vim:set ts=8 sts=4 sw=4 tw=0 et:
