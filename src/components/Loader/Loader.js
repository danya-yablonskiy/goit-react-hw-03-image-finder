import { RotatingLines } from 'react-loader-spinner';

export function Loader({ visible }) {
  return (
    <div className="Loader">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="70"
        visible={visible}
      />
    </div>
  );
}
