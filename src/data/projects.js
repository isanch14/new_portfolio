import basictodo from '../assets/projects/basictodo.png'
import todob from '../assets/projects/todob.png'
import todot from '../assets/projects/todot.png'
import inventory from '../assets/projects/inventory.png'
import vuetodo from '../assets/projects/vuetodo.png'
import lookatmynotes from '../assets/projects/lookatmynotes.png'
import login from '../assets/projects/login.png'
import superherofinder from '../assets/projects/superherofinder.png'
import moviedatabase from '../assets/projects/moviedatabase.png'
import blogapp from '../assets/projects/blogapp.png'

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
    },
    {
        name: 'Look at My Notes',
        description: 'A Vue.js Application with Vuex, implementing a CRUD Notes App.',
        image: lookatmynotes,
        hashtags: ['crud', 'vuejs', 'javascript', 'tailwind', 'vuex', 'vue-router'],
        url: 'https://mynotes.israelsanchez.xyz/'
    },
    {
        name: 'The Login',
        description:
          'A Vue.js Application with Vuex, implementing a Login with Firebase in Email/Password and Google.',
        image: login,
        hashtags: [
          'firebase',
          'auth',
          'vuejs',
          'javascript',
          'tailwind',
          'vuex',
          'vue-router'
        ],
        url: 'https://thelogin.israelsanchez.xyz/'
    },
    {
        name: 'SuperHeroFinder',
        description:
          'A Vue.js Application with Vuex, consuming SuperHero DB API.',
        image: superherofinder,
        hashtags: [
          'api',
          'rest',
          'vuejs',
          'javascript',
          'tailwind',
          'vuex',
          'vue-router'
        ],
        url: 'https://superherofinder.israelsanchez.xyz/'
    },
    {
        name: 'MovieDatabase',
        description:
          'A Vue.js Application with Vuex, consuming Movies DB API.',
        image: moviedatabase,
        hashtags: [
          'api',
          'rest',
          'vuejs',
          'javascript',
          'vuetify',
          'vuex',
          'firebase'
        ],
        url: 'https://moviesdb.israelsanchez.xyz/'
    },
    {
      name: 'MyBlogApp',
      description:
        'A Vue.js Application with Vuex, consuming Blog API.',
      image: blogapp,
      hashtags: [
        'api',
        'rest',
        'vuejs',
        'javascript',
        'vuetify',
        'vuex',
        'firebase'
      ],
      url: 'https://blog.israelsanchez.xyz/'
  }
]

export default projects