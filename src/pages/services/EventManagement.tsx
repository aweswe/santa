import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const EventManagement = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="lg:pt-24">
                {/* Page Hero */}
                <section className="bg-primary/5 py-20 px-6">
                    <div className="container mx-auto text-center max-w-4xl">
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                            Complete <span className="text-gradient">Event Management</span>
                        </h1>
                        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                            From intimate corporate gatherings to large-scale international summits,
                            we handle every detail with precision, creativity, and flair.
                        </p>
                        <Button size="lg" variant="hero">Plan Your Event</Button>
                    </div>
                </section>

                {/* Detailed Services */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="font-display text-3xl mb-6">End-to-End Execution</h2>
                                <ul className="space-y-4">
                                    {[
                                        "Venue Sourcing & Management",
                                        "Theme Conception & Decor",
                                        "Technical Production (AV, Lighting, Sound)",
                                        "Artist Management & Entertainment",
                                        "Catering & Hospitality",
                                        "Logistics & Transport"
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            <div className="h-2 w-2 rounded-full bg-accent" />
                                            <span className="text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-secondary/30 rounded-2xl h-80 flex items-center justify-center border border-border">
                                <p className="text-muted-foreground">High-quality Event Image Placeholder</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="py-20 bg-secondary/10">
                    <div className="container mx-auto px-6">
                        <h2 className="font-display text-3xl text-center mb-12">Types of Events We Manage</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {["Corporate Conferences", "Product Launches", "Award Ceremonies", "Gala Dinners", "Team Building Offsites", "Annual General Meetings"].map((type) => (
                                <div key={type} className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all text-center">
                                    <h3 className="font-bold text-lg">{type}</h3>
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

export default EventManagement;
