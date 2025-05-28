import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  overlay?: boolean;
}

const Hero = ({
  title,
  subtitle,
  buttonText = 'Explore Our Collection',
  buttonLink = '/products',
  backgroundImage = 'bg-hero-pattern',
  overlay = true,
}: HeroProps) => {
  return (
    <div
      className={`relative ${backgroundImage} bg-cover bg-center h-[80vh] flex items-center`}
    >
      <div className="container text-center text-white z-10 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        {buttonText && buttonLink && (
          <Link to={buttonLink} className="btn btn-primary">
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;