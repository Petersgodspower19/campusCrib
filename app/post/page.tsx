import React from 'react'
import Hero from './_components/Hero'
import ListingProcess from './_components/ListingProcess'
import PreListingRequirement from './_components/PreListingRequirement'
import VideoTour from './_components/VideoTour'
import Faq from './_components/Faq'
import Link from './_components/Link'


function Post() {
  return (
    <div className='px-4 lg:px-16'>
      <Hero />
      <ListingProcess />
      <PreListingRequirement />
      <VideoTour />
      <Faq />
       <Link />
    </div>
  )
}

export default Post
