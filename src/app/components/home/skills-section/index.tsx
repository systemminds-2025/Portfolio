"use client";
import React, { useState, useEffect } from 'react';

const SkillsSection = () => {
  const [visibleProgress, setVisibleProgress] = useState<Record<string, number>>({});

  const skillCategories = [
    {
      id: "backend",
      title: "Backend",
      color: "#FE4300",
      description: "Core Java with strong OOP foundations and enterprise backend development.",
      groups: [
        {
          label: "Core",
          items: [
            "Java",
            "OOPs Concepts (Encapsulation, Inheritance, Polymorphism, Abstraction)",
            "Exception Handling",
            "Collections Framework",
            "Java 8 Features (Streams, Lambda, Optional)",
            "Multithreading Basics"
          ]
        },
        {
          label: "Frameworks & APIs",
          items: [
            "Spring Boot",
            "Spring Security",
            "Spring MVC",
            "RESTful APIs",
            "JPA",
            "Hibernate",
            "DTO Mapping & Validation",
            "Layered Architecture (Controller-Service-Repository)",
            "API Versioning & Error Handling"
          ]
        },
        {
          label: "Auth & Quality",
          items: [
            "JWT-based Authentication",
            "Role-based Authorization",
            "Swagger/OpenAPI Documentation",
            "Unit Testing Basics (JUnit/Mockito)"
          ]
        }
      ]
    },
    {
      id: "frontend",
      title: "Frontend",
      color: "#00D4FF",
      groups: [
        {
          label: "UI Development",
          items: [
            "React.js",
            "Tailwind CSS",
            "Bootstrap",
            "HTML5",
            "CSS3",
            "Responsive Layouts",
            "Reusable Component Design",
            "State & Props Management",
            "API Integration with Axios/Fetch"
          ]
        },
        {
          label: "UI Practices",
          items: [
            "Form Handling & Validation",
            "Loading/Error States",
            "Accessibility Basics",
            "Cross-browser Compatibility"
          ]
        }
      ]
    },
    {
      id: "database",
      title: "Database",
      color: "#7B61FF",
      groups: [
        {
          label: "Databases",
          items: [
            "MySQL",
            "PostgreSQL",
            "MongoDB",
            "Schema Design & Normalization",
            "Joins, Indexing & Query Optimization",
            "Transactions & ACID Concepts",
            "Basic Aggregation Pipelines"
          ]
        },
        {
          label: "Data Access",
          items: [
            "JPA/Hibernate Mapping",
            "Pagination & Sorting",
            "Relationship Mapping (One-to-Many, Many-to-One)",
            "Migration Awareness"
          ]
        }
      ]
    },
    {
      id: "cloud-tools",
      title: "Cloud & Tools",
      color: "#00D97E",
      groups: [
        {
          label: "Cloud",
          items: [
            "GCP (Cloud Run)",
            "DigitalOcean",
            "Hostinger (Domain & Deployment)",
            "Build & Deploy Pipelines (Basic)",
            "Environment Variables & Secrets",
            "Domain/DNS Setup"
          ]
        },
        {
          label: "Engineering Tools",
          items: [
            "Git",
            "GitHub",
            "Swagger",
            "Postman",
            "SonarQube",
            "Jira",
            "Git Branching Strategy",
            "Code Review Workflow",
            "API Testing Collections"
          ]
        }
      ]
    },
    {
      id: "ai-integrations",
      title: "AI & Integrations",
      color: "#FF6B9D",
      groups: [
        {
          label: "AI Capabilities",
          items: [
            "Generative AI Integration",
            "Deepgram (STT/TTS)",
            "AssemblyAI (Speech-to-Text)",
            "Prompt Design Basics",
            "LLM API Integration",
            "Speech Workflow Integration (Record -> Transcribe -> Respond)",
            "AI Response Handling in Backend APIs"
          ]
        },
        {
          label: "Integration Practices",
          items: [
            "Webhook/Callback Handling",
            "Rate-limit Awareness",
            "Fallback & Retry Strategies",
            "Error Logging for External APIs"
          ]
        }
      ]
    },
    {
      id: "concepts",
      title: "Concepts",
      color: "#FFB800",
      groups: [
        {
          label: "Architecture & Process",
          items: [
            "System Design",
            "Microservices",
            "API Architecture",
            "JWT Authentication",
            "Agile Development",
            "SOLID Principles (Awareness)",
            "Scalability Basics",
            "Caching Concepts",
            "Logging & Monitoring Basics"
          ]
        },
        {
          label: "Delivery Mindset",
          items: [
            "Requirement Understanding",
            "Feature Breakdown",
            "Estimation & Sprint Planning",
            "Ownership from Development to Deployment"
          ]
        }
      ]
    },
    {
      id: "dsa",
      title: "Data Structures & Algorithms",
      color: "#1F2937",
      groups: [
        {
          label: "Arrays & Techniques",
          items: ["Traversal", "Insertion & Deletion", "Prefix Sum", "Kadane's Algorithm", "Two Pointers", "Sliding Window"]
        },
        {
          label: "Strings",
          items: ["String Traversal", "Palindrome", "Anagram", "Pattern Matching", "String Hashing"]
        },
        {
          label: "Linked Lists",
          items: ["Singly & Doubly Linked List", "Reversal", "Cycle Detection", "Merge Two Lists"]
        },
        {
          label: "Stacks",
          items: ["Push, Pop, Peek", "Balanced Parentheses", "Next Greater Element"]
        },
        {
          label: "Queues",
          items: ["Enqueue, Dequeue", "Deque (Double-ended Queue)", "Priority Queue"]
        },
        {
          label: "Sorting",
          items: ["Bubble Sort", "Selection Sort", "Insertion Sort", "Merge Sort", "Quick Sort", "Heap Sort"]
        },
        {
          label: "Searching",
          items: ["Linear Search", "Binary Search", "Binary Search Variations"]
        },
        {
          label: "Hashing",
          items: ["Hash Tables", "HashMap / HashSet", "Collision Handling", "Frequency Counting"]
        },
        {
          label: "Trees",
          items: [
            "Inorder / Preorder / Postorder",
            "Level Order Traversal",
            "Binary Trees",
            "Binary Search Trees",
            "Height & Depth"
          ]
        }
      ]
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const ratio = entry.isIntersecting ? entry.intersectionRatio : 0;
        setVisibleProgress(prev => ({
          ...prev,
          [entry.target.id]: ratio
        }));
      });
    }, observerOptions);

    document.querySelectorAll('[data-skill-category]').forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-white">
      <div className="sticky top-0 z-20 border-t border-softGray bg-white py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-6">
            <h2>Skills</h2>
            <p className="text-xl text-primary">( 04 )</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-32 md:pb-40">
        <div className="space-y-14 md:space-y-16">
          {skillCategories.map((category, index) => {
            const progress = Math.min(1, Math.max(0, (visibleProgress[category.id] ?? 0) / 0.9));
            const nextCategoryId = skillCategories[index + 1]?.id;
            const nextProgress = nextCategoryId
              ? Math.min(1, Math.max(0, (visibleProgress[nextCategoryId] ?? 0) / 0.9))
              : 0;

            const baseScale = 1;
            const maxScale = 1.08;
            const growProgress = Math.min(progress / 0.8, 1);

            // Grow current card as it enters, then keep it enlarged.
            // Only start shrinking when the NEXT card begins to enter.
            let scale = baseScale + (maxScale - baseScale) * growProgress;
            if (nextProgress > 0) {
              scale = maxScale - (maxScale - baseScale) * nextProgress;
            }

            return (
              <div
                key={category.id}
                id={category.id}
                data-skill-category
                className="sticky top-[96px] z-10 transition-transform duration-150 ease-linear"
                style={{
                  transform: `translateY(${(1 - progress) * 24}px) scale(${scale})`,
                  transformOrigin: 'top center'
                }}
              >
                <div
                  className="p-12 md:p-16 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-[60vh] flex flex-col"
                  style={{ backgroundColor: category.color }}
                >
                  <div className="mb-6 md:mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                      {category.title}
                    </h3>
                    {category.description && (
                      <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-4xl">
                        {category.description}
                      </p>
                    )}
                  </div>
                  <div className="space-y-4 overflow-y-auto pr-1">
                    {category.groups.map((group, index) => (
                      <div key={index}>
                        {category.id === "dsa" ? (
                          <p className="text-white/95 text-xs md:text-sm leading-relaxed">
                            <span className="font-semibold text-white">{group.label}:</span>{" "}
                            {group.items.join(", ")}
                          </p>
                        ) : (
                          <>
                            <h4 className="text-white font-semibold text-sm md:text-base mb-2">
                              {group.label}
                            </h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1 text-white/95 text-xs md:text-sm leading-relaxed">
                              {group.items.map((item, itemIndex) => (
                                <li key={itemIndex}>• {item}</li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="h-24 md:h-32" aria-hidden="true" />
      </div>
    </section>
  );
};

export default SkillsSection;
