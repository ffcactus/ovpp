define(function (require) {
    var body = document.body;
    var html = document.documentElement;

    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    var width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
                           
    return {
        clear: function () {
            document.body.innerHTML = "";
        },

        init: function () {
            var canvas = document.getElementById('workspace');
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext('2d');
            ctx.fillStyle = "green";
            ctx.fillRect(0, 0, canvas.width, canvas.height);          
        }
    }
}); 