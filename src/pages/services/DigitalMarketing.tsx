import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const DigitalMarketing = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24">
                {/* Page Hero */}
                <section className="bg-primary/5 py-20 px-6">
                    <div className="container mx-auto text-center max-w-4xl">
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                            Strategic <span className="text-gradient">Digital Marketing</span>
                        </h1>
                        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                            Amplify your event's reach and ROI with our data-driven digital strategies.
                        </p>
                        <Button size="lg" variant="hero">Boost Your Reach</Button>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Social Media Buzz", desc: "Live tweeting, comprehensive coverage, and influencer engagement." },
                                { title: "Lead Generation", desc: "Targeted landing pages and ad campaigns to drive registrations." },
                                { title: "Email Marketing", desc: "Personalized communication flows for attendees and sponsors." },
                                { title: "SEO & Content", desc: "Ranking your event page high on search engines." },
                                { title: "Video Production", desc: "High-energy heavy reels and promotional videos." }
                            ].map((s) => (
                                <div key={s.title} className="p-6 border border-border rounded-xl hover:bg-accent/5 transition-colors">
                                    <h3 className="font-bold text-xl mb-3 text-accent">{s.title}</h3>
                                    <p className="text-muted-foreground">{s.desc}</p>
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

export default DigitalMarketing;
