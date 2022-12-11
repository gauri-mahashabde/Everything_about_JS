/*const createEl = document.createElement('div')
 console.log(createEl);

 const innerhtml = createEl.innerHTML = 'i am a frontend developer'
 console.log(createEl); 
 const parentEl = document.getElementById('parent')

 parentEl.appendChild(createEl)

 console.log(parentEl);*/


/*const parentEl = document.getElementById('parent')
const firstchildEl = document.getElementById('firstchild')
 
const createEl = document.createElement('div')

const innerhtml = createEl.innerHTML = 'i am new child'

parentEl.insertBefore(createEl, firstchildEl)
  console.log(parentEl)*/

/*const firstchildEl = document.getElementById('firstchild')
const parentEl = document.getElementById('parent')

const createEl = document.createElement('div')
const innerhtml = createEl.innerHTML = 'i am a frontend developer'

parentEl.replaceChild(createEl, firstchildEl)

console.log(parentEl);*/

const firstchildEl = document.getElementById('firstchild')
 const parentEl = document.getElementById('parent')
 
 parentEl.removeChild(firstchildEl)

 console.log(parentEl)

