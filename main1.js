var index = 0;

function changeColors(){
    var colors = ["blue","red","purple","orange","green","yellow","pink","crimson","black","brown"];
    document.getElementsByTagName("body")[0].
    style.background = colors[index++];
    if (index > colors.length - 1)
        index = 0;
}