
import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/" onClick={() => setMobileToggle(false)}>
          Home
        </Link>
      </li>



      <DropDown content="Services">
        <ul>
          <li>
            <Link href="/service/startups" onClick={() => setMobileToggle(false)}>
              Startups
            </Link>
          </li>
          <li>
            <Link href="/service/legacy-modernization" onClick={() => setMobileToggle(false)}>
              Legacy
            </Link>
          </li>
          <li>
            <Link href="/service/non-traditional" onClick={() => setMobileToggle(false)}>
              Non-Traditional
            </Link>
          </li>
          <li>
            <Link href="/service/dev-shops" onClick={() => setMobileToggle(false)}>
              Dev Shops
            </Link>
          </li>
        </ul>
      </DropDown>




      <DropDown content="AI Guides">
        <ul>
          <li>
            <Link href="/ai-guide/ai-powered-playwright" onClick={() => setMobileToggle(false)}>
              AI-Powered Playwright
            </Link>
          </li>
          <li>
            <Link href="/ai-guide/smart-test-data" onClick={() => setMobileToggle(false)}>
              Smart Test Data
            </Link>
          </li>
          <li>
            <Link href="/ai-guide/optimized-cursor-usage" onClick={() => setMobileToggle(false)}>
              Optimized Cursor Usage
            </Link>
          </li>
          <li>
            <Link href="/ai-guide/bug-documentation" onClick={() => setMobileToggle(false)}>
              AI Bug Documentation
            </Link>
          </li>

          <li>
            <Link href="/ai-guide/productivity" onClick={() => setMobileToggle(false)}>
              The 3x QA Engineer
            </Link>
          </li>
        </ul>
      </DropDown>

      <li>
        <Link href="#" onClick={() => setMobileToggle(false)}>
          Case Studies
        </Link>
      </li>

      <li>
        <Link href="#" onClick={() => setMobileToggle(false)}>
          Humans
        </Link>
      </li>

      <li>
        <Link href="#" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
      </li>
    </ul>
  );
}
