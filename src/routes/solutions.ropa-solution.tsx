import { createFileRoute } from '@tanstack/react-router';
import ropaImage from '@assets/ropa.png'; // <-- Make sure you have an image named ropa.png in assets

export const Route = createFileRoute('/solutions/ropa-solution')({
  component: () => (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
          {/* Text Side */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              3Consulting Privacy ROPA System
            </h1>
            <p className="text-lg text-gray-800">
              An Automated GDPR ROPA Management Tool for Privacy Professionals
            </p>
          </div>
          {/* Image Side */}
          <div className="flex-1">
            <img
              src={ropaImage}
              alt="3Consulting Privacy ROPA System"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="py-10 px-6 max-w-6xl mx-auto text-gray-1000">
        <h2 className="text-xl font-semibold mt-8 mb-4">Overview</h2>
        <p className="mb-4">
          Managing a GDPR-compliant Record of Processing Activities (ROPA) shouldn’t be complex,
          disjointed, or spreadsheet-dependent. That’s why we created the 3Consulting Privacy ROPA
          System; a secure, dynamic, and intelligent platform designed specifically for privacy
          officers, compliance teams, and data champions who need a scalable and flexible way to
          manage their data processing records.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">What Makes the 3Consulting Privacy ROPA System Different?</h2>
        <p className="mb-4">
          Unlike static spreadsheet templates, our system offers a hybrid model, allowing you to
          upload your existing ROPA records and build on them dynamically. When new processing
          activities are added, the platform automatically integrates them into the downloadable
          template, so your record is always up to date and regulator-ready. It’s built for privacy
          by design, and built to grow with your organization’s needs.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Role-Based Access Control</h2>
        <p className="mb-4">The system recognizes the structure of real-world privacy teams:</p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Privacy Officers (Admins)</strong> – Full control of the account, can:
            <ul className="list-disc list-inside ml-6">
              <li>Add and manage new users</li>
              <li>Upload existing ROPA file to initialize the system</li>
              <li>Oversee all updates and exports</li>
            </ul>
          </li>
          <li>
            <strong>Privacy Champions (Departmental Users)</strong> – Can:
            <ul className="list-disc list-inside ml-6">
              <li>Add new processing activities from their respective units</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">How It Works</h2>
        <ol className="list-decimal list-inside mb-4">
          <li><strong>Initial Upload by Admin</strong> – Privacy Officer uploads existing ROPA document (Excel-based).</li>
          <li><strong>User Onboarding</strong> – Privacy Officer adds champions or departmental users.</li>
          <li><strong>Adding New Activities</strong> – Users add new processing activities directly in the system.</li>
          <li><strong>Smart Template Export</strong> – Dynamic ROPA template with all GDPR-required fields.</li>
          <li><strong>Update and Re-upload</strong> – Updated templates can be re-uploaded, maintaining version control.</li>
        </ol>

        <h2 className="text-xl font-semibold mt-8 mb-4">Key Features</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Upload Existing ROPA Records</li>
          <li>Add New Processing Activities</li>
          <li>Dynamic Template Generation</li>
          <li>Secure, Role-Based Access</li>
          <li>Dashboard Overview</li>
          <li>Audit-Ready Reports</li>
          <li>Version Tracking</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">Who Should Use This Solution?</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Data Protection Officers (DPOs)</li>
          <li>Privacy Champions</li>
          <li>Compliance Teams</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">Benefits at a Glance</h2>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Save time with automation</li>
          <li>✅ Improve collaboration across departments</li>
          <li>✅ Ensure accuracy and accountability</li>
          <li>✅ Be audit-ready at all times</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-10 text-center">
          <h3 className="text-lg font-semibold mb-2">Request a Free Demo Today</h3>
          <p className="mb-4">
            Interested in how the 3Consulting Privacy ROPA System can help your organization stay compliant and efficient?
          </p>
          <p className="font-medium">
            📧 Email us at <a href="mailto:info@3consult-ng.com" className="text-blue-600 underline">info@3consult-ng.com</a>
          </p>
        </div>
      </div>
    </div>
  ),
});
