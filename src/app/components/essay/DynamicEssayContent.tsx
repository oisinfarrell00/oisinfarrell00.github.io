import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Essay } from '../../data/essayLoader';
import { EssaySection } from './EssaySection';

interface DynamicEssayContentProps {
  essay: Essay;
}

export function DynamicEssayContent({ essay }: DynamicEssayContentProps) {
  const { metadata, sections } = essay;

  return (
    <article className="flex-1 max-w-4xl mx-auto px-16 py-16 relative">
      <div className="absolute top-32 right-0 w-64 h-64 bg-accent/5 blur-[100px] -z-10" />

      <div className="prose-essay">
        {/* Header Section */}
        <div className="mb-16 pb-12 border-b border-border">
          <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded text-xs font-mono text-accent mb-6">
            {metadata.category}
          </div>
          <h1 className="text-5xl mb-6 leading-tight" style={{ fontWeight: 600 }}>
            {metadata.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {metadata.description}
          </p>
        </div>

        {/* Render sections */}
        {sections.map((section, index) => (
          <EssaySection
            key={section.id}
            id={section.id}
            number={index + 1}
            title={section.title}
          >
            <div className="prose-essay-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  p: ({ children }) => (
                    <p className="essay-text mb-6">{children}</p>
                  ),
                  // Add more custom components as needed
                  ul: ({ children }) => (
                    <ul className="essay-text mb-6 list-disc list-inside space-y-2">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="essay-text mb-6 list-decimal list-inside space-y-2">
                      {children}
                    </ol>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="essay-text mb-6 border-l-4 border-accent/30 pl-4 italic">
                      {children}
                    </blockquote>
                  ),
                  code: ({ className, children }) => {
                    const isInline = !className;
                    if (isInline) {
                      return (
                        <code className="px-1.5 py-0.5 bg-muted rounded text-sm font-mono">
                          {children}
                        </code>
                      );
                    }
                    return (
                      <pre className="essay-text mb-6 p-4 bg-muted rounded overflow-x-auto">
                        <code className={className}>{children}</code>
                      </pre>
                    );
                  },
                }}
              >
                {section.content}
              </ReactMarkdown>
            </div>
          </EssaySection>
        ))}
      </div>
    </article>
  );
}
