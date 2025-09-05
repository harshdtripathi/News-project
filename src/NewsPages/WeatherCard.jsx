import React from "react";
import { motion } from "framer-motion";

const WeatherCard = ({ weather, forecast }) => {
  // helper to format date
  const formatDate = (dt) => {
    const options = { weekday: "long", month: "long", day: "numeric" };
    return new Date(dt * 1000).toLocaleDateString(undefined, options);
  };

  return (
    <div className="md:w-1/2 flex justify-center md:justify-end p-4">
      {weather ? (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700
                     text-white rounded-3xl shadow-2xl p-6 w-96 flex flex-col items-center overflow-hidden"
        >
          {/* Glow Orbs */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute -top-20 -right-20 w-40 h-40 bg-white/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/20 rounded-full blur-3xl"
          />

          {/* City + Date */}
          <h2 className="text-2xl font-bold drop-shadow-lg">{weather.name}</h2>
          <p className="text-sm opacity-90 mb-4">
            {formatDate(weather.dt)}
          </p>

          {/* Icon + Temp */}
          <motion.img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather Icon"
            className="w-28 h-28 drop-shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
          <h3 className="text-6xl font-extrabold mb-2 drop-shadow-md">
            {Math.round(weather.main.temp)}°C
          </h3>
          <p className="text-lg capitalize mb-2 italic">
            {weather.weather[0].description}
          </p>
          <p className="text-sm opacity-90 mb-4">
            Feels like {Math.round(weather.main.feels_like)}°C
          </p>

          {/* Extra Info */}
          <div className="flex justify-around w-full text-sm mt-2">
            <div className="flex flex-col items-center">
              <span className="text-xl">💧</span>
              <span>{weather.main.humidity}%</span>
              <span className="opacity-80">Humidity</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl">🌬️</span>
              <span>{weather.wind.speed} m/s</span>
              <span className="opacity-80">Wind</span>
            </div>
          </div>

          {/* Forecast Row */}
          {forecast && (
            <div className="flex justify-between w-full mt-6 px-2">
              {forecast.slice(0, 4).map((day, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex flex-col items-center"
                >
                  <p className="text-sm">{new Date(day.dt * 1000).toLocaleDateString("en-US", { weekday: "short" })}</p>
                  <img
                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                    alt="icon"
                    className="w-10 h-10"
                  />
                  <p className="text-sm">{Math.round(day.main.temp)}°</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      ) : (
        <p className="text-gray-500">Loading weather...</p>
      )}
    </div>
  );
};

export default WeatherCard;
