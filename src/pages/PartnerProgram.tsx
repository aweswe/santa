import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const PartnerProgram = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="lg:pt-24">
                <section className="bg-primary/5 py-20 px-6">
                    <div className="container mx-auto text-center max-w-4xl">
                        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl mb-6">
                            Partner with <span className="text-gradient">Santa India</span>
                        </h1>
                        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                            Join our ecosystem of agencies and vendors to create world-class experiences together.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button variant="hero" size="lg" className="w-full sm:w-auto">For Agencies</Button>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto">For Vendors</Button>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 border border-border rounded-xl hover:shadow-lg transition-all">
                                <h3 className="font-display text-2xl mb-4">Agency Partnership</h3>
                                <p className="text-muted-foreground mb-6">
                                    We work with marketing agencies as their trusted on-ground execution partner.
                                    White-label services avaliable.
                                </p>
                                <Button variant="link" className="px-0">Learn More →</Button>
                            </div>
                            <div className="p-8 border border-border rounded-xl hover:shadow-lg transition-all">
                                <h3 className="font-display text-2xl mb-4">Vendor Network</h3>
                                <p className="text-muted-foreground mb-6">
                                    Join our supplier database for AV, fabrication, logistics, and more.
                                    Consistent business for quality partners.
                                </p>
                                <Button variant="link" className="px-0">Join Network →</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default PartnerProgram;
