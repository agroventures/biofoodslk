import React, { useReducer, useRef } from 'react';
import { ArrowUpRight, CheckCircle2, X, Paperclip } from 'lucide-react';

const INITIAL_STATE = { formData: { name: '', email: '', phone: '', message: '' }, cvFile: null, dragOver: false, isLoading: false, isSubmitted: false };

function reducer(state, action) {
    switch (action.type) {
        case 'SET_FIELD': return { ...state, formData: { ...state.formData, [action.id]: action.value } };
        case 'SET_CV': return { ...state, cvFile: action.file };
        case 'SET_DRAG': return { ...state, dragOver: action.over };
        case 'SUBMIT_START': return { ...state, isLoading: true };
        case 'SUBMIT_SUCCESS': return { ...INITIAL_STATE, isSubmitted: true };
        case 'SUBMIT_ERROR': return { ...state, isLoading: false };
        case 'DISMISS': return { ...state, isSubmitted: false };
        default: return state;
    }
}

function CareersOpenings() {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    const { formData, cvFile, dragOver, isLoading, isSubmitted } = state;
    const fileInputRef = useRef(null);

    const handleFile = (file) => {
        if (!file) return;
        const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!allowed.includes(file.type)) return alert('Please upload a PDF or Word document.');
        if (file.size > 5 * 1024 * 1024) return alert('File size must be under 5MB.');
        dispatch({ type: 'SET_CV', file });
    };

    const handleDrop = (e) => {
        e.preventDefault();
        dispatch({ type: 'SET_DRAG', over: false });
        handleFile(e.dataTransfer.files[0]);
    };

    const handleChange = (e) => {
        dispatch({ type: 'SET_FIELD', id: e.target.id, value: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: 'SUBMIT_START' });
        try {
            const data = new FormData();
            data.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY);
            data.append('subject', 'Job Application – Bio Foods');
            data.append('name', formData.name);
            data.append('email', formData.email);
            data.append('phone', formData.phone);
            data.append('message', formData.message);
            if (cvFile) data.append('attachment', cvFile);

            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: data,
            });
            const json = await res.json();
            if (!json.success) throw new Error(json.message);

            dispatch({ type: 'SUBMIT_SUCCESS' });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (err) {
            console.error(err);
            dispatch({ type: 'SUBMIT_ERROR' });
        }
    };

    return (
        <section className="w-full bg-white py-24 lg:py-36 border-t border-neutral-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* HEADER */}
                <div className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-12 h-px bg-brand-gold" />
                        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-neutral-500">
                            Be Part of Something Good
                        </span>
                        <span className="w-12 h-px bg-brand-gold" />
                    </div>
                    <h2
                        className="text-5xl lg:text-7xl tracking-tight text-neutral-950 text-center lg:text-left"
                        style={{ fontFamily: 'Calibri, Gill Sans, Trebuchet MS, sans-serif' }}
                    >
                        Apply to Join
                        <br />
                        Our Team.
                    </h2>
                    <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 text-center lg:text-left">
                        We're always looking for passionate people. Share your details and tell us how you'd like to contribute - we'll be in touch.
                    </p>
                </div>

                {/* SUCCESS */}
                {isSubmitted && (
                    <div className="mb-10 bg-brand-light border border-brand-primary/20 p-6 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                            <p className="text-neutral-700">
                                Thank you! Our team will review your application and reach out soon.
                            </p>
                        </div>
                        <button type="button" onClick={() => dispatch({ type: 'DISMISS' })} className="text-neutral-400 hover:text-neutral-900">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                )}

                {/* FORM */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* LEFT PANEL */}
                    <div className="lg:col-span-4">
                        <div className="bg-brand-primary p-10 h-full">
                            <p className="text-base uppercase tracking-[0.3em] font-semibold text-brand-gold mb-8">
                                Why Bio Foods?
                            </p>
                            <ul className="space-y-8 text-white leading-7">
                                <li>
                                    <p className="text-brand-gold mb-1" style={{ fontFamily: 'Calibri, Gill Sans, Trebuchet MS, sans-serif', fontSize: '1.2rem' }}>
                                        Purpose-Driven Work
                                    </p>
                                    Contribute to organic, fair-trade agriculture that impacts communities across Sri Lanka.
                                </li>
                                <li>
                                    <p className="text-brand-gold mb-1" style={{ fontFamily: 'Calibri, Gill Sans, Trebuchet MS, sans-serif', fontSize: '1.2rem' }}>
                                        Global Exposure
                                    </p>
                                    Work with international buyers, certifiers, and partners across the world.
                                </li>
                                <li>
                                    <p className="text-brand-gold mb-1" style={{ fontFamily: 'Calibri, Gill Sans, Trebuchet MS, sans-serif', fontSize: '1.2rem' }}>
                                        Growth Culture
                                    </p>
                                    We invest in our people as much as we invest in our land.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* FORM */}
                    <div className="lg:col-span-8">
                        <form
                            onSubmit={handleSubmit}
                            className="border border-neutral-200 p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-8"
                        >
                            <div>
                                <label htmlFor="name" className="text-xs uppercase tracking-widest text-neutral-500">
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-3 w-full border border-neutral-200 px-5 py-4 outline-none focus:border-brand-primary"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="text-xs uppercase tracking-widest text-neutral-500">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-3 w-full border border-neutral-200 px-5 py-4 outline-none focus:border-brand-primary"
                                    placeholder="Email address"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label htmlFor="phone" className="text-xs uppercase tracking-widest text-neutral-500">
                                    Phone
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="mt-3 w-full border border-neutral-200 px-5 py-4 outline-none focus:border-brand-primary"
                                    placeholder="Contact number"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label htmlFor="message" className="text-xs uppercase tracking-widest text-neutral-500">
                                    Tell Us About Yourself
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-3 w-full border border-neutral-200 px-5 py-4 resize-none outline-none focus:border-brand-primary"
                                    placeholder="Share your background, skills, and what you're passionate about..."
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label htmlFor="cv-upload" className="text-xs uppercase tracking-widest text-neutral-500">
                                    Upload CV
                                </label>
                                <div
                                    onDragOver={(e) => { e.preventDefault(); dispatch({ type: 'SET_DRAG', over: true }); }}
                                    onDragLeave={() => dispatch({ type: 'SET_DRAG', over: false })}
                                    onDrop={handleDrop}
                                    className={`mt-3 w-full border-2 border-dashed transition ${
                                        dragOver ? 'border-brand-primary bg-brand-light' : 'border-neutral-200 hover:border-brand-primary'
                                    }`}
                                >
                                    <label
                                        htmlFor="cv-upload"
                                        className="w-full px-5 py-8 flex flex-col items-center justify-center gap-3 cursor-pointer"
                                    >
                                        <Paperclip className="w-5 h-5 text-neutral-400" />
                                        {cvFile ? (
                                            <span className="text-base text-neutral-700">{cvFile.name}</span>
                                        ) : (
                                            <p className="text-base text-neutral-500 text-center">
                                                Drag & drop your CV here, or <span className="text-brand-primary underline">browse</span>
                                                <br />
                                                <span className="text-xs text-neutral-400">PDF or Word · max 5MB</span>
                                            </p>
                                        )}
                                        <input
                                            ref={fileInputRef}
                                            id="cv-upload"
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            className="hidden"
                                            onChange={(e) => handleFile(e.target.files[0])}
                                        />
                                    </label>
                                    {cvFile && (
                                        <div className="flex justify-center pb-4">
                                            <button
                                                type="button"
                                                aria-label="Remove CV"
                                                onClick={() => dispatch({ type: 'SET_CV', file: null })}
                                                className="text-neutral-400 hover:text-neutral-900"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-brand-primary text-white hover:opacity-90 transition"
                                >
                                    {isLoading ? 'Submitting...' : 'Submit Application'}
                                    <ArrowUpRight className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CareersOpenings;
