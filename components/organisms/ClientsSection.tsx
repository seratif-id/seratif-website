import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';

const clients = [1, 2, 3, 4, 5, 6];

export const ClientsSection = () => {
  return (
    <section className="py-20 bg-primary/5 border-y border-primary/5">
      <Container>
        <div className="text-center mb-12">
          <Typography variant="body" className="text-foreground/50 font-medium uppercase tracking-widest">
            Trusted by Respective Clients
          </Typography>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70">
          {clients.map((i) => (
            <div key={i} className="h-12 bg-slate-100 rounded animate-pulse flex items-center justify-center text-xs text-slate-400 font-bold">
              LOGO {i}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
