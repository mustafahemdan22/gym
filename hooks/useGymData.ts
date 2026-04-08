'use client';

import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useTheme } from '@/context/ThemeContext';
import type { Trainer } from '@/types/gym';
import type { Program } from '@/types/program';

interface GymData {
  trainers: Trainer[];
  programs: Program[];
  contentMode: 'male' | 'female';
  isLoading: boolean;
}

export function useGymData(): GymData {
  const { contentMode } = useTheme();

  const trainers = useQuery(api.trainers.listByMode, { mode: contentMode });
  const programs = useQuery(api.programs.listByMode, { mode: contentMode });

  // isLoading is true if either query is still fetching (undefined)
  const isLoading = trainers === undefined || programs === undefined;

  return {
    trainers: (trainers ?? []) as Trainer[],
    programs: (programs ?? []) as Program[],
    contentMode,
    isLoading,
  };
}
