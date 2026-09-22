'use client';

import { useEffect } from 'react';

export default function CaseStudyRail() {
  useEffect(() => {
    // Populate rail with case study sections
    const rail = document.getElementById('rail');
    if (!rail) return;

    const sections = Array.from(document.querySelectorAll('[data-section]')).map(el => ({
      id: el.getAttribute('data-section') || '',
      label: el.querySelector('h2')?.textContent || '',
      el: el
    })).filter(s => s.label);

    const sectionItems = [
      '<a href="/"><span class="tick"></span>← All projects</a>'
    ];
    sections.forEach(section => {
      const label = section.label.toUpperCase();
      sectionItems.push(`<a href="#${section.id}" class="rail-link" data-section="${section.id}"><span class="tick"></span>${label}</a>`);
    });

    rail.innerHTML = sectionItems.join('');

    // Trigger reveals
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => {
      el.classList.add('in');
    });

    // Scroll spy
    const handleScroll = () => {
      const scrollMargin = window.innerHeight * 0.12 + 78;
      let currentSection = '';

      sections.forEach(section => {
        if (section.el && section.el.getBoundingClientRect().top <= scrollMargin) {
          currentSection = section.id;
        }
      });

      document.querySelectorAll('.rail-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-section') === currentSection);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}
