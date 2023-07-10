import { useNavigate } from 'react-router-dom';
import { Button } from '@tremor/react';
export const NavigateBack = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return <Button onClick={goBack}>Go Back</Button>;
};
