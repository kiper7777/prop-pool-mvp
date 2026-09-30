'use client';

import { useMemo, useState } from 'react';
import { money } from '@/lib/data';

export function ShareCalculator() {
  const [target, setTarget] = useState(1000);
  const [contribution, setContribution] = useState(100);
  const [distribution, setDistribution] = useState(2000);

  const share = useMemo(() => target > 0 ? Math.min(contribution / target, 1) : 0, [contribution, target]);
  const participantDistribution = distribution * share;

  return (
    <div className="calculator-card">
      <div className="section-eyebrow">SHARE CALCULATOR</div>
      <h3>Рассчитайте свою долю</h3>
      <p className="muted">Расчёт показывает только математическую модель распределения.</p>
      <div className="form-grid">
        <label>
          Стоимость проекта
          <div className="input-shell"><span>€</span><input type="number" min="1" value={target} onChange={e => setTarget(Number(e.target.value))} /></div>
        </label>
        <label>
          Ваш взнос
          <div className="input-shell"><span>€</span><input type="number" min="0" value={contribution} onChange={e => setContribution(Number(e.target.value))} /></div>
        </label>
        <label>
          Иллюстративная распределяемая сумма
          <div className="input-shell"><span>€</span><input type="number" min="0" value={distribution} onChange={e => setDistribution(Number(e.target.value))} /></div>
        </label>
      </div>
      <div className="calc-results">
        <div><span>Ваша доля</span><strong>{(share * 100).toFixed(2)}%</strong></div>
        <div><span>Иллюстративное распределение</span><strong>{money(participantDistribution)}</strong></div>
      </div>
      <p className="disclaimer">Иллюстративный расчёт. Это не прогноз и не гарантия получения прибыли.</p>
    </div>
  );
}
