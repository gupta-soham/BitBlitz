import Link from "next/link";

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Last updated: [13-07-2024]</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          Welcome to our Volatility Framework Analysis Website. By accessing or
          using our website and services, you agree to be bound by these Terms
          of Service (&quot;Terms&quot;). If you do not agree to these Terms,
          please do not use our website or services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. Description of Service
        </h2>
        <p className="mb-4">
          Our website provides an interface for users to upload memory dump
          files and perform analyses using the Volatility framework. Users can
          initiate analyses, view results, and access historical analysis data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
        <p className="mb-4">
          3.1. You must create an account to use our services. You are
          responsible for maintaining the confidentiality of your account
          information and for all activities that occur under your account.
        </p>
        <p className="mb-4">
          3.2. You agree to provide accurate, current, and complete information
          during the registration process and to update such information to keep
          it accurate, current, and complete.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. User Conduct</h2>
        <p className="mb-4">4.1. You agree not to use the service to:</p>
        <ul className="list-disc list-inside mb-4 pl-4">
          <li>
            Upload, post, or transmit any content that is unlawful, harmful,
            threatening, abusive, harassing, defamatory, vulgar, obscene, or
            invasive of another&apos;s privacy.
          </li>
          <li>
            Impersonate any person or entity or falsely state or otherwise
            misrepresent your affiliation with a person or entity.
          </li>
          <li>
            Upload or transmit any material that contains software viruses or
            any other computer code designed to interrupt, destroy, or limit the
            functionality of any computer software or hardware.
          </li>
        </ul>
        <p className="mb-4">
          4.2. You acknowledge that all information, data, text, software,
          music, sound, photographs, graphics, video, messages, or other
          materials uploaded, posted, or otherwise transmitted using our service
          are the sole responsibility of the person from which such content
          originated.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          5. Intellectual Property Rights
        </h2>
        <p className="mb-4">
          5.1. The Volatility framework and our website&apos;s content,
          features, and functionality are owned by us or our licensors and are
          protected by international copyright, trademark, patent, trade secret,
          and other intellectual property or proprietary rights laws.
        </p>
        <p className="mb-4">
          5.2. You retain all rights to the memory dump files you upload and the
          results of analyses performed on those files.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Privacy</h2>
        <p className="mb-4">
          Your use of our website and services is also governed by our Privacy
          Policy, which can be found [link to Privacy Policy].
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          7. Limitation of Liability
        </h2>
        <p className="mb-4">
          7.1. Our website and services are provided on an &quot;as is&quot; and
          &quot;as available&quot; basis. We make no warranties, expressed or
          implied, and hereby disclaim and negate all other warranties,
          including without limitation, implied warranties or conditions of
          merchantability, fitness for a particular purpose, or non-infringement
          of intellectual property or other violation of rights.
        </p>
        <p className="mb-4">
          7.2. In no event shall we be liable for any damages (including,
          without limitation, damages for loss of data or profit, or due to
          business interruption) arising out of the use or inability to use our
          website and services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Indemnification</h2>
        <p className="mb-4">
          You agree to indemnify and hold us harmless from any claim or demand,
          including reasonable attorneys fees, made by any third party due to or
          arising out of your breach of these Terms or your violation of any law
          or the rights of a third party.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          9. Modifications to Service
        </h2>
        <p className="mb-4">
          We reserve the right at any time to modify or discontinue, temporarily
          or permanently, the service (or any part thereof) with or without
          notice.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
        <p className="mb-4">
          These Terms shall be governed and construed in accordance with the
          laws of Jurisdiction, without regard to its conflict of law
          provisions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. If a revision is material, we will provide at
          least 30 days notice prior to any new terms taking effect.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these Terms, please contact us at
          [<Link href='mailto:contact@bitsafe.com' className="hover:underline hover:text-cyan-400">contact@bitsafe.com</Link>].
        </p>
      </section>

      <p className="mt-8 italic">
        By using our website and services, you acknowledge that you have read
        and understood these Terms and agree to be bound by them.
      </p>
    </div>
  );
}
