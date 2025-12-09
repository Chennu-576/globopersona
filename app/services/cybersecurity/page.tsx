'use client';

import { Shield, Scan, FileCheck, AlertTriangle } from 'lucide-react';
import ServiceTemplate from '@/components/services/service-template';

export default function Cybersecurity() {
  return (
    <ServiceTemplate
      icon={Shield}
      title="Cyber"
      subtitle="security"
      description="Protect your business from evolving cyber threats with comprehensive security solutions designed to safeguard your digital assets and maintain compliance."
      whyItMatters="Why Cybersecurity Matters"
      additionalInfo="In an era of increasing cyber threats, protecting your digital assets is paramount. Our cybersecurity solutions provide multi-layered protection, continuous monitoring, and rapid incident response to keep your business secure."
      benefits={[
        'Proactive threat detection',
        'Regulatory compliance',
        'Data protection and privacy',
        '24/7 security monitoring',
        'Rapid incident response',
        'Security awareness training',
      ]}
      offerings={[
        {
          icon: Scan,
          title: 'Security Audits',
          description: 'Comprehensive security assessments to identify vulnerabilities and risks.',
        },
        {
          icon: FileCheck,
          title: 'Compliance Management',
          description: 'Ensure compliance with industry standards and regulatory requirements.',
        },
        {
          icon: AlertTriangle,
          title: 'Threat Detection',
          description: 'Advanced monitoring and detection systems to identify and neutralize threats.',
        },
      ]}
    />
  );
}
