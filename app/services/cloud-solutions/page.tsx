'use client';

import { Cloud, Server, Gauge, Lock } from 'lucide-react';
import ServiceTemplate from '@/components/services/service-template';

export default function CloudSolutions() {
  return (
    <ServiceTemplate
      icon={Cloud}
      title="Cloud"
      subtitle="Solutions"
      description="Build scalable, secure, and efficient cloud infrastructure tailored to your business needs with our comprehensive cloud solutions."
      whyItMatters="Why Cloud Solutions Matter"
      additionalInfo="Cloud technology enables businesses to scale rapidly, reduce costs, and improve flexibility. Our cloud solutions help you leverage the full potential of cloud computing while ensuring security, compliance, and optimal performance."
      benefits={[
        'Scalable infrastructure',
        'Reduced operational costs',
        'Enhanced disaster recovery',
        'Improved collaboration',
        'Automatic updates and maintenance',
        'Global accessibility',
      ]}
      offerings={[
        {
          icon: Server,
          title: 'Cloud Migration',
          description: 'Seamlessly migrate your applications and data to the cloud with minimal downtime.',
        },
        {
          icon: Gauge,
          title: 'Cloud Optimization',
          description: 'Optimize your cloud resources for maximum performance and cost efficiency.',
        },
        {
          icon: Lock,
          title: 'Cloud Security',
          description: 'Implement robust security measures to protect your cloud infrastructure and data.',
        },
      ]}
    />
  );
}
