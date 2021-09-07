import EmblaCarousel from 'embla-carousel'
import { PrevButton, NextButton } from "./embla-carousel-buttons";
import { useEmblaCarousel } from "embla-carousel/react";
import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const Testimonials = ({elements}) => {
    const [viewportRef, embla] = useEmblaCarousel({
        slidesToScroll: 3,
        skipSnaps: false
    });

    const[value, setvalue]= useState("");

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const onSelect = useCallback(() => {
    if (!embla) return;
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);

    useEffect(() => {
        if (!embla) return;
        embla.on("select", onSelect);
        onSelect();
    }, [embla, onSelect]);

    return (
        <div className="embla">
          <div className="embla__viewport" ref={viewportRef}>
            <div className="embla__container text-center">
                <div className="embla__slide">
                  <div className="embla__slide__inner">
                        <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                        <p className="pt-3 pb-3 text-black">
                            <i>"{elements.homeTestimonials.testimonial1}"</i>
                        </p>
                        <img className="embla__slide__img" src={elements.homeTestimonials.image1.sourceUrl}/>
                        <h4 className="pt-4 pb-2">{elements.homeTestimonials.name1}</h4>
                        <h5>{elements.homeTestimonials.titleposition1}</h5>
                  </div>
                </div>
                <div className="embla__slide">
                  <div className="embla__slide__inner">
                        <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                        <p className="pt-3 pb-3 text-black">
                            <i>"{elements.homeTestimonials.testimonial2}"</i>
                        </p>
                        <img className="embla__slide__img" src={elements.homeTestimonials.image2.sourceUrl}/>
                        <h4 className="pt-4 pb-2">{elements.homeTestimonials.name2}</h4>
                        <h5>{elements.homeTestimonials.titleposition2}</h5>
                  </div>
                </div>
                <div className="embla__slide">
                  <div className="embla__slide__inner">
                        <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                        <p className="pt-3 pb-3 text-black">
                            <i>"{elements.homeTestimonials.testimonial3}"</i>
                        </p>
                        <img className="embla__slide__img" src={elements.homeTestimonials.image3.sourceUrl}/>
                        <h4 className="pt-4 pb-2">{elements.homeTestimonials.name3}</h4>
                        <h5>{elements.homeTestimonials.titleposition3}</h5>
                  </div>
                </div>
                <div className="embla__slide">
                  <div className="embla__slide__inner">
                        <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                        <p className="pt-3 pb-3 text-black">
                            <i>"{elements.homeTestimonials.testimonial3}"</i>
                        </p>
                        <img className="embla__slide__img" src={elements.homeTestimonials.image3.sourceUrl}/>
                        <h4 className="pt-4 pb-2">{elements.homeTestimonials.name3}</h4>
                        <h5>{elements.homeTestimonials.titleposition3}</h5>
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