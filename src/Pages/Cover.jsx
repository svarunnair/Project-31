import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from "../components/image1.jpg"
import image2 from "../components/image2.jpg"
import image3 from "../components/image3.jpg"
import img4 from "../components/img4.png"
import kids from "../components/kids.mp4"

import { AspectRatio, Button, Flex, Grid, Img, Input, LinkBox, Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';


function Cover() {
  return (
    <div>


<Carousel>


<Grid>
    <Img src="https://static.zara.net/photos///contents/mkt/spots/aw23-north-man-party/subhome-xmedia-48//w/1920/IMAGE-landscape-fill-6802a9e6-f212-459e-ac6b-29749ea2bacf-default_0.jpg?ts=1701104638109" width={"80%"} height={"100%"}  />
   
</Grid>
<Grid>
    <Img src="https://static.zara.net/photos///contents/mkt/spots/aw23-north-man-new/subhome-xmedia-48//w/1920/IMAGE-landscape-fill-994bbea9-7b64-40d4-8e9c-9cb61d91a091-default_0.jpg?ts=1701103591339" width={"80%"} height={"100%"} />
   
</Grid>
<Grid>
    <Img src="https://static.zara.net/photos///contents/mkt/spots/aw23-north-man-parfums/subhome-xmedia-48//w/1920/IMAGE-landscape-fill-8fd79b37-6e8c-428d-8bb7-8f65b995464c-default_0.jpg?ts=1701106307222" width={"80%"} height={"100%"} />
  
</Grid>
<Grid>
    <Img src="https://static.zara.net/photos///contents/mkt/spots/aw23-north-man-bags/subhome-xmedia-48//w/1920/IMAGE-landscape-fill-eecdcd45-5159-4d0e-aa3d-c84e643c4b25-default_0.jpg?ts=1701105875486" width={"80%"} height={"100%"} />
  
</Grid>
<Grid>
    <Img src="https://static.zara.net/photos///contents/mkt/spots/aw23-north-man-shoes/subhome-xmedia-48//w/1920/IMAGE-landscape-fill-d8eccd1f-39da-4f56-afe7-0577d4baf13e-default_0.jpg?ts=1701105617796" width={"80%"} height={"100%"} style={{paddingTop:"150px"}}/>
  
</Grid>
<Grid>
    <video   src={kids} autoPlay loop muted/>

    {/* <AspectRatio ratio={16 / 9}>
  <iframe
    src={kids}
  />
</AspectRatio> */}

</Grid>

</Carousel>


    </div>
  )
}

export default Cover