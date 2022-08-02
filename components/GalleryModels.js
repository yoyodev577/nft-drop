import React from 'react'

const GalleryModels = () => {
  return (
    <mesh rotation={[90,0,20]}>
        <boxBufferGeometry attach="geometry" args={[3,3,3]} />
        <meshNormalMaterial attach="material"/>
    </mesh>
  )
}

export default GalleryModels