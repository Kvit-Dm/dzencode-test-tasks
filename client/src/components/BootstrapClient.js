'use client';

// This ensures Bootstrap JS runs only in the browser, not on the server (important in Next.js).
import { useEffect } from 'react';

function BootstrapClient() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.js');
  }, []);

  return null;
}

export default BootstrapClient;
