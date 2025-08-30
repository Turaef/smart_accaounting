import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { scrollToElement } from '../utils/scrollUtils';

interface SmoothScrollLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({ 
  href, 
  className, 
  children, 
  onClick 
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's a hash link on the current page
    if (href.startsWith('/#') && router.pathname === '/') {
      e.preventDefault();
      
      // Get the ID without the #
      const id = href.substring(2);
      scrollToElement(id);

      // Update the URL without page reload
      window.history.pushState(null, '', href);
      
      // Call the onClick handler if provided
      if (onClick) onClick();
    } else if (href.startsWith('#') && !href.startsWith('/#')) {
      e.preventDefault();
      
      // Get the ID without the #
      const id = href.substring(1);
      scrollToElement(id);
      
      // Update the URL without page reload
      window.history.pushState(null, '', href);
      
      // Call the onClick handler if provided
      if (onClick) onClick();
    }
    // For other links, let Next.js handle routing as usual
  };

  return (
    <Link 
      href={href} 
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default SmoothScrollLink; 