import axios from "axios";
import React, { useEffect } from "react";

function Footer() {
  const [weather, setWeather] = React.useState({});
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dataservice.accuweather.com/currentconditions/v1/211288?apikey=${
            import.meta.env.VITE_AccuweatherApiKey ||
            process.env.AccuweatherApiKey
          }`
        );
        setWeather(response.data[0]);
      } catch (error) {
        console.error("Error fetching temperature:", error);
      }
    };
    fetchData();
    const intervalId = setInterval(fetchData, 60000);
  }, []);
  return (
    <div>
      <div className="w-full flex justify-end">
        <div className="flex flex-col h-60 w-1/2 rounded-l-lg mb-[-7rem] z-10 bg-slate-300">
          <div className="py-20 px-10 flex flex-col justify-between h-full gap-10">
            <div className="flex justify-between">
              <div className="flex">
                <h1>
                  {weather.WeatherText && (
                    <img
                      src={`https://developer.accuweather.com/sites/default/files/${weather.WeatherIcon.toString().padStart(
                        2,
                        "0"
                      )}-s.png`}
                      alt=""
                    />
                  )}
                </h1>
                <h1 className="text-2xl">
                  {weather.Temperature?.Metric?.Value}°C
                </h1>
              </div>
              <h1 className="text-2xl ml-5" style={{ fontFamily: "Avenir" }}>
                {time}
              </h1>
            </div>
            <p>Palembang : {weather.WeatherText}</p>
          </div>
        </div>
      </div>
      <div
        id="footerContainer"
        className="flex px-32 py-10 flex-col relative bg-slate-200 h-96 z-0 gap-5"
      >
        <div className="flex gap-3 items-center">
          <img
            src="/sipallogo.jpeg"
            alt=""
            className="rounded-full w-10 h-10"
            style={{
              fontFamily: "Avenir",
            }}
          />
          <h1 className="text-3xl text-black">Sipal</h1>
          <div></div>
        </div>
        <div className="flex justify-between mt-5">
          <div
            style={{
              fontFamily: "Avenir",
            }}
          >
            <h1 className="text-xl font-bold" style={{ fontFamily: "Avenir" }}>
              Work with us
            </h1>
            <div className="flex flex-col mt-2">
              <p className="text-sm">Business Events</p>
              <p className="text-sm">Media</p>
              <p className="text-sm">Travel Trade</p>
            </div>
          </div>
        </div>
        <div
          style={{
            fontFamily: "Avenir",
          }}
          className="my-10 flex justify-between"
        >
          <div className="flex-1">© 2024 Sipal. All rights reserved.</div>
          <div className="flex-1 flex gap-5">
            <p>Term of Use</p>
            <p>Privacy Policy</p>
            <p>Accessibility</p>
            <p>Cookies</p>
          </div>
          <div className="flex flex-1"></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
