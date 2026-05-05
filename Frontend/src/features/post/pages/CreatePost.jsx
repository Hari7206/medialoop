import { useState , useRef } from 'react'
import React from 'react'
import "../style/createpost.scss"
import { usePost } from '../hook/usePost'
import { useNavigate } from 'react-router'

function CreatePost() {
    const navigate = useNavigate()
  const {loading , handleCreatePost} = usePost()
  const [caption, setCaption] = useState('')
  const postImageInputFieldRef = useRef(null)

  async function handleSubmit(e){
    e.preventDefault()

     const file = postImageInputFieldRef.current.files[0]

   await handleCreatePost(file , caption)
   navigate('/')
  }


  if(loading){
    return(
      <main>
        <h1>Creating post</h1>
      </main>
    )
  }
  return (
   <main className='create-post-page'>
    <div className="form-container">
      <h1>share your  Post</h1>

      <form 
      onSubmit={handleSubmit}
      >
        <label  className='post-image-label' htmlFor="postImage">select an image</label>
        <input ref={postImageInputFieldRef} hidden type="file" name='createPost' id='postImage'/>
        <input 
        value={caption}
        onChange={(e)=>{
          setCaption(e.target.value)
        }}
        type="text" 
        name='caption'
          id='caption'
            placeholder='Enter Caption'/>
        <button className='button primary-button'>Create Post</button>
      </form>
    </div>
   </main>
  )
}

export default CreatePost