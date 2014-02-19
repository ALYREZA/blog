//TODO: implement an equivalent to $(document.ready)
//window.onload will do the job for now.
window.onload = function() {

    var $menuIcon = document.getElementsByClassName("menu-icon")[0],
        $offCanva = document.getElementById('off-canvas');

    $menuIcon.addEventListener('click', function() {
        toggleClass($menuIcon, 'close');
        toggleClass($offCanva, 'toggled');
    }, false);

    function toggleClass(element, className) {
        if (!element || !className) {
            return;
        }

        var classString = element.className,
            nameIndex = classString.indexOf(className);

        if (nameIndex == -1) {
            classString += ' ' + className;
        }
        else {
            classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
        }
        element.className = classString;
    }

    // Open Twitter/share in a Pop-Up

}