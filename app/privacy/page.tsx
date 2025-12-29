import { Content, ContentTitle, Page, Section } from "@/components/content";
import { Sidebar, SidebarTitle, SidebarName, SidebarSubtitle, SidebarNavigation } from "@/components/sidebar";
import { SidebarNavItem } from "@/components/sidebar-client";

export default function Privacy() {
  return (
    <Page>
      <Sidebar rows={3}>
        <SidebarName>
          <SidebarTitle>{"leycm"}</SidebarTitle>
          <SidebarSubtitle>{"Privacy Policy"}</SidebarSubtitle>
        </SidebarName>
        <SidebarNavigation>
          <SidebarNavItem section="privacy" active>
            {"* Privacy Policy"}
          </SidebarNavItem>
        </SidebarNavigation>
      </Sidebar>
      
      <Content>
        <Section id="privacy">
          <ContentTitle>Privacy Policy</ContentTitle>
          <div className="prose prose-slate dark:prose-invert max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h2 className="text-2xl font-semibold text-slate-500 dark:text-slate-400 mb-6">1. Data Protection at a Glance</h2>
            <h3 className="text-xl font-medium text-slate-500 dark:text-slate-400 mt-8 mb-4">General Information</h3>
            <p>
              The following information provides a simple overview of what happens to your personal data when you visit this website. 
              Personal data is any data with which you could be personally identified.
            </p>

            <h3 className="text-xl font-medium text-slate-500 dark:text-slate-400 mt-8 mb-4">Data Collection on This Website</h3>
            <h4 className="text-lg font-medium text-slate-500 dark:text-slate-400 mt-6 mb-3">Who is responsible for data collection on this website?</h4>
            <p>
              Data processing on this website is carried out by the website operator. 
              You can find their contact details in the imprint of this website.
            </p>

            <h4 className="text-lg font-medium text-slate-500 dark:text-slate-400 mt-6 mb-3">How do we collect your data?</h4>
            <p>
              Some data is collected when you provide it to us. This could, for example, be data you enter on a contact form.
              Other data is collected automatically by our IT systems when you visit the website. 
              This data is primarily technical data such as the browser and operating system you are using or when you accessed the page. 
              This data is collected automatically as soon as you enter this website.
            </p>

            <h4 className="text-lg font-medium text-slate-500 dark:text-slate-400 mt-6 mb-3">What do we use your data for?</h4>
            <p>
              Part of the data is collected to ensure the proper functioning of the website. 
              Other data can be used to analyze how visitors use the site.
            </p>

            <h2 className="text-2xl font-semibold text-slate-500 dark:text-slate-400 mt-12 mb-6">2. Hosting</h2>
            <h3 className="text-xl font-medium text-slate-500 dark:text-slate-400 mt-8 mb-4">External Hosting</h3>
            <p>
              This website is hosted externally. Personal data collected on this website is stored on the host's servers. 
              This may include IP addresses, contact requests, meta and communication data, contract data, contact details, names, 
              website accesses, and other data generated via a website.
            </p>
            <p>
              External hosting is carried out for the purpose of contract fulfillment with our potential and existing customers 
              (Art. 6 para. 1 lit. b DSGVO) and in the interest of a secure, fast, and efficient provision of our online 
              offer by a professional provider (Art. 6 para. 1 lit. f DSGVO).
            </p>

            <h2 className="text-2xl font-semibold text-slate-500 dark:text-slate-400 mt-12 mb-6">3. General Information and Mandatory Information</h2>
            <h3 className="text-xl font-medium text-slate-500 dark:text-slate-400 mt-8 mb-4">Data Protection</h3>
            <p>
              The operators of these pages take the protection of your personal data very seriously. 
              We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.
            </p>

            <h3 className="text-xl font-medium text-slate-500 dark:text-slate-400 mt-8 mb-4">Note on the Responsible Party</h3>
            <p>
              The party responsible for processing data on this website is:
            </p>
            <p>
              [Your Full Name]<br />
              [Your Email Address]
            </p>

            <h3 className="text-xl font-medium text-slate-500 dark:text-slate-400 mt-8 mb-4">Storage Duration</h3>
            <p>
              Unless a more specific storage period has been specified within this privacy policy, 
              your personal data will remain with us until the purpose for which it was collected no longer applies.
            </p>

            <h3 className="text-xl font-medium text-slate-500 dark:text-slate-400 mt-8 mb-4">Revocation of Your Consent to Data Processing</h3>
            <p>
              Many data processing operations are only possible with your express consent. 
              You may revoke your consent at any time with future effect. 
              The legality of the data processing carried out before the revocation remains unaffected by the revocation.
            </p>

            <h3 className="text-xl font-medium text-slate-500 dark:text-slate-400 mt-8 mb-4">SSL or TLS Encryption</h3>
            <p>
              This site uses SSL or TLS encryption for security reasons and for the protection of the transmission of confidential content. 
              You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://" 
              and by the lock symbol in your browser line.
            </p>

            <h2 className="text-2xl font-semibold text-slate-500 dark:text-slate-400 mt-12 mb-6">4. Data Collection on This Website</h2>
            <h3 className="text-xl font-medium text-slate-500 dark:text-slate-400 mt-8 mb-4">Server Log Files</h3>
            <p>
              The provider of the pages automatically collects and stores information in so-called server log files, 
              which your browser automatically transmits to us. These are:
            </p>
            <ul>
              <li>Browser type and browser version</li>
              <li>Operating system used</li>
              <li>Referrer URL</li>
              <li>Host name of the accessing computer</li>
              <li>Time of the server request</li>
              <li>IP address</li>
            </ul>
            <p>
              This data is not merged with other data sources.
            </p>

            <h3 className="text-xl font-medium text-slate-500 dark:text-slate-400 mt-8 mb-4">Contact Form</h3>
            <p>
              If you send us inquiries via the contact form, your details from the inquiry form, 
              including the contact details you provided there, will be stored for the purpose of 
              processing the inquiry and in case of follow-up questions. We do not pass on this data without your consent.
            </p>

            <h2 className="text-2xl font-semibold text-slate-500 dark:text-slate-400 mt-12 mb-6">5. Your Rights</h2>
            <p>You have the following rights regarding your personal data:</p>
            <ul>
              <li>Right to information: You can request information about your personal data that we process.</li>
              <li>Right to rectification: You have the right to request the correction of incorrect or incomplete data.</li>
              <li>Right to erasure: You can request the deletion of your personal data.</li>
              <li>Right to restriction: You can request the restriction of the processing of your personal data.</li>
              <li>Right to data portability: You have the right to receive your data in a structured, 
                  commonly used, and machine-readable format.</li>
              <li>Right to object: You can object to the processing of your personal data.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-500 dark:text-slate-400 mt-12 mb-6">6. Third-Party Services</h2>
            <h3 className="text-xl font-medium text-slate-500 dark:text-slate-400 mt-8 mb-4">Cloudflare</h3>
            <p>
              This website uses Cloudflare, a content delivery network and security service. 
              Cloudflare may collect certain information about your visit to this website, 
              including IP addresses, system configuration information, and other information about traffic to and from this website. 
              This information helps us improve our website and provide better services.
            </p>

            <h3 className="text-xl font-medium text-slate-500 dark:text-slate-400 mt-8 mb-4">Analytics</h3>
            <p>
              We may use third-party analytics services to help understand how our website is used. 
              These services may collect information such as your IP address, browser type, and pages visited on our site. 
              This information helps us improve our website and provide better services to our users.
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-400 mt-12 pt-6 border-t border-slate-200 dark:border-slate-800">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </Section>
      </Content>
    </Page>
  );
}
