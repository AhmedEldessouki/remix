import {OrbitControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import React from 'react'

export default function RenderThreeD({children}: {children: React.ReactChild}) {
  return (
    <Canvas>
      {/* @ts-expect-error */}
      <OrbitControls />
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.5} />
      <React.Suspense fallback={null}>{children}</React.Suspense>
    </Canvas>
  )
}
