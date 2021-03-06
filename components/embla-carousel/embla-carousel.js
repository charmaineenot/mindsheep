import EmblaCarousel from 'embla-carousel'
import Image from 'next/image'
import { PrevButton, NextButton } from "./embla-carousel-buttons";
import { useEmblaCarousel } from "embla-carousel/react";
import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRecursiveTimeout } from './useRecursiveTimeout';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
 // import the icons you need

const AUTOPLAY_INTERVAL = 4000;

const Testimonials = ({ elements }) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false, loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const autoplay = useCallback(() => {
    if (!embla) return;
    if (embla.canScrollNext()) {
      embla.scrollNext();
    } else {
      embla.scrollTo(0);
    }
  }, [embla]);

  const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

  const scrollNext = useCallback(() => {
    if (!embla) return;
    embla.scrollNext();
    stop();
  }, [embla, stop]);

  const scrollPrev = useCallback(() => {
    if (!embla) return;
    embla.scrollPrev();
    stop();
  }, [embla, stop]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    embla.on("pointerDown", stop);
  }, [embla, onSelect, stop]);

  useEffect(() => {
    play();
  }, [play]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container text-center">
          <div className="embla__slide">
            <div className="embla__slide__inner">
              <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
              <p className="pt-3 pb-3 text-black">
                "{elements.homeTestimonials.testimonial1}"
              </p>
              <div className="row row-testimonial">
                <div className="col-ts-2 text-right">
                  <Image width="84" height="84" className="embla__slide__img" src={elements.homeTestimonials.image1.sourceUrl} />
                </div>
                <div className="col-ts-3 text-left">
                  <h4 className="pt-4 pb-2">{elements.homeTestimonials.name1}</h4>
                  <h5>{elements.homeTestimonials.titleposition1}</h5>
                </div>
              </div>

            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__inner">
              <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
              <p className="pt-3 pb-3 text-black">
                "{elements.homeTestimonials.testimonial2}"
              </p>
              <div className="row row-testimonial">
                <div className="col-ts-2 text-right">
                <Image width="84" height="84" className="embla__slide__img" src={elements.homeTestimonials.image2.sourceUrl} />
                </div>
                <div className="col-ts-3 text-left">
                  <h4 className="pt-4 pb-2">{elements.homeTestimonials.name2}</h4>
                  <h5>{elements.homeTestimonials.titleposition2}</h5>
                </div>
              </div>
              
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__inner">
              <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
              <p className="pt-3 pb-3 text-black">
                "{elements.homeTestimonials.testimonial3}"
              </p>
              <div className="row row-testimonial">
                <div className="col-ts-2 text-right">
                <Image width="84" height="84" className="embla__slide__img" src={elements.homeTestimonials.image3.sourceUrl} />
                </div>
                <div className="col-ts-3 text-left">
                <h4 className="pt-4 pb-2">{elements.homeTestimonials.name3}</h4>
              <h5>{elements.homeTestimonials.titleposition3}</h5>
                </div>
              </div>
           
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__inner">
              <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
              <p className="pt-3 pb-3 text-black">
                "{elements.homeTestimonials.testimonial4}"
              </p>
              <div className="row row-testimonial">
                <div className="col-ts-2 text-right">
                <Image width="84" height="84" className="embla__slide__img" src={elements.homeTestimonials.image4.sourceUrl} />
                </div>
                <div className="col-ts-3 text-left">
                <h4 className="pt-4 pb-2">{elements.homeTestimonials.name4}</h4>
              <h5>{elements.homeTestimonials.titleposition4}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__inner">
              <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
              <p className="pt-3 pb-3 text-black">
                "{elements.homeTestimonials.testimonial5}"
              </p>
              <div className="row row-testimonial">
                <div className="col-ts-2 text-right">
                  <Image width="84" height="84" className="embla__slide__img" src={elements.homeTestimonials.image5.sourceUrl} />
                </div>
                <div className="col-ts-3 text-left">
                <h4 className="pt-4 pb-2">{elements.homeTestimonials.name5}</h4>
              <h5>{elements.homeTestimonials.titleposition5}</h5>
                </div>


              </div>
              
            </div>
          </div>
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default Testimonials;