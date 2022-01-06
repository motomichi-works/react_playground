import { useState } from 'react';
import Sample001 from 'components/TextFieldSamples/organisms/Sample001';

const Sample001Container: React.VFC = () => {
  const [sample1Value, setSample1Value] = useState('');

  return (
    <Sample001 sample1Value={sample1Value} setSample1Value={setSample1Value} />
  );
};

export default Sample001Container;
