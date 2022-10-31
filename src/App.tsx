import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import style from "./App.module.css"

import './global.css'


function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/99534117?v=4',
        name: 'Joaquim Kennedy',
        role: 'Web Development'
      },

      content: [
        {type: 'paragraph', content:'Fala galeraa 👋'},
        {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type:'link', content:'jane.design/doctorcare'}
      ],
      publishedAt: new Date('2022-05-03 20:00:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/99534117?v=4',
        name: 'Joaquim Kennedy',
        role: 'Web Development'
      },

      content: [
        {type:'paragraph', content:'Fala galeraa 👋'},
        {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type:'link', content:'jane.design/doctorcare'}
      ],
      publishedAt: new Date('2022-05-03 20:00:00'),
    },
    {
      id: 3,
      author: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/99534117?v=4',
        name: 'Joaquim Kennedy',
        role: 'Web Development'
      },

      content: [
        {type:'paragraph', content:'Fala galeraa 👋'},
        {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type:'link', content:'jane.design/doctorcare'}
      ],
      publishedAt: new Date('2022-05-03 20:00:00'),
    }
    
  ];
  
  return (
    <div>
      <Header title='Ignite'/>
    
      <div className={style.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(posts=>{
            return(
              <Post
                key={posts.id}
                author={posts.author}
                content={posts.content}
                publishedAt={posts.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
