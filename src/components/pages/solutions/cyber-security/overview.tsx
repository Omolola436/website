export default function Overview() {
  return (
    <section id="overview" className="py-16 w-full bg-white lg:py-24">
      <div className="px-5 mx-auto w-full max-w-7xl md:px-8">
        <div className="container-none">
          <div className="grid grid-cols-1 gap-5 items-start  w-full section-heading lg:mb-0 lg:grid-cols-2">
            <div className="heading-subheading lg:text-left lg:mx-0">
              <h5 className="mt-2 mb-3 text-sm font-semibold text-amber-600 lg:w-fit">
                Overview
              </h5>
              <h2 className="text-2xl font-semibold leading-[1.2] mb-4 md:mb-5 text-gray-900 md:text-4xl ">
                Are You Fully Protected Against Data Breaches?
              </h2>
              <p className="text-lg text-gray-600 md:text-xl">
                Identify vulnerabilities, prevent unauthorized access, and stay ahead of evolving threats with our comprehensive data protection and cybersecurity solutions.
              </p>
            </div>
            <div className="space-y-4 text-base text-gray-700 md:text-lg">
              <p>
              At 3Consulting, we understand that a strong cybersecurity posture is essential to protecting your digital assets, maintaining trust, and ensuring business continuity. 
              Our cybersecurity services are designed to address today’s complex threat landscape with practical, efficient, and forward-looking solutions.
              </p>
              <p>
                We specialize in encryption testing and validation, ensuring that your data protection measures meet industry standards and regulatory requirements. 
                Our API security testing services are tailored to identify and mitigate vulnerabilities in your digital interfaces, safeguarding your applications against unauthorized access and data breaches. Additionally, we support organizations in consolidating cybersecurity tools eliminating redundancy, optimizing performance, and streamlining incident response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
