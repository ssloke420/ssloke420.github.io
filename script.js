(function () {

const data = PORTFOLIO_DATA;


function el(tag, opts={}) {
  const node=document.createElement(tag);

  if(opts.className)
    node.className=opts.className;

  if(opts.text!==undefined)
    node.textContent=opts.text;

  return node;
}

//comment

function renderAbout(){

const a=data.about;

document.getElementById("js-name").textContent=a.name;
document.getElementById("js-role").textContent=a.role;
document.getElementById("js-tagline").textContent=a.tagline;


a.bio.forEach(text=>{
document.getElementById("js-bio")
.appendChild(el("p",{text}));
});


[a.affiliation,a.location].forEach(x=>{
if(x)
document.getElementById("js-meta")
.appendChild(el("span",{text:x}));
});


a.links.forEach(link=>{

const a=el("a",{text:link.label});

a.href=link.url;

if(link.url.startsWith("http")){
a.target="_blank";
a.rel="noopener noreferrer";
}

document.getElementById("js-links")
.appendChild(a);

});

}



function renderCards(items,id){

const wrap=document.getElementById(id);

items.forEach((item,index)=>{

const row=el("div",{className:"project"});

row.appendChild(
el("div",
{
className:"project-index",
text:String(index+1).padStart(2,"0")
})
);


const body=el("div",{className:"project-body"});

body.appendChild(
el("h3",{text:item.title})
);

  
if(item.status)
body.appendChild(
el("p",
{
className:"project-desc",
text:item.status+" · "+item.period
})
);


body.appendChild(
el("p",
{
className:"project-desc",
text:item.description
})
);


const tags=el("div",{className:"tag-row"});

(item.tags||[]).forEach(t=>{
tags.appendChild(el("span",
{
className:"tag",
text:t
}));
});


body.appendChild(tags);

row.appendChild(body);

wrap.appendChild(row);

});

}



function renderSkills(){

const wrap=document.getElementById("js-skills");

Object.entries(data.skills).forEach(([category,items])=>{

const p=el("p");

p.appendChild(
el("strong",
{
text:category.charAt(0).toUpperCase()+category.slice(1)+": "
})
);

p.appendChild(
el("span",
{
text:items.join(", ")
})
);

wrap.appendChild(p);

});

}



function renderAchievements(){

const wrap=document.getElementById("js-achievements");


data.achievements.forEach(a=>{

const item=el("div",{className:"award"});

item.appendChild(
el("h3",{text:a.title+" — "+a.result})
);

item.appendChild(
el("p",
{
className:"award-desc",
text:a.issuer+" · "+a.year
})
);


wrap.appendChild(item);

});

}



function renderList(id,items){

const wrap=document.getElementById(id);

items.forEach(x=>{

wrap.appendChild(
el("li",{text:x})
);

});

}



function render(){

renderAbout();

renderCards(data.research,"js-research");

renderCards(data.projects,"js-projects");

renderSkills();

renderAchievements();

renderList("js-exploring",data.exploring);

renderList("js-interests",data.interests);


document.getElementById("js-year").textContent=
new Date().getFullYear();


document.title=data.about.name+" — Portfolio";

}


render();


})();
