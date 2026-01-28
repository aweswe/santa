import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Exhibitions = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="lg:pt-24">
                {/* Page Hero */}
                <section className="bg-primary/5 py-20 px-6">
                    <div className="container mx-auto text-center max-w-4xl">
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                            World-Class <span className="text-gradient">Exhibitions</span>
                        </h1>
                        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                            We design and build award-winning stalls and pavilions that capture attention
                            and drive footfall in crowded expo halls.
                        </p>
                        <Button size="lg" variant="hero">Get a Design Quote</Button>
                    </div>
                </section>

                {/* Our Approach */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-8 border border-border rounded-xl bg-card">
                                <h3 className="font-display text-2xl mb-4">3D Design</h3>
                                <p className="text-muted-foreground">Photorealistic renders before a single plank is cut, ensuring you know exactly what you're getting.</p>
                            </div>
                            <div className="p-8 border border-border rounded-xl bg-card">
                                <h3 className="font-display text-2xl mb-4">Fabrication</h3>
                                <p className="text-muted-foreground">In-house production units ensuring high-quality finish and timely delivery.</p>
                            </div>
                            <div className="p-8 border border-border rounded-xl bg-card">
                                <h3 className="font-display text-2xl mb-4">Installation</h3>
                                <p className="text-muted-foreground">Hassle-free setup and dismantling by our expert on-site teams.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Placeholder */}
                <section className="py-20 bg-secondary/10">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="font-display text-3xl mb-12">Featured Stalls</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="aspect-square bg-muted rounded-xl flex items-center justify-center">
                                    <span className="text-muted-foreground">Stall Image {i}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Exhibitions;
