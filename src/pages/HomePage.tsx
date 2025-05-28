import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import QuoteForm from '../components/QuoteForm';
import NewsletterSignup from '../components/NewsletterSignup';
import { getFeaturedProjects } from '../data/projects';
import { getRecentBlogPosts } from '../data/blogPosts';
import { getFeaturedTestimonials } from '../data/testimonials';

const HomePage = () => {
  const featuredProjects = getFeaturedProjects();
  const recentPosts = getRecentBlogPosts();
  const testimonials = getFeaturedTestimonials();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div>
      <Hero 
        title="Exceptional Natural Stone & Granite"
        subtitle="Transform your space with our premium selection of natural and engineered stone. Quality materials, expert guidance, and beautiful results."
        buttonText="Explore Our Collection"
        buttonLink="/products"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Welcome to Real Stone & Granite</h2>
            <p className="section-subtitle">
              We specialize in premium natural and engineered stone for residential and commercial projects. With our extensive inventory and expert guidance, we help you find the perfect stone for your unique vision.
            </p>
            <Link to="/about" className="btn btn-outline mt-4">
              Learn More About Us
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-stone-100 p-8 rounded-lg text-center transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Premium Selection</h3>
              <p className="text-gray-600">
                Browse our extensive collection of natural and engineered stones from around the world.
              </p>
            </div>

            <div className="bg-stone-100 p-8 rounded-lg text-center transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Expert Guidance</h3>
              <p className="text-gray-600">
                Our knowledgeable team will help you select the perfect stone for your specific project needs.
              </p>
            </div>

            <div className="bg-stone-100 p-8 rounded-lg text-center transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                We stand behind our products with our commitment to quality, integrity, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stone Categories */}
      <section className="py-16 bg-stone-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Explore Our Stone Collection</h2>
            <p className="section-subtitle mx-auto">
              Discover our wide range of premium natural and engineered stones, perfect for countertops, flooring, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-md h-80">
              <img
                src="https://images.pexels.com/photos/3484667/pexels-photo-3484667.jpeg"
                alt="Granite"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-medium mb-2">Granite</h3>
                <p className="text-white/80 mb-4">
                  Durable and heat-resistant with unique patterns.
                </p>
                <Link
                  to="/products?type=granite"
                  className="text-gold hover:text-white flex items-center text-sm font-medium"
                >
                  View Collection <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-md h-80">
              <img
                src="https://images.pexels.com/photos/5824553/pexels-photo-5824553.jpeg"
                alt="Marble"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-medium mb-2">Marble</h3>
                <p className="text-white/80 mb-4">
                  Timeless elegance with distinctive veining.
                </p>
                <Link
                  to="/products?type=marble"
                  className="text-gold hover:text-white flex items-center text-sm font-medium"
                >
                  View Collection <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-md h-80">
              <img
                src="https://images.pexels.com/photos/7319316/pexels-photo-7319316.jpeg"
                alt="Quartzite"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-medium mb-2">Quartzite</h3>
                <p className="text-white/80 mb-4">
                  Natural beauty with exceptional durability.
                </p>
                <Link
                  to="/products?type=quartzite"
                  className="text-gold hover:text-white flex items-center text-sm font-medium"
                >
                  View Collection <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn btn-primary">
              View All Stone Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle mx-auto">
              See how our premium stones transform spaces. Get inspired by our featured installations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group overflow-hidden rounded-lg shadow-md">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 capitalize">
                      {project.type}
                    </span>
                    <Link
                      to={`/gallery#${project.id}`}
                      className="text-gold hover:text-gold-dark flex items-center text-sm font-medium"
                    >
                      View Project <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery" className="btn btn-outline">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-stone-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle mx-auto">
              Don't just take our word for it. Hear from our satisfied clients about their experience working with Real Stone & Granite.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6 flex justify-center">
                {Array(testimonials[activeTestimonial].rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-gold text-2xl">★</span>
                  ))}
              </div>
              <blockquote className="text-lg text-center italic mb-6">
                "{testimonials[activeTestimonial].content}"
              </blockquote>
              <div className="text-center">
                <p className="font-medium text-gray-800">
                  {testimonials[activeTestimonial].name}
                </p>
                <p className="text-gray-600">
                  {testimonials[activeTestimonial].role}
                  {testimonials[activeTestimonial].company && 
                    `, ${testimonials[activeTestimonial].company}`}
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full mx-1 ${
                    activeTestimonial === index ? 'bg-gold' : 'bg-gray-300'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Latest From Our Blog</h2>
            <p className="section-subtitle mx-auto">
              Expert tips, industry trends, and inspiration for your stone projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <div key={post.id} className="group overflow-hidden rounded-lg shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog#${post.id}`}
                    className="text-gold hover:text-gold-dark flex items-center text-sm font-medium"
                  >
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog" className="btn btn-outline">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium mb-4 text-white">
                Ready to Transform Your Space?
              </h2>
              <p className="text-gray-300 mb-6">
                Contact us today to discuss your project needs or schedule a visit to our showroom to see our stunning stone collection in person.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
                <a href="tel:7724899964" className="btn btn-outline">
                  Call: 772-489-9964
                </a>
              </div>
            </div>
            
            <div>
              <QuoteForm className="bg-stone-100" />
            </div>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
};

export default HomePage;