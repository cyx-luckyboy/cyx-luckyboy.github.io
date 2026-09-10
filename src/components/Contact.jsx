import { profile } from '../data/content'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__bg" aria-hidden="true" />
      <div className="shell contact__inner">
        <p className="section__index">04 / Contact</p>
        <h2 className="contact__title">
          一起把想法
          <br />
          做成可用的产品。
        </h2>
        <p className="contact__lead">
          欢迎邮件或电话沟通，也可通过 GitHub 查看开源作品与持续更新。
        </p>

        <div className="contact__actions">
          <a
            className="btn btn--primary btn--lg"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            访问 GitHub
          </a>
          <a className="btn btn--ghost btn--lg" href={`mailto:${profile.email}`}>
            发送邮件
          </a>
          <a className="btn btn--ghost btn--lg" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
            电话联系
          </a>
        </div>

        <div className="contact__rows">
          <a href={`mailto:${profile.email}`}>
            <span>Email</span>
            <strong>{profile.email}</strong>
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
            <span>Phone</span>
            <strong>{profile.phone}</strong>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <span>GitHub</span>
            <strong>cyx-luckyboy</strong>
          </a>
        </div>

        <footer className="contact__foot">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{profile.location}</span>
        </footer>
      </div>
    </section>
  )
}
