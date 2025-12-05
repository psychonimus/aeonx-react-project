import React from 'react'
import './MigrationSection.css'
import CloudMigration from '/images/cloud-migration.jpg'
import Integration from '/images/sap-integration.jpg'
import Innovation from '/images/sap-innovation.jpg'
import Staffing from '/images/sap-staffing.jpg'

const MigrationSection = () => {
  return (
    <>
        <section className="migration-section">
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                   <div className="mig-img">
                    <img src={CloudMigration} alt="" />
                   </div>
                </div>
                <div className="col-md-6 px-3 py-2">
                    <div className="migration-section-content">
                        <h2>Migration Services</h2>
                        <p>Migrating to the cloud should unlock potential, not just move systems. We at AeonX deliver high-precision SAP migration using real-world expertise across SAP ECC to S/4HANA transitions, RISE with SAP adoption, and AWS-driven cloud modernization.</p>
                        <p>Instead of a standard “lift and shift” approach, we apply proven migration frameworks that reduce risk, optimize performance, and accelerate ROI. With AWS, the most adaptable and enterprise-ready cloud platform, and our proprietary SAP automation accelerators, your teams stay focused on innovation, not manual workloads.</p>
                        <p>Whether your goal is cost reduction, performance enhancement, system consolidation, or full digital transformation, AeonX ensures your SAP migration becomes a strategic upgrade, not a technical exercise.</p>
                        <h5>Key Metrics</h5>
                    </div>
                    <div className="migration-metrics">
                        <div className="metric-box">
                            <h2>30%</h2>
                            <p>decrease in infrastructure and maintenance costs</p>
                        </div>
                        <div className="metric-box">
                            <h2>10%</h2>
                            <p>improvement in system response time, batch processing speed, & data access</p>
                        </div>
                        <div className="metric-box">
                            <h2>50%</h2>
                            <p>of automation achieved during migration</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="migration-section">
        <div className="container py-5">
            <div className="row">
                
                <div className="col-md-6 px-3 py-2">
                    <div className="migration-section-content">
                        <h2>Integration Services</h2>
                        <p>Seamless integration is the foundation of operational intelligence. At AeonX Digital, we connect SAP with your wider technology landscape to ensure data flows smoothly across applications, teams, and processes. Whether integrating SAP S/4HANA with legacy systems, cloud platforms, third-party solutions, analytics tools, or custom applications, we help build connected enterprises that make decisions faster and operate smarter.</p>
                        <p>Our experts specialize in API-based integration, SAP BTP, CPI (Cloud Platform Integration), middleware orchestration, and real-time data exchange, ensuring interoperability without disrupting existing operations. From multi-system consolidation to hybrid integration architectures, we deliver fortified connections that drive agility, scalability, and business continuity.
</p>
                        
                        <h5>Key Metrics</h5>
                    </div>
                    <div className="migration-metrics">
                        <div className="metric-box">
                            <h2>30%</h2>
                            <p>Real-time data sync across 5 business-critical platforms</p>
                        </div>
                        <div className="metric-box">
                            <h2>60%</h2>
                            <p>Manual Data handling Eliminated by</p>
                        </div>
                        <div className="metric-box">
                            <h2>22%</h2>
                            <p>Faster rollouts than standard timelines</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                   <div className="mig-img">
                    <img src={Integration} alt="" />
                   </div>
                </div>
            </div>
        </div>
    </section>

    <section className="migration-section">
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                   <div className="mig-img">
                    <img src={Innovation} alt="" />
                   </div>
                </div>

                <div className="col-md-6 px-3 py-2">
                    <div className="migration-section-content">
                        <h2>Innovation Services</h2>
                        <p>We collaborate with enterprises to design custom-built digital solutions that solve real operational challenges and open new growth channels.</p>
                        <p>Our teams continuously track emerging tech trends across AI, automation, SAP BTP, data engineering, and industry-specific platforms, crafting solutions that are scalable, efficient, and future-ready. We believe in co-innovation, where ideas move from prototype to production rapidly, delivering measurable business impact.</p>
                        <p>Each solution is engineered around specific challenges in operations, compliance, manufacturing, logistics, procurement, dealer networks, and travel management, helping enterprises transform digitally.</p>
                        
                        <h5>Key Metrics</h5>
                    </div>
                    <div className="migration-metrics">
                        <div className="metric-box">
                            <h2>90%</h2>
                            <p>functional adoption within 6 months of rollout</p>
                        </div>
                        <div className="metric-box">
                            <h2>6</h2>
                            <p>reusable frameworks deployed across operations and supply chain</p>
                        </div>
                        <div className="metric-box">
                            <h2>50%</h2>
                            <p>Improved data-led decision accuracy using real-time analytics integration</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>

    <section className="migration-section">
        <div className="container py-5">
            <div className="row">
                

                <div className="col-md-6 px-3 py-2">
                    <div className="migration-section-content">
                        <h2>Staffing Services</h2>
                        <p>We help businesses meet staffing requirements through specialized SAP staffing services, giving you access to certified consultants with strong domain knowledge, technical depth and hands-on implementation experience. Our flexible staffing models support both short-term project needs and long-term strategic initiatives, helping you reduce risk, accelerate delivery, and maximize ROI on SAP investments.</p>
                        <p>Our consultants blend industry expertise with best-practice methodologies and the latest SAP technologies, helping you manage demanding workloads, deliver critical projects, and scale effectively without compromising quality.</p>

                        <h5>Key Metrics</h5>
                    </div>
                    <div className="migration-metrics">
                        <div className="metric-box">
                            <h2>90%</h2>
                            <p>reduction in time to deploy talent</p>
                        </div>
                        <div className="metric-box">
                            <h2>6</h2>
                            <p>Reduction in overheads, training expense and retention cost</p>
                        </div>
                        <div className="metric-box">
                            <h2>96%</h2>
                            <p>alignment to technical & domain requirements</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                   <div className="mig-img">
                    <img src={Staffing} alt="" />
                   </div>
                </div>
                
            </div>
        </div>
    </section>
    </>
  )
}

export default MigrationSection