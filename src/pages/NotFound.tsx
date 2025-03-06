
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center py-20">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-natura-900 mb-4 text-6xl md:text-8xl font-light">404</h1>
          <p className="text-natura-700 mb-6 text-xl">
            Oops! We couldn't find the page you're looking for.
          </p>
          <p className="text-natura-600 mb-8">
            The page may have been moved, deleted, or perhaps never existed.
          </p>
          <Button 
            as="a"
            href="/"
            className="bg-natura-700 hover:bg-natura-800 inline-flex items-center"
          >
            <Home size={16} className="mr-2" />
            Back to Homepage
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
