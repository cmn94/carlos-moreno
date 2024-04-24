'use client';

import * as React from 'react';

import {
  HamburgerMenuIcon,
} from '@radix-ui/react-icons';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuPortal,
} from '@/components/ui/dropdown-menu.primitives';
import { cn } from '@/lib/utils';
import { sections } from '@/data/sections';
import { usePathname, useRouter } from 'next/navigation';

export function DropdownMenuRadio() {
  const path = usePathname();
  const value = path.replace('/', '') || 'about-me';
  const router = useRouter();
  const onValueSelected = (selectedPath: string) => {
    router.push(selectedPath);
  };
  return (
    <nav className={cn('flex justify-end text-primary sticky top-3 z-10')}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button type="button" className={cn('IconButton text-white text-4xl')} aria-label="Dropdown menu button">
            <HamburgerMenuIcon height="25px" width="25px" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuRadioGroup value={value} onValueChange={onValueSelected}>
              {
                sections.map((sect, i) => (
                  <div key={sect.id}>
                    <DropdownMenuRadioItem value={sect.path} className={cn('hover:cursor-pointer')}>
                      {sect.name}
                    </DropdownMenuRadioItem>
                    {i < sections.length - 1 && <DropdownMenuSeparator />}
                  </div>
                ))
              }
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </nav>
  );
}
