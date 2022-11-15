import { ArrowLongRightIcon } from '@heroicons/react/24/outline/index';

const posts = [
  {
    title: 'Elie Fix My Design',
    href: 'https://eliefixmydesign.com/en/',
    description: 'The official website for eliefixmydesign',
    imageUrl: 'eliefixmydesign.png',
  },
  {
    title: 'PublishFi',
    href: 'https://publishfi.com/',
    description: 'The official website of publisFi',
    imageUrl: 'publishfisite.png',
  },
  {
    title: 'Resturant & Bar',
    href: '#',
    description:
      'A responsive website that offers customers the menu and prices, table reservation facility and other features...',
    imageUrl: 'resturant.png',
  },
  {
    title: 'Luxury Homes',
    href: '#',
    description: 'This allows the user to view the propeties across the cities and has proven to boost up sales upto 70%...',
    imageUrl: 'luxury_homes.png',
  },
  {
    title: 'CONST RUCTION',
    href: '#',
    description: 'This is the landing page of a construction company, displays portfolio and their works',
    imageUrl: 'construction_company.png',
  },

  {
    title: 'E-commerce',
    href: '#',
    description: 'Ecommerce website for furniture and interior designing...',
    imageUrl: 'ecommerce.png',
  },
  {
    title: 'XFit',
    href: '#',
    description: 'Gym and fitness website, allows clients to sign up for a plan and even watch workout videos live',
    imageUrl: 'gym.png',
  },
];

export default function ProjectsSection() {
  return (
    <>
      <div id="works" className="relative scroll-mt-8 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 ">
        <div className="absolute inset-0">
          <div className=" h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Our Works</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              We let our works speak for ourselves. Have a preview of what you'll get.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <a target="_blank" rel="noopener noreferrer" href={post.href}>
                    <img className="h-auto w-full object-contain" src={`project_preview/resized.${post.imageUrl}`} alt="" />
                  </a>
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <a href={post.href} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </div>
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex mt-8 w-full items-end justify-center rounded-md border border-transparent bg-zinc-900 px-8 py-3 text-base font-medium text-white hover:bg-zinc-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Preview
                    <ArrowLongRightIcon className="h-6 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
