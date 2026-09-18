"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { blogPosts, projects } from "@/data/projects";
import { principles, processSteps, serviceItems } from "@/data/services";
import { technologies } from "@/data/technologies";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const [activeService, setActiveService] = useState(serviceItems[0]);

  return (
    <main className="bg-[#f2efe9] text-[#111111] selection:bg-[#111111] selection:text-[#f2efe9]">
      <Navbar />

      <section className="mx-auto max-w-7xl px-5 pb-12 pt-10 md:px-8 lg:pb-20 lg:pt-16">
        <div className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-black/55">
          <span className="inline-block h-px w-10 bg-black/30" />
          Digital systems / software / ai / design
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <h1 className="max-w-4xl text-5xl font-medium leading-[0.92] tracking-[-0.07em] text-black md:text-7xl lg:text-[6.2rem]">
              We build the digital infrastructure behind ambitious businesses.
            </h1>
          </div>

          <div className="justify-self-end lg:max-w-sm">
            <p className="mb-6 text-base leading-7 text-black/70 md:text-lg">
              Software, ERP systems, custom applications, AI automation, websites and product experiences — designed and engineered around the way your business actually works.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 border border-black bg-black px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-[#f2efe9] transition hover:bg-[#1b1b1b]"
              >
                Start a Project
                <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-3 border border-black/15 px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-black transition hover:border-black hover:bg-black/5"
              >
                Explore what we build
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-12 rounded-[28px] border border-black/10 bg-[#ece8e1] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.04)]"
        >
          <div className="grid gap-5 border border-black/10 bg-[#f7f4ef] p-4 md:grid-cols-[0.8fr_1.2fr_0.8fr]">
            <div className="flex flex-col justify-between border border-black/10 bg-[#f2efe9] p-4">
              <div className="text-[10px] uppercase tracking-[0.24em] text-black/50">Signal</div>
              <div className="mt-12 space-y-4">
                <div className="flex items-center justify-between border-b border-black/10 pb-3 text-[10px] uppercase tracking-[0.2em] text-black/60">
                  <span>Business</span>
                  <span>01</span>
                </div>
                <div className="flex items-center justify-between border-b border-black/10 pb-3 text-[10px] uppercase tracking-[0.2em] text-black/60">
                  <span>Data</span>
                  <span>02</span>
                </div>
                <div className="flex items-center justify-between border-b border-black/10 pb-3 text-[10px] uppercase tracking-[0.2em] text-black/60">
                  <span>Software</span>
                  <span>03</span>
                </div>
              </div>
            </div>

            <div className="relative min-h-[360px] overflow-hidden border border-black/10 bg-[#eae5de] p-4 md:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(17,17,17,0.08),_transparent_35%)]" />
              <div className="relative flex h-full items-center justify-center">
                <div className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/20" />
                <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-black/15" />
                <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10" />

                <div className="absolute left-[18%] top-[28%] flex h-20 w-20 items-center justify-center rounded-full border border-black bg-[#f9f6f2] text-[10px] uppercase tracking-[0.2em] text-black/70 transition duration-300 hover:scale-105">
                  Business
                </div>
                <div className="absolute left-[42%] top-[15%] flex h-20 w-20 items-center justify-center rounded-full border border-black bg-[#f3efe8] text-[10px] uppercase tracking-[0.2em] text-black/70 transition duration-300 hover:scale-105">
                  Data
                </div>
                <div className="absolute right-[16%] top-[31%] flex h-20 w-20 items-center justify-center rounded-full border border-black bg-[#f5f1ea] text-[10px] uppercase tracking-[0.2em] text-black/70 transition duration-300 hover:scale-105">
                  Software
                </div>
                <div className="absolute left-[31%] bottom-[18%] flex h-20 w-20 items-center justify-center rounded-full border border-black bg-[#f8f5f0] text-[10px] uppercase tracking-[0.2em] text-black/70 transition duration-300 hover:scale-105">
                  AI
                </div>
                <div className="absolute right-[28%] bottom-[14%] flex h-20 w-20 items-center justify-center rounded-full border border-black bg-[#efeae1] text-[10px] uppercase tracking-[0.2em] text-black/70 transition duration-300 hover:scale-105">
                  Users
                </div>

                <div className="absolute left-1/2 top-1/2 h-px w-[58%] -translate-x-1/2 -translate-y-1/2 bg-black/20" />
                <div className="absolute left-1/2 top-1/2 h-[58%] w-px -translate-x-1/2 -translate-y-1/2 bg-black/15" />
              </div>
            </div>

            <div className="flex flex-col justify-between border border-black/10 bg-[#f4f0ea] p-4">
              <div className="text-[10px] uppercase tracking-[0.24em] text-black/50">System</div>
              <div className="mt-16 space-y-2 text-[11px] uppercase tracking-[0.2em] text-black/60">
                <div>Operations</div>
                <div>Workflow</div>
                <div>Automation</div>
                <div>Growth</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="border-y border-black/10 bg-[#f8f6f3]">
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-black/55">Proof of work</div>
              <h2 className="mt-3 text-3xl tracking-[-0.06em] text-black md:text-5xl">We’ve already built and shipped.</h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-black/65">
              An archive of delivery across software, web, AI systems, and product experiences.
            </p>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="flex min-w-max gap-4 text-[11px] uppercase tracking-[0.23em] text-black/60">
              {[
                "05+ clients",
                "Multiple projects",
                "Software",
                "Web",
                "AI automation",
                "Design",
              ].map((item) => (
                <div key={item} className="border border-black/10 bg-[#f2efe9] px-5 py-4">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className={`group relative overflow-hidden border border-black/10 bg-[#f2efe9] p-4 ${
                  project.layout === "offset" ? "lg:translate-y-12" : project.layout === "wide" ? "lg:col-span-2" : ""
                }`}
              >
                <div className="mb-6 flex items-center justify-between text-[9px] uppercase tracking-[0.22em] text-black/55">
                  <span>{project.category}</span>
                  <span>0{index + 1}</span>
                </div>
                <div
                  className="relative mb-6 h-52 overflow-hidden border border-black/10"
                  style={{ background: `linear-gradient(135deg, ${project.accent}, #f1ece5)` }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(17,17,17,0.06),transparent_50%,rgba(17,17,17,0.1))]" />
                  <div className="absolute left-5 top-5 h-20 w-20 rounded-full border border-black/20 bg-white/30" />
                  <div className="absolute bottom-5 left-5 right-5 h-16 border border-black/15 bg-white/20 backdrop-blur-[1px]" />
                  <div className="absolute right-5 top-5 h-24 w-32 border border-black/15 bg-black/5" />
                </div>
                <h3 className="text-3xl tracking-[-0.06em] text-black">{project.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-black/70">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="border border-black/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-black/60">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mb-10 max-w-2xl">
          <div className="text-[10px] uppercase tracking-[0.25em] text-black/55">What we actually build</div>
          <h2 className="mt-3 text-4xl tracking-[-0.07em] text-black md:text-6xl">Digital products that keep business moving.</h2>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-black/10 bg-[#f0ebe3] p-5">
            <div className="grid gap-2 md:grid-cols-3">
              {serviceItems.map((service) => (
                <button
                  key={service.title}
                  type="button"
                  onMouseEnter={() => setActiveService(service)}
                  onFocus={() => setActiveService(service)}
                  className={`group flex min-h-[160px] flex-col justify-between border p-4 text-left transition ${
                    activeService.title === service.title
                      ? "border-black bg-black text-[#f2efe9]"
                      : "border-black/10 bg-[#f7f3ee] text-black hover:border-black/30"
                  }`}
                >
                  <span className="text-[9px] uppercase tracking-[0.2em] opacity-70">{service.category}</span>
                  <span className="text-2xl tracking-[-0.05em]">{service.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[26px] border border-black/10 bg-[#f4f0ea] p-6">
            <div className="mb-4 text-[10px] uppercase tracking-[0.25em] text-black/55">Selected capability</div>
            <h3 className="text-4xl tracking-[-0.06em] text-black">{activeService.title}</h3>
            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-black/55">{activeService.kicker}</p>
            <p className="mt-6 max-w-md text-base leading-7 text-black/70">{activeService.description}</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-3 text-[9px] uppercase tracking-[0.24em] text-black/50">Typical use cases</p>
                <ul className="space-y-2 text-sm text-black/75">
                  {activeService.useCases.map((useCase) => (
                    <li key={useCase}>• {useCase}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-3 text-[9px] uppercase tracking-[0.24em] text-black/50">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {activeService.technologies.map((tech) => (
                    <span key={tech} className="border border-black/10 bg-[#f9f6f2] px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-black/65">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f7f4f0]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="mb-8 max-w-xl">
            <div className="text-[10px] uppercase tracking-[0.25em] text-black/55">Services as business problems</div>
            <h2 className="mt-3 text-4xl tracking-[-0.07em] text-black md:text-6xl">The system solves the real problem.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {serviceItems.map((service) => (
              <div key={service.title} className="group border border-black/10 bg-[#f2efe9] p-5 transition hover:border-black/25 hover:bg-[#f8f5f1]">
                <div className="mb-6 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-black/55">
                  <span>{service.category}</span>
                  <span aria-hidden="true">→</span>
                </div>
                <h3 className="text-2xl tracking-[-0.05em] text-black">{service.problem}</h3>
                <div className="mt-5 text-[11px] uppercase tracking-[0.18em] text-black/55">{service.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mb-10 max-w-xl">
          <div className="text-[10px] uppercase tracking-[0.25em] text-black/55">The system</div>
          <h2 className="mt-3 text-4xl tracking-[-0.07em] text-black md:text-6xl">Different problems require different tools.</h2>
        </div>

        <div className="grid gap-4 rounded-[32px] border border-black/10 bg-[#f0ece6] p-6 md:grid-cols-7 md:p-10">
          <div className="flex min-h-[120px] items-center justify-center border border-black/10 bg-[#f8f6f2] text-center text-[11px] uppercase tracking-[0.2em] text-black/65 md:col-span-2">
            Business
          </div>
          <div className="flex min-h-[120px] items-center justify-center text-[11px] uppercase tracking-[0.2em] text-black/50 md:col-span-1">
            ↓
          </div>
          <div className="flex min-h-[120px] items-center justify-center border border-black/10 bg-[#f8f6f2] text-center text-[11px] uppercase tracking-[0.2em] text-black/65 md:col-span-2">
            Workflow
          </div>
          <div className="flex min-h-[120px] items-center justify-center text-[11px] uppercase tracking-[0.2em] text-black/50 md:col-span-1">
            ↓
          </div>
          <div className="flex min-h-[120px] items-center justify-center border border-black/10 bg-[#f8f6f2] text-center text-[11px] uppercase tracking-[0.2em] text-black/65 md:col-span-2">
            Product
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            "Software",
            "AI",
            "Design",
          ].map((item) => (
            <div key={item} className="border border-black/10 bg-[#f7f4ef] p-5 text-[11px] uppercase tracking-[0.2em] text-black/60">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="border-y border-black/10 bg-[#f4f0ea]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-black/55">Selected work</div>
              <h2 className="mt-3 text-4xl tracking-[-0.07em] text-black md:text-6xl">A few systems we’ve built.</h2>
            </div>
            <a href="#contact" className="text-[11px] uppercase tracking-[0.22em] text-black/60 hover:text-black">
              Start a project →
            </a>
          </div>

          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`mb-8 grid gap-4 rounded-[28px] border border-black/10 bg-[#f2efe9] p-5 md:p-8 ${
                project.layout === "wide" ? "lg:grid-cols-[1.2fr_0.8fr]" : "lg:grid-cols-[0.9fr_1.1fr]"
              }`}
            >
              <div
                className="relative min-h-[240px] overflow-hidden border border-black/10"
                style={{ background: `linear-gradient(140deg, ${project.accent}, #efeae1)` }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(17,17,17,0.08),transparent_45%,rgba(17,17,17,0.08))]" />
                <div className="absolute left-6 top-6 h-20 w-20 rounded-full border border-black/20 bg-white/40" />
                <div className="absolute bottom-6 left-6 right-6 h-16 border border-black/15 bg-white/20" />
                <div className="absolute right-6 top-10 h-24 w-32 border border-black/15 bg-black/5" />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <div className="mb-2 text-[9px] uppercase tracking-[0.22em] text-black/55">{project.category}</div>
                  <h3 className="text-4xl tracking-[-0.06em] text-black">{project.title}</h3>
                  <p className="mt-4 max-w-lg text-base leading-7 text-black/70">{project.description}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span key={service} className="border border-black/10 px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-black/65">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mb-8 max-w-xl">
          <div className="text-[10px] uppercase tracking-[0.25em] text-black/55">From idea to system</div>
          <h2 className="mt-3 text-4xl tracking-[-0.07em] text-black md:text-6xl">We build systems that can evolve.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="border border-black/10 bg-[#f4f0ea] p-5"
            >
              <div className="mb-5 text-[9px] uppercase tracking-[0.22em] text-black/55">0{index + 1}</div>
              <h3 className="text-2xl tracking-[-0.05em] text-black">{step.step}</h3>
              <p className="mt-4 text-sm leading-6 text-black/65">{step.summary}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f5f1eb]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="mb-10 max-w-xl">
            <div className="text-[10px] uppercase tracking-[0.25em] text-black/55">Technology</div>
            <h2 className="mt-3 text-4xl tracking-[-0.07em] text-black md:text-6xl">The stack behind the system.</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-5">
            {technologies.map((group) => (
              <div key={group.name} className="border border-black/10 bg-[#f1ece4] p-5">
                <div className="mb-5 text-[9px] uppercase tracking-[0.2em] text-black/55">{group.name}</div>
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <div key={item} className="border-b border-black/10 pb-2 text-sm text-black/75">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mb-10 max-w-2xl">
          <div className="text-[10px] uppercase tracking-[0.25em] text-black/55">Why us</div>
          <h2 className="mt-3 text-4xl tracking-[-0.07em] text-black md:text-6xl">We think beyond the deliverable.</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {principles.map((principle) => (
            <div key={principle.number} className="border border-black/10 bg-[#f2efe9] p-5">
              <div className="mb-6 text-[9px] uppercase tracking-[0.2em] text-black/55">{principle.number}</div>
              <h3 className="text-2xl tracking-[-0.05em] text-black">{principle.title}</h3>
              <p className="mt-4 text-sm leading-6 text-black/65">{principle.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f8f6f3]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="mb-10 max-w-xl">
            <div className="text-[10px] uppercase tracking-[0.25em] text-black/55">Client experience</div>
            <h2 className="mt-3 text-4xl tracking-[-0.07em] text-black md:text-6xl">Trusted by businesses that needed more than a template.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="border border-black/10 bg-[#f1ece6] p-8">
              <div className="text-[9px] uppercase tracking-[0.2em] text-black/55">5+ clients</div>
              <div className="mt-6 text-[56px] font-medium leading-none tracking-[-0.08em] text-black">5+</div>
            </div>
            <div className="border border-black/10 bg-[#f1ece6] p-8">
              <div className="text-[9px] uppercase tracking-[0.2em] text-black/55">Multiple delivered projects</div>
              <div className="mt-6 text-[56px] font-medium leading-none tracking-[-0.08em] text-black">09+</div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.2em] text-black/60">
            {[
              "Software",
              "Web",
              "ERP",
              "AI automation",
              "UI/UX",
              "Branding",
            ].map((item) => (
              <span key={item} className="border border-black/10 bg-[#f2efe9] px-4 py-3">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-black/55">About</div>
            <h2 className="mt-3 text-4xl tracking-[-0.07em] text-black md:text-6xl">We build at the intersection of engineering, automation and design.</h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-black/70">
            <p>
              We work with businesses that need more than a template. They need systems that do real work, reduce friction, and support growth.
            </p>
            <p>
              Our work spans software, ERP architecture, AI-led workflows, digital products, and the interfaces that make those systems usable.
            </p>
          </div>
        </div>

        <div className="mt-12 border border-black/10 bg-[#f2efe9] p-6">
          <div className="mb-6 text-[10px] uppercase tracking-[0.25em] text-black/55">Evolution</div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              "Software systems",
              "Business workflows",
              "AI automation",
              "Product design",
            ].map((item) => (
              <div key={item} className="border-t border-black/10 pt-4 text-sm uppercase tracking-[0.18em] text-black/60">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f1eee7]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="mb-10 max-w-xl">
            <div className="text-[10px] uppercase tracking-[0.25em] text-black/55">Insights</div>
            <h2 className="mt-3 text-4xl tracking-[-0.07em] text-black md:text-6xl">Notes on software, systems and automation.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="border border-black/10 bg-[#f8f5f1] p-5">
                <div className="mb-4 text-[9px] uppercase tracking-[0.2em] text-black/55">{post.category}</div>
                <h3 className="text-2xl tracking-[-0.05em] text-black">{post.title}</h3>
                <p className="mt-4 text-sm leading-6 text-black/65">{post.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-black/55">Start a project</div>
            <h2 className="mt-3 text-4xl tracking-[-0.07em] text-black md:text-6xl">Have a problem worth solving?</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-black/70">
              Tell us what you are trying to build, where the friction is, and what needs to work.
            </p>
          </div>

          <form className="border border-black/10 bg-[#f4f0ea] p-5 md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.2em] text-black/55">
                What do you need?
                <select className="border border-black/10 bg-[#f9f7f3] px-3 py-3 text-sm normal-case tracking-normal text-black outline-none focus:border-black">
                  <option>Software</option>
                  <option>ERP</option>
                  <option>Website</option>
                  <option>AI Automation</option>
                  <option>UI/UX</option>
                  <option>Graphic Design</option>
                  <option>Something else</option>
                </select>
              </label>

              <label className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.2em] text-black/55">
                Estimated timeline
                <select className="border border-black/10 bg-[#f9f7f3] px-3 py-3 text-sm normal-case tracking-normal text-black outline-none focus:border-black">
                  <option>1-2 months</option>
                  <option>3-5 months</option>
                  <option>6+ months</option>
                  <option>Not sure yet</option>
                </select>
              </label>
            </div>

            <label className="mt-5 flex flex-col gap-2 text-[10px] uppercase tracking-[0.2em] text-black/55">
              Tell us about the project.
              <textarea className="min-h-[150px] border border-black/10 bg-[#f9f7f3] px-3 py-3 text-sm normal-case tracking-normal text-black outline-none focus:border-black" placeholder="Describe your workflow, challenge, or idea..." />
            </label>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.2em] text-black/55">
                Company / Organization
                <input className="border border-black/10 bg-[#f9f7f3] px-3 py-3 text-sm normal-case tracking-normal text-black outline-none focus:border-black" />
              </label>

              <label className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.2em] text-black/55">
                Email
                <input type="email" className="border border-black/10 bg-[#f9f7f3] px-3 py-3 text-sm normal-case tracking-normal text-black outline-none focus:border-black" />
              </label>
            </div>

            <label className="mt-5 flex flex-col gap-2 text-[10px] uppercase tracking-[0.2em] text-black/55">
              Optional budget
              <input className="border border-black/10 bg-[#f9f7f3] px-3 py-3 text-sm normal-case tracking-normal text-black outline-none focus:border-black" placeholder="$5k - $20k" />
            </label>

            <button type="submit" className="mt-6 inline-flex items-center gap-3 border border-black bg-black px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-[#f2efe9] transition hover:bg-[#1d1d1d]">
              Let’s Build It
              <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
