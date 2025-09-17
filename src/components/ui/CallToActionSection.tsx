
"use client";

import { ArrowBigLeft, ArrowBigRight, ArrowRight, Brain, Sparkles, Zap } from "lucide-react";
// import bhagwaFlag from "@/assets/bhagwa-flag.png";
import BhagwaButton from "./BhagwaButton";
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import { flag } from "./ImageAssets";
import OutlineBhagwaButton from "./OutlineBhagwaButton";

const CallToActionSection = () => {
    return (
        <section className="py-24 bg-bhagwa-subtle relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-background/50 to-accent/20"></div>

            {/* Decorative Flags */}
            <div className="absolute top-20 right-10 w-40 h-32 opacity-60 animate-float">
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
            <div className="absolute bottom-20 left-10 w-24 h-16 opacity-30 animate-float" style={{ animationDelay: "1.5s" }}>

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

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 bg-[#ff7c20]/10 border border-[#ff7c20] rounded-full px-4 py-2 text-[#ff7c20] text-sm font-medium">
                        <Sparkles className="w-4 h-4" />
                        Get Started Today
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-center">
                        <span>Ready to Experience</span>
                        <span
                            className="
      block  {/* <--- This is the key change */}
      bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600
      bg-clip-text text-transparent
      drop-shadow-[0_0_12px_rgba(255,153,51,0.9)]
    "
                        >
                            Intelligent Conversations?
                        </span>
                    </h2>
                    <p className="text-xl text-orange-200 max-w-2xl mx-auto lg:mx-0">
                        Join thousands of users who have already discovered the power of culturally-aware AI.
                        Start your journey today and experience the future of intelligent assistance.
                    </p>

                    {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <BhagwaButton variant="hero" size="lg" className="text-lg px-10 py-6 group">
                            Start Free Conversation
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </BhagwaButton>
                        <BhagwaButton variant="hero-outline" size="lg" className="text-lg px-10 py-6">
                            Learn More
                        </BhagwaButton>
                    </div> */}

                    {/* <div className="pt-8 space-y-4">
                        <p className="text-sm text-muted-foreground">
                            Trusted by users worldwide • No credit card required • Start in seconds
                        </p>

                        <div className="flex items-center justify-center gap-2">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-5 h-5 bg-primary rounded-full text-white flex items-center justify-center text-xs">
                                    ★
                                </div>
                            ))}
                            <span className="ml-2 text-sm text-muted-foreground">
                                Rated 5.0 by our community
                            </span>
                        </div>
                    </div> */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <BhagwaButton onClick={() => alert("🚩 जय श्री राम 🚩")}>
                            Start Conversation
                            <ArrowRight className="w-5 h-5" />

                        </BhagwaButton>

                        <OutlineBhagwaButton
                       
                        >
                            Learn More
                        </OutlineBhagwaButton>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default CallToActionSection;