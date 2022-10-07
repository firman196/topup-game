import React from 'react'
import FeatutredItem from './FeatutredItem'

export default function FeaturedGame() {
  return (
    <section className="featured-game pt-50 pb-50">
        <div className="container-fluid">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Our Featured<br/> Games This Year
            </h2>
            <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
                data-aos="fade-up">
                <FeatutredItem title='Super Mechs' category='Mobile' thumbnail='/img/Thumbnail-1.png' icon='/icon/console.svg'/>
                <FeatutredItem title='Call of Duty: Modern' category='Mobile' thumbnail='/img/Thumbnail-2.png' icon='/icon/console.svg'/>
                <FeatutredItem title='Mobile Legends' category='Mobile' thumbnail='/img/Thumbnail-3.png' icon='/icon/console.svg'/>
                <FeatutredItem title='Clash Of Clans' category='Mobile' thumbnail='/img/Thumbnail-4.png' icon='/icon/console.svg'/>
                <FeatutredItem title='Valorant' category='Dekstop' thumbnail='/img/Thumbnail-5.png' icon='/icon/console.svg'/>
            </div>
        </div>
    </section>
  )
}
