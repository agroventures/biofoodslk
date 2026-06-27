import React, { useState } from 'react';
import { Play, X, Calendar, Eye, Sparkles, ExternalLink } from 'lucide-react';

function MediaVideos() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const videos = [
        {
            id: 1,
            title: "ජෛව පොහොර භාවිතයට අනාගතයේ සූදානම් වෙමු",
            videoUrl: "https://www.youtube.com/watch?v=HLblsE5hwbo",
        },
        {
            id: 2,
            title: "Hope - (2022-11-26) | ITN",
            videoUrl: "https://www.youtube.com/watch?v=AiK5WSiGKR4",
        },
        {
            id: 3,
            title: "ඉගුරු දීලා මිරිස්, එදත් ගත්තා අදත් ගන්නවා හෙටත් එච්චර තමයි",
            videoUrl: "https://www.youtube.com/watch?v=jj4p_lydX9I",
        }
    ];

    // Extract YouTube video ID from URL
    const getYouTubeID = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    // Get YouTube thumbnail
    const getYouTubeThumbnail = (url) => {
        const videoId = getYouTubeID(url);
        return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
    };

    // Get YouTube embed URL
    const getYouTubeEmbedUrl = (url) => {
        const videoId = getYouTubeID(url);
        return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : null;
    };

    const handleVideoClick = (video) => {
        setSelectedVideo(video);
        document.body.style.overflow = 'hidden';
    };

    const closeVideoPlayer = () => {
        setSelectedVideo(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section className='relative w-full py-20 lg:py-28 bg-linear-to-b from-gray-50 via-white to-gray-50'>
            {/* Background Decorations */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute top-40 right-10 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-20' />
                <div className='absolute bottom-40 left-10 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20' />
            </div>

            <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className="mb-16 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-green-50 to-emerald-50 text-brand-primary px-5 py-2.5 rounded-full mb-6 border border-green-100 shadow-sm">
                        <Sparkles className="w-5 h-5" />
                        <span className="font-bold tracking-[0.15em] uppercase text-xs">Media Gallery</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-4">
                        Our Video <br className="sm:hidden" />
                        <span className="bg-linear-to-r from-brand-primary to-emerald-600 bg-clip-text text-transparent">
                            Stories
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
                        Experience our journey through compelling visual stories
                    </p>
                </div>

                {/* Video Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
                    {videos.map((video, index) => (
                        <button
                            key={video.id}
                            type="button"
                            className='group relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer text-left'
                            onClick={() => handleVideoClick(video)}
                            style={{ 
                                animationDelay: `${index * 100}ms`,
                                animation: 'fadeInUp 0.6s ease-out forwards',
                                opacity: 0
                            }}
                        >
                            {/* Thumbnail Container */}
                            <div className='relative aspect-video overflow-hidden bg-gray-900'>
                                {/* YouTube Thumbnail */}
                                <img
                                    src={getYouTubeThumbnail(video.videoUrl)}
                                    alt={video.title}
                                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                                    onError={(e) => {
                                        // Fallback to default thumbnail if maxresdefault fails
                                        const videoId = getYouTubeID(video.videoUrl);
                                        e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                                    }}
                                />

                                {/* Dark Overlay */}
                                <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent' />

                                {/* Play Button */}
                                <div className='absolute inset-0 flex items-center justify-center'>
                                    <div className='w-16 h-16 lg:w-20 lg:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-primary'>
                                        <Play className='w-8 h-8 lg:w-10 lg:h-10 text-brand-primary group-hover:text-white ml-1 transition-colors' fill="currentColor" />
                                    </div>
                                </div>

                                {/* YouTube Badge */}
                                <div className='absolute top-4 right-4 bg-red-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5'>
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                    </svg>
                                    YouTube
                                </div>

                                {/* Shimmer Effect */}
                                <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent' />
                            </div>

                            {/* Content */}
                            <div className='p-5 lg:p-6'>
                                {/* Title */}
                                <h3 className='text-base lg:text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-brand-primary transition-colors leading-snug'>
                                    {video.title}
                                </h3>

                                {/* Watch Button */}
                                <div className='flex items-center justify-between pt-4 border-t border-gray-100'>
                                    <span className='text-sm font-semibold text-brand-primary flex items-center gap-2'>
                                        Watch Video
                                        <ExternalLink className='w-4 h-4' />
                                    </span>
                                    <div className='w-8 h-8 bg-green-50 rounded-full flex items-center justify-center group-hover:bg-brand-primary transition-colors'>
                                        <Play className='w-4 h-4 text-brand-primary group-hover:text-white transition-colors' fill="currentColor" />
                                    </div>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Video Player Modal */}
            {selectedVideo && (
                <div className='fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn'>
                    {/* Backdrop */}
                    <button
                        type="button"
                        aria-label="Close video"
                        className='absolute inset-0 bg-black/95 backdrop-blur-sm'
                        onClick={closeVideoPlayer}
                    />

                    {/* Modal Container */}
                    <div className='relative w-full max-w-6xl bg-gray-900 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl animate-scaleIn'>
                        {/* Close Button */}
                        <button
                            onClick={closeVideoPlayer}
                            className='absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:rotate-90'
                        >
                            <X className='w-6 h-6' />
                        </button>

                        {/* YouTube Player */}
                        <div className='relative aspect-video bg-black'>
                            <iframe
                                className='w-full h-full'
                                src={getYouTubeEmbedUrl(selectedVideo.videoUrl)}
                                title={selectedVideo.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>

                        {/* Video Info */}
                        <div className='p-6 lg:p-8 bg-linear-to-b from-gray-900 to-black'>
                            <div className='flex items-start justify-between gap-4'>
                                <div className='flex-1'>
                                    <div className='inline-flex items-center gap-2 bg-red-600/20 text-red-400 px-3 py-1.5 rounded-full text-xs font-bold mb-3'>
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                        </svg>
                                        YouTube Video
                                    </div>
                                    <h3 className='text-xl lg:text-2xl font-bold text-white mb-3 leading-snug'>
                                        {selectedVideo.title}
                                    </h3>
                                </div>
                                
                                {/* Open in YouTube */}
                                <a
                                    href={selectedVideo.videoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap'
                                >
                                    <ExternalLink className='w-4 h-4' />
                                    Open in YouTube
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default MediaVideos;