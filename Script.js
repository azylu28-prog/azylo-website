// Products
const products=[
  {name:"AZYLU Hoodie",desc:"Limited Edition / Cosmic Print",img:"assets/hoodie.jpg",link:"https://bit.ly/azyh01"},
  {name:"AZYLU Tee",desc:"Oversized / Streetwear Vibe",img:"assets/tee.jpg",link:"https://bit.ly/azyt01"},
  {name:"AZYLU Cap",desc:"Minimal Logo / One Size",img:"assets/cap.jpg",link:"https://bit.ly/azyc01"}
];

const container=document.getElementById("products");
products.forEach((p,index)=>{
  const card=document.createElement('div');
  card.className='product';
  card.innerHTML=`<img src="${p.img}" loading="lazy"><h3>${p.name}</h3><p>${p.desc}</p><a href="${p.link}" class="btn">Buy Now</a>`;
  container.appendChild(card);
});

// Reveal Products on scroll (staggered)
function reveal(){
  document.querySelectorAll('.product').forEach((item,index)=>{
    const top=item.getBoundingClientRect().top;
    if(top<window.innerHeight-50){
      setTimeout(()=>{item.classList.add('visible');}, index*150);
    }
  });
}
window.addEventListener('scroll',reveal);
reveal();

// Join Modal
const joinBtn=document.getElementById('joinBtn');
const modal=document.getElementById('thankyouModal');
const closeModal=document.getElementById('closeModal');

joinBtn.onclick=e=>{e.preventDefault(); modal.classList.add('show');}
closeModal.onclick=e=>{e.preventDefault(); modal.classList.remove('show');}
window.onclick=e=>{if(e.target==modal) modal.classList.remove('show');}

// Particles
const canvas=document.getElementById('particles');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];
for(let i=0;i<100;i++){
  particles.push({x:Math.random()*canvas.width, y:Math.random()*canvas.height, r:Math.random()*2+1, d:Math.random()*50});
}

function drawParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="rgba(255,255,255,0.3)";
    ctx.fill();
    p.y+=0.5;
    p.x += Math.sin(Date.now()*0.001 + p.d) * 0.5;
    if(p.y>canvas.height) p.y=0;
    if(p.x>canvas.width) p.x=0;
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();
window.addEventListener('resize',()=>{canvas.width=window.innerWidth; canvas.height=window.innerHeight;});