import Link from 'next/link';
import type { Project } from '@/lib/data';
import { money } from '@/lib/data';

export function ProjectCard({ project }: { project: Project }) {
  const remaining = Math.max(project.target - project.committed, 0);
  return (
    <article className="project-card">
      <div className="project-topline">
        <div>
          <span className="badge">DEMO</span>
          <span className="project-code">{project.code}</span>
        </div>
        <span className="status-dot"><i />{project.status}</span>
      </div>
      <div className="company-logo">{project.company}</div>
      <h3>{project.title}</h3>
      <div className="progress-row"><span>Funding progress</span><strong>{project.stageProgress}%</strong></div>
      <div className="progress"><span style={{ width: `${project.stageProgress}%` }} /></div>
      <div className="project-metrics">
        <div><span>Цель</span><strong>{money(project.target)}</strong></div>
        <div><span>Собрано</span><strong>{money(project.committed)}</strong></div>
        <div><span>Доступно</span><strong>{money(remaining)}</strong></div>
        <div><span>Участники</span><strong>{project.participants}</strong></div>
      </div>
      <Link href={`/projects/${project.slug}`} className="btn btn-secondary btn-block">Открыть проект</Link>
    </article>
  );
}
