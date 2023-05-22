import React from 'react'

const DiaryItem = (props) => {
  return (
    <div onClick={()=>{
         props.deleteItem(props.id)
    }}>
        <li>{props.text}</li>
    </div>
  )
}

export default DiaryItem