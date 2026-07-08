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

              <img
                src="/faculty_images/Dr.Mazhar-Khaliq.jpg"
                alt="Dr. Mazhar Khaliq"
                className="w-36 h-36 rounded-full object-cover object-top border-4 border-primary-100 shadow-lg shrink-0"
              />

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
          <SectionTitle eyebrow="Programs" title="Programmes Offered" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {[
              {
                level: "Undergraduate",
                title: "Bachelor of Computer Applications",
                mode: "Regular",
                duration: "3 Years",
              },
              {
                level: "Undergraduate",
                title: "Bachelor of Computer Applications",
                mode: "Self Finance",
                duration: "3 Years",
              },
              {
                level: "Undergraduate",
                title: "B.Sc. Computer Science",
                mode: "Self Finance",
                duration: "3 Years",
              },
              {
                level: "Postgraduate",
                title: "Master of Computer Applications",
                mode: "Self Finance",
                duration: "2 Years",
              },
              {
                level: "Doctoral",
                title: "Ph.D. in Computer Science",
                mode: "Research Programme",
                duration: "As per University Norms",
              },
            ].map((course) => (
              <Card key={course.title + course.mode} className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                  <GraduationCap size={22} className="text-primary" />
                </div>

                <span className="text-xs font-semibold uppercase text-accent-dark">
                  {course.level}
                </span>

                <h3 className="mt-2 font-semibold text-slate-800">
                  {course.title}
                </h3>

                <div className="mt-5 space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span>Mode</span>
                    <span className="font-medium">{course.mode}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Duration</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                </div>
              </Card>
            ))}
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

        {/* Why Choose CSIT */}
        <section>
          <SectionTitle eyebrow="Why Us" title="Why Choose CSIT?" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Experienced Faculty",
                desc: "Highly qualified faculty with academic and industry expertise.",
              },
              {
                title: "Modern Infrastructure",
                desc: "Smart classrooms, advanced laboratories and digital learning resources.",
              },
              {
                title: "Placement Support",
                desc: "Career guidance, internships and placement assistance for students.",
              },
              {
                title: "Research & Innovation",
                desc: "Encouraging research, innovation and industry collaboration.",
              },
            ].map((item) => (
              <Card key={item.title} className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-primary" size={22} />
                </div>

                <h3 className="font-semibold text-slate-800">{item.title}</h3>

                <p className="mt-3 text-sm text-slate-500">{item.desc}</p>
              </Card>
            ))}
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
        {/* Contact */}
        <section>
          <SectionTitle eyebrow="Contact" title="Department Contact" />

          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg text-primary">
                  Department of Computer Science & Information Technology
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  Khwaja Moinuddin Chishti Language University, Lucknow, Uttar
                  Pradesh
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <p>
                  <strong>Email:</strong> mazharkhaliq@kmclu.ac.in
                </p>

                <p>
                  <strong>Phone:</strong> +91 7007904707
                </p>

                <p>
                  <strong>Website:</strong> kmclu.ac.in
                </p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </>
  );
}
