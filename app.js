window.onload = function(){ 
    let xhr = new XMLHttpRequest;
    let url = "superheroes.php";
    let p = document.getElementsByClassName("search");
    p[0].addEventListener("click",function(){
        xhr.open('GET', 'superheroes.php', true)
        xhr.onload = function(){
            if (this.status === 200){
                alert(xhr.responseText);
            }
        }
        xhr.send();
    })
    
    
}