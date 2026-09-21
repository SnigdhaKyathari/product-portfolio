import { PROJECTS } from '@/content';
import { ClientCaseStudy } from './client';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.name} — ${project.sub}`,
    description: project.sub,
    openGraph: {
      title: `${project.name}`,
      description: project.sub,
      images: `/${project.cover}`,
    },
  };
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ClientCaseStudy project={project} />;
}
