import { useEffect, useState } from "react";

function LCPPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/lcp")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div>
        {data ? (
          <div>
            <h1>I am The LCP!!</h1>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default LCPPage;
