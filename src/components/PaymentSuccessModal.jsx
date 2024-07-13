import '../assets/css/PaymentSuccessModal.css';

export default function PaymentSuccessModal() {
  return (
    <div className="payment-modal-overlay">
      <div className="payment-modal-content">
        <div className="payment-success-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="252"
            height="252"
            viewBox="0 0 252 252"
            fill="none"
          >
            <g opacity="0.01">
              <path
                d="M126 0.174316C195.326 0.174316 251.614 56.4617 251.614 125.788C251.614 195.114 195.326 251.401 126 251.401C56.6741 251.401 0.386719 195.114 0.386719 125.788C0.386719 56.4617 56.6741 0.174316 126 0.174316Z"
                fill="#7DE9E2"
              />
            </g>
            <g opacity="0.999998">
              <path
                d="M126.001 47.2666C169.053 47.2666 204.009 82.2221 204.009 125.275C204.009 168.328 169.053 203.283 126.001 203.283C82.9477 203.283 47.9922 168.328 47.9922 125.275C47.9922 82.2221 82.9477 47.2666 126.001 47.2666Z"
                fill="#14BAB0"
              />
            </g>
            <path
              d="M93.2598 121.951L115.618 144.31L156.008 103.92"
              stroke="white"
              strokeWidth="45.1565"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h2 className="font-condensed">Payment successful</h2>
      </div>
    </div>
  );
}
