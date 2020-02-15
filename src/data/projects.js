import basictodo from '../assets/projects/basictodo.png'
import todob from '../assets/projects/todob.png'
import todot from '../assets/projects/todot.png'
import inventory from '../assets/projects/inventory.png'
import vuetodo from '../assets/projects/vuetodo.png'

const projects = [
    {
        name: 'Basic Todo App',
        description: 'A Vanilla HTML, JS and CSS Todo Application',
        image: basictodo,
        hashtags: ['todo', 'html5', 'css', 'javascript'],
        url: 'https://basictodo.israelsanchez.xyz/'
    },
    {
        name: 'Todo App with Bootstrap',
        description: 'A Todo Application in Vanilla JavasCript and Bootstrap',
        image: todob,
        hashtags: ['todo', 'html5', 'javascript', 'bootstrap'],
        url: 'https://todob.israelsanchez.xyz/'
    },
    {
        name: 'Todo App with Tailwind',
        description: 'A Todo Application in Vanilla JavasCript and TailwindCSS',
        image: todot,
        hashtags: ['todo', 'html5', 'javascript', 'tailwind'],
        url: 'https://todot.israelsanchez.xyz/'
    },
    {
        name: 'Basic Inventory App',
        description: 'A Basic Inventory App in Vue.js',
        image: inventory,
        hashtags: ['inventory', 'vuejs', 'javascript', 'tailwind'],
        url: 'https://inventory.israelsanchez.xyz/'
    },
    {
        name: 'Todo App with Tailwind and Vue.js',
        description: 'A Todo Application in Vue.js and TailwindCSS',
        image: vuetodo,
        hashtags: ['todo', 'vuejs', 'javascript', 'tailwind'],
        url: 'https://vuetodo.israelsanchez.xyz/'
    }
]

export default projects