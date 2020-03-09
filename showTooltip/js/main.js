var links = document.getElementsByClassName('my-button');

for (let i = 0; i < links.length; i++) {
    links[i].onmouseover = function() {
        var tooltip = document.getElementsByClassName('tooltip');
        var too = tooltip[i];
        too.style.opacity = "1";
        too.style.visibility = "visible";
        too.style.transition = "0.5s"; // скорость воспроизведения анимации
        too.style.transitionDelay = "0.5s"; // задержка перед воспроизведением анимации
    }

    links[i].onmouseout = function() {
        var tooltip = document.getElementsByClassName('tooltip');
        var too = tooltip[i];
        too.style.opacity = "0";
        too.style.visibility = "hidden";
        too.style.transition = "0.5s"; // скорость воспроизведения анимации
        too.style.transitionDelay = "0.5s"; // задержка перед воспроизведением анимации
    }
    
}