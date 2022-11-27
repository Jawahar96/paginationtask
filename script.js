function createtd(element){
var td=document.createElement('element');
console.log(element);
// console.log(td);

let pagination=document.querySelector('#pagination');
// console.log(pagination)
let list=document.querySelector('#list');
// console.log(list);

let startpage=1;
let endpage=10;

var pg= async(limitperpage,page)=>{
  var data=await fetch('data.json')
  var datapage= await data.json;
  console.log(datapage);
  console.log(pg);

  page--;

let start= limitperpage*10;
let end=start+limitperpage;

let itemsperpage=data.slice(startpage,endpage)
console.log(itemsperpage);
}

var  table=document.getElementsByClassName('table');
console.log(table);

var tbody=document.createElement('tbody');

for(i=1;i<i<itemsperpage.length;i++){
  var tr=createtd('tr');
  var td1=createtd('td',itemsperpage[i].id);
  var td2=createtd('td',itemsperpage[i].name);
  var td3=createtd('td',itemsperpage[i].email);
  tbody.append(tr);
  tr.append(td1,td2,td3);
  table[0].append(tbody);
}
function setpage(itemsperpage,wrap,limitperpage){
  wrap.append(setpage);
  
  let count=Math.ceil(itemsperpage.length/limitperpage)
   for(let i=1;i<count.length;i++){
    let button=pgeBtn(i);
    wrap.append(button);
    console.log(button);
   }}


  function pgeBtn (page){
    let btn=document.createElement('button');
    btn.setAttribute('click','page');
    btn.innerHTML=page;   
     
    btn.addEventListener('click', function(){
    tbody.removeChild(tr)
    tr.removeChild(td1,td2,td3);
    table[0].removeChild(tbody)
    startpage=page;
    console.log(startpage);
     console.log(endpage);
     pagination(endpage,startpage);

    })
    return btn;
  }  

}

createtd(); 

 

