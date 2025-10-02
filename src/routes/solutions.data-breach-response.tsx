import { createFileRoute } from '@tanstack/react-router'
import databreachresponse from '@assets/data-breach-response.png';

export const Route = createFileRoute('/solutions/data-breach-response')({
  component: () => (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
          
          {/* Text Side */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Essential Data Breach Response Kit for SMEs
            </h1>
            <p className="text-lg text-gray-700">
              Helping African businesses stay compliant, secure, and prepared.
            </p>
            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:info@3consult-ng.com?subject=databreachresponse%20Demo%20Request"
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
              src={databreachresponse}
              alt="databreachresponse"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="py-10 px-6 max-w-6xl mx-auto text-gray-800">
        
        {/* Overview */}
        <h2 className="text-xl font-semibold mt-8 mb-4">Overview</h2>
        <p className="mb-4">
          The Essential Data Breach Response Kit is a lightweight, web-based platform
          designed to help small and medium-sized enterprises (SMEs) across Nigeria and
          Anglophone Africa respond effectively to data breaches.
        </p>
        <p className="mb-4">
          Built with simplicity and affordability in mind, the kit provides non-technical
          teams with the tools they need to meet regulatory requirements under Nigeria’s
          NDPA, South Africa’s POPIA, Kenya’s DPA, Ghana’s Data Protection Act, and
          other regional laws. Whether you run a fintech, healthtech, edtech, or
          e-commerce business, this solution ensures your organization is prepared to
          handle data breaches quickly and confidently, protecting both your reputation
          and your compliance standing.
        </p>

        {/* Problem Section */}
        <h3 className="text-lg font-semibold mt-6 mb-2">The Problem</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Lack internal data protection officers or legal guidance.</li>
          <li>Don’t know the correct steps to take when a breach occurs.</li>
          <li>Miss mandatory reporting windows required by regulators.</li>
          <li>Are unaware of their obligations under local data protection laws.</li>
          <li>Risk heavy fines and reputational damage when breaches occur.</li>
        </ul>

        {/* Solution Section */}
        <h3 className="text-lg font-semibold mt-6 mb-2">Our Solution</h3>
        <p className="mb-4">
          The Essential Data Breach Response Kit is a plug-and-play web platform that
          equips SMEs with instant access to templates, policies, and checklists for
          managing breaches. Designed for ease of use and quick deployment, the kit helps
          organizations:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Follow step-by-step guidance during the first 72 hours of a breach.</li>
          <li>Prepare regulator notifications that meet legal standards in multiple countries.</li>
          <li>Communicate effectively with affected customers.</li>
          <li>Establish clear internal breach-handling policies.</li>
          <li>Strengthen their defenses with a quick-scan risk assessment add-on.</li>
        </ul>

        {/* Key Features */}
        <h3 className="text-lg font-semibold mt-6 mb-2">Key Features</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Breach Response Checklist –</strong> A one-page, 72-hour action plan
            covering containment, communication, and recovery.
          </li>
          <li>
            <strong>Customizable Notification Templates –</strong> Pre-drafted regulator
            and customer notification letters for Nigeria, South Africa, Kenya, Ghana,
            Uganda, Zambia, and more.
          </li>
          <li>
            <strong>Mini Internal Policy –</strong> A plain-language “How We Handle Data
            Breaches” document that clarifies roles, responsibilities, and escalation steps.
          </li>
          <li>
            <strong>Quick-Scan Risk Assessment (Optional) –</strong> A guided 30-minute
            session to identify risks and recommend practical security improvements.
          </li>
        </ul>

        {/* Audience */}
        <h3 className="text-lg font-semibold mt-6 mb-2">Who Should Use It?</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>SMEs across Anglophone Africa and EU jurisdictions.</li>
          <li>Businesses handling personal data, especially in fintech, edtech, healthtech, and e-commerce.</li>
          <li>Teams without in-house privacy or cybersecurity expertise.</li>
        </ul>

        {/* Compliance */}
        <h3 className="text-lg font-semibold mt-6 mb-2">Compliance Coverage</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Nigeria – Nigeria Data Protection Act (NDPA, 2023)</li>
          <li>South Africa – Protection of Personal Information Act (POPIA)</li>
          <li>Kenya – Data Protection Act (2019)</li>
          <li>
            Ghana, Uganda, Zambia, Botswana, Malawi, Tanzania, Eswatini, Mauritius, Ethiopia,
            Zimbabwe, Rwanda, Namibia – and more.
          </li>
          <li>EU GDPR – Articles 33 & 34 (breach notification and communication).</li>
        </ul>

        {/* Value */}
        <h3 className="text-lg font-semibold mt-6 mb-2">Value for SMEs</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Quick Setup – No technical skills required; ready in minutes.</li>
          <li>Affordable – Priced with SMEs in mind.</li>
          <li>Multi-Country Coverage – Works across African and EU jurisdictions.</li>
          <li>Compliant – Aligned with laws and regulatory timelines.</li>
          <li>Trust-Enhancing – Protects customer confidence and regulator relationships.</li>
          <li>Customizable – Templates and policies adaptable to your industry.</li>
        </ul>

        {/* Deliverables */}
        <h3 className="text-lg font-semibold mt-6 mb-2">Deliverables</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>A web-based breach response tool.</li>
          <li>Editable breach checklist and downloadable templates.</li>
          <li>Customer and regulator notification letters.</li>
          <li>Internal breach handling policy.</li>
          <li>Optional add-ons: Risk Assessment and Awareness Training.</li>
        </ul>

        {/* Looking Ahead */}
        <h3 className="text-lg font-semibold mt-6 mb-2">Looking Ahead</h3>
        <p className="mb-4">
          We’re building even more value into the kit, with upcoming features such as:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Breach log forms and exportable incident reports.</li>
          <li>Email/SMS alerts for breach response steps.</li>
          <li>Language support (French, Swahili, Hausa).</li>
          <li>AI-powered breach simulation checklists.</li>
          <li>Localized regulatory guidance via country selector.</li>
        </ul>

        {/* Closing CTA */}
          <div className="mt-10 rounded-lg border border-gray-200 p-6 bg-gray-50">
            <h2 className="text-xl font-semibold mb-3">Request a Demo</h2>
            <p className="mb-4">
              Interested in seeing how Data Breach Response can transform privacy management in your organization?
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
              href="mailto:info@3consult-ng.com?subject=DataBreachResponse%20Demo%20Request"
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