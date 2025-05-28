interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader = ({
  title,
  subtitle,
  backgroundImage = 'bg-about-pattern',
}: PageHeaderProps) => {
  return (
    <div
      className={`relative ${backgroundImage} bg-cover bg-center h-[40vh] flex items-center`}
    >
      <div className="container text-center text-white z-10 px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl mb-0 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;