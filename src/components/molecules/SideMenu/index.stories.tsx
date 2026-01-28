import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SideMenu from './index';

const meta = {
  title: 'Components/Molecules/SideMenu',
  component: SideMenu,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <div style={{ display: 'flex' }}>
        <div style={{ width: '250px', padding: '1rem', borderRight: '1px solid #ccc' }}>
          <Story />
        </div>
        <div id="main-content" style={{ padding: '1rem', flex: 1 }}>
          <h2 id="section-1">Section 1</h2>
          <p>Content under section 1</p>
          <h3 id="subsection-1-1">Subsection 1.1</h3>
          <p>Content under subsection 1.1</p>
          <h2 id="section-2">Section 2</h2>
          <p>Content under section 2</p>
          <h3 id="subsection-2-1">Subsection 2.1</h3>
          <p>Content under subsection 2.1</p>
          <div style={{ height: '2000px' }} /> {/* for scroll testing */}
        </div>
      </div>
    ),
  ],
} as Meta<typeof SideMenu>;
export default meta;

type Story = StoryObj<typeof SideMenu>;

export const Default: Story = {
  args: {
    selector: '#main-content',
  },
};
