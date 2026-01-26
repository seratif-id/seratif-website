import React from 'react';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { Button } from '../atoms/Button';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none" />
      
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 p-2 rounded-2xl bg-white shadow-2xl skew-y-3 transform transition-transform duration-700 hover:skew-y-0">
               {/* Placeholder for an office or team image */}
              <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center">
                 <span className="text-slate-300 font-medium">Team / Office Image</span>
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
          </div>

          <div className="lg:w-1/2">
            <Typography variant="caption" className="mb-4 text-secondary font-bold">About Seratif</Typography>
            <Typography variant="h2" className="mb-6 !text-primary-dark">
              Innovating with Purpose
            </Typography>
            <Typography variant="body" className="mb-6 text-foreground/70">
              Founded on the belief that technology should serve both people and the planet, Seratif combines world-class engineering with a deep commitment to the Sustainable Development Goals (SDGs).
            </Typography>
            <Typography variant="body" className="mb-8 text-foreground/70">
              Whether it's a complex web platform or a user-centric mobile app, every line of code we write is a step towards a more efficient and sustainable future.
            </Typography>
            
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">50+</span>
                <span className="text-sm text-foreground/60">Projects Delivered</span>
              </div>
              <div className="w-px h-12 bg-primary/20" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-secondary">4</span>
                <span className="text-sm text-foreground/60">SDGs Championed</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
