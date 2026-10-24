import { strengths } from '../data/content'

export default function Strengths() {
  return (
    <section className="section strengths" id="strengths">
      <div className="shell">
        <header className="section__head">
          <p className="section__index">03 / Strengths</p>
          <h2 className="section__title">个人优势</h2>
          <p className="section__lead">
            覆盖大模型应用、语音链路、微服务、前端桌面端与具身智能落地。
          </p>
        </header>

        <div className="strength-grid">
          {strengths.map((item, index) => (
            <article key={item.title} className="strength-card">
              <span className="strength-card__num">{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <ul>
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
