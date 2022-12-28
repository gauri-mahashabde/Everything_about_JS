//writing an event

//select the element
/*function toggle() {
    let btn = document.getAnimations('btn');
    let para = document.getElementById('para');
    if (para.style.display != 'none') {
      para.style.display = 'none';
    } else {
      para.style.display = 'block';
    }
  }*/

  let para = document.getElementById('para');
  para.addEventListener('mouseover',function run(){
    alert('mouseover event is triggerd');
  });