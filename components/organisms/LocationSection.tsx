import React from 'react';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';

export const LocationSection = () => {
  return (
    <section id="location" className="py-24 bg-surface-hover relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Typography variant="caption" className="mb-2 text-primary font-bold">Our Headquarters</Typography>
            <Typography variant="h2" className="mb-6 text-primary-dark">Visit Us</Typography>
            
            <div className="space-y-6 text-foreground/70">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <div>
                    <h4 className="font-bold text-foreground">Seratif Tower</h4>
                    <p>Jl. Jenderal Sudirman No. Kav 52-53,<br/>Senayan, Kebayoran Baru, Jakarta Selatan,<br/>DKI Jakarta 12190</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <div>
                   <h4 className="font-bold text-foreground">Email Us</h4>
                   <p>hello@seratif.id</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-96 bg-slate-100 rounded-3xl overflow-hidden relative shadow-lg">
             {/* Map Placeholder */}
             <div className="absolute inset-0 flex items-center justify-center bg-slate-200">
                <Typography variant="h3" className="text-slate-400">Map Integration</Typography>
             </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
