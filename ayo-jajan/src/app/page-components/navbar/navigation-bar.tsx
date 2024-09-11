"use client";

import { Button } from "@/components/ui/button";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function NavigationMenuBar() {
  return (
    <div className="flex justify-center items-center">
      <NavigationMenu className="items-center">
        <NavigationMenuList className="hidden md:flex md:space-x-4">
          <NavigationMenuItem>
            <Button className="text-md" variant="ghost">
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium">Home</NavigationMenuLink>
              </Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button className="text-md" variant="ghost">
              <Link href="/#about-section" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium">About Us</NavigationMenuLink>
              </Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button className="text-md" variant="ghost">
              <Link href="/#about-section" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium">Community</NavigationMenuLink>
              </Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button className="text-md" variant="ghost">
              <Link href="/#carousel" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium">Hackathons</NavigationMenuLink>
              </Link>
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none items-center">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground items-center justify-center">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
