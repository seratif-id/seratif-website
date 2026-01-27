'use client';

import React from 'react';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { Button } from '../atoms/Button';

export const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="blob-bg" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />

      <Container className="relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-gray-200 mb-8 animate-fade-in-down shadow-sm">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_var(--secondary)]" />
          <span className="text-sm font-medium text-slate-600">Accepting New Projects</span>
        </div>

        <Typography variant="gradient-h1" className="mb-6 max-w-4xl mx-auto leading-tight">
          Crafting Digital Excellence for the Future
        </Typography>

        <Typography variant="body" className="mb-10 max-w-2xl mx-auto text-xl text-foreground/70">
          We are <span className="text-primary font-bold">Serative</span>. A forward-thinking corporation dedicated to building stunning apps and websites while championing sustainability.
        </Typography>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={() => scrollTo("location")} size="lg" className="w-full sm:w-auto shadow-xl shadow-primary/20">
            Start Your Project
          </Button>
          <Button onClick={() => scrollTo("portfolio")} variant="secondary" size="lg" className="w-full sm:w-auto !bg-white !text-foreground !border-primary/10 hover:!border-primary/30">
            View Our Work
          </Button>
        </div>

        {/* Decorative elements */}
        {/* <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 animate-blob" /> */}
        {/* <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000" /> */}
      </Container>
    </section>
  );
};
