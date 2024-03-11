import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <div
      id="navbar"
      data-animation="over-right"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      class="navbar w-nav"
    >
      <div class="container w-container">
        <a href="/" class="brand w-nav-brand">
          <img
            src="https://assets-global.website-files.com/65d4aaefe59bed6be4138a09/65d4ab351fa377f6f3b82341_GoadestinationWedding-7.png"
            loading="lazy"
            sizes="(max-width: 479px) 15vw, (max-width: 767px) 8vw, (max-width: 991px) 7vw, (max-width: 1439px) 48.6875px, (max-width: 1919px) 3vw, 48.6875px"
            srcset="
              https://assets-global.website-files.com/65d4aaefe59bed6be4138a09/65d4ab351fa377f6f3b82341_GoadestinationWedding-7-p-500.png   500w,
              https://assets-global.website-files.com/65d4aaefe59bed6be4138a09/65d4ab351fa377f6f3b82341_GoadestinationWedding-7-p-800.png   800w,
              https://assets-global.website-files.com/65d4aaefe59bed6be4138a09/65d4ab351fa377f6f3b82341_GoadestinationWedding-7-p-1080.png 1080w,
              https://assets-global.website-files.com/65d4aaefe59bed6be4138a09/65d4ab351fa377f6f3b82341_GoadestinationWedding-7-p-1600.png 1600w,
              https://assets-global.website-files.com/65d4aaefe59bed6be4138a09/65d4ab351fa377f6f3b82341_GoadestinationWedding-7-p-2000.png 2000w,
              https://assets-global.website-files.com/65d4aaefe59bed6be4138a09/65d4ab351fa377f6f3b82341_GoadestinationWedding-7-p-2600.png 2600w,
              https://assets-global.website-files.com/65d4aaefe59bed6be4138a09/65d4ab351fa377f6f3b82341_GoadestinationWedding-7-p-3200.png 3200w,
              https://assets-global.website-files.com/65d4aaefe59bed6be4138a09/65d4ab351fa377f6f3b82341_GoadestinationWedding-7.png        3746w
            "
            alt=""
            id="logo"
            class="image-2"
          />
        </a>
        <nav role="navigation" class="nav-menu w-nav-menu">
          <a href="#home" class="nav-link w-nav-link">
            home
          </a>
          <a href="#services" class="w-nav-link">
            Services
          </a>
          <a href="#gallery" class="w-nav-link">
            Gallery
          </a>
          <a href="#about-us" class="w-nav-link">
            About us
          </a>
          <a href="#testimonial" class="w-nav-link">
            Testimonial
          </a>
        </nav>
        <div class="menu-button w-nav-button">
          <div id="hamburgerMenu" class="icon w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
