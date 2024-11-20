import React from 'react';

function Resume() {
  return (
    <section id="resume" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-800">Resume</h2>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50">
          <h3 className="text-3xl font-bold text-blue-800">Experience</h3>
          
          <div className="mt-10 space-y-8 text-left">
            <div>
              <h4 className="text-xl font-semibold pl-8">Network Administrator</h4>
              <p className="text-sm text-gray-600 pl-8">Vann Data Services, Inc. | August 2023 – August 2024</p>
              <ul className="list-disc list-inside pl-8 mt-4 space-y-2">
                <li>Designed and managed resilient cloud infrastructures on AWS and Azure, implementing auto-scaling and load balancing for high availability</li>
                <li>Administered Windows Server and RHEL Linux environments, managing system patching, security policies, and configuration</li>
                <li>Led the deployment of hybrid cloud infrastructure, leveraging AWS EC2, Lambda, RDS, S3, Azure VMs, and Azure File Storage</li>
                <li>Utilized Terraform and Ansible to automate infrastructure provisioning, improve consistency, and reduce deployment times by 40%</li>
                <li>Managed and optimized network configurations including routers, switches, firewalls, DHCP, and DNS, ensuring reliable network performance and secure connectivity across enterprise systems</li>
                <li>Coordinated project tasks and tracked issue resolution using Jira, facilitating transparent communication and efficient sprint planning across cloud and network administration projects</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold pl-8">IT Technician</h4>
              <p className="text-sm text-gray-600 pl-8">Vann Data Services, Inc. | March 2023 – August 2023</p>
              <ul className="list-disc list-inside pl-8 mt-4 space-y-2">
                <li>Provided technical support for 100+ clients across Windows, Linux, and cloud environments via phone and ServiceNow</li>
                <li>Managed Active Directory through Group Policy, user account management, security policies, and access controls</li>
                <li>Automated routine administrative tasks including server updates, data backups, and user management using Python and Bash scripting</li>
                <li>Supported Microsoft 365 administration, including Exchange, SharePoint, and Teams</li>
                <li>Reinforced backup and disaster recovery solutions with AWS Backup, Azure Backup, and Datto</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold pl-8">Software Engineer</h4>
              <p className="text-sm text-gray-600 pl-8">Florida Sealing Systems, Inc. | March 2021 – March 2023</p>
              <ul className="list-disc list-inside pl-8 mt-4 space-y-2">
                <li>Designed and developed a project management application using Django and React, implementing features for scheduling, task assignments, milestone tracking, and real-time updates, producing increased on-time project delivery of 25%</li>
                <li>Developed an automated quoting tool using Python for generating accurate project estimates based on materials, labor costs, and project specifications, enhancing pricing accuracy and reducing quote preparation time by 50%</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold pl-8">Software Engineer (Contract)</h4>
              <p className="text-sm text-gray-600 pl-8">House of Gold & Diamonds | March 2020 – March 2021</p>
              <ul className="list-disc list-inside pl-8 mt-4 space-y-2">
                <li>Created a CRM system utilizing JavaScript and PostgreSQL to track customer interactions, increasing client retention</li>
                <li>Developed an inventory management solution in Django and MongoDB that streamlined inventory tracking and reporting, resulting in a 15% reduction of overstocked items</li>
                <li>Designed a sales analytics dashboard using Flask and React to provide real-time insights into sales performance and customer trends</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <h3 className="text-3xl font-bold text-blue-800">Skills</h3>
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            <div className="text-center w-full sm:w-1/2 md:w-1/4">
              <h4 className="font-semibold">Cloud Platforms & OS</h4>
              <p className="text-sm text-gray-600">AWS, Azure, RHEL, Windows Server</p>
            </div>
            <div className="text-center w-full sm:w-1/2 md:w-1/4">
              <h4 className="font-semibold">Languages</h4>
              <p className="text-sm text-gray-600">Python, Go, JavaScript, SQL, Bash</p>
            </div>
            <div className="text-center w-full sm:w-1/2 md:w-1/4">
              <h4 className="font-semibold">Infrastructure as Code</h4>
              <p className="text-sm text-gray-600">Terraform, Ansible</p>
            </div>
            <div className="text-center w-full sm:w-1/2 md:w-1/4">
              <h4 className="font-semibold">CI/CD & Containerization</h4>
              <p className="text-sm text-gray-600">Docker, Kubernetes, Jenkins</p>
            </div>
            <div className="text-center w-full sm:w-1/2 md:w-1/4">
              <h4 className="font-semibold">Monitoring & Logging</h4>
              <p className="text-sm text-gray-600">Prometheus, Grafana</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-50">
          <h3 className="text-3xl font-bold text-blue-800">Education</h3>
          <div className="mt-10">
            <div className="space-y-2">
              <div>
                <h4 className="text-xl font-semibold">Bachelor of Science, Cloud Computing</h4>
                <p className="text-sm text-gray-600">Western Governors University, 2024</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Bachelor of Science, Software Engineering</h4>
                <p className="text-sm text-gray-600">Western Governors University, Expected 2025</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Resume;
