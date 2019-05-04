import React, { useState } from 'react'
import './index.scss'
import { Resizable } from 'react-resizable'
import Draggable from 'react-draggable'
import { v4 } from 'uuid'

export const Box = props => {
  const { width, height, children, parentRef } = props
  const handleid = 'handle' // v4()
  console.log({ props })
  const [size, setSize] = useState({
    width: width || 201,
    height: height || 497
  })
  const onResize = (event, { size }) => {
    console.log({ size })
    setSize(size)
  }
  return (
    <div className="rnd-layer">
      <Draggable
        handle={'.rnd-header'}
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        scale={1}
        onStart={ev => console.log({ ev })}
        onDrag={ev => console.log({ ev })}
        onStop={ev => console.log({ ev })}
        offsetParent={(parentRef && parentRef.current) || null}
      >
        <Resizable height={size.height} width={size.width} onResize={onResize}>
          <div className="rnd-box" style={size}>
            <div className={'rnd-header'}>
              <div className="rnd-dragg-area" />
              <div className="rnd-close" />
            </div>
            <div className="rnd-container">{children}</div>
            <div className="rnd-footer" />
          </div>
        </Resizable>
      </Draggable>
    </div>
  )
}
