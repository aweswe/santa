import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const AgencyPartners = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="lg:pt-24">
                {/* Page Hero */}
                <section className="bg-primary/5 py-20 px-6">
                    <div className="container mx-auto text-center max-w-4xl">
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                            For <span className="text-gradient">Agencies</span>
                        </h1>
                        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                            Scale your execution capabilities by partnering with Santa India. We act as your on-ground production arm.
                        </p>
                        <Button size="lg" variant="hero">Partner With Us</Button>
                    </div>
                </section>

                <section className="py-20 bg-background">
                    <div className="container mx-auto px-6">
                        <h2 className="font-display text-3xl mb-12 text-center">Partnership Models</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 border border-border rounded-xl">
                                <h3 className="font-bold text-2xl mb-4">White Label Execution</h3>
                                <p className="text-muted-foreground">
                                    We execute the event completely under your brand name. Your client sees your team, supervised by our experts.
                                </p>
                            </div>
                            <div className="p-8 border border-border rounded-xl">
                                <h3 className="font-bold text-2xl mb-4">Strategic Consortium</h3>
                                <p className="text-muted-foreground">
                                    Co-pitching for large mandates where we combine your creative strengths with our production might.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AgencyPartners;
