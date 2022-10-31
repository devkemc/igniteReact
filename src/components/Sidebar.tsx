import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

export const Sidebar = () => {
    return(

        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=100&q=60" 
            />
            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/99534117?v=4"/>
                <strong>Joaquim Kennedy</strong>
                <span>Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil</a>
            </footer>
        </aside>


        
    )
}