import React, { ReactNode } from 'react';

function BlogPostLayout({ children }: { children: Readonly<ReactNode> }) {
  return <div className="mx-auto flex justify-center">{children}</div>;
}

export default BlogPostLayout;
