import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Code2 } from 'lucide-react';
import { getProjectBySlug, projects } from '../data/projects';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { FadeIn } from '../components/animations/FadeIn';
import { GradientText } from '../components/animations/GradientText';

export function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Project Not Found
          </h2>
          <Button onClick={() => navigate('/')} variant="primary">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  // Find next project
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-cyan-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-cyan-900/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-light/20 via-purple-500/20 to-accent-light/20 dark:from-primary-dark/20 dark:via-pink-500/20 dark:to-accent-dark/20 animate-gradient" />

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <Button
              onClick={() => navigate('/')}
              variant="secondary"
              className="mb-8 flex items-center gap-2"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Button>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <GradientText>{project.title}</GradientText>
            </h1>

            <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-3xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="primary">
                  {tech}
                </Badge>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Description */}
            <FadeIn delay={0.2}>
              <div className="glass-card p-8 mb-12">
                <h2 className="text-3xl font-bold mb-6 gradient-text">About This Project</h2>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  {project.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Image Gallery */}
            {project.images && project.images.length > 0 && (
              <FadeIn delay={0.4}>
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 gradient-text">Project Gallery</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.images.map((image, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="glass-card overflow-hidden cursor-pointer"
                      >
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-auto"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Links */}
            {(project.links?.github || project.links?.live || project.links?.report) && (
              <FadeIn delay={0.6}>
                <div className="glass-card p-8 mb-12">
                  <h2 className="text-3xl font-bold mb-6 gradient-text">Project Links</h2>
                  <div className="flex flex-wrap gap-4">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Button variant="primary" className="flex items-center gap-2">
                          <Code2 size={18} />
                          View on GitHub
                        </Button>
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Button variant="secondary" className="flex items-center gap-2">
                          <ExternalLink size={18} />
                          Live Demo
                        </Button>
                      </a>
                    )}
                    {project.links.report && (
                      <a
                        href={project.links.report}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Button variant="secondary" className="flex items-center gap-2">
                          <ExternalLink size={18} />
                          View Report
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Next Project */}
            <FadeIn delay={0.8}>
              <div className="glass-card p-8 text-center">
                <h3 className="text-xl font-semibold mb-4 text-slate-700 dark:text-slate-300">
                  Next Project
                </h3>
                <h4 className="text-2xl font-bold mb-4 gradient-text">
                  {nextProject.title}
                </h4>
                <Button
                  onClick={() => {
                    navigate(`/projects/${nextProject.slug}`);
                    window.scrollTo(0, 0);
                  }}
                  variant="primary"
                >
                  View Project
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
