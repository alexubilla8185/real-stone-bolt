import { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    console.log('Newsletter signup:', email);
    // Show success message
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <div className="bg-stone-100 py-16">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-medium mb-3">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest product updates, design inspiration, and exclusive offers.
          </p>
          
          {isSubmitted ? (
            <div className="bg-green-50 text-green-800 p-4 rounded-md">
              <p className="font-medium">Thank you for subscribing!</p>
              <p>You'll be the first to know about our new products and offers.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;