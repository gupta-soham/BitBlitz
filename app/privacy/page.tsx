import Link from "next/link";

const Page = () => {
  return (
    <div className="container mx-auto px-10 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: [13-07-2024]</p>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>Welcome to <Link href='/' className="hover:underline hover:text-cyan-500">bitSafe</Link>, the graphical user interface for the Volatility framework. We are committed to protecting your privacy and handling your data in an open and transparent manner.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Data We Collect</h2>
        <p>Our application is designed to analyze memory dumps using the Volatility framework. We do not collect personal data through our website or application. However, please be aware that the memory dumps you analyze may contain sensitive information.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Data</h2>
        <p>We do not collect or store any personal data. All memory analysis is performed on our AWS Machine.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
        <p>While we do not collect or store your data, we recommend taking appropriate security measures to protect the memory dumps you analyze, as they may contain sensitive information.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
        <p>As we do not collect personal data, there are no specific data subject rights to exercise in relation to our service. However, you have full control over the memory dumps you choose to analyze.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Changes to This Privacy Policy</h2>
        <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
        <p>If you have any questions about this privacy policy, please contact us at [<Link href='mailto:contact@bitsafe.com' className="hover:underline hover:text-cyan-400">contact@bitsafe.com</Link>].</p>
      </section>
    </div>
  );
};

export default Page;