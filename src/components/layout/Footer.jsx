import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail, Globe, Share2, Link2 } from "lucide-react";
import { navLinks } from "../../routes/navLinks";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-100">
      <div className="container-page py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Department */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
              <GraduationCap size={20} className="text-accent" />
            </div>
            <span className="font-display font-bold text-white">CSIT Department</span>
          </div>
          <p className="text-sm text-primary-200/80 leading-relaxed">
            Department of Computer Science &amp; Information Technology, Khwaja
            Moinuddin Chishti Language University, Lucknow. Empowering students
            through quality education in BCA &amp; MCA programs.
          </p>
          <div className="flex items-center gap-3 mt-5">
            {[Globe, Share2, Link2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media link"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-accent hover:text-primary-900 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-primary-200/80 hover:text-accent transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
            Resources
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/downloads" className="text-primary-200/80 hover:text-accent transition-colors">
                Academic Calendar
              </Link>
            </li>
            <li>
              <Link to="/downloads" className="text-primary-200/80 hover:text-accent transition-colors">
                Holiday List
              </Link>
            </li>
            <li>
              <Link to="/previous-papers" className="text-primary-200/80 hover:text-accent transition-colors">
                Examination
              </Link>
            </li>
            <li>
              <Link to="/downloads" className="text-primary-200/80 hover:text-accent transition-colors">
                Downloads
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-primary-200/80">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>Khwaja Moinuddin Chishti Language University, Kursi Road, Lucknow, Uttar Pradesh - 226013</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0 text-accent" />
              <span>+91 522 235 0100</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 text-accent" />
              <span>csit@kmclu.ac.in</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-300/70">
          <p>&copy; {new Date().getFullYear()} Department of CSIT, KMCLU Lucknow. All rights reserved.</p>
          <p>Designed for academic use only.</p>
        </div>
      </div>
    </footer>
  );
}
