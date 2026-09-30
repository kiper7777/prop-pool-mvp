import Link from 'next/link';

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="PropPool home">
        <span className="brand-mark">P</span>
        <span>PropPool</span>
      </Link>
      <nav className="nav" aria-label="Primary">
        <Link href="/#how">Как это работает</Link>
        <Link href="/#projects">Проекты</Link>
        <Link href="/#transparency">Прозрачность</Link>
        <Link href="/risk">Риски</Link>
      </nav>
      <div className="header-actions">
        <Link href="/login" className="btn btn-ghost">Войти</Link>
        <Link href="/#projects" className="btn btn-primary">Смотреть проекты</Link>
      </div>
    </header>
  );
}
