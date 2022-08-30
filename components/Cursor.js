import React from 'react'


export const Cursor = (e) => {
    const cursorRef = React.useRef(null);
    const isDown = false;
    const mouseX = 0;
    const mouseY = 0;
    React.useEffect(()=>{
        document.addEventListener('mousemove',(e)=>{
          isDown = true;
          mouseX = e.mouseX;
          mouseY = e.mouseY;
        })
    },[])


  return (
    <div id='cursor' ref={cursorRef}/>
  )
}

