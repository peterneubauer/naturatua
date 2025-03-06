
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Layout>
      <div className="container flex flex-col items-center justify-center min-h-[70vh] py-12 text-center">
        <h1 className="text-6xl font-serif text-natura-900 mb-6">404</h1>
        <h2 className="text-2xl font-serif text-natura-800 mb-4">Page Not Found</h2>
        <p className="text-natura-700 max-w-md mb-8">
          We're sorry, but the page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-natura-700 hover:bg-natura-800 transition-all">
          <Link to="/" className="inline-flex items-center">
            Return to Home
          </Link>
        </Button>
      </div>
    </Layout>
  );
}
