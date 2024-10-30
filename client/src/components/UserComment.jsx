import React from 'react'

export const UserComment = ({comments}) => {
  return (
   <>
   {comments.map((comment)=>{
    return(
        <>
        {comment._id}
        </>
    )
   })}
   </>
  )
}
