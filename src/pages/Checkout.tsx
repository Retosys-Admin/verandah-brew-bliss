
import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, MapPin, Phone, Mail, ShoppingBag, Check } from "lucide-react";

const Checkout = () => {
  const [orderSummary] = useState([
    { id: 1, name: "Signature Verandah Latte", price: 180, quantity: 2 },
    { id: 2, name: "Almond Croissant", price: 160, quantity: 1 },
    { id: 3, name: "Avocado Toast", price: 250, quantity: 1 }
  ]);

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [deliveryType, setDeliveryType] = useState("delivery");

  const subtotal = orderSummary.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryFee = deliveryType === "delivery" ? 50 : 0;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + deliveryFee + tax;

  return (
    <>
      <Helmet>
        <title>Checkout — Verandah Coffee Roasters & Café</title>
        <meta name="description" content="Complete your order from Verandah Coffee Roasters & Café" />
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-64 flex items-center bg-gradient-to-r from-verandah-brown to-verandah-terracotta">
        <div className="container-custom relative z-10">
          <div className="flex items-center space-x-4">
            <ShoppingBag className="text-white" size={32} />
            <div>
              <h1 className="text-white text-3xl md:text-4xl font-bold animate-fade-in">
                Checkout
              </h1>
              <p className="text-verandah-cream text-lg">
                Complete your order and enjoy our delicious coffee
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-verandah-cream/20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Checkout Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Delivery Type */}
              <Card className="shadow-lg border-verandah-sage/20">
                <CardHeader>
                  <CardTitle className="text-verandah-brown flex items-center">
                    <MapPin className="mr-2" size={20} />
                    Delivery Options
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setDeliveryType("delivery")}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        deliveryType === "delivery"
                          ? "border-verandah-terracotta bg-verandah-terracotta/10"
                          : "border-gray-200 hover:border-verandah-sage"
                      }`}
                    >
                      <div className="text-center">
                        <MapPin className="mx-auto mb-2 text-verandah-terracotta" size={24} />
                        <div className="font-semibold text-verandah-brown">Delivery</div>
                        <div className="text-sm text-gray-600">30-45 mins • ₹50</div>
                      </div>
                    </button>
                    <button
                      onClick={() => setDeliveryType("pickup")}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        deliveryType === "pickup"
                          ? "border-verandah-terracotta bg-verandah-terracotta/10"
                          : "border-gray-200 hover:border-verandah-sage"
                      }`}
                    >
                      <div className="text-center">
                        <ShoppingBag className="mx-auto mb-2 text-verandah-terracotta" size={24} />
                        <div className="font-semibold text-verandah-brown">Pickup</div>
                        <div className="text-sm text-gray-600">15-20 mins • Free</div>
                      </div>
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Address */}
              {deliveryType === "delivery" && (
                <Card className="shadow-lg border-verandah-sage/20 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="text-verandah-brown">Delivery Address</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full px-4 py-3 border border-verandah-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-verandah-terracotta"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full px-4 py-3 border border-verandah-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-verandah-terracotta"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Street Address"
                      className="w-full px-4 py-3 border border-verandah-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-verandah-terracotta"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="City"
                        className="w-full px-4 py-3 border border-verandah-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-verandah-terracotta"
                      />
                      <input
                        type="text"
                        placeholder="PIN Code"
                        className="w-full px-4 py-3 border border-verandah-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-verandah-terracotta"
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Contact Information */}
              <Card className="shadow-lg border-verandah-sage/20">
                <CardHeader>
                  <CardTitle className="text-verandah-brown flex items-center">
                    <Phone className="mr-2" size={20} />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-verandah-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-verandah-terracotta"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-verandah-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-verandah-terracotta"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="shadow-lg border-verandah-sage/20">
                <CardHeader>
                  <CardTitle className="text-verandah-brown flex items-center">
                    <CreditCard className="mr-2" size={20} />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { id: "card", name: "Credit/Debit Card", icon: CreditCard },
                        { id: "upi", name: "UPI", icon: Phone },
                        { id: "cod", name: "Cash on Delivery", icon: Mail }
                      ].map((method) => (
                        <button
                          key={method.id}
                          onClick={() => setPaymentMethod(method.id)}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            paymentMethod === method.id
                              ? "border-verandah-terracotta bg-verandah-terracotta/10"
                              : "border-gray-200 hover:border-verandah-sage"
                          }`}
                        >
                          <method.icon className="mx-auto mb-2 text-verandah-terracotta" size={20} />
                          <div className="text-sm font-medium text-verandah-brown">{method.name}</div>
                        </button>
                      ))}
                    </div>

                    {paymentMethod === "card" && (
                      <div className="space-y-4 animate-fade-in">
                        <input
                          type="text"
                          placeholder="Card Number"
                          className="w-full px-4 py-3 border border-verandah-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-verandah-terracotta"
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 border border-verandah-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-verandah-terracotta"
                          />
                          <input
                            type="text"
                            placeholder="CVV"
                            className="w-full px-4 py-3 border border-verandah-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-verandah-terracotta"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-24 shadow-xl border-verandah-sage/20">
                <CardHeader>
                  <CardTitle className="text-verandah-brown">Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orderSummary.map(item => (
                      <div key={item.id} className="flex justify-between items-center py-2 border-b border-verandah-cream/50">
                        <div>
                          <h4 className="font-medium text-verandah-brown">{item.name}</h4>
                          <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                        </div>
                        <span className="font-semibold text-verandah-brown">₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                    
                    <div className="border-t border-verandah-cream/50 pt-4 space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>₹{subtotal}</span>
                      </div>
                      {deliveryFee > 0 && (
                        <div className="flex justify-between">
                          <span>Delivery Fee</span>
                          <span>₹{deliveryFee}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Tax (18%)</span>
                        <span>₹{tax}</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold text-verandah-brown border-t border-verandah-cream/50 pt-2">
                        <span>Total</span>
                        <span>₹{total}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full btn-primary text-lg py-4 mt-6 hover:scale-105 transition-transform duration-300 shadow-lg">
                      <Check className="mr-2" size={20} />
                      Place Order
                    </Button>
                  </div>
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

export default Checkout;
