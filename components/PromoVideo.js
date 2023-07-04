"use client"
import React from 'react'
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

export default function PromoVideo() {
  return (
	  <div className='-player '>
		  <LiteYouTubeEmbed
			  aspectHeight="{9}"
			  aspectWidth="{16}"
			  id="snM1zeCD2L0"
			  title="Eliza-K"
		  />
	  </div >
  )
}
