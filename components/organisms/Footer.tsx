import React from 'react';
import { Container } from '../atoms/Container';
import { Logo } from '../atoms/Logo';
import { Typography } from '../atoms/Typography';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-primary/5 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Logo />
            </div>
            <Typography variant="body" className="max-w-sm mb-6 !text-foreground/60">
              Empowering businesses through digital innovation and sustainable practices. Building the future, one pixel at a time.
            </Typography>
          </div>
          
          <div>
            <Typography variant="h3" className="mb-6 !text-lg !text-foreground">Company</Typography>
            <ul className="space-y-4">
              <li><a href="#about" className="text-foreground/60 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-foreground/60 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#sdg" className="text-foreground/60 hover:text-primary transition-colors">Goal</a></li>
            </ul>
          </div>

          <div>
            <Typography variant="h3" className="mb-6 !text-lg !text-white">Legal</Typography>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary/5 text-center text-foreground/40 text-sm">
          &copy; {new Date().getFullYear()} Seratif Corp. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};
