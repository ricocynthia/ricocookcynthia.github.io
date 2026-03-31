import { motion } from 'framer-motion'
import { hero } from '../data/portfolio'
import './Hero.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <motion.p className="hero-eyebrow" {...fadeUp(0.2)}>
          {hero.eyebrow}
        </motion.p>
        <motion.h1 className="hero-name" {...fadeUp(0.35)}>
          {hero.headline[0]}<br /><em>{hero.headline[1]}</em>
        </motion.h1>
        <motion.p className="hero-subtitle" {...fadeUp(0.5)}>
          {hero.subtitle}
        </motion.p>
        <motion.div className="hero-cta" {...fadeUp(0.65)}>
          <a href="#work" className="btn-primary">See my work</a>
          <a href="#contact" className="btn-ghost">Get in touch</a>
        </motion.div>
      </div>

      <div className="hero-right">
        <svg className="hero-art" viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <rect width="600" height="700" fill="#4A5E45"/>
          <ellipse cx="480" cy="80" rx="260" ry="220" fill="#3D5239" opacity="0.6"/>
          <ellipse cx="80" cy="600" rx="300" ry="200" fill="#3D5239" opacity="0.5"/>
          <ellipse cx="300" cy="350" rx="180" ry="280" fill="#5B7055" opacity="0.3"/>
          <g stroke="#8FA68A" strokeWidth="1" fill="none" opacity="0.5">
            <path d="M 200 680 Q 220 580 240 500 Q 260 420 250 350 Q 240 280 270 200"/>
            <path d="M 240 500 Q 180 470 150 430 Q 120 390 130 350"/>
            <path d="M 240 500 Q 290 480 310 450 Q 330 420 320 380"/>
            <path d="M 250 400 Q 190 380 170 340 Q 155 310 170 280"/>
            <path d="M 250 400 Q 300 390 320 360 Q 335 330 320 300"/>
            <path d="M 270 280 Q 220 265 210 230 Q 200 200 220 175"/>
            <path d="M 270 280 Q 310 270 325 240 Q 335 215 320 190"/>
          </g>
          <g stroke="#8FA68A" strokeWidth="0.8" fill="none" opacity="0.3">
            <path d="M 380 700 Q 370 600 360 520 Q 350 440 370 370"/>
            <path d="M 360 520 Q 310 500 295 465"/>
            <path d="M 360 520 Q 400 505 415 470 Q 425 440 410 410"/>
            <path d="M 370 370 Q 330 355 320 320"/>
            <path d="M 370 370 Q 405 360 415 330 Q 422 305 408 285"/>
          </g>
          <g fill="#6B8C5F" opacity="0.4">
            <ellipse cx="148" cy="345" rx="20" ry="10" transform="rotate(-30 148 345)"/>
            <ellipse cx="310" cy="378" rx="18" ry="9" transform="rotate(20 310 378)"/>
            <ellipse cx="169" cy="273" rx="16" ry="8" transform="rotate(-45 169 273)"/>
            <ellipse cx="323" cy="298" rx="16" ry="8" transform="rotate(35 323 298)"/>
            <ellipse cx="215" cy="168" rx="14" ry="7" transform="rotate(-25 215 168)"/>
            <ellipse cx="316" cy="183" rx="14" ry="7" transform="rotate(40 316 183)"/>
            <ellipse cx="295" cy="460" rx="18" ry="9" transform="rotate(15 295 460)"/>
            <ellipse cx="407" cy="468" rx="17" ry="8" transform="rotate(-20 407 468)"/>
          </g>
          <g fill="#C4825A" opacity="0.25">
            <ellipse cx="440" cy="580" rx="35" ry="18"/>
            <rect x="428" y="578" width="24" height="30" rx="2"/>
            <ellipse cx="420" cy="640" rx="25" ry="13"/>
            <rect x="411" y="638" width="18" height="22" rx="2"/>
          </g>
        </svg>
        <motion.div
          className="hero-quote"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <blockquote>{hero.quote}</blockquote>
          <cite>{hero.quoteCaption}</cite>
        </motion.div>
      </div>
    </div>
  )
}
