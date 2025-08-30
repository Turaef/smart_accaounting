export const scrollToElement = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    // Add a small offset to account for the fixed header
    const offset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const handleHashScroll = (): void => {
  // Check if there's a hash in the URL
  if (window.location.hash) {
    // Remove the # character
    const id = window.location.hash.substring(1);
    // Wait a bit for the page to fully load
    setTimeout(() => {
      scrollToElement(id);
    }, 100);
  }
}; 