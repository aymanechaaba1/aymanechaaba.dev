'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { FaCloudMoon } from 'react-icons/fa';
import { MdLightMode } from 'react-icons/md';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ToggleDarkMode() {
  const [isClient, setIsClient] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient && theme === 'dark' ? (
    <FaCloudMoon className="cursor-pointer" onClick={() => setTheme('light')} />
  ) : (
    <MdLightMode className="cursor-pointer" onClick={() => setTheme('dark')} />
  );
}
