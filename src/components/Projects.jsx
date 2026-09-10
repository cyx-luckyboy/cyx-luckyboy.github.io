import { projects } from '../data/content'
import ProjectVisual from './ProjectVisual'

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="shell">
        <header className="section__head">
          <p className="section__index">01 / Projects</p>
          <h2 className="section__title">精选项目</h2>
          <p className="section__lead">
            从金融监控到桌面 AI，再到视觉识别 —— 关注可用性、稳定性与交付质量。
          </p>
        </header>

        <div className="project-list">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="project-card"
              style={{ '--accent': project.accent }}
            >
              <div className="project-card__media">
                <ProjectVisual type={project.visual} title={project.title} />
                <span className="project-card__index">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="project-card__body">
                <div className="project-card__top">
                  <p className="project-card__period">{project.period}</p>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__subtitle">{project.subtitle}</p>
                </div>
                <p className="project-card__desc">{project.description}</p>
                <ul className="project-card__stack">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {project.links.length > 0 && (
                  <div className="project-card__links">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
