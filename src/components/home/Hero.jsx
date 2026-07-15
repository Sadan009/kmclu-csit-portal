import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-800">
      {/* Animated Pattern */}

      <motion.div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "28px 28px"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 25,
          ease: "linear",
        }}
        aria-hidden="true"
      />

      {/* Floating Blob */}

      <motion.div
        className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-secondary-light/30 blur-3xl"
        animate={{
          y: [0, 18, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

      <motion.div
        className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        animate={{
          y: [0, -18, 0],
          x: [0, 12, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <motion.div
          className="max-w-3xl"
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          {/* Badge */}

          <motion.span
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.5,
            }}
            whileHover={{
              scale: 1.03,
            }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-primary-100 text-xs font-medium px-3 py-1.5 rounded-full mb-5"
          >
            <BookOpen size={14} />
            Khwaja Moinuddin Chishti Language University, Lucknow
          </motion.span>

          {/* Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.6,
            }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Department of Computer Science &amp; Information Technology
          </motion.h1>

          {/* Subtitle */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="text-primary-100/90 text-base sm:text-lg mt-5 leading-relaxed"
          >
            Bachelor of Computer Applications (BCA) &middot; Master of Computer
            Applications (MCA)
          </motion.p>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.55,
              duration: 0.6,
            }}
            className="text-primary-200/70 text-sm sm:text-base mt-3 max-w-xl"
          >
            Your one-stop portal for notices, syllabus, time tables, previous
            year papers, faculty details and academic downloads.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
              duration: 0.6,
            }}
            className="flex flex-wrap gap-3 mt-8"
          >
            <motion.div
              whileHover={{
                y: -2,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <Button
                to="/notices"
                variant="accent"
                size="lg"
                icon={ArrowRight}
              >
                Latest Notices
              </Button>
            </motion.div>

            <motion.div
              whileHover={{
                y: -2,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <Button
                to="/about"
                variant="outline"
                size="lg"
                className="!bg-transparent !text-white !border-white/30 hover:!bg-white/10"
              >
                About Department
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
