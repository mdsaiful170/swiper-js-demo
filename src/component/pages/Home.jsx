import { Container } from "../compobox/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { SwiperImg } from "../../lib/db/Navitems";
import Button from "../compobox/Button";
import { Slidernavigate } from "./Slidernavigate";
const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Swiper
            grabCursor={true}
            loop={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            className="relative "
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
              clickable: true,
            }}
          >
            <SwiperSlide>
              <div className="flex items-center justify-center flex-col">
                <div className="text-center">
                  <p className="text-textwhitecolor  text-base font-normal">
                    Meet your new car
                  </p>
                  <h1 className="font-bold lg:pb-9 pb-5  pt-3 md:text-[46px] text-[36px] lg:text-6xl">
                    Honda Civic Type R
                  </h1>
                  <div className="space-x-2">
                    <Button
                      className={
                        "bg-gray-100 text-textwhitecolor dark:bg-darkcofeecolor "
                      }
                    >
                      More Details
                    </Button>
                    <Button>Test Drive</Button>
                  </div>
                  <div className="mt-16">
                    <img
                      src="/img/home-bg.png"
                      alt=""
                      className="max-w-full w-full dark:grayscale filter  object-cover"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center flex-col">
                <div className="text-center">
                  <p className="text-textwhitecolor  text-base font-normal">
                    Meet your new car
                  </p>
                  <h1 className="font-bold lg:pb-9 pb-5  pt-3 md:text-[46px] text-[36px] lg:text-6xl">
                    Honda Civic Type R
                  </h1>
                  <div className="space-x-2">
                    <Button
                      className={
                        "bg-gray-100 text-textwhitecolor dark:bg-darkcofeecolor "
                      }
                    >
                      More Details
                    </Button>
                    <Button>Test Drive</Button>
                  </div>
                  <div className="mt-16">
                    <img
                      src="/img/home-bg.png"
                      alt=""
                      className="max-w-full w-full dark:grayscale filter  object-cover"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center flex-col">
                <div className="text-center">
                  <p className="text-textwhitecolor  text-base font-normal">
                    Meet your new car
                  </p>
                  <h1 className="font-bold lg:pb-9 pb-5  pt-3 md:text-[46px] text-[36px] lg:text-6xl">
                    Honda Civic Type R
                  </h1>
                  <div className="space-x-2">
                    <Button
                      className={
                        "bg-gray-100 text-textwhitecolor dark:bg-darkcofeecolor "
                      }
                    >
                      More Details
                    </Button>
                    <Button>Test Drive</Button>
                  </div>
                  <div className="mt-16">
                    <img
                      src="/img/home-bg.png"
                      alt=""
                      className="max-w-full w-full dark:grayscale filter  object-cover"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center flex-col">
                <div className="text-center">
                  <p className="text-textwhitecolor  text-base font-normal">
                    Meet your new car
                  </p>
                  <h1 className="font-bold lg:pb-9 pb-5  pt-3 md:text-[46px] text-[36px] lg:text-6xl">
                    Honda Civic Type R
                  </h1>
                  <div className="space-x-2">
                    <Button
                      className={
                        "bg-gray-100 text-textwhitecolor dark:bg-darkcofeecolor "
                      }
                    >
                      More Details
                    </Button>
                    <Button>Test Drive</Button>
                  </div>
                  <div className="mt-16">
                    <img
                      src="/img/home-bg.png"
                      alt=""
                      className="max-w-full w-full dark:grayscale filter  object-cover"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <Slidernavigate next={"swiper-next"} prev={"swiper-prev"} />
          </Swiper>
        </Container>
      </section>

      <section>
        <Container>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            loop={true}
            slidesPerView={"auto"}
            spaceBetween={20}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 70,
              modifier: 3,
            }}
            modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
            pagination={{
              el: ".swiper-pagination",
              type: "fraction", //it hiden then pagination showing ok
              clickable: true,
            }}
            navigation={{
              nextEl: ".ri-arrow-right-line",
              prevEl: ".ri-arrow-left-line",
              clickable: true,
            }}
            className=" relative  py-5 px-2"
          >
            {SwiperImg.map((res) => (
              <SwiperSlide
                key={res.id}
                className="lg:!max-w-[20rem] !max-w-[16rem]  h-[22rem] lg:h-auto relative"
              >
                <img
                  src={res.img}
                  alt={res.alt}
                  className="!w-full !h-full object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}

            <div className=" max-w-[280px] md:max-w-xs w-full mx-auto mt-5 lg:mt-3 flex items-center justify-between">
              <i className="ri-arrow-left-line text-2xl  size-10 text-center leading-[40px] text-white cursor-pointer bg-prepulecolor dark:bg-darkgreencolor dark:text-darktextdipcolor rounded-full"></i>
              <i className="ri-arrow-right-line text-2xl  size-10 text-center leading-[40px] text-white cursor-pointer bg-prepulecolor dark:bg-darkgreencolor dark:text-darktextdipcolor  rounded-full"></i>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </Container>
      </section>
    </>
  );
};

export default Home;
