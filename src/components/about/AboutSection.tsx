'use client';

import Link from "next/link";
import PartnerLogos from './PartnerLogos';
import Section from "@/layout/Section";
import SectionHeader from "@/layout/SectionHeader";
import AchievementList from "./AchievementList";

export default function AboutSection() {
  return (
    <Section className="bg-white">
      <SectionHeader
        title="Why Choose Zolmi?"
        subtitle="Built by salon owners, for salon owners"
      />

      <div className="space-y-8">
        <AchievementList />
        <PartnerLogos />
      </div>
    </Section>
  );
}