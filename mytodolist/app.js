let form =document.addfrm;
let text=form.add;//todo text
let addlabel=form.querySelector("label");
let ul=document.querySelector('ul');
// console.log(addlabel);
addlabel.addEventListener("click",(e)=>{
    if (text.value=="") return;
    if(ul==null){
        let ul=document.createElement('ul');  
    }

    let li=document.createElement('li');
    li.className="list-group-item d-flex justify-content-between align-items-center";
    


    let span=document.createElement('span');
    let textNode=document.createTextNode(`${text.value}`);
    span.appendChild(textNode);


    let i=document.createElement('i');
    i.className="far fa-trash-alt delete";

    li.appendChild(span);
    li.appendChild(i);
    ul.appendChild(li);
      e.stopPropagation();
    
    });
ul.addEventListener("click",(e)=>{
    let parent=e.target.parentElement;
    arr=parent.children;
    i=arr[1];
    // console.log(arr);
    // console.log(i);
    // console.log(e.target);
e.target.NodeName=="i";

if(parent!=ul&&e.target==i)
{
    

  parent.remove();  
}
e.stopPropagation();
});
 
let sform=document.querySelector("form");
 let search=sform.search;
search.addEventListener("keyup",()=>{
 //keypress lag of 1 key
let searchText=search.value;
console.log(searchText);
lists=ul.querySelectorAll("li") ;
for(li of lists){
//use inner text with li

  text=li.querySelector("span").textContent;
  console.log(text);
  result=text.indexOf(searchText)>0;
  console.log(result);
  if(result){
    li.classList.add("filtered");
  }else{
    li.classList.add("filtered");
  }
}


  




});