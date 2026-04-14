import { FadeIn } from '../animations/FadeIn';
import { GradientText } from '../animations/GradientText';
import { bio } from '../../data/skills';

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <GradientText>Me</GradientText>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-light to-purple-600 dark:from-primary-dark dark:to-pink-500 mx-auto mb-16" />
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          {/* Bio */}
          <FadeIn delay={0.2}>
            <div className="glass-card p-8 mb-12">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                {bio.description}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 gradient-text">Education</h3>
                  {bio.education.map((edu, index) => (
                    <div key={index} className="mb-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        {edu.institution}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{edu.degree}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-500">{edu.period}</p>
                      {edu.grade && (
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{edu.grade}</p>
                      )}
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 gradient-text">Experience</h3>
                  {bio.experience.map((exp, index) => (
                    <div key={index} className="mb-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        {exp.role}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{exp.company}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-500">{exp.period}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Interests */}
          <FadeIn delay={0.4}>
            <h3 className="text-2xl font-bold text-center mb-8">
              <GradientText>Interests & Hobbies</GradientText>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {bio.interests.map((interest, index) => (
                <div key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-4">{interest.icon}</div>
                  <h4 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">
                    {interest.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
