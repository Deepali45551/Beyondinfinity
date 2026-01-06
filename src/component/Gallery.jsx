import { useState } from 'react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Sample gallery data
  const galleryItems = [
    { id: 1, src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', title: 'Mountain View', category: 'nature' },
    { id: 2, src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750', title: 'Modern House', category: 'architecture' },
    { id: 3, src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b', title: 'Music Studio', category: 'portrait' },
    { id: 4, src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f', title: 'Tech Devices', category: 'technology' },
    { id: 5, src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9', title: 'Forest Adventure', category: 'nature' },
    { id: 6, src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e', title: 'Skyscraper', category: 'architecture' },
    { id: 7, src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32', title: 'Camera Lens', category: 'technology' },
    { id: 8, src: 'https://images.unsplash.com/photo-1516724562728-afc824a36e84', title: 'Photography Session', category: 'portrait' },
    { id: 9, src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b', title: 'Snowy Peaks', category: 'nature' },
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'nature', name: 'Nature' },
    { id: 'architecture', name: 'Architecture' },
    { id: 'technology', name: 'Technology' },
    { id: 'portrait', name: 'Portrait' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a curated collection of stunning images from various categories.
          </p>
        </div>

        <div className="mb-10 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-3 text-sm font-medium rounded-lg mx-1 ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm opacity-90 capitalize">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No images found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;