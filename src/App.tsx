import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import { GET } from './constants/urls';

import PolicyCard from './components/PolicyCard';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [policiesList, setPoliciesList] = useState<Array<any>>([]);

  useEffect(() => {
    async function fetchPolicies() {
      const res = await axios.get(GET.POLICIES);
      setLoaded(true);
      setPoliciesList(res.data.policies);
    }
    !loaded && fetchPolicies();
  }, []);

  const renderPolicyCards = () =>
    policiesList.map(policy => <PolicyCard {...policy} key={policy.id} />);
  return (
    <Fragment>
      <h1>Your policies</h1>
      <main>{loaded && renderPolicyCards()}</main>
    </Fragment>
  );
};

export default App;
