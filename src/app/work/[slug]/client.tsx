'use client';

import { useEffect } from 'react';
import type { PROJECTS } from '@/content';

type Project = (typeof PROJECTS)[0];

type Block = {
  h?: string;
  p?: string[];
  pull?: string;
  fig?: { src: string; cap: string; wide?: boolean };
  figs?: { src: string; cap: string; wide?: boolean }[];
  decisions?: { h: string; p: string; t: string }[];
  results?: (string | 'hit' | 'miss')[][];
  personas?: string[][];
  html?: string;
  html2?: string;
  facts2?: string[][];
  p2?: string[];
  note?: string;
};

function BlockRenderer({ block }: { block: Block }) {
  return (
    <div className="blk reveal">
      {block.h && <h2>{block.h}</h2>}

      {block.p && block.p.map((text, i) => <p key={i} dangerouslySetInnerHTML={{ __html: text }} />)}

      {block.note && <div className="note">&#9873; {block.note}</div>}

      {block.pull && <div className="pull" dangerouslySetInnerHTML={{ __html: block.pull }} />}

      {block.personas && (
        <div className="personas">
          {block.personas.map((p, i) => (
            <div key={i} className="persona">
              <div className="pn">{p[0]}</div>
              <div className="pa">{p[1]}</div>
              <div className="pq">{p[2]}</div>
            </div>
          ))}
        </div>
      )}

      {block.html && <div dangerouslySetInnerHTML={{ __html: block.html }} />}

      {block.fig && (
        <figure className={block.fig.wide ? 'wide' : ''}>
          <img src={block.fig.src} alt="" loading="lazy" />
          <figcaption>{block.fig.cap}</figcaption>
        </figure>
      )}

      {block.figs && (
        <div className="figgrid">
          {block.figs.map((fig, i) => (
            <figure key={i}>
              <img src={fig.src} alt="" loading="lazy" />
              <figcaption>{fig.cap}</figcaption>
            </figure>
          ))}
        </div>
      )}

      {block.results && (
        <div className="results">
          {block.results.map((result, i) => (
            <div key={i} className="res">
              <div className="n">{result[0]}</div>
              <div className="t">{result[1]}</div>
              <div className={`a ${result[3] === 'hit' ? 'hit' : 'miss'}`}>{result[2]}</div>
            </div>
          ))}
        </div>
      )}

      {block.decisions && (
        <div>
          {block.decisions.map((dec, i) => (
            <div key={i} className="decision">
              <h4>{dec.h}</h4>
              <p dangerouslySetInnerHTML={{ __html: dec.p }} />
              <div className="tradeoff" dangerouslySetInnerHTML={{ __html: dec.t }} />
            </div>
          ))}
        </div>
      )}

      {block.html2 && <div dangerouslySetInnerHTML={{ __html: block.html2 }} />}

      {block.facts2 && (
        <div className="facts">
          {block.facts2.map((fact, i) => (
            <div key={i} className="fact">
              <div className="k">{fact[0]}</div>
              <div className="v">{fact[1]}</div>
            </div>
          ))}
        </div>
      )}

      {block.p2 && block.p2.map((text, i) => <p key={i} dangerouslySetInnerHTML={{ __html: text }} />)}
    </div>
  );
}

export function ClientCaseStudy({ project }: { project: Project }) {
  useEffect(() => {
    // Populate rail for case study
    const rail = document.getElementById('rail');
    if (!rail) return;

    const sectionItems = [`<a href="/"><span class="tick"></span>← All projects</a>`];

    const blockSections = project.blocks.filter((b) => b.h).map((b) => ({
      id: (b.h || '').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      label: b.h,
    }));

    blockSections.forEach((section) => {
      sectionItems.push(
        `<a href="#${section.id}" class="rail-link" data-section="${section.id}"><span class="tick"></span>${section.label}</a>`
      );
    });

    rail.innerHTML = sectionItems.join('');

    // Scroll spy
    const handleScroll = () => {
      const scrollMargin = window.innerHeight * 0.12 + 78;
      let currentSection = '';

      blockSections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= scrollMargin) {
          currentSection = section.id;
        }
      });

      document.querySelectorAll('.rail-link').forEach((link) => {
        link.classList.toggle('active', link.getAttribute('data-section') === currentSection);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [project]);

  return (
    <>
      <a className="back" href="/">
        ← All projects
      </a>

      <section className="cs-hero">
        <div className="tagrow">
          {project.tags.map((tag, i) => (
            <span key={i}>
              <span className={`tag ${i > 0 ? 'muted' : ''}`}>{tag}</span>
              {i < project.tags.length - 1 && <span className="tag sep">/</span>}
            </span>
          ))}
        </div>
        <h1>{project.name}</h1>
        <p className="cs-sub" dangerouslySetInnerHTML={{ __html: project.sub }} />
        {project.live && (
          <a className="lk" href={project.live} target="_blank" rel="noopener">
            {project.liveLabel || 'Visit site'} &#8599;
          </a>
        )}
      </section>

      {project.facts && (
        <div className="facts">
          {project.facts.map((fact, i) => (
            <div key={i} className="fact">
              <div className="k">{fact[0]}</div>
              <div className="v" dangerouslySetInnerHTML={{ __html: fact[1] }} />
            </div>
          ))}
        </div>
      )}

      {project.video && (
        <video
          controls
          preload="none"
          poster={project.video.poster}
          style={{ marginBottom: '26px', maxWidth: '440px' }}
        >
          <source src={project.video.src} type="video/mp4" />
        </video>
      )}

      {project.blocks.map((block, i) => {
        const id = (block.h || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return (
          <div key={i} id={id}>
            <BlockRenderer block={block} />
          </div>
        );
      })}

      <div className="closing">
        <div>
          <h3>Ready to chat?</h3>
          <p>Get in touch to discuss opportunities</p>
        </div>
        <a className="tl primary" href="https://www.linkedin.com/in/snigdha-kyathari" target="_blank" rel="noopener">
          Let&apos;s connect &#8594;
        </a>
      </div>
    </>
  );
}
