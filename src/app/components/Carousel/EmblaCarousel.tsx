'use client';

import Carousel from './Carousel';
import Image from 'next/image';
import Link from 'next/link';
import { CarouselImages } from '../../database/CarouselImages';

export const EmblaCarousel = () => {
  return (
    <div className="w-screen">
      <Carousel loop>
        {CarouselImages.map(({ url, title, description }, index) => {
          return (
            // 👇 style each individual slide.
            // relative - needed since we use the fill prop from next/image component
            // h-64 - arbitrary height
            // flex[0_0_100%]
            //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
            //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.

            <div
              className="relative flex-[0_0_100%] h-[calc(100vh-72px)]"
              key={index}
            >
              {/* use object-cover + fill since we don't know the height and width of the parent */}
              <Image
                src={CarouselImages[index].url}
                alt={CarouselImages[index].title}
                layout="fill"
                className="object-cover w-screen h-screen"
              />

              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center drop-shadow-md">
                <h1 className="text-4xl font-bold text-white">
                  {CarouselImages[index].title}
                </h1>
                <p className="text-white text-lg">
                  {CarouselImages[index].description}
                </p>
              </div>
              <Link href="/">
                <button className="absolute bottom-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4 bg-j-dark rounded hover:bg-zinc-700 text-white transition-colors duration-300">
                  Conheçer Produtos
                </button>
              </Link>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
