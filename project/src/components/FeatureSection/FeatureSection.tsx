import React from 'react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, subtitle, features }) => {
  return (
    <section className="py-16 md:py-24 bg-[#fbefef]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg hover:translate-y-[-4px]"
            >
              <div className="w-12 h-12 bg-[#f5a9a9] bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;