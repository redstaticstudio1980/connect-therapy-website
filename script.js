document.querySelectorAll('#year').forEach(el=>el.textContent=new Date().getFullYear());
const b=document.querySelector('.menu');if(b)b.addEventListener('click',()=>document.querySelector('header').classList.toggle('open'));
const form=document.querySelector('#contactForm');
if(form)form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent('Connect Therapy Website: '+d.get('subject'));const body=encodeURIComponent('Name: '+d.get('name')+'\nReply email: '+d.get('email')+'\n\nMessage:\n'+d.get('message')+'\n\nPlease note: this inquiry originated from the Connect Therapy website contact form.');window.location.href='mailto:DrBruzzeseLMHC@gmail.com?subject='+subject+'&body='+body;});
