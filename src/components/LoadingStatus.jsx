import '../assets/css/LoadingStatus.css';

export default function LoadingStatus({ children }) {
  return (
    <div className="loading-status">
      <p>{children}</p>
    </div>
  );
}
