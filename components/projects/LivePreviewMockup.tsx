"use client";

import type { PreviewType, LeadAgent } from "@/lib/projectData";
import LuminousListingCarousel from "./mockups/LuminousListingCarousel";
import ApexDispatchMap from "./mockups/ApexDispatchMap";
import CampRegistrationMatrix from "./mockups/CampRegistrationMatrix";
import VelvetBookingCalendar from "./mockups/VelvetBookingCalendar";

interface LivePreviewMockupProps {
  previewType: PreviewType;
  accent: string;
  companyName: string;
  leadAgents?: LeadAgent[];
}

/** Interactive live preview viewport — cinematic Base 44 aesthetic. */
export default function LivePreviewMockup({
  previewType,
  accent,
  companyName,
  leadAgents = [],
}: LivePreviewMockupProps) {
  return (
    <div className="relative overflow-hidden border border-white/[0.06] bg-[#080808]">
      {/* Viewport chrome */}
      <div className="flex items-center gap-3 border-b border-white/[0.06] px-5 py-3">
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-white/10" />
          <div className="h-2 w-2 rounded-full bg-white/10" />
          <div className="h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-white/25">
          {companyName} — Live Preview
        </span>
      </div>

      <div className="min-h-[420px] md:min-h-[480px]">
        {previewType === "listing-carousel" && (
          <LuminousListingCarousel agents={leadAgents} accent={accent} />
        )}
        {previewType === "dispatch-map" && <ApexDispatchMap accent={accent} />}
        {previewType === "registration-matrix" && (
          <CampRegistrationMatrix accent={accent} />
        )}
        {previewType === "booking-calendar" && (
          <VelvetBookingCalendar accent={accent} />
        )}
      </div>
    </div>
  );
}
