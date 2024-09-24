"use client"

import * as THREE from 'three'
import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { Image, ScrollControls, useScroll, Billboard, Text } from '@react-three/drei'
import { generate } from 'random-words'
import { easing, geometry } from 'maath'

extend(geometry)

function Scene({ children, ...props }) {
  const ref = useRef()
  const scroll = useScroll()
  const [hovered, hover] = useState(null)

  useFrame((state, delta) => {
    ref.current.rotation.y = -scroll.offset * (Math.PI * 2)
    state.events.update()
    easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y * 2 + 4.5, 9], 0.3, delta)
    state.camera.lookAt(0, 0, 0)
  })

  return (
    <group ref={ref} {...props}>
      <Cards category="Action" from={0} len={Math.PI / 4} onPointerOver={hover} onPointerOut={hover} />
      <Cards category="Thiller" from={Math.PI / 4} len={Math.PI / 2} position={[0, 0.4, 0]} onPointerOver={hover} onPointerOut={hover} />
      <Cards category="Horror" from={Math.PI / 4 + Math.PI / 2} len={Math.PI / 2} onPointerOver={hover} onPointerOut={hover} />
      <Cards category="Romantic" from={Math.PI * 1.25} len={Math.PI * 2 - Math.PI * 1.25} position={[0, -0.4, 0]} onPointerOver={hover} onPointerOut={hover} />
      <LinkctiveCard hovered={hovered} />
    </group>
  )
}

function Cards({ category, from, len = Math.PI * 2, radius = 5.25, onPointerOver, onPointerOut, ...props }) {
  const [hovered, hover] = useState(null)
  const amount = Math.round(len * 22)
  const textPosition = from + (amount / 2 / amount) * len

  return (
    <group {...props}>
      <Billboard position={[Math.sin(textPosition) * radius * 1.4, 0.5, Math.cos(textPosition) * radius * 1.4]}>
        <Text fontSize={0.25} anchorX="center" color="black">
          {category}
        </Text>
      </Billboard>

      {Array.from({ length: amount - 3 /* minus 3 images at the end, creates a gap */ }, (_, i) => {
        const angle = from + (i / amount) * len
        return (
          <Card
            key={angle}
            onPointerOver={(e) => (e.stopPropagation(), hover(i), onPointerOver(i))}
            onPointerOut={() => (hover(null), onPointerOut(null))}
            position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]}
            rotation={[0, Math.PI / 2 + angle, 0]}
            active={hovered !== null}
            hovered={hovered === i}
            url={`/cards/cardimg${Math.floor(i % 10) + 1}.png`}
          />
        )
      })}
    </group>
  )
}

function Card({ url, active, hovered, ...props }) {
  const ref = useRef()
  useFrame((state, delta) => {
    const f = hovered ? 1.4 : active ? 1.25 : 1
    easing.damp3(ref.current.position, [0, hovered ? 0.25 : 0, 0], 0.1, delta)
    easing.damp3(ref.current.scale, [1.618 * f, 1 * f, 1], 0.15, delta)
  })
  return (
    <group {...props}>
      <Image ref={ref} transparent radius={0.075} url={url} scale={[1.618, 1, 1]} side={THREE.DoubleSide} />
    </group>
  )
}

function ActiveCard({ hovered, ...props }) {
  const ref = useRef()
  const name = useMemo(() => generate({ exactly: 2 }).join(' '), [hovered])
  useLayoutEffect(() => {
    if (ref.current && ref.current.material) {
      ref.current.material.zoom = 0.8
    }
  }, [hovered])
  useFrame((state, delta) => {
    if (ref.current && ref.current.material) {
      easing.damp(ref.current.material, 'zoom', 1, 0.5, delta)
      easing.damp(ref.current.material, 'opacity', hovered !== null ? 1 : 0, 0.3, delta)
    }
  })
  return (
    <Billboard {...props}>
      <Text fontSize={0.5} position={[2.15, 3.85, 0]} anchorX="left" color="black">
        {hovered !== null && `${name}\n${hovered}`}
      </Text>
      {hovered !== null && (
        <Image 
          ref={ref} 
          transparent 
          radius={0.3} 
          position={[0, 1.5, 0]} 
          scale={[3.5, 1.618 * 3.5, 0.2, 1]} 
          url={`/cards/cardimg${Math.floor(hovered % 10) + 1}.png`} 
        />
      )}
    </Billboard>
  )
}

const MovieCardAnimation = () => {
  
  return (
    <div className='w-full h-screen bg-gray-300 relative overflow-hidden scrollbar-hide'>
      <div className='flex justify-center items-center'>
        <h1 className='text-black md:text-3xl font-bold absolute top-10'>Find Your Favorite Movie</h1>
      </div>
      <Canvas dpr={[1, 1.5]}>
        <ScrollControls pages={4} >
          <Scene position={[0, 1.5, 0]} />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default MovieCardAnimation


