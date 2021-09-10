import React from 'react';
import Intro from '../components/Intro';
import LatestBlogPosts from '../components/LatestBlogPosts';
import LayoutWrapper from '../components/LayoutWrapper';

const IndexPage = () => {
  return (
    <LayoutWrapper>
      <Intro />
      <LatestBlogPosts />
    </LayoutWrapper>
  )
}

export default IndexPage;