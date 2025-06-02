
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, Coffee, Leaf, Cookie, Sandwich } from "lucide-react";
import { Link } from "react-router-dom";

const LuxuryMenuPreview = () => {
  const [activeCategory, setActiveCategory] = useState("Signature");

  const menuCategories = [
    { id: "Signature", name: "Signature Blends", icon: Star },
    { id: "Coffee", name: "Classic Coffee", icon: Coffee },
    { id: "Tea", name: "Premium Teas", icon: Leaf },
    { id: "Pastries", name: "Fresh Pastries", icon: Cookie },
    { id: "Food", name: "Artisan Food", icon: Sandwich }
  ];

  const menuItems = {
    Signature: [
      {
        name: "Verandah Signature Blend",
        description: "Our exclusive blend of Ethiopian and Colombian beans with notes of chocolate and caramel",
        price: "₹280",
        featured: true,
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974"
      },
      {
        name: "Golden Hour Latte",
        description: "Turmeric-infused latte with house-made oat milk and a touch of honey",
        price: "₹250",
        featured: true,
        image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?q=80&w=1974"
      },
      {
        name: "Monsoon Malabar Espresso",
        description: "Single-origin beans from Kerala's misty mountains, full-bodied with earthy undertones",
        price: "₹320",
        featured: true,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974"
      }
    ],
    Coffee: [
      {
        name: "Classic Cappuccino",
        description: "Perfect balance of espresso, steamed milk, and rich foam",
        price: "₹180",
        image: "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?q=80&w=1974"
      },
      {
        name: "Americano",
        description: "Bold espresso with hot water, simple and strong",
        price: "₹150",
        image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=1974"
      },
      {
        name: "Mocha Delight",
        description: "Rich espresso with premium chocolate and steamed milk",
        price: "₹220",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1974"
      }
    ],
    Tea: [
      {
        name: "Royal Masala Chai",
        description: "Traditional spiced tea with cardamom, cinnamon, and ginger",
        price: "₹120",
        image: "https://images.unsplash.com/photo-1565799509-558783d638a2?q=80&w=1974"
      },
      {
        name: "Earl Grey Supreme",
        description: "Premium Ceylon tea with bergamot and cornflower petals",
        price: "₹160",
        image: "https://images.unsplash.com/photo-1594631661960-28b2238ee5e0?q=80&w=1974"
      }
    ],
    Pastries: [
      {
        name: "Almond Croissant",
        description: "Buttery, flaky croissant filled with almond cream",
        price: "₹160",
        image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1976"
      },
      {
        name: "Chocolate Éclair",
        description: "Classic French pastry with vanilla cream and chocolate glaze",
        price: "₹140",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1974"
      }
    ],
    Food: [
      {
        name: "Truffle Avocado Toast",
        description: "Sourdough with smashed avocado, truffle oil, and microgreens",
        price: "₹280",
        image: "https://images.unsplash.com/photo-1603046891744-1f76eb10aec1?q=80&w=1974"
      },
      {
        name: "Artisan Panini",
        description: "Grilled panini with fresh mozzarella, basil, and sun-dried tomatoes",
        price: "₹320",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1973"
      }
    ]
  };

  const currentItems = menuItems[activeCategory] || [];

  return (
    <section className="section-padding bg-gradient-to-br from-verandah-cream/20 via-white to-verandah-sage/10">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-verandah-terracotta/10 border border-verandah-terracotta/20 rounded-full px-6 py-3 mb-8">
            <Star size={20} className="text-verandah-terracotta" />
            <span className="text-verandah-brown font-montserrat font-medium">
              Culinary Excellence
            </span>
          </div>
          <h2 className="text-verandah-brown text-4xl md:text-5xl font-bold mb-6">
            Our Artisan
            <span className="block text-transparent bg-gradient-to-r from-verandah-terracotta to-verandah-sage bg-clip-text">
              Menu Collection
            </span>
          </h2>
          <p className="text-verandah-charcoal text-lg max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of handcrafted beverages and artisan delicacies, 
            each prepared with the finest ingredients and utmost attention to detail.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {menuCategories.map(category => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                className={`group flex items-center space-x-3 px-8 py-4 rounded-full font-montserrat font-semibold text-sm transition-all duration-300 border-2 ${
                  activeCategory === category.id 
                    ? 'bg-verandah-terracotta text-white border-verandah-terracotta shadow-lg scale-105' 
                    : 'bg-white text-verandah-brown border-verandah-sage/30 hover:border-verandah-terracotta hover:bg-verandah-terracotta/5'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <IconComponent size={18} className={`transition-transform duration-300 ${activeCategory === category.id ? 'rotate-12' : 'group-hover:rotate-12'}`} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {currentItems.map((item, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in border-2 ${
                item.featured ? 'border-verandah-terracotta/30' : 'border-transparent'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-4 left-4 z-10 bg-verandah-terracotta text-white px-3 py-1 rounded-full text-xs font-bold">
                  Signature
                </div>
              )}

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Price Badge */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                  <span className="text-verandah-terracotta font-bold text-lg">{item.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-verandah-brown text-xl font-bold mb-3 font-montserrat group-hover:text-verandah-terracotta transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-verandah-charcoal/80 leading-relaxed mb-4">
                  {item.description}
                </p>
                
                {/* Order Button */}
                <Button className="w-full bg-verandah-sage hover:bg-verandah-terracotta text-white font-montserrat font-semibold transition-all duration-300 hover:scale-105">
                  Add to Order
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-verandah-terracotta to-verandah-sage rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 font-montserrat">
                Experience Our Full Menu
              </h3>
              <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                Visit us to explore our complete collection of artisan beverages, 
                seasonal specials, and chef's recommendations.
              </p>
              <Link to="/menu">
                <Button className="bg-white text-verandah-brown hover:bg-verandah-cream font-montserrat font-bold px-8 py-4 text-lg hover:scale-105 transition-all duration-300">
                  View Complete Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryMenuPreview;
