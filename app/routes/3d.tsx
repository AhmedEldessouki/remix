import {OrbitControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import React from 'react'
import Bulb from '~/components/models/bulb'

export default function ThreeD() {
  return (
    <Canvas>
      {/*  eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <OrbitControls />
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.5} />
      <React.Suspense fallback={null}>
        <Bulb />
      </React.Suspense>
    </Canvas>
  )
}
