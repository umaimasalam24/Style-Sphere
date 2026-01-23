import React, { useState } from "react";
import "./App.css";

// Images
import makeup from "./assets/makeup.jpg";
import bridal from "./assets/services.jpg";
import hairs from "./assets/hair.jpeg";
import facial from "./assets/facial.avif";
import hands from "./assets/hand.jpg";
import waxs from "./assets/wax.jpeg";
import bride from "./assets/bridal.jpg";
import glam from './assets/glam.jpg'
import party from './assets/party.png'
import soft from './assets/soft-glam.jpeg'
import air from './assets/airbrush.PNG'
import trial from './assets/trial.PNG'
import natural from './assets/natural.PNG'
import cut from './assets/cut.avif'
import modren from './assets/braid.jpg'
import wash from './assets/wash.jpg'
import blow from './assets/blow.PNG'
import color from './assets/color.jpg'
import highlights from './assets/highlights.PNG'
import hydrate from './assets/hydrating.jpeg'
import aging from './assets/aging.jpeg'
import acne from './assets/acne.webp'
import deep from './assets/deep.jpg'
import glow from './assets/glow.jpg'
import mani from './assets/manicure.jpeg'
import pedi from './assets/pedi.jpg'
import treat from './assets/treat.jpeg'
import polish from './assets/polish.jpg'
import arm from './assets/hand wax.jpg'
import face from './assets/face.webp'
import leg from './assets/leg wax.webp'
import body from './assets/body.jpg'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [search, setSearch] = useState("");

  // SERVICES DATA (8 CARDS)
  const services = [
    { id: 1, 
      name: "Bridal Package (3 days)", category: "Mehndi, Barat, Valima",
       price: '$850.00',
        image: bride },
    { id: 2, 
      name: "Glam Makeup (1 day)", 
      category: "Any Event", 
      price: "$250.00" ,
      image: glam },
    { id: 3,
       name: "Party Makeup (1 day)",
       category: "Any Event",
       price: "$400.00",
       image: party },
    { id: 4,
       name: "Airbrush Makeup (1 day)",
        category: "Any Event",
       price: '$850.00', 
       image: air },
    { id: 5, 
      name: "Makeup Trail Bridal",
       category: "Mehndi, Barat, Valima (1 look)",
       price: '$350.00', 
       image: trial },
    { id: 6, 
      name: "Soft Glam (1 day)",
       category: "Any Event", 
      price: "$200.00", 
      image: soft },
    { id: 7,
       name: "Nikkah Makeup", category: "Makeup",
       price: 14000,
        image: natural}
  ];

  // SEARCH FILTER
  const filteredServices = services.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );






    const hair = [
    { id: 1, 
      name: "Hair Cutting", 
      category: "Layer, Bob, Step",
       price: '$300.00',
        image: cut },
    { id: 2, 
      name: "Hair Style", 
      category: "Any Style (Extra pay for fresh flower)", 
      price: "$180.00" ,
      image: modren },
    { id: 3,
       name: "Blow Dry",
       category: "On Advance Booking",
       price: "$300.00",
       image: blow },
    { id: 4,
       name: "Hair Wash",
        category: "Small Length",
       price: '$225.00', 
       image: wash },
    { id: 5, 
      name: "Hair Dying",
       category: "Medium Length",
       price: '$380.00', 
       image: color },
    { id: 6, 
      name: "Highlights",
       category: "Medium Length", 
      price: "$320.00", 
      image: highlights },
  ];

  // SEARCH FILTER
  const filteredhair = hair.filter((items) =>
    items.name.toLowerCase().includes(search.toLowerCase())
  );



  // SkinCare
    const skin = [
    { id: 1, 
      name: "Hydrating Facial",
       description: "Revitalize your skin with deep hydration and natural glow.",
       price: '$850.00',
        image: hydrate },
    { id: 2, 
      name: "Anti Aging Facial", 
      description: "Combat signs of aging with our anti-aging facial treatment.",
      price: "$250.00" ,
      image: aging },
    { id: 3,
       name: "Acne Treatment Facial",
       description: "Treat and prevent acne with our specialized facial treatment.",
       price: "$400.00",
       image: acne },
    { id: 4,
       name: "Deep Cleansing Facial",
        description: "Remove impurities and unclog pores with our deep cleansing facial.",
       price: '$850.00', 
       image: deep },
    { id: 5, 
      name: "Glow Facial",
       description: "Revitalize your skin and achieve a radiant, youthful glow with our Glow Facial.",
       price: '$350.00', 
       image: glow },
  ];

  // SEARCH FILTER
  const filteredSkin = skin.filter((item2) =>
    item2.name.toLowerCase().includes(search.toLowerCase())
  );




  // Hand & Feet
    const hand = [
    { id: 1, 
      name: "Classic Manicure",
       description: "A basic yet essential nail care treatment that cleans, shapes, and nourishes your nails and cuticles.",
       price: '$850.00',
        image: mani },
    { id: 2, 
      name: "Luxury Pedicure",
      description: "Relaxing pedicure with exfoliation and hydration for smooth, soft feet.",
      price: "$250.00" ,
      image: pedi },
    { id: 3,
       name: "Paraffin Hand & Feet Treatment",
       description: "A deeply moisturizing and relaxing treatment designed to soften dry, rough skin and relieve tension.",
       price: "$400.00",
       image: treat },
    { id: 4,
       name: "Nail Art & Polish",
        description: "A creative nail service that enhances the beauty of your nails with flawless polish application and stylish nail art designs.",
       price: '$850.00', 
       image: polish },
  ];

  // SEARCH FILTER
  const filteredHand = hand.filter((item3) =>
    item3.name.toLowerCase().includes(search.toLowerCase())
  );



    // Wax
    const wax = [
    { id: 1, 
      name: "Full Body Wax",
       description: "A complete hair removal treatment that leaves your entire body smooth, clean, and refreshed. Provides long-lasting results with soft, even-toned skin.",
       price: '$850.00',
        image: body },
    { id: 2, 
      name: "Full Arm Wax",
      description: "Removes unwanted hair from arms, giving a neat, smooth, and well-groomed appearance with long-lasting softness.",
      price: "$250.00" ,
      image: arm },
    { id: 3,
       name: "Full Leg Wax",
       description: "Effectively removes hair from legs, leaving skin silky smooth and fresh while helping reduce regrowth over time.",
       price: "$400.00",
       image: leg },
    { id: 4,
       name: "Full Face Wax",
        description: "Removes unwanted hair from the face, leaving skin smooth and refreshed with long-lasting results.",
       price: '$850.00', 
       image: face },
  ];

  // SEARCH FILTER
  const filteredWax = wax.filter((item4) =>
    item4.name.toLowerCase().includes(search.toLowerCase())
  );


  return(
    <>
<nav className="fixed top-0 z-20 w-full bg-pink-200 border-b border-pink-400 shadow-sm">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-4">

    {/* Logo */}
    <a href="#" className="flex items-center gap-3">
      <span className="text-2xl font-bold text-black tracking-wide pacifico-regular">
        Style Sphere
      </span>
    </a>

    {/* Right Side */}
    <div className="flex items-center md:order-2 gap-3">

      {/* Search Desktop */}
 <div className="relative flex items-center">
      {/* Desktop Search */}
      <div className="hidden md:block relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pink-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeWidth="2"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 pr-4 py-2 rounded-full text-sm bg-white border border-black focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Mobile Search Icon */}
      <div className="md:hidden relative">
        <button
          onClick={() => setShowMobileSearch(!showMobileSearch)}
          className="p-2 rounded-full bg-pink-200 text-pink-600 hover:bg-pink-300 transition"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeWidth="2"
              d="M21 21l-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>

        {/* Mobile Input */}
        {showMobileSearch && (
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="absolute top-10 left-0 w-64 px-3 py-2 rounded-full text-sm bg-white border border-black focus:outline-none focus:ring-2 focus:ring-pink-400 z-50"
          />
        )}
      </div>
    </div>
  ;

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-2 rounded-lg text-black hover:bg-pink-300"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeWidth="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
      </button>
    </div>

    {/* Menu */}
    <div
      className={`${
        menuOpen ? "block" : "hidden"
      } w-full md:flex md:w-auto md:order-1`}
    >
      <ul className="flex flex-col md:flex-row gap-6 mt-4 md:mt-0 font-medium bg-pink-100 md:bg-transparent p-4 md:p-0 rounded-xl">
        {[
          ["Home", "#home"],
          ["Services", "#services"],
          ["Makeup", "#makeup"],
          ["Hair", "#hair"],
          ["Skincare & Facial", "#facial"],
          ["Hand & Feet", "#hand"],
          ["Waxing", "#waxing"],
          ["Contact", "#contact"],
        ].map(([label, link]) => (
          <li key={label}>
            <a
              href={link}
              onClick={() => setMenuOpen(false)}
              className="text-black hover:text-pink-700 transition"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
</nav>

{/* Hero Section */}
<section
  className="body-font hero relative"
  id="home"
>
  <div
    className="container mx-auto flex flex-col items-center justify-center px-4 sm:px-6 py-24 sm:py-28 bg-cover bg-center rounded-3xl min-h-[400px] sm:min-h-[800px] "
    style={{
      backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20250415/pngtree-vibrant-and-beautiful-blush-makeup-application-featuring-brush-image_17185658.jpg')"
    }}
  >
    {/* Overlay for contrast */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Content */}
    <div className="relative z-10 text-center lg:w-2/3 w-full px-4 sm:px-6">
      {/* Brand */}
      <h1 className="title-font text-3xl sm:text-4xl md:text-5xl mb-4 text-white font-pacifico animate-fadeUp animation-delay-200 font-bold">
        Style Sphere
      </h1>

      {/* Discount */}
      <p className="text-xl sm:text-2xl text-white mb-4 sm:mb-6 font-medium animate-fadeUp animation-delay-400">
        20% OFF
      </p>

      {/* Member Offer */}
      <p className="text-xl sm:text-2xl text-white mb-4 sm:mb-6 font-medium animate-fadeUp animation-delay-600">
        FOR NEW MEMBER
      </p>

      {/* More Info */}
      <p className="text-lg sm:text-xl text-white font-semibold mb-6 animate-fadeUp animation-delay-800">
        MORE INFO
      </p>

      {/* Button */}
      <div className="flex justify-center">
        <a
          href="https://style-sphere-2flc.vercel.app/"
          className="inline-flex items-center justify-center bg-pink-600 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-pink-700 transition duration-300 shadow-lg hover:scale-105 animate-fadeUp animation-delay-1000"
        >
          Visit Website
        </a>
      </div>
    </div>
  </div>
</section>

   {/* Button */}
    <div className="flex justify-center gap-4 mt-6 opacity-0 animate-fadeUp animation-delay-1000"> <button className="inline-flex items-center justify-center text-white bg-gray-700 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-800 transition duration-300 shadow-lg cursor-pointer hover:scale-105 break-all sm:break-normal" > 
      https://aura-belle.vercel.app/ 
  </button> 
 </div>

  {/* Services Section */} 
  <section className="text-gray-600 body-font" id="services">
     <div className="container px-5 py-24 mx-auto"> 
    <div className="flex flex-col text-center w-full mb-20">
     <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Luxury Beauty Services, Tailored for You</h1>
   <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We offer a complete range of professional beauty services designed to enhance your natural beauty. From flawless makeup and expert hair styling to relaxing facials and bridal packages, our experienced team uses high-quality products and modern techniques to deliver exceptional results. Your comfort, confidence, and satisfaction are always our top priority.</p> 
  </div>
   <div className="flex flex-wrap -m-4"> 
    <div className="lg:w-1/3 sm:w-1/2 p-4"> 
  <div className="flex relative"> 
    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={makeup}/>
   <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200  opacity-0 hover:opacity-100  bg-pink-200">
     <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Makeup Services</h1> 
  <p className="leading-relaxed">We serve Party Makeup, Engagement Makeup, Airbrush Makeup, Soft / Natural Makeup, Glam Makeup, Makeup Trial (Bridal)</p> 
  </div> 
  </div> 
  </div>
   <div className="lg:w-1/3 sm:w-1/2 p-4">
   <div className="flex relative">
     <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={bridal}/>
   <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-pink-200 opacity-0 hover:opacity-100"> 
    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Bridal Services</h1>
   <p className="leading-relaxed">We serve Bridal Makeup, Mehndi Makeup, Baraat Makeup, Walima Makeup, Bridal Hairstyle, Dupatta Setting, Jewelry Setting, Customized Bridal Packages</p>
   </div> 
  </div>
   </div>
   <div className="lg:w-1/3 sm:w-1/2 p-4">
   <div className="flex relative"> 
    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={hairs}/>
   <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-pink-200 opacity-0 hover:opacity-100">
     <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Hair Services
    </h1> 
  <p className="leading-relaxed">We serve Hair Cut (Layer, Bob, Step, U-Cut, V-Cut), Hair Styling (Straight, Curls, Waves), Blow Dry, Hair Wash, Hair Coloring, Highlights / Lowlights
    </p> 
  </div> 
  </div>
   </div>
   <div className="lg:w-1/3 sm:w-1/2 p-4"> 
  <div className="flex relative"> 
    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={facial}/> 
  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-pink-200 opacity-0 hover:opacity-100">
    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Skincare & Facial Service</h1> <p className="leading-relaxed">We serve Basic Facial, Gold Facial, Diamond Facial, Pearl Facial, Hydra Facial, Clean-Up, Skin Polishing, Acne Treatment, Under Eye Treatment</p> </div> </div> </div> <div className="lg:w-1/3 sm:w-1/2 p-4"> <div className="flex relative"> <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={hands}/> <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-pink-200 opacity-0 hover:opacity-100"> <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Hands & Feet Care</h1> <p className="leading-relaxed">We serve Manicure Pedicure, Spa Manicure, Spa Pedicure, Paraffin Wax, Nail Cutting & Shaping, Nail Art, Gel Nails, Acrylic Nails, French Tips</p> </div> </div> </div> <div className="lg:w-1/3 sm:w-1/2 p-4"> <div className="flex relative"> <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={waxs}/> <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-pink-200 opacity-0 hover:opacity-100"> <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Waxing & Hair Removal</h1> <p className="leading-relaxed">We serve Full Body Wax, Arms & Legs Wax, Face Wax, Brazilian Wax, Bikini Wax, Threading, Face Threading, Laser Hair Removal.</p> </div> </div> </div> </div> </div> </section>
  {/*Makeup Services  */}
<div className="bg-pink-200" id="makeup">
  <h1 className="text-2xl font-medium text-center mb-12 bg-pink-200 head">
    MAKEUP SERVICES
  </h1>

  <div className="flex flex-wrap -m- bg-pink-200">
    {filteredServices.length > 0 ? (
      filteredServices.map((item) => (
        <div
          key={item.id}
          className="p-4 lg:w-1/4 md:w-1/2 w-full"
        >
          {/* Card */}
          <div
            className="
              group
              h-full flex flex-col items-center text-center 
              bg-white rounded-xl p-4
              shadow-md
              transition-all duration-500 ease-in-out
              hover:-translate-y-3
              hover:shadow-2xl
            "
          >
            {/* Image */}
            <div className="overflow-hidden rounded-lg w-full mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="
                  w-full h-56 object-cover
                  transition-transform duration-500 ease-in-out
                  group-hover:scale-110
                "
              />
            </div>

            <h2 className="text-lg font-medium text-gray-900 transition-colors duration-300 group-hover:text-pink-600">
              {item.name}
            </h2>

            <p className="text-gray-500 text-sm">
              {item.category}
            </p>

            <p className="text-pink-600 font-semibold mb-4">
              Rs. {item.price}
            </p>

            {/* Button */}
            <button
              className="
                w-full sm:w-auto
                bg-pink-600 text-white
                px-4 py-2 text-sm
                sm:px-6 sm:py-2 sm:text-base
                rounded-lg
                transition-all duration-300 ease-in-out
                hover:bg-white hover:text-pink-600
                hover:scale-105
                hover:shadow-md
              "
            >
              Book Now
            </button>
          </div>
        </div>
      ))
    ) : (
      <p className="text-center w-full text-gray-500">
        No services found
      </p>
    )}
  </div>
</div>
{/* Hair Services */}
<div id="hair" className="py-12">
  <h1 className="text-2xl font-medium text-center mb-12">
    HAIR
  </h1>

  <div className="flex flex-wrap ">
    {filteredhair.length > 0 ? (
      filteredhair.map((items) => (
        <div
          key={items.id}
          className="p-4 lg:w-1/4 md:w-1/2 w-full"
        >
          <div
            className="
              h-full flex flex-col items-center text-center
              bg-white rounded-xl shadow-md p-4
              transition-transform transition-shadow duration-300
              hover:-translate-y-2 hover:shadow-lg
            "
          >
            <img
              src={items.image}
              alt={items.name}
              className="
                rounded-lg w-full h-56 object-cover mb-4
                transition-transform duration-300
                hover:scale-105
              "
            />

            <h2 className="text-lg font-medium text-gray-900">
              {items.name}
            </h2>

            <p className="text-gray-500">{items.category}</p>

            <p className="text-pink-600 font-semibold mb-4">
              Rs. {items.price}
            </p>

            <button
              className="
                bg-pink-600 text-white
                px-4 py-2 text-sm
                sm:px-6 sm:py-2 sm:text-base
                rounded-lg w-full sm:w-auto
                transition-colors duration-300
                hover:bg-white hover:text-pink-600
              "
            >
              Book Now
            </button>
          </div>
        </div>
      ))
    ) : (
      <p className="text-center w-full text-gray-500">
        No services found
      </p>
    )}
  </div>
</div>
{/* Skincare  */}
<section className="text-gray-600 body-font bg-pink-200" id="facial">
  <h1 className="text-2xl font-medium text-center mb-12">
    SKINCARE & FACIAL
  </h1>

  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {filteredSkin.length > 0 ? (
        filteredSkin.map((item2) => (
          <div key={item2.id} className="p-4 md:w-1/3 w-full">
            <div
              className="
                h-full border-2 border-gray-200 border-opacity-60
                rounded-lg overflow-hidden bg-white
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-lg
              "
            >
              <img
                className="
                  lg:h-48 md:h-36 w-full object-cover object-center
                  transition-transform duration-300
                  hover:scale-105
                "
                src={item2.image}
                alt={item2.name}
              />

              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {item2.name}
                </h1>

                <p className="leading-relaxed mb-3">
                  {item2.description}
                </p>

                <div className="flex items-center flex-wrap">
                  <button
                    className="
                      bg-pink-600 text-white px-6 py-2 rounded-lg
                      transition-colors duration-300
                      hover:bg-white hover:text-pink-600
                    "
                  >
                    Book Now
                  </button>

                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>

                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center w-full text-gray-500">
          No services found
        </p>
      )}
    </div>
  </div>
</section>
{/* hand and feet */}
<section className="text-gray-600 body-font" id="hand">
  <div className="container px-5 py-24 mx-auto">

    {/* Heading */}
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
        Hands & Feet Care
      </h1>

      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Pamper your hands and feet with our luxurious care treatments. From manicures and pedicures to spa treatments and nail art, we focus on cleansing, nourishing, and beautifying, leaving your hands and feet soft, smooth, and perfectly groomed. Experience ultimate relaxation while we give your nails a flawless finish.
      </p>
    </div>

    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      {filteredHand.length > 0 ? (
        filteredHand.map((item3) => (
          <div key={item3.id} className="sm:w-1/2 mb-10 px-4">
            
            <div
              className="
                rounded-lg h-64 overflow-hidden
                transition-transform duration-300
                hover:scale-105
              "
            >
              <img
                alt="content"
                src={item3.image}
                className="object-cover object-center h-full w-full"
              />
            </div>

            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              {item3.name}
            </h2>

            <p className="leading-relaxed text-base">
              {item3.description}
            </p>

            <button
              className="
                bg-pink-600 text-white px-6 py-2 rounded-lg m-2
                transition-colors duration-300
                hover:bg-white hover:text-pink-600
              "
            >
              Book Now
            </button>

          </div>
        ))
      ) : (
        <p className="text-center w-full text-gray-500">
          No services found
        </p>
      )}
    </div>

  </div>
</section>

{/* Waxing Section */}
<section className="text-gray-600 body-font bg-pink-200" id="waxing">
  <div className="container px-5 py-24 mx-auto">

    {/* Heading */}
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
        Waxing
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        A smooth and effective hair removal treatment that gently removes unwanted hair
        from the root, leaving your skin soft, clean, and long-lasting smooth.
      </p>
    </div>

    {/* Cards */}
    <div className="flex flex-wrap -m-4">
      {filteredWax.length > 0 ? (
        filteredWax.map((item4, index) => (
          <div key={index} className="p-4 lg:w-1/2 w-full">
            <div
              className="
                h-full flex sm:flex-row flex-col items-center
                sm:justify-start justify-center
                text-center sm:text-left
                bg-white rounded-lg shadow-md p-4
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-lg
              "
            >

              {/* Image */}
              <img
                alt={item4.name}
                src={item4.image}
                className="
                  flex-shrink-0 rounded-lg w-48 h-48
                  object-cover object-center
                  sm:mb-0 mb-4
                  transition-transform duration-300
                  hover:scale-105
                "
              />

              {/* Content */}
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  {item4.name}
                </h2>

                <p className="mb-4 text-gray-600">
                  {item4.description}
                </p>

                <button
                  className="
                    bg-pink-600 text-white px-6 py-2 rounded-lg
                    border border-pink-600
                    transition-colors duration-300
                    hover:bg-white hover:text-pink-600
                  "
                >
                  Book Now
                </button>
              </div>

            </div>
          </div>
        ))
      ) : (
        <p className="text-center w-full text-gray-500">
          No services found
        </p>
      )}
    </div>

  </div>
</section>
{/* Contact */}
<section className="text-gray-600 body-font relative" id='contact'>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-white hover:text-pink-600 transition justify-center">
                  Book Now
                </button>
              </div>
            </div>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-pink-500">stylesphere@email.com</a>
          <p className="leading-normal my-5">49 Smith St.
            <br/>Saint Cloud, MN 56301
          </p>
          <span className="inline-flex">
            <a className="text-pink-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-pink-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-pink-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-4 text-pink-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
</section>
{/* footer */}
<footer className="text-gray-600 body-font bg-pink-200">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
          stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">StyleSphere</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">
        Enhancing your natural beauty with professional makeup, bridal looks,
        and luxury beauty services.
      </p>
    </div>

    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">

      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          MAKEUP SERVICES
        </h2>
        <nav className="list-none mb-10">
          <li><a className="text-gray-600 hover:text-pink-600">Bridal Makeup</a></li>
          <li><a className="text-gray-600 hover:text-pink-600">Party Makeup</a></li>
          <li><a className="text-gray-600 hover:text-pink-600">Engagement Looks</a></li>
          <li><a className="text-gray-600 hover:text-pink-600">HD Makeup</a></li>
        </nav>
      </div>

      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          BEAUTY
        </h2>
        <nav className="list-none mb-10">
          <li><a className="text-gray-600 hover:text-pink-600">Facials</a></li>
          <li><a className="text-gray-600 hover:text-pink-600">Skin Care</a></li>
          <li><a className="text-gray-600 hover:text-pink-600">Hair Styling</a></li>
          <li><a className="text-gray-600 hover:text-pink-600">Makeup Consultation</a></li>
        </nav>
      </div>

      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          QUICK LINKS
        </h2>
        <nav className="list-none mb-10">
          <li><a className="text-gray-600 hover:text-pink-600">Home</a></li>
          <li><a className="text-gray-600 hover:text-pink-600">Services</a></li>
          <li><a className="text-gray-600 hover:text-pink-600">Gallery</a></li>
          <li><a className="text-gray-600 hover:text-pink-600">Contact Us</a></li>
        </nav>
      </div>

      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CONTACT
        </h2>
        <nav className="list-none mb-10">
          <li><a className="text-gray-600 hover:text-pink-600">Book Appointment</a></li>
          <li><a className="text-gray-600 hover:text-pink-600">WhatsApp Support</a></li>
          <li><a className="text-gray-600 hover:text-pink-600">Email Us</a></li>
          <li><a className="text-gray-600 hover:text-pink-600">Location</a></li>
        </nav>
      </div>

    </div>
  </div>

  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">
        © 2026 StyleSphere — All Rights Reserved
      </p>

      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">Facebook</a>
        <a className="ml-3 text-gray-500">Instagram</a>
        <a className="ml-3 text-gray-500">Twitter</a>
        <a className="ml-3 text-gray-500">LinkedIn</a>
      </span>
    </div>
  </div>
</footer>
</>
)}
export default App
