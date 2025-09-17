// src/components/ui/FeaturesSection.tsx
"use client";

import { Brain, Globe, Heart, MessageCircle, Shield, Sparkles, Zap } from "lucide-react";
import { HoverEffect } from "./card-hover-effect";

export default function FeaturesSection() {

  const projects = [
  {
    title: "Advanced Intelligence",
    description:
      "Powered by state-of-the-art AI technology with deep learning capabilities and cultural understanding.",
    link: "https://stripe.com",
     icon: Brain,
  },
  {
    title: "Natural Conversation",
    description:
      "Engage in meaningful dialogues with context-aware responses that understand cultural nuances.",
    link: "https://netflix.com",
     icon: MessageCircle,
  },
  {
    title: "Secure & Private",
    description:
      "Your conversations are protected with enterprise-grade security and privacy measures.",
    link: "https://google.com",
      icon: Shield,
  },
  {
    title: "Lightning Fast",
    description:
      "Get instant responses with our optimized infrastructure designed for speed and reliability.",
    link: "https://meta.com",
      icon:Zap
  },
  {
    title: "Cultural Wisdom",
    description:
      "Integrates traditional knowledge with modern AI to provide culturally relevant insights.",
    link: "https://amazon.com",
      icon: Heart
  },
  {
    title: "Global Reach",
    description:
      "Available worldwide with support for multiple languages and cultural contexts.",
    link: "https://microsoft.com",
       icon: Globe
  },
];
  return (
    <section className="py-20 sm:py-24 px-4 text-center">
      
      <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto">
        
        <div className="inline-flex items-center gap-2 bg-[#ff7c20]/10 border border-[#ff7c20] rounded-full px-4 py-2 text-[#ff7c20] text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          Powerful Features
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold">
          <span className="text-white">Why Choose Our </span>
          <span
            className="
              bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600
              bg-clip-text text-transparent font-bold
              drop-shadow-[0_0_12px_rgba(255,153,51,0.9)]
            "
          >
            AI Platform
          </span>
        </h2>

        <p className="font-bold tracking-wider font-logo bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
          Experience the perfect blend of cutting-edge technology and cultural intelligence.
        </p>

      <div className="max-w-5xl mx-auto"> 
      <HoverEffect items={projects} />
    </div>

      </div>
    </section>
  );
}