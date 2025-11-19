"use client"
import React, { useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import Image from "next/image";

export default function DNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  return (
    <nav className="w-full border-b bg-gray-50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Image src={"/Logo.jpeg"} alt="logo" width={120} height={50} className="text-2xl font-bold" />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-700">
          <a href="#" className="hover:text-black transition">Home</a>
          <a href="#" className="hover:text-black transition">Shop</a>
          <a href="#" className="hover:text-black transition">Categories</a>
          <a href="#" className="hover:text-black transition">About</a>
          <a href="#" className="hover:text-black transition">Contact</a>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <Search className="cursor-pointer" />
          <ShoppingCart className="cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg border"
          onClick={toggleMenu}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-4">
          <a href="#" className="block text-gray-700 py-2">Home</a>
          <a href="#" className="block text-gray-700 py-2">Shop</a>
          <a href="#" className="block text-gray-700 py-2">Categories</a>
          <a href="#" className="block text-gray-700 py-2">About</a>
          <a href="#" className="block text-gray-700 py-2">Contact</a>

          <div className="flex items-center space-x-4 pt-4 border-t">
            <Search className="cursor-pointer" />
            <ShoppingCart className="cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
}
