import React, {useRef} from 'react'
import {useGLTF} from '@react-three/drei'

export default function Bulb({...props}) {
  const group = useRef(null)
  // @ts-expect-error
  const {nodes, materials} = useGLTF('3dmodels/bulb2.gltf', true)

  return (
    <group ref={group} position={[0, 0, 3]} {...props} dispose={null}>
      <mesh
        geometry={nodes.Torus005.geometry}
        material={materials['Color - Bulb Light']}
      />
      <mesh
        geometry={nodes.Torus005_1.geometry}
        material={materials['Silver Metal']}
      />
    </group>
  )
}

useGLTF.preload('3dmodels/bulb2.gltf')
