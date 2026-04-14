import { motion } from 'framer-motion';
import { FadeIn } from '../animations/FadeIn';
import { GradientText } from '../animations/GradientText';
import { skills } from '../../data/skills';

export function Skills() {
  const categories = [
    { title: 'Languages', items: skills.languages, color: 'from-blue-500 to-cyan-500' },
    { title: 'Frameworks', items: skills.frameworks, color: 'from-purple-500 to-pink-500' },
    { title: 'Tools', items: skills.tools, color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & <GradientText>Technologies</GradientText>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-light to-purple-600 dark:from-primary-dark dark:to-pink-500 mx-auto mb-8" />
          <p className="text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-16">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </FadeIn>

        <div className="max-w-6xl mx-auto space-y-12">
          {categories.map((category, categoryIndex) => (
            <FadeIn key={category.title} delay={0.2 * categoryIndex}>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">
                  <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </span>
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {category.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="glass-card p-4 flex flex-col items-center justify-center cursor-pointer group"
                    >
                      <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 text-center">
                        {skill.name}
                      </h4>

                      {/* Proficiency Bar */}
                      <div className="w-full mt-2 bg-slate-200 dark:bg-slate-700 rounded-full h-1 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
                          className={`h-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>

                      {/* Tooltip - Proficiency Percentage */}
                      <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {skill.proficiency}%
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
