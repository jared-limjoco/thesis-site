import styles from './styles.module.scss';

export default function Logo({ height, subTitle, white }) {
  return (
    <div
      className={styles.logo}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enableBackground="new 0 0 512 512"
          version="1.1"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          height={height}
        >
          <path
            fill="#FD003A"
            d="M256 0C156.698 0 76 80.7 76 180c0 33.6 9.302 66.301 27.001 94.501l140.797 230.414c2.402 3.9 6.002 6.301 10.203 6.901 5.698.899 12.001-1.5 15.3-7.2l141.2-232.516C427.299 244.501 436 212.401 436 180 436 80.7 355.302 0 256 0zm0 270c-50.398 0-90-40.8-90-90 0-49.501 40.499-90 90-90s90 40.499 90 90c0 48.9-39.001 90-90 90z"
          />
          <path
            fill="#E50027"
            d="M256 0v90c49.501 0 90 40.499 90 90 0 48.9-39.001 90-90 90v241.991c5.119.119 10.383-2.335 13.3-7.375L410.5 272.1c16.799-27.599 25.5-59.699 25.5-92.1C436 80.7 355.302 0 256 0z"
          />
        </svg>
      </div>
      <div
        className={styles.divider}
        style={{
          height: `${height}px`,
        }}
      />
      <h1
        style={{
          fontSize: `${height}px`,
          color: `${white ? 'white' : '#1F2937'}`,
        }}
      >
        Atlas
      </h1>
      <em
        className="text-gray-500"
        style={{
          marginTop: `${height - 20}px`,
          marginLeft: '5px',
        }}
      >
        {subTitle}
      </em>
    </div>
  );
}
