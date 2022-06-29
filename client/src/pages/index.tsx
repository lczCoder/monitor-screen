{/* @ts-ignore */} 
// @ts-ignore

import React, { Component } from 'react';
import styles from './index.less';
import { WiredButton, WiredInput,WiredLink } from "wired-elements"

export default function IndexPage() {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.header_left}>
          监控系统
        </div>
        <div className={styles.header_right}>
          <WiredLink>Details</WiredLink>
          <WiredLink>Diff</WiredLink>
          <WiredLink>Commits</WiredLink>
          <WiredLink>Challenges</WiredLink>
          <WiredButton>登录</WiredButton>
        </div>
      </div>
      <h1 className={styles.title}></h1>
    </div>
  );
}
