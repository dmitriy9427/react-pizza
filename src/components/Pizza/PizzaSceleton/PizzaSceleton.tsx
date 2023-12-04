import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./PizzaSceleton.module.scss";

const MyLoader: React.FC = (props) => (
  <>
    <div className={styles.main}>
      <ContentLoader
        className={styles.main}
        speed={1}
        viewBox="0 0 257 432"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="1" y="367" rx="17" ry="17" width="227" height="45" />
        <rect x="0" y="263" rx="17" ry="17" width="227" height="82" />
        <rect x="0" y="206" rx="17" ry="17" width="227" height="40" />
        <circle cx="110" cy="97" r="95" />
      </ContentLoader>
    </div>
    <div className={styles.root}>
      <ContentLoader
        className={styles.root}
        speed={1}
        viewBox="0 0 455 610"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="0" y="448" rx="9" ry="9" width="100%" height="82" />
        <rect x="2" y="554" rx="9" ry="9" width="100%" height="39" />
        <rect x="6" y="375" rx="9" ry="9" width="100%" height="40" />
        <circle cx="222" cy="187" r="166" />
      </ContentLoader>
    </div>
  </>
);

export default MyLoader;
