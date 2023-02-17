import React from 'react'

const MPic = (props) => {
    let {bid} = props;
    React.useEffect(()=>{
        console.log(bid);
    },[bid])
  return (
    <div>
        
    </div>
  )
}

export default MPic