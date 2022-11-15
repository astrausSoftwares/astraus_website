import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const testimonials = [
  {
    companyLogo: 'PublishFi.png',
    companyLogoAlt: 'publishFi',
    text: 'Astraus has been extremely helpful in developing a great website for my agency, and their professional work has helped me stand out from the crowd.',
    clientImage: 'soham_chakraborty.jpg',
    designation: 'Co-Founder',
    clientName: 'Soham Chakraborty',
    company: 'PublishFi',
    link: 'https://publishfi.com/',
  },
  {
    companyLogo: 'eliefixmydesign.png',
    companyLogoAlt: 'Elie fix my design',
    text: 'They were always respectful and accommodating of my feedback, and the end result left me very impressed.',
    clientImage: 'elie.jpg',
    clientName: 'Elie',
    designation: 'Founder',
    company: 'Eliefixmydesign',
    link: 'https://eliefixmydesign.com/en/',
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 overflow-hidden md:py-16 lg:py-20" id="testimonials">
      <div className="text-center">
        <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-4xl mb-20">
          What Our Clients Say About Us...
        </h2>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1.55}
        navigation
        loop
        autoplay={{
          delay: 3000,
        }}
        spaceBetween={10}
        centeredSlides
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 shadow-gray-900 shadow-lg py-10 rounded-lg bg-slate-50 mb-24">
              <div className="relative">
                <img
                  className="mx-auto h-16"
                  src={`/testimonials/${testimonial.companyLogo}`}
                  alt={testimonial.companyLogoAlt}
                />
                <blockquote className="mt-10">
                  <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                    <p>&ldquo;{testimonial.text}&rdquo;</p>
                  </div>
                  <footer className="mt-8">
                    <div className="md:flex md:items-center md:justify-center">
                      <div className="md:flex-shrink-0">
                        <img
                          className="mx-auto h-10 w-10 rounded-full"
                          src={`/testimonials/${testimonial.clientImage}`}
                          alt=""
                        />
                      </div>
                      <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                        <div className="text-base font-medium text-gray-900">{testimonial.clientName}</div>

                        <svg className="hidden md:block mx-1 h-5 w-5 text-zinc-800" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M11 0h3L9 20H6l5-20z" />
                        </svg>

                        <div className="text-base font-medium text-gray-500">{`${testimonial.designation}, ${testimonial.company}`}</div>
                      </div>
                    </div>
                    <a
                      className="flex items-center justify-center underline underline-offset-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={testimonial.link}
                    >
                      Link to work
                    </a>
                  </footer>
                </blockquote>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
