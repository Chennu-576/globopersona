'use client';

import { Brain, BarChart, Lightbulb, TrendingUp } from 'lucide-react';
import ServiceTemplate from '@/components/services/service-template';

export default function AIAnalytics() {
  return (
    <ServiceTemplate
      icon={Brain}
      title="AI &"
      subtitle="Analytics"
      description="Harness the power of artificial intelligence and advanced analytics to unlock insights, automate processes, and drive smarter business decisions."
      whyItMatters="Why AI & Analytics Matter"
      additionalInfo="Data is the new currency, and AI is the engine that transforms it into actionable insights. Our AI and analytics solutions help you predict trends, optimize operations, and create personalized experiences for your customers."
      benefits={[
        'Predictive insights and forecasting',
        'Automated decision-making',
        'Enhanced customer personalization',
        'Process optimization',
        'Real-time data analysis',
        'Competitive intelligence',
      ]}
      offerings={[
        {
          icon: BarChart,
          title: 'Predictive Analytics',
          description: 'Forecast trends and outcomes using advanced statistical models and machine learning.',
        },
        {
          icon: Lightbulb,
          title: 'Business Intelligence',
          description: 'Transform raw data into meaningful insights with interactive dashboards and reports.',
        },
        {
          icon: TrendingUp,
          title: 'Machine Learning',
          description: 'Build custom ML models to automate processes and improve decision-making.',
        },
      ]}
    />
  );
}
