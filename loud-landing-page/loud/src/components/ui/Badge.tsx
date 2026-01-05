import React from 'react';
import { motion } from 'framer-motion';

export const Badge = ({ children }: { children: React.ReactNode }) => (
  <motion.span 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="inline-flex items-center px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider bg-[#e6f7ff] text-[#01B2FE] border border-[#b3ecff] mb-6"
  >
    {children}
  </motion.span>
);
