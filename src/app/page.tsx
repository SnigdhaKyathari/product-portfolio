'use client';

import { PROFILE, PROJECTS, EXPERIENCE, AWARDS, EDUCATION, SKILLS } from '@/content';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Populate rail navigation and trigger reveals
    const rail = document.getElementById('rail');
    if (!rail) return;

    const sections = ['intro', 'projects', 'experience', 'education', 'skills'];
    const labels = ['Intro', '01 Projects', '02 Experience', '03 Education', '04 Skills'];

    rail.innerHTML = sections
      .map(
        (id, i) =>
          `<a href="#${id}" class="rail-link" data-section="${id}">
            <span class="tick"></span>${labels[i]}
          </a>`
      )
      .join('');

    // Trigger reveals for all sections
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => {
      el.classList.add('in');
    });

    // Scroll spy
    const handleScroll = () => {
      const scrollMargin = window.innerHeight * 0.12 + 78;
      let currentSection = sections[0];

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= scrollMargin) {
          currentSection = id;
        }
      }

      document.querySelectorAll('.rail-link').forEach((link) => {
        link.classList.toggle('active', link.getAttribute('data-section') === currentSection);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero / Intro */}
      <section id="intro" className="hero reveal in">
        <img className="photo" src={PROFILE.photo} alt={PROFILE.name} loading="eager" />
        <div className="hero-content">
          <h1>{PROFILE.name}</h1>
          <div className="lede-section">
            {PROFILE.lede.map((p, i) => (
              <p key={i} className="lede" dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
          <div className="chips">
            {PROFILE.chips.map((chip, i) => (
              <span key={i} className="chip" dangerouslySetInnerHTML={{ __html: chip }} />
            ))}
          </div>
          <div className="introlinks">
            <a className="tl primary" href={PROFILE.linkedin} target="_blank" rel="noopener">
              Let&apos;s connect on LinkedIn &#8594;
            </a>
            <a className="tl" href={`mailto:${PROFILE.email}`}>
              {PROFILE.email}
            </a>
            <a className="tl" href={PROFILE.substack} target="_blank" rel="noopener">
              I write on Substack &#8599;
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ paddingBottom: '72px' }}>
        <div className="sechead">
          <span className="num">01</span>
          <h2>Projects</h2>
        </div>
        <div className="cards">
          {PROJECTS.map((p) => (
            <Link key={p.slug} href={`/work/${p.slug}`} className="card reveal">
              <div className="shot">
                <img src={p.cover} alt={p.name} loading="lazy" />
              </div>
              <div className="body">
                <div className="tagrow">
                  {p.tags.map((tag, i) => (
                    <span key={i}>
                      <span className={`tag ${i > 0 ? 'muted' : ''}`}>{tag}</span>
                      {i < p.tags.length - 1 && <span className="tag sep">/</span>}
                    </span>
                  ))}
                </div>
                <h3>{p.name}</h3>
                <p dangerouslySetInnerHTML={{ __html: p.glimpse }} />
                <div className="cardfoot">
                  <span className="cta">Read case study &#8594;</span>
                  {(p as any).link && (
                    <a
                      href={(p as any).link}
                      target="_blank"
                      rel="noopener"
                      className="cta ghost"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {(p as any).linkLabel} &#8599;
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener"
                      className="cta ghost"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {p.liveLabel || 'Visit site'} &#8599;
                    </a>
                  )}
                  {p.video && (
                    <a
                      href={`/work/${p.slug}#video`}
                      className="cta ghost"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Demo video &#8599;
                    </a>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" style={{ paddingBottom: '72px' }}>
        <div className="sechead">
          <span className="num">02</span>
          <h2>Experience</h2>
        </div>
        <div className="xp">
          {EXPERIENCE.map((job, i) => (
            <div key={i} className="job reveal">
              <div className="jobL">
                <div className="logo" style={{ background: job.bg }}>
                  <img src={job.logo} alt={job.co} />
                </div>
                <div className="co">{job.co}</div>
                {job.unit && <div className="unit">{job.unit}</div>}
                <p className="rl">{job.role}</p>
                <div className="wh">
                  {job.when}
                  <br />
                  {job.loc}
                </div>
              </div>
              <div className="jobR">
                <p className="story" dangerouslySetInnerHTML={{ __html: job.story }} />
                {job.win && (
                  <div className="win">
                    <div className="big">{job.win.big}</div>
                    <div className="txt">
                      <div className="lab">{job.win.lab}</div>
                      <p dangerouslySetInnerHTML={{ __html: job.win.p }} />
                    </div>
                  </div>
                )}
                <ul>
                  {job.bullets.map((bullet, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: bullet }} />
                  ))}
                </ul>
                {job.photo && (
                  <figure className="jobphoto">
                    <img src={job.photo.src} alt="" loading="lazy" />
                    <figcaption>{job.photo.cap}</figcaption>
                  </figure>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="sechead" style={{ marginTop: '44px' }}>
          <span className="num">02b</span>
          <h2>Awards</h2>
        </div>
        <div className="awards">
          {AWARDS.map((award, i) => (
            <div key={i} className={`award reveal ${award.photo ? 'withphoto' : ''}`}>
              {award.photo && (
                <div className="aw-ph">
                  <img src={award.photo} alt="" loading="lazy" style={{ objectPosition: award.pos || 'center' }} />
                </div>
              )}
              <div className="aw-body">
                <div className="wh">{award.w}</div>
                <h3>{award.t}</h3>
                <p dangerouslySetInnerHTML={{ __html: award.d }} />
                {award.link && (
                  <a className="lk" href={award.link} target="_blank" rel="noopener">
                    {award.linkLabel} &#8599;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" style={{ paddingBottom: '72px' }}>
        <div className="sechead">
          <span className="num">03</span>
          <h2>Education</h2>
        </div>
        <div className="edu reveal">
          {EDUCATION.map((ed, i) => (
            <div key={i} className="ed">
              <div className="logo" style={{ background: ed.bg }}>
                <img src={ed.logo} alt={ed.s} />
              </div>
              <div className="t">
                <h3>{ed.s}</h3>
                <p>{ed.d}</p>
              </div>
              <div className="eduright">
                {ed.loc && <span className="eduloc">{ed.loc}</span>}
                <span className="when">{ed.w}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="sechead">
          <span className="num">04</span>
          <h2>Skills</h2>
        </div>
        {SKILLS.map((skillGroup, i) => (
          <div key={i} className="skillgroup reveal">
            <h3>{skillGroup[0]}</h3>
            <div className="pills">
              {(Array.isArray(skillGroup[1]) ? skillGroup[1] : []).map((skill: string, j: number) => (
                <span key={j} className="pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
