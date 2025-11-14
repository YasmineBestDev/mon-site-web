window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.querySelector('.layer1').style.transform = `translateY(${scrollY * 0.1}px)`;
  document.querySelector('.layer2').style.transform = `translateY(${scrollY * 0.3}px)`;
  document.querySelector('.layer3').style.transform = `translateY(${scrollY * 0.5}px)`;
});
