import { useEffect, useState } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <footer className="text-white mt-5 py-4 bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="mb-0">
                Copyright &copy; {currentYear} Jun | All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}