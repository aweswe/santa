import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24">
                {/* Hero Section */}
                <section className="relative py-24 px-6 overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute top-0 left-0 w-full h-full bg-hero-gradient opacity-50 -z-10" />
                    <div className="absolute top-20 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10" />

                    <div className="container mx-auto text-center max-w-4xl relative z-10">
                        <span className="text-accent font-medium tracking-widest uppercase mb-4 block animate-fade-in">Get in Touch</span>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
                            Let's Create Something <br /> <span className="text-gradient">Extraordinary</span>
                        </h1>
                        <p className="text-muted-foreground text-xl max-w-2xl mx-auto mb-12">
                            Whether you have a groundbreaking idea or need a partner to execute your vision, we're ready to listen.
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-20 px-6">
                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16">
                            {/* Contact Info */}
                            <div className="space-y-12">
                                <div>
                                    <h2 className="font-display text-3xl mb-6">Contact Information</h2>
                                    <p className="text-muted-foreground text-lg mb-8">
                                        Prefer to talk? Reach out to us directly or schedule a visit to our HQ.
                                    </p>

                                    <div className="space-y-6">
                                        <a href="mailto:hello@santaindia.com" className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors group">
                                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">Email Us</p>
                                                <p className="font-medium text-lg">hello@santaindia.com</p>
                                            </div>
                                        </a>

                                        <a href="tel:+919876543210" className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors group">
                                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">Call Us</p>
                                                <p className="font-medium text-lg">+91 98765 43210</p>
                                            </div>
                                        </a>

                                        <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors group">
                                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">Visit HQ</p>
                                                <p className="font-medium text-lg">New Delhi, India</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Embedded Map */}
                                <div className="w-full aspect-video bg-muted rounded-2xl overflow-hidden relative group shadow-inner">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.454286665768!2d77.28309667615967!3d28.63612808618698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcabcf3ccb61%3A0xa350776ef96950b6!2sSanta%20Eventz%20%26%20Exhibitions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1706430000000!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="filter grayscale hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

                                <h2 className="font-display text-3xl mb-2">Send us a Message</h2>
                                <p className="text-muted-foreground mb-8">Tell us about your event and we'll get back to you within 24 hours.</p>

                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">First Name</label>
                                            <Input placeholder="John" className="bg-background/50 border-input" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Last Name</label>
                                            <Input placeholder="Doe" className="bg-background/50 border-input" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Email</label>
                                        <Input type="email" placeholder="john@company.com" className="bg-background/50 border-input" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Phone</label>
                                        <Input type="tel" placeholder="+91 ..." className="bg-background/50 border-input" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Event Details</label>
                                        <Textarea placeholder="Tell us about the event type, estimated date, and requirements..." className="min-h-[150px] bg-background/50 border-input" />
                                    </div>

                                    <Button size="lg" className="w-full gap-2 text-lg h-12" variant="hero">
                                        Send Message <Send className="w-4 h-4" />
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
