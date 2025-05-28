import PageHeader from '../components/PageHeader';
import NewsletterSignup from '../components/NewsletterSignup';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <PageHeader 
        title="About Us" 
        subtitle="Learn about our commitment to quality, integrity, and exceptional service"
      />

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Real Stone & Granite was founded with a simple mission: to provide the highest quality natural and engineered stone products with exceptional customer service and expert guidance.
              </p>
              <p className="text-gray-600 mb-6">
                For over 15 years, we've been the trusted stone supplier for homeowners, interior designers, architects, and contractors throughout the region. Our passion for stone and commitment to craftsmanship has established us as leaders in the industry.
              </p>
              <p className="text-gray-600">
                Today, we continue to expand our collection with unique and beautiful stone from around the world, while maintaining our founding principles of integrity, quality, and customer satisfaction.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7195292/pexels-photo-7195292.jpeg" 
                alt="Our showroom" 
                className="rounded-lg shadow-lg object-cover h-[400px] w-full"
              />
              <div className="absolute bottom-6 right-6 bg-white p-4 rounded shadow-md">
                <p className="text-gold font-medium">Est. 2008</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle mx-auto">
              These core principles guide everything we do at Real Stone & Granite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">I</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty, transparency, and ethical business practices. Our clients can trust our recommendations and pricing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Craftsmanship</h3>
              <p className="text-gray-600">
                We celebrate the artistry of natural stone and the skill of those who work with it. We partner with master fabricators who share our commitment to excellence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">Q</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Quality</h3>
              <p className="text-gray-600">
                We source only the finest stone materials from reputable quarries worldwide. Our quality control standards ensure you receive exceptional products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg" 
                  alt="Our selection process" 
                  className="rounded-lg shadow-md h-48 object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/6207822/pexels-photo-6207822.jpeg" 
                  alt="Stone slab selection" 
                  className="rounded-lg shadow-md h-48 object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/7989742/pexels-photo-7989742.jpeg" 
                  alt="Quality inspection" 
                  className="rounded-lg shadow-md h-48 object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg" 
                  alt="Finished installation" 
                  className="rounded-lg shadow-md h-48 object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="section-title">What Sets Us Apart</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-gold font-bold mr-2">✓</span>
                  <div>
                    <h3 className="font-medium">Exceptional Selection</h3>
                    <p className="text-gray-600">
                      We source unique and high-quality stone from around the world, offering one of the largest selections in the region.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gold font-bold mr-2">✓</span>
                  <div>
                    <h3 className="font-medium">Expert Knowledge</h3>
                    <p className="text-gray-600">
                      Our team has extensive experience and education in natural stone properties, applications, and care.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gold font-bold mr-2">✓</span>
                  <div>
                    <h3 className="font-medium">Customer-Focused Approach</h3>
                    <p className="text-gray-600">
                      We listen to your needs and provide personalized guidance to ensure you find the perfect stone for your project.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gold font-bold mr-2">✓</span>
                  <div>
                    <h3 className="font-medium">Industry Relationships</h3>
                    <p className="text-gray-600">
                      Our strong connections with quarries, fabricators, and installers allow us to provide comprehensive service.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-hero-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="container relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Visit Our Showroom</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience our stone collection in person. Our experts are ready to help you find the perfect stone for your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
            <a 
              href="https://maps.app.goo.gl/TP87Gysfn89U4UhE9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
};

export default AboutPage;