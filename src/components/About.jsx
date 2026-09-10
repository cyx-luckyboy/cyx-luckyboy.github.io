import { education, experiences, profile, stats } from '../data/content'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="shell">
        <header className="section__head">
          <p className="section__index">02 / About</p>
          <h2 className="section__title">个人经历</h2>
          <p className="section__lead">教育、实习与校招路径，以及可验证的交付数据。</p>
        </header>

        <div className="about__grid">
          <aside className="about__profile">
            <div className="about__avatar" aria-hidden="true">
              <span>{profile.avatarText}</span>
            </div>
            <h3 className="about__name">{profile.name}</h3>
            <p className="about__role">{profile.role}</p>
            <p className="about__intro">{profile.intro}</p>
            <dl className="about__contacts">
              <div>
                <dt>电话</dt>
                <dd>
                  <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
                </dd>
              </div>
              <div>
                <dt>邮箱</dt>
                <dd>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </dd>
              </div>
              <div>
                <dt>地址</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>GitHub</dt>
                <dd>
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    cyx-luckyboy
                  </a>
                </dd>
              </div>
            </dl>
          </aside>

          <div className="about__main">
            <div className="about__stats">
              {stats.map((item) => (
                <div key={item.label} className="stat">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="about__block">
              <h4>实习 / 校招</h4>
              <ol className="timeline">
                {experiences.map((item) => (
                  <li key={item.company}>
                    <div className="timeline__meta">
                      <span>{item.period}</span>
                      <strong>{item.title}</strong>
                    </div>
                    <p className="timeline__company">{item.company}</p>
                    <ul>
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>

            <div className="about__block">
              <h4>教育背景</h4>
              <ul className="edu-list">
                {education.map((item) => (
                  <li key={item.school}>
                    <span>{item.period}</span>
                    <strong>{item.school}</strong>
                    <em>{item.degree}</em>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
