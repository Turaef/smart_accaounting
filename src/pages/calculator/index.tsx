import { useEffect } from 'react';
import { useRouter } from 'next/router';

const CalculatorRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/#principles');
  }, [router]);

  return null;
};

export default CalculatorRedirect; 