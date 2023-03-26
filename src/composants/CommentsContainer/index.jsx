import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { apiCall } from '../../redux/comments/actionComments'

const CommentsContainer = () => {
    const comments = useSelector(state => state.comments) 
    const dispatch = useDispatch()    
    const apiComments = () => dispatch(apiCall())

    useEffect(() => {
      apiComments()
    }, [])

    console.log(comments)
    return (
        <div>
            
            { comments.isLoading ? 'Chargment ...' 
            :
            comments.error !== '' ? <p>{comments.error.message}</p> : 
            (
            comments.comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <h4>Name : {comment.name}</h4>
                        <p>
                            {comment.body}
                        </p>
                    </div>
                )
            })
            )
            }
        </div>
    )
}

export default CommentsContainer