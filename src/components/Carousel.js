import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ResponsiveCarousel = () => {
    const images = [
        { src: "/slide1.png", alt: "Performance 1" },
        { src: "/slide2.png", alt: "Performance 2" },
        { src: "/slide3.png", alt: "Performance 3" },
    ];

    return (
        <section className="text-blue-900 rounded-lg mb-8">
            <div className="w-full">
                <Carousel
                    showArrows
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop
                    className="lg:hidden lg:col-span-3"
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            <button
                                type="button"
                                onClick={onClickHandler}
                                title={label}
                                className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-25 hover:bg-opacity-50 rounded-full p-2 focus:outline-none"
                                style={{ border: "none" }}
                            >
                                <span className="sr-only">Previous</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <button
                                type="button"
                                onClick={onClickHandler}
                                title={label}
                                className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-25 hover:bg-opacity-50 rounded-full p-2 focus:outline-none"
                                style={{ border: "none" }}
                            >
                                <span className="sr-only">Next</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        )
                    }
                >
                    {images.map((image, index) => (
                        <div key={index}>
                            <img
                                className="rounded-lg shadow-md object-cover w-full h-auto"
                                src={image.src}
                                alt={image.alt}
                            />

                        </div>
                    ))}
                </Carousel>
                <div className="hidden lg:flex justify-center w-full gap-8">
                    {images.map((image, index) => (
                        <div className="flex-1" key={index}>
                            <img
                                className="rounded-lg shadow-md object-cover w-full h-auto m-auto"
                                src={image.src}
                                alt={image.alt}
                            />

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResponsiveCarousel;
