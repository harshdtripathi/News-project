import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import newlogo from '../assets/janmorcha.jpeg';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import author from '../assets/ashtosh-ji.jpg';
import newspaper from "../assets/newpaper.jpeg";
import rajlogo from '../assets/rajlogo.jpg';
import jhon from "../assets/jhon.jpeg"
import gd from "../assets/gd.jpeg"
import { HiMenuAlt3, HiX } from "react-icons/hi";
import VideoDescription from './VideoDescription';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'


const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [playlist, setPlaylist] = useState([]);


  useEffect(() => {
    const fetchPlaylistVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLes1Xw0kZQJb9J-tPs6ko9MNxSKEqMc_k&maxResults=10&key=${import.meta.env.VITE_REACT_APP_YT_API_KEY}`
        );
        const data = await response.json();
        // console.log("Fetched Playlist Data:", data);

        setPlaylist(data.items); // Now contains video details
      } catch (error) {
        console.error("Error fetching playlist videos:", error);
      }
    };

    fetchPlaylistVideos();
  }, []);

  return (
    <div className="w-full font-sans flex flex-col justify-between text-[#2d2d2d] min-h-screen overflow-x-hidden">

      {/* Navigation */}
      <nav className="backdrop-blur-md bg-white/90 border-b border-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src={rajlogo}
              alt="logo"
              className="lg:w-16 lg:h-16 w-14 h-14 hover:scale-125 rounded-full transition-transform duration-300"
            />
            <h1 className="text-md lg:text-lg font-extrabold text-black tracking-wide">राजधानी तक</h1>
          </div>

          <div className="hidden md:flex space-x-4 items-center">
            <a
              href="https://youtube.com/@rajdhanitak"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-700 transition-all duration-300"
            >
              YouTube पर देखें
            </a>
          </div>



        </div>


      </nav>


      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 max-w-7xl mx-auto gap-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-red-800 mb-6 leading-snug">
            विश्वसनीय हिंदी समाचार <br /> हर रोज़, हर समय
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            अशुतोष शर्मा एक अनुभवी पत्रकार हैं जो आपको देश-दुनिया की सबसे तेज और सटीक खबरें हिंदी में प्रस्तुत करते हैं।
          </p>
          <a
            href="https://youtube.com/@rajdhanitak"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-all duration-300"
          >
            🎥 मुख्य खबरें देखें
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={newspaper}
            alt="Profile"
            className="w-130 h-82 object-cover      transition-all duration-300"
          />
        </div>
      </section>

      {/* Type Animation */}
      <section className="px-6 py-10 max-w-4xl mx-auto ">
        <div className="text-blue-800 font-semibold rounded-xl px-6 py-5 text-center shadow-md border border-red-700">
          <TypeAnimation
            sequence={[
              '🗞️ आज की मुख्य खबरें...', 2000,
              '📢 राजनीति में बड़ा बदलाव!', 2000,
              '🌦️ मौसम का अलर्ट जारी!', 2000,
              '📈 शेयर मार्केट में उछाल...', 2000,
              '🎥 पाएं नई खबरें हमारे YouTube चैनल "राजधानी तक" पर!', 2000
            ]}
            wrapper="span"
            speed={50}
            className="text-lg sm:text-xl"
            repeat={Infinity}
          />
        </div>
      </section>

      {/* playlist videos url */}
      <div >
    <Swiper
  modules={[Autoplay, Navigation]}
  spaceBetween={20}
  slidesPerView={1}
  loop={true}
  speed={4000}
  autoplay={{
    delay: 1,
    disableOnInteraction: true,
  }}
  navigation={true}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
  {playlist.map(
    (video) =>
      video?.snippet?.description !== 'This video is unavailable.' && (
        <SwiperSlide key={video.id}>
          <a
            href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <VideoDescription
              url={video.snippet.thumbnails?.high?.url}
              title={video.snippet?.title}
              description={video.snippet.description}
            />
          </a>
        </SwiperSlide>
      )
  )}
</Swiper>

    </div>
      {/* News Sections */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-6 py-12 max-w-7xl mx-auto">
        {[
          { title: 'राजनीति की खबरें', text: 'हम आपको राजनीति की हर हलचल की सटीक जानकारी प्रदान करते हैं, ताकि आप हमेशा अपडेटेड रहें।', image1: newlogo },
          { title: 'खेल की दुनिया', text: 'क्रिकेट से लेकर ओलंपिक तक — राजधानी तक आपको खेल जगत की हर नई जानकारी देता है।', image1: jhon },
          { title: 'मनोरंजन की खबरें', text: 'बॉलीवुड से लेकर वेब सीरीज़ तक — हम लाते हैं आपके लिए मनोरंजन की सभी बड़ी खबरें।', image1: gd },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:items-start hover:bg-gray-200 w-full md:w-1/3 border border-red-700 bg-white rounded-xl shadow-lg p-3"
          >
            <img src={item.image1} alt={item.title} className="w-full h-40 object-fill rounded-lg shadow-md mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
            <p className="text-gray-700 text-base font-semibold text-center md:text-left">{item.text}</p>
          </div>
        ))}
      </div>

      {/* About the Author */}
      <div className="text-[#222] py-16 px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-start gap-12">

          {/* Author Image Section */}
          <div className="flex flex-col items-center mx-auto md:items-start ">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-red-600 md:text-left">लेखक के बारे में</h2>
            <div className="relative w-72 h-96 md:w-96 md:h-[28rem] shadow-lg border-2 border-red-700 overflow-hidden">
              <img
                src={author}
                alt="Author"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xl md:text-2xl font-semibold mt-4 text-center mx-auto text-[#444]">आशुतोष शर्मा</p>
          </div>

          {/* Author Info Section */}
          <div className="text-lg max-w-3xl leading-relaxed space-y-6 mt-16">
            <p className='font-semibold'>
              उन्होंने अपनी प्रारंभिक शिक्षा अपने गृहनगर में प्राप्त की और फिर सागर चले गए। उन्होंने पत्रकारिता विश्वविद्यालय से स्नातक की उपाधि प्राप्त की और बाद में पत्रकारिता में स्नातकोत्तर किया।
            </p>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-red-700">करियर:</h3>
              <p>
                पत्रकारिता में अपने करियर की शुरुआत उन्होंने एक समाचार चैनल में एक शोधकर्ता के रूप में की। कुछ समय बाद, उन्हें एक एंकर के रूप में पदोन्नत किया गया। उन्होंने कई प्रमुख समाचार कार्यक्रमों की मेजबानी की और विभिन्न महत्वपूर्ण घटनाओं को कवर किया। उन्होंने विभिन्न राष्ट्रीय और अंतर्राष्ट्रीय मुद्दों पर भी लिखा है।
              </p>
            </div>
            <p>
              आशुतोष शर्मा एक अनुभवी और प्रतिष्ठित पत्रकार हैं जिन्होंने अपने करियर में महत्वपूर्ण योगदान दिया है। उनके काम को व्यापक रूप से सराहा गया है और उन्होंने पत्रकारिता के क्षेत्र में एक महत्वपूर्ण स्थान बनाया है।
            </p>
          </div>
        </div>
      </div>



      {/* Footer */}
      <footer className="bg-white border-t border-red-100 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={newlogo} alt="logo" className="w-10 h-10 rounded-full" />
              <h1 className="text-lg font-bold text-red-700">राजधानी तक</h1>
            </div>
            <p className="text-sm text-gray-600">मुझे YouTube पर देखें और जानें असली न्यूज़ की ताकत।</p>
            <a
              href="https://youtube.com/@rajdhanitak"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition"
            >
              यूट्यूब चैनल पर जाएं
            </a>
          </div>
          <div className="flex md:justify-end items-center space-x-4 text-2xl text-gray-700">
            <a href="https://www.facebook.com/share/1Cbf5MKRBK" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
              <FaSquareInstagram />
            </a>
            <a href="https://youtube.com/@rajdhanitak" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
              <FaYoutube />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
