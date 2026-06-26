import { ArrowRight, Handshake } from 'lucide-react'
import React from 'react'

function PartnerWithUsCTA() {
  return (
    <section className="w-full py-20 lg:py-28 bg-white border-t border-brand-light">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="relative bg-linear-to-br from-brand-primary to-brand-secondary rounded-3xl lg:rounded-[3rem] p-10 lg:p-16 overflow-hidden">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-32 -mb-32" />

                            <div className="relative text-center text-white">
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20">
                                    <Handshake className="w-8 h-8 text-white" />
                                </div>

                                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black mb-6 leading-tight">
                                    Join Us in Delivering Excellence
                                </h2>

                                <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
                                    Partner with us to deliver ethically sourced, premium organic products to global markets.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <a 
                                        href="/contact"
                                        className="w-full sm:w-auto group bg-white text-brand-primary px-8 py-4 rounded-full font-bold hover:bg-brand-light transition-all duration-300 hover:-translate-y-1 shadow-xl flex items-center justify-center gap-2"
                                    >
                                        Start Partnership Discussion
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>

                                {/* Trust Indicators */}
                                <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20">
                                    <div>
                                        <div className="text-4xl font-black mb-2">30+</div>
                                        <div className="text-sm text-white/80">Years Experience</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-black mb-2">100%</div>
                                        <div className="text-sm text-white/80">Organic Certified</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-black mb-2">Global</div>
                                        <div className="text-sm text-white/80">Export Reach</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default PartnerWithUsCTA
