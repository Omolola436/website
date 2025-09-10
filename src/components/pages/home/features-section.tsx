import featImg1 from '@assets/features-1.jpg';
import featImg2 from '@assets/features-2.jpg';
import featImg3 from '@assets/features-3.jpg';
import featImg4 from '@assets/features-4.jpg';
import featImg5 from '@assets/features-5.jpg';
import { Link } from '@tanstack/react-router';

const Features: React.FC = () => {
  return (
    <div id="feature" className="bg-white pt-12">
      <section className="mx-auto max-w-7xl text-pretty px-5 md:px-6 lg:px-20">
        <div id="feature-heading" className="mx-auto mb-12 max-w-3xl">
          <p className="mb-3 text-center font-semibold text-amber-600">Solution</p>
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-800">
            Empowering Your Business in the Digital Age
          </h2>
          <p className="text-center text-lg text-gray-600">
            We provide a wide range of services designed to ensure your business operates securely,
            efficiently, and in compliance with ever-evolving regulations.
          </p>
        </div>

        <div id="features-list" className="grid grid-cols-1 gap-20">
          {/* Feature 1 */}
          <FeatureItem
            title="Data Protection Services"
            description="Our experts ensure compliance with global data privacy regulations, protecting your data and strengthening your operations."
            features={[
              {
                title: 'Data Protection Audit',
                description: 'Comprehensive audits to assess risk and ensure regulatory alignment.',
              },
              {
                title: 'Policy Development & Review',
                description: 'Custom policies to meet compliance standards and support business growth.',
              },
              {
                title: 'Capacity Building',
                description: 'Training programs to equip your team with the skills needed for responsible data management.',
              },
            ]}
            image={featImg1}
            reverse={false}
            link="/solutions/data-protection"
          />

          {/* Feature 2 */}
          <FeatureItem
            title="AI (Artificial Intelligence) Governance & Solutioning"
            description="Driving Responsible & Compliant AI Adoption."
            features={[
              {
                title: 'AI Audit',
                description: 'Reviewing systems for bias, transparency, and accountability.',
              },
              {
                title: 'AI Framework',
                description: 'Development of tailored AI governance frameworks for safe deployment.',
              },
            ]}
            image={featImg4}
            reverse={true}
            link="/solutions/AI-consulting"
          />

          {/* Feature 3 */}
          <FeatureItem
            title="Project Management & Outsourcing DPO"
            description="Optimize your operations with our outsourced DPO, project management, and AI ethics services."
            features={[
              {
                title: 'Agile Methodology',
                description: 'We use Agile for seamless, adaptive project execution.',
              },
              {
                title: 'Outsourced Data Protection Officer (DPO) Services',
                description: 'Certified DPOs provide expert guidance, reducing compliance costs.',
              },
              {
                title: 'AI Ethics & Governance',
                description: 'Navigate AI challenges with our ethical AI consultancy and assessments.',
              },
            ]}
            image={featImg2}
            reverse={false}
            link="/solutions/project-management"
          />

          {/* Feature 4 */}
          <FeatureItem
            title="Technology Services"
            description="Harness the power of cutting-edge technology to streamline your HR processes and secure your infrastructure."
            features={[
              {
                title: 'HRIS (Human Resources Information System)',
                description: 'End-to-end HR management with seamless data integration and compliance.',
              },
            ]}
            image={featImg5}
            reverse={true}
            link="/solutions/technology-services"
          />

          {/* Feature 5 */}
          <FeatureItem
            title="Cyber-Security Services"
            description="Protect your digital assets with a comprehensive cybersecurity strategy."
            features={[
              {
                title: 'Workload Security',
                description: 'Secure physical and cloud workloads against threats.',
              },
              {
                title: 'Breach Attack Simulation (BAS) Services',
                description: 'Simulate real-world attacks to assess and enhance your security measures.',
              },
              {
                title: 'Cyber Insurance',
                description: 'Prepare for the unexpected with comprehensive cyber insurance advisory.',
              },
              {
                title: 'Encryption Testing and Validation',
                description: 'Ensure encryption methods meet security and regulatory standards.',
              },
              {
                title: 'API Security Services',
                description: 'Protect APIs from common exploits and abuse.',
              },
              {
                title: 'Consolidation of Tools',
                description: 'Streamline your security stack to reduce complexity and cost.',
              },
            ]}
            image={featImg3}
            reverse={false}
            link="/solutions/cyber-security"
          />
        </div>
      </section>
    </div>
  );
};

interface FeatureItemProps {
  title: string;
  description: string;
  features: { title: string; description: string }[];
  image: string;
  reverse: boolean;
  link: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description, features, image, reverse, link }) => {
  return (
    <div
      className={`feature grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-24 ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <div className="image-section aspect-video lg:aspect-square lg:size-full">
        <img
          src={image}
          alt={title}
          draggable="false"
          className="h-full w-full rounded-2xl object-cover object-top brightness-90 contrast-125"
        />
      </div>
      <div className="content-section">
        <div className="content-heading mb-5">
          <h3 className="mb-3 text-2xl font-medium text-gray-950">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
        <div className="feature-list mb-6 pl-2">
          {features.map((f, i) => (
            <div key={i} className="mt-5 flex gap-3">
              <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
              <div>
                <h4 className="font-medium">{f.title}</h4>
                {f.description && <p className="text-gray-700">{f.description}</p>}
              </div>
            </div>
          ))}
        </div>
        <Link
          to={link}
          className="inline-flex items-center gap-1 font-medium text-amber-600 hover:text-amber-700"
        >
          Learn more <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default Features;
