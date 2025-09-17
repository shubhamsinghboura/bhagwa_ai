
"use client";

import { Sparkles, Brain, Zap, Link, } from "lucide-react";
import { AI_BRAIN_HERO, flag, mindAi } from "./ImageAssets";
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import BhagwaButton from "./BhagwaButton";
import OutlineBhagwaButton from "./OutlineBhagwaButton";
import { Spotlight } from "./Spotlight";

const HeroSection = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bhagwa-subtle">

      <div className="absolute top-20 left-10 w-40 h-32 opacity-60 animate-float">
        <div className="relative">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block opacity-50 w-32 mt-2 ml-4"
          >
            <Image
              src={flag}
              alt="Flag"
              className="w-32 h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </div>

      <Spotlight
        className="-top-10 left-0 md:-top-20 md:left-60"
        fill="#dd6919"
      />
      <div className="absolute top-40 right-40 w-16 h-12 opacity-40 animate-float" style={{ animationDelay: "1s" }}>
        <div className="relative">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block opacity-50 w-32 mt-2 ml-4"
          >
            <Image
              src={flag}
              alt="Flag"
              className="w-32 h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-32 left-20 w-20 h-14 opacity-50 animate-float" style={{ animationDelay: "2s" }}>
        <div className="relative">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block opacity-50 w-32 mt-2 ml-4"
          >
            <Image
              src={flag}
              alt="Flag"
              className="w-32 h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#ff7c20]/10 border border-[#ff7c20] rounded-full px-4 py-2 text-[#ff7c20] text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Cultural AI Intelligence
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Meet Your</span>{' '}
                <span
                  className="
      bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600
      bg-clip-text text-transparent font-bold
      drop-shadow-[0_0_12px_rgba(255,153,51,0.9)]
    "
                >
                  Intelligent
                </span>{' '}
                <span className="text-white">Companion</span>
              </h1>


              <p className="text-xl text-orange-200 max-w-2xl mx-auto lg:mx-0">
                Experience the power of AI with deep cultural understanding and spiritual wisdom.
                Our intelligent system combines cutting-edge technology with rich cultural heritage
                to serve you with devotion and knowledge.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <BhagwaButton>
                <Brain className="w-5 h-5" />
                <a href="/Chat">Start Conversation</a>
              </BhagwaButton>

              <OutlineBhagwaButton
                icon={<Zap className="w-5 h-5" />}
              >
                Explore Features
              </OutlineBhagwaButton>
            </div>


            <div className="flex items-center justify-center lg:justify-start gap-8 text-base font-medium text-[#27272a]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ff7c20] rounded-full"></div>
                <span className="text-orange-400">Cultural Context</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ff7c20] rounded-full"></div>
                <span className="text-orange-400">Smart Responses</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ff7c20] rounded-full"></div>
                <span className="text-orange-400">Always Learning</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl left-25"
            >
              <Image
                src={AI_BRAIN_HERO}
                alt="AI Brain Hero"
                className="w-full h-auto rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;