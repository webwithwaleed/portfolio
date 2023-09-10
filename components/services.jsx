import React from 'react'
import { motion } from 'framer-motion'
import Service from "../components/service"
import Youtube from '../pics/youtube.webp'
import Insta from '../pics/insta.webp'
import Podcast from '../pics/podcast.webp'
import Explainer from '../pics/explainer.webp'
import Tiktok from '../pics/tiktok.webp'
import Smads from '../pics/smads.webp'

function services() {
    return (
        <>
            <div>
                <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >Short-Form Content For <span className="highlight">All Your Needs </span>🚀</motion.h3>
            </div>
            <div className="list">
                <div className="services">
                    <Service img={Youtube.src} title="Youtube Shorts" desc="Reach more viewers with optimized short-form videos" />
                    <Service img={Insta.src} title="Instagram Reels" desc="Beat the IG algorithm and break through with engaging reels" />
                    <Service img={Podcast.src} title="Podcast to Shorts" desc="Take your podcast video and clip it into short-form videos" />
                    <Service img={Explainer.src} title="Video Explainers" desc="Simplify complex ideas to educate and entertain your audience" />
                    <Service img={Tiktok.src} title="TikTok Videos" desc="We gave in. We can now make those trendy TikTok videos. Yes, even the ones with dancing" />
                    <Service img={Smads.src} title="Social Media Ads" desc="Facebook, Twitter, Instagram, LinkedIn, TikTok. We can do it all" />
                </div>
                {/* <div className="services">
                    <Service img={Explainer.src} title="Video Explainers" desc="Simplify complex ideas to educate and entertain your audience" />
                    <Service img={Tiktok.src} title="TikTok Videos" desc="We gave in. We can now make those trendy TikTok videos. Yes, even the ones with dancing" />
                    <Service img={Smads.src} title="Social Media Ads" desc="Facebook, Twitter, Instagram, LinkedIn, TikTok. We can do it all" />
                </div> */}
            </div>
        </>
    )
}

export default services