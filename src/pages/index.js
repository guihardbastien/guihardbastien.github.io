import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const Svg = require('@site/static/img/logo.svg').default;
  return (
      <div className={styles.wrapper}>
          <div className={styles.buttons}>
              <Svg className={styles.featureSvg} role="img" />
              <Link
                  className="button button--primary button--lg"
                  to="/docs/intro">
                  Get started️
              </Link>
          </div>
      </div>


  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Online resume">
        <HomepageHeader />
    </Layout>
  );
}
