import Link from 'next/link';
import { Header } from '@/components/Header';
import { ProjectCard } from '@/components/ProjectCard';
import { ShareCalculator } from '@/components/ShareCalculator';
import { projects, money } from '@/lib/data';

const steps = [
  ['01', 'Выбираем prop-компанию', 'Проверяем актуальные правила, ограничения и условия конкретной компании.'],
  ['02', 'Создаём проект', 'Фиксируем целевую сумму, правила участия, этапы и документы проекта.'],
  ['03', 'Формируем пул', 'Участники подают заявки и видят расчёт своей доли до подтверждения.'],
  ['04', 'Проходим challenge', 'Команда работает в рамках заранее установленных risk-management правил.'],
  ['05', 'Получаем funded account', 'Только при успешном завершении требуемых этапов prop-компании.'],
  ['06', 'Фиксируем результат', 'Payout, комиссии и распределяемая сумма отражаются в прозрачном журнале.'],
];

export default function HomePage() {
  const p = projects[0];
  return (
    <main>
      <Header />
      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow"><span /> COLLECTIVE PROP TRADING</div>
          <h1>Профессиональный prop trading. <em>Коллективное участие.</em> Прозрачный процесс.</h1>
          <p className="hero-text">Участники объединяют средства для финансирования стоимости prop-trading challenge, а команда организует процесс — от выбора компании до фиксации результата.</p>
          <div className="hero-actions">
            <Link href="#projects" className="btn btn-primary btn-large">Изучить проекты</Link>
            <Link href="#how" className="btn btn-ghost btn-large">Как это работает</Link>
          </div>
          <div className="hero-trust">
            <span>✓ Прозрачный расчёт доли</span>
            <span>✓ Risk disclosure</span>
            <span>✓ Demo data clearly marked</span>
          </div>
        </div>
        <div className="terminal-card">
          <div className="terminal-head"><span>PROJECT TERMINAL</span><span className="badge">DEMO</span></div>
          <div className="terminal-title"><div><small>{p.code}</small><h2>{p.company}</h2></div><span className="live-pill"><i />{p.status}</span></div>
          <div className="equity-chart" aria-label="Illustrative equity curve"><svg viewBox="0 0 520 150" role="img"><path d="M0,112 C40,118 55,76 95,83 C130,90 148,54 192,65 C235,76 253,39 300,48 C350,58 360,22 406,37 C450,52 470,18 520,26" fill="none" stroke="currentColor" strokeWidth="4"/><path d="M0,112 C40,118 55,76 95,83 C130,90 148,54 192,65 C235,76 253,39 300,48 C350,58 360,22 406,37 C450,52 470,18 520,26 L520,150 L0,150 Z" fill="url(#g)" opacity=".24"/><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="currentColor"/><stop offset="1" stopColor="currentColor" stopOpacity="0"/></linearGradient></defs></svg></div>
          <div className="terminal-grid">
            <div><span>Target</span><strong>{money(p.target)}</strong></div>
            <div><span>Committed</span><strong>{money(p.committed)}</strong></div>
            <div><span>Remaining</span><strong>{money(p.target - p.committed)}</strong></div>
            <div><span>Participants</span><strong>{p.participants}</strong></div>
          </div>
          <div className="risk-line"><span>Funding progress</span><strong>{p.stageProgress}%</strong></div>
          <div className="progress"><span style={{ width: `${p.stageProgress}%` }} /></div>
        </div>
      </section>

      <section className="trust-strip"><div className="container trust-grid"><div><strong>ACCESS</strong><span>Не обязательно финансировать полную стоимость проекта одному.</span></div><div><strong>TRANSPARENCY</strong><span>Доля, статус и расчёты доступны участнику в одном интерфейсе.</span></div><div><strong>RISK MANAGEMENT</strong><span>Риски показываются до участия, а не скрываются в footer.</span></div></div></section>

      <section id="projects" className="section container">
        <div className="section-heading"><div><div className="section-eyebrow">ACTIVE PROJECTS</div><h2>Проекты участия</h2></div><p>Ниже используются демонстрационные данные. Перед реальным запуском параметры prop-компаний должны проходить проверку.</p></div>
        <div className="project-grid">{projects.map(p => <ProjectCard key={p.slug} project={p} />)}</div>
      </section>

      <section id="how" className="section section-alt"><div className="container"><div className="section-heading"><div><div className="section-eyebrow">HOW IT WORKS</div><h2>От идеи до распределения результата</h2></div><p>Процесс разбит на прозрачные этапы. Каждый статус может отображаться в личном кабинете.</p></div><div className="steps">{steps.map(([n,t,d]) => <div className="step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}</div></div></section>

      <section className="section container calculator-layout"><div className="calculator-copy"><div className="section-eyebrow">COLLECTIVE ACCESS</div><h2>Один challenge — несколько участников</h2><p>Доля рассчитывается от фактического участия в проекте. В production-версии критические финансовые вычисления должны выполняться на backend и записываться в audit trail.</p><div className="mini-example"><div><span>Challenge</span><strong>€1,000</strong></div><div><span>10 участников</span><strong>× €100</strong></div><div><span>Доля каждого</span><strong>10%</strong></div></div></div><ShareCalculator /></section>

      <section id="transparency" className="section section-alt"><div className="container"><div className="section-heading"><div><div className="section-eyebrow">TRANSPARENCY</div><h2>Интерфейс участника вместо обещаний</h2></div><p>Продукт строит доверие через данные, документы и историю операций.</p></div><div className="dashboard-preview"><div className="dashboard-sidebar"><strong>PropPool</strong><span className="active">Overview</span><span>My Projects</span><span>Transactions</span><span>Distributions</span><span>Documents</span><span>Risk Centre</span></div><div className="dashboard-main"><div className="dash-top"><div><small>MEMBER AREA</small><h3>Good afternoon</h3></div><span className="badge">DEMO ACCOUNT</span></div><div className="metric-grid"><div><span>Total contributions</span><strong>€250</strong><small>Illustrative</small></div><div><span>Active projects</span><strong>2</strong><small>Illustrative</small></div><div><span>Pending distribution</span><strong>€0</strong><small>No distribution recorded</small></div></div><div className="activity-card"><h4>Recent project activity</h4><div className="activity"><i>01</i><div><strong>FTMO-DEMO-001</strong><span>Funding progress updated to 73%</span></div><time>Demo</time></div><div className="activity"><i>02</i><div><strong>PROP-DEMO-002</strong><span>Project moved to Phase 1</span></div><time>Demo</time></div></div><Link href="/dashboard" className="btn btn-secondary">Открыть demo dashboard</Link></div></div></div></section>

      <section className="section container risk-cta"><div><div className="section-eyebrow">RISK FIRST</div><h2>Риски являются частью продукта.</h2><p>Challenge может быть не пройден, funded account может быть потерян, а торговый результат и payout не гарантируются.</p></div><Link href="/risk" className="btn btn-danger btn-large">Изучить риски</Link></section>

      <footer className="footer"><div className="container footer-grid"><div><div className="brand"><span className="brand-mark">P</span><span>PropPool</span></div><p>Demo MVP интерфейса коллективного участия в prop-trading проектах.</p></div><div><strong>Platform</strong><Link href="#projects">Projects</Link><Link href="#how">How it works</Link><Link href="/dashboard">Dashboard</Link></div><div><strong>Legal</strong><Link href="/risk">Risk disclosure</Link><span>Terms — draft</span><span>Privacy — draft</span></div></div><div className="container footer-note">Trading and prop-trading challenges involve risk. Demonstration data on this website does not represent expected or guaranteed performance.</div></footer>
    </main>
  );
}
