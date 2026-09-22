import { PROJECTS } from '@/content';
import CaseStudyRail from '@/components/CaseStudyRail';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.name} — ${project.sub}`,
    description: project.sub,
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

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
            {project.liveLabel || 'Visit site'} ↗
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

      {project.blocks?.map((block: any, i: number) => {
        const id = (block.h || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return (
          <div key={i} id={id} className="blk reveal in" data-section={id}>
            {block.h && <h2>{block.h}</h2>}
            {block.p?.map((p: string, j: number) => <p key={j} dangerouslySetInnerHTML={{ __html: p }} />)}
            {block.pull && <div className="pull" dangerouslySetInnerHTML={{ __html: block.pull }} />}
            {block.fig && (
              <figure className={block.fig.wide ? 'wide' : ''}>
                <img src={block.fig.src} alt="" loading="lazy" />
                <figcaption>{block.fig.cap}</figcaption>
              </figure>
            )}
            {block.figs && (
              <div className="figgrid">
                {block.figs.map((fig: any, j: number) => (
                  <figure key={j}>
                    <img src={fig.src} alt="" loading="lazy" />
                    <figcaption>{fig.cap}</figcaption>
                  </figure>
                ))}
              </div>
            )}
            {block.decisions?.map((dec: any, j: number) => (
              <div key={j} className="decision">
                <h4>{dec.h}</h4>
                <p dangerouslySetInnerHTML={{ __html: dec.p }} />
                <div className="tradeoff" dangerouslySetInnerHTML={{ __html: dec.t }} />
              </div>
            ))}
            {block.results && (
              <div className="results">
                {block.results.map((result: any, j: number) => (
                  <div key={j} className="res">
                    <div className="n">{result[0]}</div>
                    <div className="t">{result[1]}</div>
                    <div className={`a ${result[3] === 'hit' ? 'hit' : 'miss'}`}>{result[2]}</div>
                  </div>
                ))}
              </div>
            )}
            {block.html && <div dangerouslySetInnerHTML={{ __html: block.html }} />}
            {block.note && <div className="note">⚱ {block.note}</div>}
            {block.personas && (
              <div className="personas">
                {block.personas.map((p: any, j: number) => (
                  <div key={j} className="persona">
                    <div className="pn">{p[0]}</div>
                    <div className="pa">{p[1]}</div>
                    <div className="pq">{p[2]}</div>
                  </div>
                ))}
              </div>
            )}
            {block.facts2 && (
              <div className="facts">
                {block.facts2.map((fact: any, j: number) => (
                  <div key={j} className="fact">
                    <div className="k">{fact[0]}</div>
                    <div className="v">{fact[1]}</div>
                  </div>
                ))}
              </div>
            )}
            {block.p2?.map((p: string, j: number) => <p key={j} dangerouslySetInnerHTML={{ __html: p }} />)}
          </div>
        );
      })}

      <div className="closing">
        <div>
          <h3>Ready to chat?</h3>
          <p>Get in touch to discuss opportunities</p>
        </div>
        <a className="tl primary" href="https://www.linkedin.com/in/snigdha-kyathari" target="_blank" rel="noopener">
          Let's connect →
        </a>
      </div>

      <CaseStudyRail />
    </>
  );
}
