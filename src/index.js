import x from './x.js'
import png from './assets/1.png'

console.log(png)
const div = document.getElementById('app')
div.innerHTML = ` 
<img src="${png}">
`

const button = doucment.createElement('button')
button.innerText = '懒加载'
div.appendChild(button)
button.onclick = () => {
    const lazy = import('./lazy')
    Promise.then((module) => {
        const fn = module.default
        fn()
    }, () => {

    })
}