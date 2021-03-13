import React from 'react';
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css'

import style from "./Slaider.module.css"

import img1 from "../../../../../assets/ImgsSlaider/1.png"
import img2 from "../../../../../assets/ImgsSlaider/2.png"
import img3 from "../../../../../assets/ImgsSlaider/3.png"
import img4 from "../../../../../assets/ImgsSlaider/4.png"

const Slaider = (props) => {

    //Понимаю, что в какой-то степени хардкод, но если этот коммит висит здесь,
    //Значит я не успел разобраться с зацикливанием слайдов в либе

    let imgSrc = [img1, img2, img3, img4, img1, img2, img3, img4]

    let SlidesJSX = imgSrc.map((el, i) => <Slide index={i} key={i}><Img imgSrc={el} /></Slide>)

    return (
        <CarouselProvider
            naturalSlideWidth={165}
            naturalSlideHeight={150}
            totalSlides={8}
            visibleSlides={3.5}
            interval={2500}
            isPlaying={true}
            step={1}
        >
            <Slider className = {style.slaider}>
                {SlidesJSX}
            </Slider>
        </CarouselProvider>
    )
}

let Img = (props) => {
    const img = {}
    img.backgroundImage = `url("${props.imgSrc}")`
    return (
        <div className={style.slaider__item} style={img}>
        </div>
    )
}
export default Slaider