import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { stones, getStonesByType } from '../data/stones';
import { Stone } from '../types';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');
  const [filteredStones, setFilteredStones] = useState<Stone[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);

  useEffect(() => {
    let stones = typeFilter ? getStonesByType(typeFilter) : stones;

    if (selectedColors.length > 0) {
      stones = stones.filter(stone => 
        stone.colors.some(color => selectedColors.includes(color))
      );
    }

    if (selectedFinishes.length > 0) {
      stones = stones.filter(stone => 
        stone.finishes.some(finish => selectedFinishes.includes(finish))
      );
    }

    if (inStockOnly) {
      stones = stones.filter(stone => stone.inStock);
    }

    setFilteredStones(stones);
  }, [typeFilter, selectedColors, selectedFinishes, inStockOnly]);

  const allColors = Array.from(
    new Set(stones.flatMap(stone => stone.colors))
  ).sort();

  const allFinishes = Array.from(
    new Set(stones.flatMap(stone => stone.finishes))
  ).sort();

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const toggleFinish = (finish: string) => {
    setSelectedFinishes(prev =>
      prev.includes(finish)
        ? prev.filter(f => f !== finish)
        : [...prev, finish]
    );
  };

  return (
    <div>
      <PageHeader 
        title={typeFilter ? `${typeFilter.charAt(0).toUpperCase() + typeFilter.slice(1)} Collection` : 'Our Stone Collection'} 
        subtitle="Explore our premium selection of natural and engineered stones"
      />

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium mb-4">Filters</h3>

                {/* Color Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Colors</h4>
                  <div className="space-y-2">
                    {allColors.map(color => (
                      <label key={color} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedColors.includes(color)}
                          onChange={() => toggleColor(color)}
                          className="rounded border-gray-300 text-gold focus:ring-gold"
                        />
                        <span className="ml-2 capitalize">{color}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Finish Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Finishes</h4>
                  <div className="space-y-2">
                    {allFinishes.map(finish => (
                      <label key={finish} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFinishes.includes(finish)}
                          onChange={() => toggleFinish(finish)}
                          className="rounded border-gray-300 text-gold focus:ring-gold"
                        />
                        <span className="ml-2">{finish}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Availability Filter */}
                <div>
                  <h4 className="font-medium mb-2">Availability</h4>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={inStockOnly}
                      onChange={(e) => setInStockOnly(e.target.checked)}
                      className="rounded border-gray-300 text-gold focus:ring-gold"
                    />
                    <span className="ml-2">In Stock Only</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStones.map(stone => (
                  <div key={stone.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={stone.images[0]}
                        alt={stone.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {!stone.inStock && (
                        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                          Out of Stock
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium mb-2">{stone.name}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {stone.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 capitalize">
                          {stone.type}
                        </span>
                        <Link
                          to={`/products/${stone.id}`}
                          className="text-gold hover:text-gold-dark flex items-center text-sm font-medium"
                        >
                          View Details <ArrowRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredStones.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No stones found</h3>
                  <p className="text-gray-600">
                    Try adjusting your filters to see more options.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;