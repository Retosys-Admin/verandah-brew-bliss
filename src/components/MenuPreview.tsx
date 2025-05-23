
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Menu categories and items
const menuCategories = ["All", "Coffee", "Tea", "Pastries", "Savory"];

const menuItems = [
  {
    id: 1,
    name: "Signature Verandah Latte",
    description: "Our signature espresso with house-made caramel and steamed milk",
    price: "₹180",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?q=80&w=1974"
  },
  {
    id: 2,
    name: "Single Origin Pour Over",
    description: "Hand-brewed single origin coffee, served in a carafe",
    price: "₹220",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974"
  },
  {
    id: 3,
    name: "Masala Chai",
    description: "Black tea with traditional Indian spices and milk",
    price: "₹120",
    category: "Tea",
    image: "https://images.unsplash.com/photo-1565799509-558783d638a2?q=80&w=1974"
  },
  {
    id: 4,
    name: "Almond Croissant",
    description: "Buttery, flaky croissant filled with almond cream",
    price: "₹160",
    category: "Pastries",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1976"
  },
  {
    id: 5,
    name: "Avocado Toast",
    description: "Sourdough toast topped with smashed avocado, cherry tomatoes and feta",
    price: "₹240",
    category: "Savory",
    image: "https://images.unsplash.com/photo-1603046891744-1f76eb10aec1?q=80&w=1974"
  },
  {
    id: 6,
    name: "Blue Pea Flower Iced Tea",
    description: "Color-changing tea with lemongrass and honey",
    price: "₹180",
    category: "Tea",
    image: "https://images.unsplash.com/photo-1556679343-c1917e0cdb3a?q=80&w=1964"
  }
];

const MenuPreview = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="section-padding bg-verandah-cream/40">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-verandah-brown text-3xl md:text-4xl font-bold uppercase mb-4">Our Menu</h2>
          <p className="text-verandah-charcoal max-w-2xl mx-auto">
            Discover our selection of handcrafted beverages and delicious treats, made with the finest ingredients and lots of love.
          </p>
          <div className="w-20 h-1 bg-verandah-terracotta mx-auto mt-4"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map(category => (
            <button
              key={category}
              className={`menu-category ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="cafe-card group">
              <div className="h-60 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-verandah-brown text-xl font-semibold font-montserrat">{item.name}</h3>
                  <span className="text-verandah-terracotta font-bold">{item.price}</span>
                </div>
                <p className="text-verandah-charcoal/80 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-12">
          <Button className="btn-secondary">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
