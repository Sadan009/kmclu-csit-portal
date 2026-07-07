import {
  Target,
  Eye,
  GraduationCap,
  FlaskConical,
  Building2,
  Image as ImageIcon,
} from "lucide-react";
import PageTitle from "../components/common/PageTitle";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";

const facilities = [
  "High-speed campus-wide Wi-Fi connectivity",
  "Fully equipped smart classrooms",
  "Central library with digital resource access",
  "Dedicated placement & training cell",
  "Seminar hall for workshops and guest lectures",
  "24x7 power backup for laboratories",
];

const laboratories = [
  "Programming Lab (C, C++, Java, Python)",
  "Database Management Systems Lab",
  "Computer Networks & Hardware Lab",
  "Web & Mobile Application Development Lab",
  "Artificial Intelligence & Machine Learning Lab",
  "Project Development Lab",
];

export default function About() {
  return (
    <>
      <title>About Department | CSIT Department, KMCLU Lucknow</title>
      <PageTitle
        title="About the Department"
        description="Learn more about the Department of Computer Science & Information Technology."
        crumbs={[{ label: "About" }]}
      />

      <div className="container-page py-10 sm:py-12 space-y-14">
        {/* About */}
        <section>
          <SectionTitle eyebrow="Introduction" title="About CSIT" />
          <Card className="p-6 sm:p-8" hover={false}>
            <p className="text-slate-600 leading-relaxed">
              The Department of Computer Science &amp; Information Technology at
              Khwaja Moinuddin Chishti Language University, Lucknow, was
              established with the aim of imparting quality education in
              computer applications. The department offers undergraduate (BCA)
              and postgraduate (MCA) programs designed to build strong
              theoretical foundations alongside practical, industry-relevant
              skills. With experienced faculty, modern laboratories and a
              curriculum aligned with current technology trends, the department
              strives to produce competent IT professionals ready to meet
              real-world challenges.
            </p>
          </Card>
        </section>

        {/* Vision & Mission */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card className="p-6 sm:p-8" hover={false}>
              <div className="w-11 h-11 rounded-lg bg-primary-50 flex items-center justify-center mb-4">
                <Eye size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary-800 mb-2">
                Vision
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To be a center of excellence in computer education, producing
                skilled, ethical and innovative IT professionals who contribute
                meaningfully to society and industry.
              </p>
            </Card>
            <Card className="p-6 sm:p-8" hover={false}>
              <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Target size={20} className="text-accent-dark" />
              </div>
              <h3 className="text-lg font-semibold text-primary-800 mb-2">
                Mission
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To deliver quality technical education through updated
                curriculum, experienced faculty and modern infrastructure, while
                fostering research, innovation and industry collaboration among
                students.
              </p>
            </Card>
          </div>
        </section>

        {/* Head of Department */}
        <section>
          <SectionTitle eyebrow="Leadership" title="Head of Department" />

          <Card className="p-6 sm:p-8" hover={false}>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Placeholder Photo */}

              <div className="w-32 h-32 rounded-full bg-primary-50 border-4 border-primary-100 flex items-center justify-center text-primary text-4xl font-bold shrink-0">
                MK
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-primary-800">
                  Dr. Mazhar Khaliq
                </h3>

                <p className="text-accent-dark font-medium mt-1">
                  Associate Professor & Head
                </p>

                <p className="mt-5 text-slate-600 leading-relaxed">
                  Welcome to the Department of Computer Science & Information
                  Technology. Our department is dedicated to nurturing
                  innovation, academic excellence, and practical skills through
                  quality teaching, modern laboratories, and research-driven
                  learning. We strive to prepare students to become competent
                  professionals capable of contributing to the rapidly evolving
                  world of technology.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Courses Offered */}
        <section>
          <SectionTitle eyebrow="Programs" title="Courses Offered" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Card className="p-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
                  A 3-year undergraduate program covering programming, data
                  structures, databases, networks and modern web &amp; mobile
                  technologies.
                </p>
              </div>
            </Card>
            <Card className="p-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">
                  Master of Computer Applications (MCA)
                </h3>
                <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
                  A 2-year postgraduate program focused on advanced software
                  development, machine learning, cloud computing and
                  research-oriented project work.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Facilities & Laboratories */}
        <section>
          <SectionTitle
            eyebrow="Infrastructure"
            title="Facilities & Laboratories"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card className="p-6 sm:p-8" hover={false}>
              <div className="flex items-center gap-3 mb-4">
                <Building2 size={20} className="text-primary" />
                <h3 className="font-semibold text-slate-800">Facilities</h3>
              </div>
              <ul className="space-y-2.5">
                {facilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-slate-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-6 sm:p-8" hover={false}>
              <div className="flex items-center gap-3 mb-4">
                <FlaskConical size={20} className="text-primary" />
                <h3 className="font-semibold text-slate-800">Laboratories</h3>
              </div>
              <ul className="space-y-2.5">
                {laboratories.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-slate-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* Gallery Placeholder */}
        <section>
          <SectionTitle eyebrow="Campus Life" title="Gallery" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center"
              >
                <ImageIcon size={24} className="text-primary-300" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
