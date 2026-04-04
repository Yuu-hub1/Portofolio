import React from "react";
import { Icon as Iconify } from '@iconify/react';

const Icon = ({ name, className }) => {
  return <Iconify icon={name} className={`${className}`} />;
};

export {Icon};