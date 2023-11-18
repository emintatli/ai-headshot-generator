"use client"
import React from 'react'
import ReactPlayer from 'react-player'
import { CldVideoPlayer } from 'next-cloudinary'
type Props = {}

const VideoPlayer = (props: Props) => {
  return (
    
    // <ReactPlayer url='../../public/images/steps.mp4' />
    // <CldVideoPlayer
    // width='600'
    // height='400'
    // id="asdas"
    // quality={'auto'}
    // autoPlay='true'
    // src="https://res.cloudinary.com/dtch53uiy/video/upload/v1688913617/video/steps_ogeyhj.mp4"
    // />
    <div>
    <CldVideoPlayer
    id="steps_ogeyhj"
  width="1920"
  quality='auto'
  height="300"
  src="https://res.cloudinary.com/dtch53uiy/video/upload/v1688913617/video/steps_ogeyhj.mp4"
/>
</div>
  )
}

export default VideoPlayer