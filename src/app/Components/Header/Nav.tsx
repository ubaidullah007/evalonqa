
import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="#" onClick={() => setMobileToggle(false)}>
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
  

    

      <li>
        <Link href="#" onClick={() => setMobileToggle(false)}>
          AI Guides
        </Link>
      </li>

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
