import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { GradientText } from '../animations/GradientText';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { projects } from '../../data/projects';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ai', label: 'AI/ML' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (slug) => {
    navigate(`/projects/${slug}`);
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <GradientText>Projects</GradientText>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-light to-purple-600 dark:from-primary-dark dark:to-pink-500 mx-auto mb-8" />
          <p className="text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
            A collection of projects showcasing my skills in web development, mobile apps, and AI/ML.
          </p>
        </FadeIn>

        {/* Filter Tabs */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-primary-light to-purple-600 dark:from-primary-dark dark:to-pink-500 text-white shadow-lg'
                    : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:shadow-md'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={0.1 * index}>
              <Card className="cursor-pointer group h-full flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <Button
                    variant="outline"
                    onClick={() => handleProjectClick(project.slug)}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    View Details
                    <ExternalLink size={16} />
                  </Button>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-slate-600 dark:text-slate-400">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
