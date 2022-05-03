import React, { useEffect, useState } from "react";

const Payku = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const getPaykuTransactions = () => {
    setLoading(true);
    fetch("api/payku")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getPaykuTransactions();
  });

  if (data !== null) {
    console.log("payku data:", data);
  }

  return <div>Payku</div>;
};

export default Payku;
