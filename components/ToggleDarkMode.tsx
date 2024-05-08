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
    <div className="zinc-ring-shadow p-2 rounded-full">
      <FaCloudMoon
        className="cursor-pointer dark:text-zinc-200"
        onClick={() => setTheme('light')}
      />
    </div>
  ) : (
    <div className="zinc-ring-shadow p-2 rounded-full">
      <MdLightMode
        className="cursor-pointer text-zinc-800"
        onClick={() => setTheme('dark')}
      />
    </div>
  );
}
