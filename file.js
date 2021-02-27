var loader = function(e){
    let file = e.target.files;
    
    let show="Selected file : "+file[0].name;

    let output = document.getElementById("selector");
    output.innerHTML = show;
    output.classList.add('active');
};

//add event listener for input

let fileInput = document.getElementById("file");
fileInput=addEventListener("change",loader);