"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function NavbarClient() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 text-lg font-semibold">
            <img src="/favicon.svg" alt="SEC-Hub" className="h-8 w-8" />
            <span className="hidden sm:inline">RDS 81346</span>
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className="inline-flex h-9 w-max items-center justify-center rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    ISO/IEC 81346
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Software</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[220px] gap-1 p-2">
                      <li>
                        <NavigationMenuLink href="#">SEC-Hub</NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="#">RDS 81346 App</NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className="inline-flex h-9 w-max items-center justify-center rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    Free Material
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Knowledge Center</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[220px] gap-1 p-2">
                      <li>
                        <NavigationMenuLink href="#">RDS 81346 Ontology</NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="#">Videos</NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="#">Why RDS 81346</NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="#">Articles</NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="#">FAQ</NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className="inline-flex h-9 w-max items-center justify-center rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <nav className="lg:hidden border-t border-border/40">
            <NavigationMenu orientation="vertical" className="w-full">
              <NavigationMenuList className="w-full flex-col gap-0">
                <NavigationMenuItem className="w-full">
                  <NavigationMenuLink
                    href="#"
                    className="block w-full rounded-none px-4 py-3 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    ISO/IEC 81346
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="w-full">
                  <NavigationMenuTrigger className="w-full justify-start rounded-none px-4 py-3">
                    Software
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-full rounded-none border-t border-border/40">
                    <ul className="flex flex-col gap-0 p-0">
                      <li>
                        <NavigationMenuLink
                          href="#"
                          className="block w-full rounded-none px-6 py-3 text-sm hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
                        >
                          SEC-Hub
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          href="#"
                          className="block w-full rounded-none px-6 py-3 text-sm hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
                        >
                          RDS 81346 App
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="w-full">
                  <NavigationMenuLink
                    href="#"
                    className="block w-full rounded-none px-4 py-3 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    Free Material
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="w-full">
                  <NavigationMenuTrigger className="w-full justify-start rounded-none px-4 py-3">
                    Knowledge Center
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-full rounded-none border-t border-border/40">
                    <ul className="flex flex-col gap-0 p-0">
                      <li>
                        <NavigationMenuLink
                          href="#"
                          className="block w-full rounded-none px-6 py-3 text-sm hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
                        >
                          RDS 81346 Ontology
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          href="#"
                          className="block w-full rounded-none px-6 py-3 text-sm hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
                        >
                          Videos
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          href="#"
                          className="block w-full rounded-none px-6 py-3 text-sm hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
                        >
                          Why RDS 81346
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          href="#"
                          className="block w-full rounded-none px-6 py-3 text-sm hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
                        >
                          Articles
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          href="#"
                          className="block w-full rounded-none px-6 py-3 text-sm hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
                        >
                          FAQ
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="w-full">
                  <NavigationMenuLink
                    href="#"
                    className="block w-full rounded-none px-4 py-3 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        )}
      </div>
    </header>
  );
}
