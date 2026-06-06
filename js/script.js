  function toggleMenu(){
    const m = document.getElementById('mobileMenu');
    m.classList.toggle('open');
  }
  function closeMenu(){
    document.getElementById('mobileMenu').classList.remove('open');
  }
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const t = document.querySelector(a.getAttribute('href'));
      if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}
    });
  });