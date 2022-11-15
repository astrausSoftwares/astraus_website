// import { Image } from '@astrojs/image/components';
// import WebsiteBrandingImage from '../../assets/Website_Branding.png';
const incentives = [
  {
    name: 'Digital Transformation',
    imageSrc: 'Digital_Transformation.png',
    description:
      'We partner with CTOs and CIOs to co-create and execute long-term strategies that increase sales, brand awareness, and operational efficiency.',
  },
  {
    name: 'Websites & Branding',
    imageSrc: 'Website_Branding.png',
    description:
      'Beautifully designed and collaboratively concepted websites that deliver best-in-class experiences to your users.',
  },
  {
    name: 'Customized Software Solutions and APIs',
    imageSrc: 'Customized_Business_Solutions.png',
    description:
      'We ensure to deliver the most optimized performant Restful and graphql APIs and customized softwares designed in a way that can scale to your needs',
  },
  {
    name: 'Application Design & Development',
    imageSrc: 'Application_Design_Development.png',
    description:
      'Our IOS and Android app developers are always looking to bring something special to our clients’ app projects.',
  },
  {
    name: 'Free Consultancy',
    imageSrc: 'consultancy.png',
    description: 'Have a problem? Talk with our experts and solve it for absolutely free of charge.',
  },
];

export default function Services() {
  return (
    <div id="services">
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-2xl px-6 py-16 sm:p-16">
          <div className="max-w-xl mx-auto lg:max-w-none">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">We built our business on our service</h2>
            </div>
            <div className="mt-12 max-w-sm mx-auto grid grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <img className="w-72 h-60 mx-auto object-fill" src={`/resized.${incentive.imageSrc}`} alt="" />
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
