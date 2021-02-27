console.log("ajax learning");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log("click the fetchBtn");
    const xhr  = new XMLHttpRequest();

    //open the object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    //optional progress
    xhr.onprogress = function () {
        console.log("on progress");
    }


    xhr.onreadystatechange = function () {
        console.log('ready stage is', xhr.readyState);
    }

    xhr.onload = function () {
        if(this.status === 200){
            console.log(this.responseText);
        }else{
            console.log('some error occured');
        }
    }

    xhr.send();
}

