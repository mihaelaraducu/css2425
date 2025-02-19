// Aplicatia 4
function showResponsive(){
    var elements = document.getElementsByClassName("main");
    var boxes = document.getElementsByClassName("box");
    Array.prototype.forEach.call(elements, function (el) {

        if (el.style.flexDirection === "column"){
            el.style.flexDirection = "row";
            Array.prototype.forEach.call(boxes, function (box){
                box.style.width = '300px';
            });
        } else {
            el.style.flexDirection = "column";
            Array.prototype.forEach.call(boxes, function (box){
                box.style.width = '100%';
        });
    }

});
}