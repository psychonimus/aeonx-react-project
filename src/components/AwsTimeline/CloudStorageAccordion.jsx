import React from 'react'
import './AwsAccordion.css'

const CloudStorageAccordion = () => {


    return (
        <>
            <section className="aws-accordion" data-aos="fade-up">
                <div className="container">
                    <div className="aws-accordion" id="storageAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="true" aria-controls="collapseTen">
                                    Elastic Block Store
                                </button>
                            </h2>
                            <div id="collapseTen" className="accordion-collapse collapse show" data-bs-parent="#storageAccordion">
                                <div className="accordion-body">
                                    <div>
                                        <p style={{ marginBottom: "1rem" }}>
                                            AeonX leverages Amazon EBS, providing scalable block storage volumes for EC2 instances. Through EBS, AeonX offers high-performance and low-latency storage solutions tailored to meet specific application requirements. Customers benefit from reliable and durable block-level storage, with features like snapshotting for data backup and restoration, ensuring data integrity and accessibility.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                    Amazon FSx
                                </button>
                            </h2>
                            <div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#storageAccordion">
                                <div className="accordion-body">
                                    <div>
                                        <p style={{ marginBottom: "1rem" }}>
                                            AeonX utilizes Amazon FSx to deliver fully managed file storage solutions optimized for Windows File Server and Lustre workloads. By leveraging FSx, AeonX ensures high-performance file storage with integrated data backup capabilities. This allows customers to easily deploy and scale file systems, enhancing the efficiency of applications that require shared file storage.

                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                    Amazon EFs
                                </button>
                            </h2>
                            <div id="collapseTwelve" className="accordion-collapse collapse" data-bs-parent="#storageAccordion">
                                <div className="accordion-body">
                                    <div>
                                        <p style={{ marginBottom: "1rem" }}>
                                            AeonX employs Amazon EFS to provide scalable and fully managed file storage suitable for a wide range of applications. With EFS, AeonX enables customers to achieve high availability and durability for their file-based workloads. By offering seamless integration with AWS services and features like automatic scaling, AeonX ensures that customers have a flexible and cost-effective file storage solution.

                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                                    Amazon S3
                                </button>
                            </h2>
                            <div id="collapseThirteen" className="accordion-collapse collapse" data-bs-parent="#storageAccordion">
                                <div className="accordion-body">
                                    <div>
                                        <p style={{ marginBottom: "1rem" }}>
                                            AeonX offers Amazon S3 as a scalable and secure object storage service for storing and retrieving any amount of data. Through S3, AeonX enables customers to leverage highly durable and available storage, suitable for a variety of use cases, including data backup, content distribution, and archival. AeonX ensures that S3 integrates seamlessly with other AWS services, providing a reliable foundation for building scalable applications.

                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                                    Snowball
                                </button>
                            </h2>
                            <div id="collapseFourteen" className="accordion-collapse collapse" data-bs-parent="#storageAccordion">
                                <div className="accordion-body">
                                    <div>
                                        <p style={{ marginBottom: "1rem" }}>
                                            AeonX facilitates data transfer and migration with Amazon Snowball, a physical data transport solution. By utilizing Snowball, AeonX enables customers to transfer large volumes of data securely and cost-effectively, especially in scenarios where internet bandwidth may be limited. AeonX ensures a smooth and efficient data transfer process, allowing customers to seamlessly integrate on-premises data with AWS storage services.

                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                                    Disaster Recovery
                                </button>
                            </h2>
                            <div id="collapseFifteen" className="accordion-collapse collapse" data-bs-parent="#storageAccordion">
                                <div className="accordion-body">
                                    <div>
                                        <p style={{ marginBottom: "1rem" }}>
                                            AeonX offers comprehensive disaster recovery solutions, leveraging AWS services to ensure business continuity. By employing services such as Amazon S3 for data storage, EBS for block storage, and other relevant AWS tools, AeonX designs and implements robust disaster recovery plans. This includes automated backup and replication strategies, minimizing downtime and data loss in the event of unexpected incidents. AeonX ensures that disaster recovery plans are tailored to the specific needs and criticality of each customers infrastructure.

                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default CloudStorageAccordion