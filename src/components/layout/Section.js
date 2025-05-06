"use client";

import React, { forwardRef } from "react";
import Container from "./Container";

const Section = forwardRef(function Section(
  { children, className = "", containerClassName = "", id },
  ref
) {
  return (
    <section ref={ref} id={id} className={`py-6 sm:py-8 md:py-12 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
});

export default Section;
