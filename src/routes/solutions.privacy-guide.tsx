import { createFileRoute } from '@tanstack/react-router';
import privacyGuideImage from '@assets/privacy-guide.png';

export const Route = createFileRoute('/solutions/privacy-guide')({
  component: () => (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
          {/* Text Side */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Guide – Your Roadmap to Data Protection Compliance
            </h1>
            <p className="text-lg text-gray-700">
              Assess, understand, and improve your privacy posture with
              country-specific compliance insights and action plans.
            </p>
          </div>
          {/* Image Side */}
          <div className="flex-1">
            <img
              src={privacyGuideImage}
              alt="Privacy Guide"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Original Page Content */}
      <div className="py-10 px-6 max-w-6xl mx-auto text-gray-800">
        {/* Overview */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">Overview</h2>
        <p className="mb-4">
          Privacy Guide is a web-based application developed by 3Consulting to help businesses across Africa
          understand and improve their data privacy readiness. It is designed as an entry point solution giving
          users an immediate understanding of where they stand in terms of privacy compliance, while also offering
          actionable next steps.
        </p>
        <p className="mb-4">
          Whether your organization is just starting out with data protection or looking to benchmark existing
          efforts, Privacy Guide provides a user-friendly experience backed by expert insights and local regulatory
          knowledge.
        </p>

        {/* Key Features */}
        <h2 className="text-xl font-semibold mt-8 mb-4">Key Features</h2>
        <ol className="list-decimal list-inside mb-4 space-y-3">
          <li>
            <strong>Country-Specific Privacy Insights:</strong> Once registered, users can select their country of
            operation. The system then provides a simplified but comprehensive overview of the applicable data
            protection regulation, helping businesses understand their obligations and key requirements.
          </li>
          <li>
            <strong>Free Privacy Readiness Assessment:</strong> The free version allows businesses to answer a
            diagnostic questionnaire covering various areas of data protection such as data handling, consent
            management, and breach preparedness. Based on responses:
            <ul className="list-disc list-inside ml-5 mt-2">
              <li>A privacy readiness score is generated.</li>
              <li>Immediate feedback and tailored recommendations are provided.</li>
              <li>The results help businesses identify areas needing improvement.</li>
            </ul>
          </li>
          <li>
            <strong>Action-Oriented Guidance:</strong> Users receive customized advice on practical, country-specific
            steps to improve compliance.
          </li>
          <li>
            <strong>Premium Services (Paid Tier):</strong> Including privacy policy creation, privacy audits, risk
            assessments, and training delivered by certified professionals.
          </li>
        </ol>

        {/* Benefits */}
        <h2 className="text-xl font-semibold mt-8 mb-4">Benefits to Businesses</h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Localized expertise with country-specific information.</li>
          <li>Cost-effective with a valuable free version.</li>
          <li>Easy-to-use interface for guided assessments.</li>
          <li>Clear path to compliance through education and enablement.</li>
          <li>Scalable for businesses of all sizes.</li>
        </ul>

        {/* Target Users */}
        <h2 className="text-xl font-semibold mt-8 mb-4">Target Users</h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Small and medium-sized enterprises (SMEs)</li>
          <li>Start-ups in tech, finance, healthcare, and education sectors</li>
          <li>Organizations operating in or expanding into African markets</li>
          <li>Compliance teams seeking a structured privacy approach</li>
        </ul>

        {/* Closing CTA */}
        <div className="mt-10 rounded-lg border border-gray-200 p-6 bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Request a Demo</h2>
          <p className="mb-4">
            Interested in seeing how Privacy Guide can help your organization improve privacy readiness?  
            Email us at{' '}
            <a href="mailto:info@3consult-ng.com" className="text-blue-600 underline">
              info@3consult-ng.com
            </a>
            , or use our{' '}
            <a href="/contact" className="text-blue-600 underline">
              Contact page
            </a>
            .
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:info@3consult-ng.com?subject=Privacy%20Guide%20Demo%20Request"
              className="inline-flex items-center justify-center rounded-lg bg-amber-400 px-5 py-3 text-amber-900 font-semibold shadow hover:bg-amber-300 transition"
            >
              Request a Demo
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-gray-700 font-medium hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  ),
});
