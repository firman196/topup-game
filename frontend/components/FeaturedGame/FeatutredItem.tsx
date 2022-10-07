import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface FeatutredItemProps {
    title: string
    category : string
    thumbnail : string
    icon: string
}
export default function FeatutredItem(props : FeatutredItemProps) {
  const {title, category, thumbnail, icon} = props;
  return (
    <div className="featured-game-card position-relative">
        <Link href="/detail.html">
            <a>
                <div className="blur-sharp">
                    <Image className='thumbnail' src={thumbnail} width={205} height={270} alt="" layout='fixed'/>
                </div>
                <div className="cover position-absolute bottom-0 m-32">
                    <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                        <div className="game-icon mx-auto">
                            <Image src={icon} width={54} height={36} alt="console" layout='fixed'/>
                        </div>
                        <div>
                            <p className="fw-semibold text-white text-xl m-0">{title}</p>
                            <p className="fw-light text-white m-0">{category}</p>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    </div>

  )
}
