/**
 * @file: index.ts
 * @responsibility: type definitions for content details components
 * @exports: Module, ModuleCardProps, FloatingElementsProps
 * @imports: LucideIcon
 * @layer: types
 */

import { LucideIcon } from "lucide-react";

export interface Module {
  id: number;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  lessons: string[];
  color: string;
  bgColor: string;
}

export interface ModuleCardProps {
  module: Module;
  index: number;
}

export interface FloatingElementsProps {
  count?: number;
  className?: string;
}

export interface SectionHeaderProps {
  className?: string;
}

export interface ModuleHighlightsProps {
  highlights: string[];
}

export interface ModuleLessonsProps {
  lessons: string[];
}

export interface CTASectionProps {
  className?: string;
}