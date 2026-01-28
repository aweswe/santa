import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const VendorNetwork = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="lg:pt-24">
                <section className="bg-primary/5 py-20 px-6">
                    <div className="container mx-auto text-center max-w-4xl">
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                            Join Our <span className="text-gradient">Vendor Network</span>
                        </h1>
                        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                            Get access to steady business from India's top corporate events.
                        </p>
                        <Button size="lg" variant="hero">Join Network</Button>
                    </div>
                </section>

                <section className="py-20 bg-background">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <h2 className="font-display text-3xl mb-8">Who We Are Looking For</h2>
                        <ul className="space-y-4 mb-12">
                            {["Premium AV Equipment Suppliers", "Custom Fabricators & Carpenters", "Floral & Decor Specialists", "Caterers (Pan-Asian, Continental, Indian)", "Transport & Logistics Providers"].map(v => (
                                <li key={v} className="p-4 border border-border rounded-lg bg-card flex items-center justify-between">
                                    <span>{v}</span>
                                    <span className="text-xs font-bold px-2 py-1 bg-accent/10 text-accent rounded">OPEN</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default VendorNetwork;
