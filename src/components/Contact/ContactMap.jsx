import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

function ContactMap() {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-8">
                    <h3 className="text-3xl font-bold text-gray-900">Find Us</h3>
                    <p className="text-gray-500 mt-2">Visit our headquarters in the heart of Kaduwela.</p>
                </div>

                {/* Map Container */}
                <div className="relative w-full h-125 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7633657422743!2d79.97150067581788!3d6.918868518440914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae368947bee892b%3A0x3306e6fd6c21a8cc!2sBio%20Foods%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1775802948575!5m2!1sen!2slk"
                        className="absolute inset-0 w-full h-full grayscale-[0.1] contrast-[1.05]"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="BioFoods Location"
                    ></iframe>

                    {/* Modern Floating Info Card */}
                    <div className="absolute top-6 left-6 right-6 md:right-auto md:w-80">
                        <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-brand-primary p-2 rounded-lg">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="font-bold text-gray-900 uppercase tracking-tight">BioFoods HQ</h3>
                            </div>

                            <p className="text-sm text-gray-600 leading-relaxed mb-6 font-medium">
                                52/1/D, New Kandy Road, Kothalawala, Kaduwela, Sri-Lanka.
                            </p>

                            <a
                                href="https://maps.app.goo.gl/aYx1PH5dkiqtDgM1A"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3.5 bg-gray-900 text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-brand-primary transition-all duration-300 group shadow-lg shadow-black/10"
                            >
                                Get Directions
                                <Navigation className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactMap;