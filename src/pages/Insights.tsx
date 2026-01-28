import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Insights = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24">
                <section className="py-20 px-6">
                    <div className="container mx-auto">
                        <h1 className="font-display text-4xl md:text-5xl mb-12">Latest <span className="text-gradient">Insights</span></h1>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="aspect-video bg-secondary rounded-xl mb-4 overflow-hidden">
                                        <div className="w-full h-full bg-accent/5 group-hover:bg-accent/10 transition-colors" />
                                    </div>
                                    <p className="text-sm text-accent font-semibold mb-2">Event Trends</p>
                                    <h3 className="font-display text-xl mb-2 group-hover:text-accent transition-colors">
                                        The Future of Corporate Events in 2026: Hybrid & Immersive
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        Discover how AI and VR are transforming the landscape of business gatherings...
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <Button variant="outline">Load More Articles</Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Insights;
