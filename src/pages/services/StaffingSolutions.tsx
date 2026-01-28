import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const StaffingSolutions = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24">
                {/* Page Hero */}
                <section className="bg-primary/5 py-20 px-6">
                    <div className="container mx-auto text-center max-w-4xl">
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                            Premium <span className="text-gradient">Staffing Solutions</span>
                        </h1>
                        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                            Professional, trained, and presentable staff that represent your brand perfectly.
                        </p>
                        <Button size="lg" variant="hero">Hire Staff</Button>
                    </div>
                </section>

                {/* Staff Types */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h2 className="font-display text-3xl mb-8">Who We Provide</h2>
                                {[
                                    { role: "Event Hostesses & Ushers", desc: "Welcoming guests with elegance and efficiency." },
                                    { role: "Brand Promoters", desc: "Energetic staff to drive engagement and lead gen." },
                                    { role: "Registration Desk Staff", desc: "Tech-savvy team members for smooth check-ins." },
                                    { role: "Security Personnel", desc: "Ensuring safety and order at your venue." }
                                ].map(role => (
                                    <div key={role.role} className="flex gap-4">
                                        <div className="w-1 h-full bg-accent min-h-[50px]" />
                                        <div>
                                            <h3 className="font-bold text-lg">{role.role}</h3>
                                            <p className="text-muted-foreground">{role.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-muted rounded-2xl flex items-center justify-center">
                                <p className="text-muted-foreground">Staff Group Photo Placeholder</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default StaffingSolutions;
