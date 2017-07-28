let cache = [];
let active = [];
let cacheCount = 0;

let ul = document.getElementById(`dynamic-list`);

//submit button event listener
document.getElementById(`submit-btn`).addEventListener(`click`, ()=>{
    event.preventDefault();
    let inputEle = document.getElementById(`user-input`);
    let li = document.createElement(`Li`);
    li.innerHTML = inputEle.value;

    active.push(li);
    emptyList();
    drawList(active);
    inputEle.value = null;

});

function cacheArr(arr) {
    cache.push(active.splice());
    console.log(cache);
}

function emptyList(){
    //first empty the list
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
}

function drawList(arr) {
    arr.forEach((e, i)=>{
        ul.appendChild(e);
    });
}