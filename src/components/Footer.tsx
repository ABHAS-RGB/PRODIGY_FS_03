import React from 'react';
import { Store, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Store Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Store className="h-8 w-8 text-primary-400" />
              <h3 className="text-xl font-bold">LocalStore</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted local store bringing quality products to your doorstep with exceptional service and competitive prices.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Customer Reviews</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Order Tracking</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">123 Main Street, Your City, ST 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">hello@localstore.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 LocalStore. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};