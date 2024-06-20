import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { RealisationMetaTags as metaTags } from "../data/MetaDatas";

// Define an interface for the image data
interface ImageData {
  src: string;
  title: string;
}

interface LightboxProps {
  image: ImageData;
  onClose: () => void;
  onNext: () => (e: React.MouseEvent) => void;
  onPrevious: () => (e: React.MouseEvent) => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  image,
  onClose,
  onNext,
  onPrevious,
}) => {
  const lightboxOverlayStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const lightboxContentStyle: React.CSSProperties = {
    position: "relative",
    textAlign: "center",
  };

  const lightboxImageStyle: React.CSSProperties = {
    maxWidth: "90%",
    maxHeight: "90vh",
    borderRadius: "10px",
  };

  const closeButtonStyle: React.CSSProperties = {
    position: "absolute",
    top: "15px",
    right: "20px",
    fontSize: "2rem",
    color: "white",
    cursor: "pointer",
  };

  const navButtonStyle: React.CSSProperties = {
    position: "absolute",
    top: "45%",
    background: "rgba(0, 0, 0, 0.5)",
    fontSize: "2rem",
    color: "white",
    cursor: "pointer",
    zIndex: 1001,
    borderRadius: "5%",
    padding: "0.5rem",
    marginBottom: "20px",
  };

  const titleStyle: React.CSSProperties = {
    color: "white",
    marginTop: "10px",
    textAlign: "justify",
  };

  return (
    <div style={lightboxOverlayStyle} onClick={onClose}>
      <div style={lightboxContentStyle} onClick={(e) => e.stopPropagation()}>
        <span onClick={onClose} style={{ ...closeButtonStyle, right: "-2% " }}>
          ✕
        </span>
        <span
          style={{ ...navButtonStyle, left: "-10%", padding: "10px" }}
          onClick={onPrevious}
        >
          ‹
        </span>
        <img src={image.src} alt="lightbox" style={lightboxImageStyle} />
        <span
          style={{ ...navButtonStyle, right: "0px", padding: "10px" }}
          onClick={onNext}
        >
          ›
        </span>
        <div style={titleStyle}>{image.title}</div>
      </div>
    </div>
  );
};

const Realisation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images: ImageData[] = [
    { src: "https://placehold.co/600x600", title: "PEB 1" },
    { src: "https://placehold.co/300x300", title: "CONVENTIONAL  2" },
    { src: "https://placehold.co/300x300", title: "CONVENTIONAL  3" },
    { src: "https://placehold.co/300x300", title: "PEB 4" },
    { src: "https://placehold.co/300x300", title: "CONVENTIONAL  5" },
    { src: "https://placehold.co/600x600", title: "PEB 6" },
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPreviousImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
      </Helmet>
      <div className="bg-image">
        <img src="/banner-3.jpeg" alt="" className="w-full aspect-video" />
        <h2 className="uppercase font-bold text-center text-white text-[40px] p-10">
          Realisation
        </h2>
        <div className="flex flex-wrap md:flex-nowrap pl-20 pr-20">
          <div className="md:w-2/3" onClick={() => openLightbox(0)}>
            <img
              src={images[0].src}
              alt={images[0].title}
              className="w-full p-5 cursor-pointer"
            />
          </div>
          <div className="flex flex-col space-y-4 md:space-y-0 md:w-1/3">
            <img
              src={images[1].src}
              alt={images[1].title}
              className="w-full p-5 cursor-pointer"
              onClick={() => openLightbox(1)}
            />
            <img
              src={images[2].src}
              alt={images[2].title}
              className="w-full p-5 cursor-pointer"
              onClick={() => openLightbox(2)}
            />
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap pl-20 pr-20 pb-10">
          <div className="flex flex-col space-y-4 md:space-y-0 md:w-1/3">
            <img
              src={images[3].src}
              alt={images[3].title}
              className="w-full p-5 cursor-pointer"
              onClick={() => openLightbox(3)}
            />
            <img
              src={images[4].src}
              alt={images[4].title}
              className="w-full p-5 cursor-pointer"
              onClick={() => openLightbox(4)}
            />
          </div>
          <div className="md:w-2/3" onClick={() => openLightbox(5)}>
            <img
              src={images[5].src}
              alt={images[5].title}
              className="w-full p-5 cursor-pointer"
            />
          </div>
        </div>

        {isOpen && (
          <Lightbox
            image={images[currentIndex]}
            onClose={closeLightbox}
            onNext={showNextImage}
            onPrevious={showPreviousImage}
          />
        )}
      </div>
    </>
  );
};

export default Realisation;
