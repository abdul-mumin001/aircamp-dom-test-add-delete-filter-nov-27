
const products=document.querySelector(".products");
const container=document.querySelector(".container");


document.querySelector("form").addEventListener("submit", appendProduct);
container.addEventListener("click", delete_button);

function appendProduct(event){
    event.preventDefault();
    if(document.querySelector("#url").value.length==0)
    alert("enter url");
    else{
    let div=document.createElement("div");
    div.setAttribute("class","item")
    const url=document.querySelector("#url").value;
    let image=document.createElement("img");
    image.src=url;

    let btn=document.createElement("button");
    btn.innerText="Delete";
    btn.setAttribute("class","delete_btn")

    div.append(image, btn);
    container.append(div);
    document.querySelector("#url").value="";
}
}
function delete_button(e){
    console.log(e.target);
    if(!(e.target.classList.contains("delete_btn")))
    return
    const deleteBtn=e.target;
    deleteBtn.parentElement.remove();

}