
import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OrderOnline = () => {
  const [cart, setCart] = useState<Array<{id: number, name: string, price: number, quantity: number}>>([]);

  const menuItems = [
    { id: 1, name: "Espresso", price: 120, category: "Coffee", description: "Rich and bold single shot" },
    { id: 2, name: "Cappuccino", price: 180, category: "Coffee", description: "Perfect blend of espresso and steamed milk" },
    { id: 3, name: "Latte", price: 200, category: "Coffee", description: "Smooth espresso with steamed milk and foam" },
    { id: 4, name: "Americano", price: 150, category: "Coffee", description: "Espresso with hot water" },
    { id: 5, name: "Croissant", price: 100, category: "Pastries", description: "Buttery, flaky French pastry" },
    { id: 6, name: "Chocolate Muffin", price: 120, category: "Pastries", description: "Rich chocolate chip muffin" },
    { id: 7, name: "Avocado Toast", price: 250, category: "Food", description: "Fresh avocado on artisan bread" },
    { id: 8, name: "Club Sandwich", price: 300, category: "Food", description: "Classic triple-layer sandwich" }
  ];

  const addToCart = (item: typeof menuItems[0]) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const categories = ["All", "Coffee", "Pastries", "Food"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Order Online — Verandah Coffee Roasters & Café</title>
        <meta name="description" content="Order your favorite coffee and food online from Verandah Coffee Roasters & Café. Fast delivery in Vijayawada." />
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047')"
          }}
        >
          <div className="absolute inset-0 bg-verandah-brown/50"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Order Online
          </h1>
          <p className="text-verandah-cream text-lg max-w-2xl">
            Get your favorite coffee and treats delivered fresh to your door
          </p>
        </div>
      </section>

      {/* Order Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Menu Items */}
            <div className="lg:col-span-2">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`menu-category ${selectedCategory === category ? 'active' : ''}`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Menu Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredItems.map(item => (
                  <Card key={item.id} className="hover:shadow-lg transition-shadow animate-fade-in">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-montserrat font-bold text-verandah-brown">{item.name}</h3>
                        <span className="text-verandah-terracotta font-bold">₹{item.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                      <Button 
                        onClick={() => addToCart(item)}
                        className="w-full btn-primary"
                      >
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cart */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-verandah-brown">Your Order</CardTitle>
                </CardHeader>
                <CardContent>
                  {cart.length === 0 ? (
                    <p className="text-gray-500 text-center py-4">Your cart is empty</p>
                  ) : (
                    <>
                      <div className="space-y-4 mb-6">
                        {cart.map(item => (
                          <div key={item.id} className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium text-verandah-brown">{item.name}</h4>
                              <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold">₹{item.price * item.quantity}</span>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 text-sm"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center text-lg font-bold text-verandah-brown">
                          <span>Total: ₹{getTotalPrice()}</span>
                        </div>
                        <Button className="w-full mt-4 btn-primary">
                          Proceed to Checkout
                        </Button>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default OrderOnline;
