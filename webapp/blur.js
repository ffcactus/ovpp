
window.onload = function() {
    var d = document.getElementById('find_icon').style.display;
    setInterval(function() {        
        if(document.getElementById('find_icon').style.display === 'none') {
            document.getElementById('find_icon').style.display = d;
        } else {
            document.getElementById('find_icon').style.display = 'none';
        }
    }, 3000);
};