// import Link from 'next/link';
// import DropDown from './DropDown';

// export default function Nav({ setMobileToggle }) {
//   return (
//     <ul className="cs_nav_list fw-medium">
//       <li className="menu-item-has-children">
//         <Link href="/">Home</Link>
//         <DropDown>
//           <ul>
//             <li>
//               <Link href="/" onClick={() => setMobileToggle(false)}>
//               Home Version 1
//               </Link>
//             </li>
//             <li>
//               <Link href="/home2" onClick={() => setMobileToggle(false)}>
//               Home Version 2
//               </Link>
//             </li>
//             <li>
//               <Link href="/home3" onClick={() => setMobileToggle(false)}>
//                 Home Version 3
//               </Link>
//             </li>            
//           </ul>
//         </DropDown>
//       </li>
//       <li className="menu-item-has-children">
//         <Link href="#">Pages</Link>
//         <DropDown>
//           <ul>
//             <li>
//               <Link href="/about" onClick={() => setMobileToggle(false)}>
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link href="/team" onClick={() => setMobileToggle(false)}>
//                Our Team
//               </Link>
//             </li>            
//             <li>
//               <Link href="/team/team-details" onClick={() => setMobileToggle(false)}>
//                 Team Details
//               </Link>
//             </li>             
//             <li>
//               <Link href="/pricing" onClick={() => setMobileToggle(false)}>
//               Pricing
//               </Link>
//             </li> 
//             <li>
//               <Link href="/faq" onClick={() => setMobileToggle(false)}>
//               Faq
//               </Link>
//             </li> 
//             <li>
//               <Link href="/contact" onClick={() => setMobileToggle(false)}>
//               Contact
//               </Link>
//             </li>                         
//           </ul>
//         </DropDown>
//       </li>  

//       <li className="menu-item-has-children">
//         <Link href="/service" onClick={() => setMobileToggle(false)}>
//           Services
//         </Link>
//         <DropDown>
//           <ul>
//             <li>
//               <Link href="/service" onClick={() => setMobileToggle(false)}>
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link href="/service/service-details" onClick={() => setMobileToggle(false)}>
//                 Service Details
//               </Link>
//             </li>
//           </ul>
//         </DropDown>
//       </li>

//       <li className="menu-item-has-children">
//         <Link href="/project" onClick={() => setMobileToggle(false)}>
//         Project
//         </Link>
//         <DropDown>
//           <ul>
//             <li>
//               <Link href="/project" onClick={() => setMobileToggle(false)}>
//               Project
//               </Link>
//             </li>          
//             <li>
//               <Link href="/project/project-details" onClick={() => setMobileToggle(false)}>
//               Project Details
//               </Link>
//             </li>
//           </ul>
//         </DropDown>
//       </li> 
      
//       <li className="menu-item-has-children">
//         <Link href="/blog" onClick={() => setMobileToggle(false)}>
//           Blog
//         </Link>
//         <DropDown>
//           <ul>
//             <li>
//               <Link href="/blog" onClick={() => setMobileToggle(false)}>
//                 Blog
//               </Link>
//             </li>
//             <li>
//               <Link href="/blog-sidebar" onClick={() => setMobileToggle(false)}>
//                 Blog With Sidebar
//               </Link>
//             </li>                         
//             <li>
//               <Link
//                 href="/blog/blog-details"
//                 onClick={() => setMobileToggle(false)}
//               >
//                 Blog Details
//               </Link>
//             </li>
//           </ul>
//         </DropDown>
//       </li>
//       <li>
//         <Link href="/contact" onClick={() => setMobileToggle(false)}>
//           Contact
//         </Link>
//       </li>
//     </ul>
//   );
// }
import Link from 'next/link';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="#" onClick={() => setMobileToggle(false)}>
          Home
        </Link>
      </li>

      <li>
        <Link href="#" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
      </li>

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
