import { useState } from 'react'
import { profile } from '../data/content'

export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false)

  return (
    <section className="hero" id="top">
      <div className={`hero__media ${videoFailed ? 'hero__media--fallback' : ''}`} aria-hidden="true">
        {!videoFailed && (
          <video
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoFailed(true)}
          >
            <source src="/hero.mp4" type="video/mp4" />
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-27660-large.mp4"
              type="video/mp4"
            />
          </video>
        )}
        <div className="hero__veil" />
        <div className="hero__grid" />
        <div className="hero__noise" />
      </div>

      <div className="shell hero__content">
        <p className="hero__eyebrow">
          <span className="hero__dot" />
          {profile.role}
        </p>
        <h1 className="hero__title">
          <span className="hero__title-line">{profile.name}</span>
          <span className="hero__title-sub">{profile.nameEn}</span>
        </h1>
        <p className="hero__desc">{profile.tagline}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">
            查看作品
          </a>
          <a
            className="btn btn--ghost"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a className="btn btn--ghost" href="#contact">
            取得联系
          </a>
        </div>
        <div className="hero__meta">
          <span>{profile.location}</span>
        </div>
      </div>

      <a className="hero__scroll" href="#projects" aria-label="向下滚动">
        <span />
        Scroll
      </a>
    </section>
  )
}
