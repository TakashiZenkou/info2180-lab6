window.onload = function(){ 
    let xhr = new XMLHttpRequest;
    let query = "?query=";
    let url = "superheroes.php";
    let result = document.getElementById("result");
    let s = document.getElementsByClassName("name")[0];
    let p = document.getElementById("search");
    p.addEventListener("click",function(){
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4 && xhr.status === 200){
                result.innerHTML = this.responseText;
            }else{
                console.log(xhr.status);
            }
        };
        xhr.open("GET",url+query+s.value, true);
        xhr.send();
        s.value = "";
    })
}