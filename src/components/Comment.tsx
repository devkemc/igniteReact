import { Divide, ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import styles from './Comment.module.css'

interface CommentProps{
    content:string;
    onDeleteComment: (comment: string) => void;
}

export const Comment = ({content, onDeleteComment}:CommentProps) =>{

    const [newLikes, setNewLikes] = useState(0);
    function handleDeleteComment(){
        onDeleteComment(content)
    }
    function handleNewLike(){
        setNewLikes((state) =>{
            return state + 1;
        });
    }
    
    
    return(
        <div className={styles.comment}>
            <img src="https://github.com/devkemc.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Joaquim Kennedy</strong>
                            <time title='12 de Maio às 08:05h' dateTime='2022-05-12 08:05:30'>Cerca de 1hr atrás</time>
                        </div>
                        <button title='Deletar Comentario' onClick={handleDeleteComment}>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>

                </div>
                <footer>
                    <button onClick={handleNewLike}>
                        <ThumbsUp/>
                        Aplaudir <span>{newLikes}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}