import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CodesandboxLogo, Key } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

interface Author{
    name: string;
    role: string; 
    avatarUrl: string;
}

interface Content{
    type: string;
    content: string;
}

interface PostProps{
    author: Author;
    publishedAt: Date;
    content: Content[];
}



export const Post = ({author, publishedAt, content}: PostProps) => {

    const [newCommentText, setNewCommentText] = useState('');
    const [comments, setComments] = useState(['']);
    const publishedDateFormatted = format( publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });
    function handleCreateNewComment(event:FormEvent){
        event.preventDefault();
        setComments([...comments, newCommentText ])
        setNewCommentText('')
    }
    function handleCreateNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value);
    }
    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatorio!');
    }
    function deleteComment(comment:string){

        const commentsWithOutDeleteOne = comments.filter(comments => {
            return comments != comment;
        })
        setComments(commentsWithOutDeleteOne);
    }
    const isNewCommentEmpty = newCommentText.length == 0;
    return(
        <article className={styles.post}>

            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                    <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                        {publishedDateRelativeToNow}
                    </time>
                </div>
            </header>
            <div className={styles.content}>
                {content.map(line =>{
                    return line.type == 'paragraph' ? <p key={line.content}> {line.content}</p> : <p key={line.content} ><a href="">{line.content}</a></p>
                    }
                )}
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixei um comentario'
                    name='comment'
                    value={newCommentText}
                    onChange={handleCreateNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
                
            </form>
            <div className={styles.commentList}>
                {comments.map(comment =>{
                    return comments != null ? <Comment 
                                key={comment} 
                                content={comment} 
                                onDeleteComment={deleteComment}
                                /> : null
                })}
            </div>

        </article>
    )
}