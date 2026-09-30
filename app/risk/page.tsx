import { Header } from '@/components/Header';

const risks = [
 ['Challenge risk','A prop-trading challenge may not be passed. The challenge fee or project costs may be lost depending on the final legal and commercial structure.'],
 ['Funded account risk','Receiving a funded account is conditional on successful completion of the required evaluation and continued compliance with the prop company rules.'],
 ['Trading risk','Trading results can be negative. A funded account may be reduced, restricted or terminated.'],
 ['Payout risk','Payouts are not guaranteed. Eligibility, timing and calculation depend on trading performance and the prop company conditions.'],
 ['Counterparty risk','A prop company can change its rules, products, prices, payout procedures or availability.'],
 ['Operational risk','Technical, payment, data, personnel and process failures can affect the operation of a project.'],
 ['Legal & regulatory risk','The legal treatment of collective participation and money flows depends on the applicable jurisdiction and must be reviewed before production launch.'],
 ['Past performance','Historical or demo results do not guarantee future performance.']
];
export default function RiskPage(){return <main><Header/><section className="page-hero container narrow"><div className="eyebrow"><span/> RISK CENTRE</div><h1>Понимание риска — до участия.</h1><p>Этот MVP специально не прячет risk disclosure в footer. Перед реальным запуском юридические формулировки должны быть проверены профильным специалистом.</p></section><section className="container risk-page-grid">{risks.map(([t,d],i)=><article className="risk-card" key={t}><span>{String(i+1).padStart(2,'0')}</span><h2>{t}</h2><p>{d}</p></article>)}</section><section className="container legal-callout"><div><div className="section-eyebrow">IMPORTANT</div><h2>Это не банковский депозит и не гарантия доходности.</h2></div><p>Фактическая юридическая классификация продукта должна определяться после анализа юрисдикции, договорной модели, движения денежных средств и отношений с prop-компаниями.</p></section></main>}
