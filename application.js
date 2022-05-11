paper.install(window);
window.onload = function () {
    // Get a reference to the canvas object
    const canvas = document.getElementById('myCanvas');
    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resize()
    window.addEventListener('resize', resize)
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);
    // Create a Paper.js Path to draw a line into it:

    for (var i = 1; i <= 6; i++) {


        var path = new paper.Path();

        path.strokeColor = 'black';
        path.strokeWidth = 4;
        var start = new paper.Point(100, (i * 15) + 100);
        path.moveTo(start);
        path.lineTo(start.add([200, 0]));


        var rectangle = new Rectangle(new Point(100, (i * 15) + 95), new Point(300, (i * 15) + 105));
        var rect = new Path.Rectangle(rectangle);
        //rect.fillColor = '#e9e9ff';
        //rect.selected = true;
        rect.onMouseDown = function (event) {
            path.rotate(3);
            paper.view.draw();
        }
    }
}
