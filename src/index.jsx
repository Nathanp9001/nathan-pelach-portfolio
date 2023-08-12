import { createRoot } from 'react-dom/client';

import './index.scss';

const PortfolioApplication = () => {
  return (
    <div className="portfolio">
      <div>Welcome</div>
    </div>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<PortfolioApplication />);