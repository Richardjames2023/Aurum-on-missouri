"use client";

import React from "react";

export const ContactMap: React.FC = () => {
  return (
    <section className="w-full h-[450px] relative overflow-hidden border-t border-stone-200/60 shadow-inner">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.5756360469372!2d7.477498975799111!3d9.102365890961945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0be759e66c35%3A0x247ead3dd0eff66d!2sAurum%20on%20Missouri!5e0!3m2!1sen!2sng!4v1780225387204!5m2!1sen!2sng"
        className="w-full h-full border-0 filter brightness-[0.98] contrast-[1.02]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Aurum Restaurant Location Map"
      />
    </section>
  );
};