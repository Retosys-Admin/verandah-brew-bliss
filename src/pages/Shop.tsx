
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Signature Blend Coffee Beans",
      description: "Our house blend of carefully selected beans from South India",
      price: "₹650",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1974"
    },
    {
      id: 2,
      name: "Single Origin Arabica",
      description: "Premium single origin coffee from Coorg plantations",
      price: "₹850",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=1974"
    },
    {
      id: 3,
      name: "Coffee Brewing Kit",
      description: "Complete kit with V60 dripper, filters, and measuring spoon",
      price: "₹2,500",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070"
    },
    {
      id: 4,
      name: "Verandah Travel Mug",
      description: "Insulated travel mug with our signature logo",
      price: "₹450",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1974"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Shop — Verandah Coffee Roasters & Café</title>
        <meta name="description" content="Shop premium coffee beans, brewing equipment, and merchandise from Verandah Coffee Roasters & Café." />
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1974')"
          }}
        >
          <div className="absolute inset-0 bg-verandah-brown/50"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="flex items-center space-x-6 mb-6">
            <img 
              src="/lovable-uploads/a41b404b-8d7d-4a36-84ce-6aaa113ae89f.png" 
              alt="Verandah Coffee Roasters & Café" 
              className="h-16 w-auto"
            />
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Coffee Shop
          </h1>
          <p className="text-verandah-cream text-lg max-w-2xl">
            Take home the taste of Verandah with our premium products
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <div key={product.id} className="cafe-card group">
                <div className="h-60 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-verandah-brown text-lg font-semibold font-montserrat mb-2">
                    {product.name}
                  </h3>
                  <p className="text-verandah-charcoal/80 text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-verandah-terracotta font-bold text-lg">
                      {product.price}
                    </span>
                    <Link to="/order">
                      <Button className="btn-primary" size="sm">
                        Add to Cart
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Shop;
