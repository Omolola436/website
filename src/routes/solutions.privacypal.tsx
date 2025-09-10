import { createFileRoute } from '@tanstack/react-router';
import privacypal from '@assets/privacypal.png';

export const Route = createFileRoute('/solutions/privacypal')({
  component: () => (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
          {/* Text Side */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              PrivacyPal – Cultivating a Culture of Privacy Awareness
            </h1>
            <p className="text-lg text-gray-700">
              Empower your organization with role-based, engaging privacy
              awareness tools and tips that drive real behavioral change.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:info@3consult-ng.com?subject=PrivacyPal%20Demo%20Request"
                className="inline-flex items-center justify-center rounded-lg bg-amber-400 px-5 py-3 text-amber-900 font-semibold shadow hover:bg-amber-300 transition"
              >
                Request a Demo
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-gray-700 font-medium hover:bg-gray-50 transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="flex-1">
            <img
              src={privacypal}
              alt="PrivacyPal"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Original Page Content */}
      <div className="py-10 px-6 max-w-6xl mx-auto text-gray-800">
        <h2 className="text-xl font-semibold mt-8 mb-4">Overview</h2>
        <p className="mb-4">
          PrivacyPal is a web-based privacy awareness platform purpose-built for
          organizations seeking to foster a proactive, security-conscious
          workforce. It delivers consistent, role-based, and engaging privacy
          content that aligns with the unique needs of modern enterprises. With
          features like daily tips, gamified learning, a reminder system, and
          anonymous reporting, PrivacyPal promotes behavioral change and
          reinforces privacy best practices at all levels of your organization.
        </p>
        <p className="mb-4">
          Whether you're an executive, a mid-level manager, or an entry-level
          employee, PrivacyPal ensures you receive relevant, actionable insights
          that encourage responsible data handling and compliance awareness — 
          without overwhelming your daily workflow.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Key Features</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Daily privacy and security tips tailored to your role</li>
          <li>Gamified learning modules to keep engagement high</li>
          <li>Automated reminders for compliance-related tasks</li>
          <li>Anonymous incident reporting to encourage openness</li>
          <li>Admin dashboard for tracking engagement and impact</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">Why Choose PrivacyPal?</h2>
        <p className="mb-4">
          Organizations often struggle to maintain consistent privacy awareness
          initiatives that resonate with employees. PrivacyPal solves this by
          delivering targeted, bite-sized content directly to the user’s device
          or email, reducing the need for long, disruptive training sessions.
          Over time, this helps build a privacy-first culture where secure
          behaviors become second nature.
        </p>

        {/* Closing CTA */}
        <div className="mt-10 rounded-lg border border-gray-200 p-6 bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Request a Demo</h2>
          <p className="mb-4">
            Interested in seeing how PrivacyPal can transform privacy awareness in your organization?
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
              href="mailto:info@3consult-ng.com?subject=PrivacyPal%20Demo%20Request"
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
